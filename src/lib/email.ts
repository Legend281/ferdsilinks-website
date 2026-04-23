import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY || 're_123456789');

const ADMIN_EMAIL = 'ferdsilinksinfo@gmail.com';
const FROM_EMAIL = 'Ferdsilinks <alerts@ferdsilinks.com>';

interface EmailData {
  to: string;
  subject: string;
  html: string;
}

interface AlertData {
  type: 'contact' | 'quote' | 'enrollment' | 'newsletter' | 'application';
  name: string;
  email: string;
  phone?: string;
  summary: string;
  details: Record<string, string>;
  adminLink?: string;
}

function getAlertTypeLabel(type: AlertData['type']): string {
  const labels = {
    contact: 'New Contact Message',
    quote: 'New Quote Request',
    enrollment: 'New Course Enrollment',
    newsletter: 'New Newsletter Signup',
    application: 'New Job Application',
  };
  return labels[type];
}

function getAdminLink(type: AlertData['type'], id: string): string {
  const links = {
    contact: `/admin/leads`,
    quote: `/admin/services`,
    enrollment: `/admin/enrollments`,
    newsletter: `/admin/newsletter`,
    application: `/admin/applications`,
  };
  return `${process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'}${links[type]}`;
}

function generateAlertEmail(data: AlertData): EmailData {
  const typeLabel = getAlertTypeLabel(data.type);
  
  const detailsHtml = Object.entries(data.details)
    .map(([key, value]) => `<tr><td style="padding: 8px 0; border-bottom: 1px solid #e5e7eb;"><strong style="color: #374151;">${key}:</strong></td><td style="padding: 8px 0; border-bottom: 1px solid #e5e7eb; color: #111827;">${value}</td></tr>`)
    .join('');

  const html = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body style="margin: 0; padding: 0; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; background-color: #f9fafb;">
  <div style="max-width: 600px; margin: 0 auto; padding: 40px 20px;">
    <div style="background: white; border-radius: 12px; padding: 32px; box-shadow: 0 1px 3px rgba(0,0,0,0.1);">
      <!-- Header -->
      <div style="display: flex; align-items: center; gap: 12px; margin-bottom: 24px; padding-bottom: 24px; border-bottom: 1px solid #e5e7eb;">
        <div style="width: 48px; height: 48px; background: linear-gradient(135deg, #0302cb, #ef0d11); border-radius: 12px; display: flex; align-items: center; justify-content: center;">
          <span style="color: white; font-size: 24px;">⚡</span>
        </div>
        <div>
          <h1 style="margin: 0; font-size: 20px; font-weight: 700; color: #0302cb;">Ferdsilinks</h1>
          <p style="margin: 0; font-size: 12px; color: #6b7280;">Website Notification</p>
        </div>
      </div>

      <!-- Alert Badge -->
      <div style="display: inline-block; background: #fef3c7; color: #92400e; padding: 6px 12px; border-radius: 9999px; font-size: 12px; font-weight: 600; margin-bottom: 16px;">
        ${typeLabel}
      </div>

      <!-- Message -->
      <h2 style="margin: 0 0 16px 0; font-size: 28px; font-weight: 700; color: #111827;">
        New ${typeLabel}
      </h2>
      
      <p style="margin: 0 0 24px 0; font-size: 16px; color: #4b5563; line-height: 1.5;">
        You have a new submission on the Ferdsilinks website. Here are the details:
      </p>

      <!-- Details Table -->
      <div style="background: #f9fafb; border-radius: 8px; padding: 20px; margin-bottom: 24px;">
        <table style="width: 100%; border-collapse: collapse;">
          <tr>
            <td style="padding: 8px 0; border-bottom: 1px solid #e5e7eb;"><strong style="color: #374151;">Name</strong></td>
            <td style="padding: 8px 0; border-bottom: 1px solid #e5e7eb; color: #111827; font-weight: 600;">${data.name}</td>
          </tr>
          <tr>
            <td style="padding: 8px 0; border-bottom: 1px solid #e5e7eb;"><strong style="color: #374151;">Email</strong></td>
            <td style="padding: 8px 0; border-bottom: 1px solid #e5e7eb;">
              <a href="mailto:${data.email}" style="color: #0302cb; text-decoration: none;">${data.email}</a>
            </td>
          </tr>
          ${data.phone ? `
          <tr>
            <td style="padding: 8px 0; border-bottom: 1px solid #e5e7eb;"><strong style="color: #374151;">Phone</strong></td>
            <td style="padding: 8px 0; border-bottom: 1px solid #e5e7eb;">
              <a href="tel:${data.phone}" style="color: #0302cb; text-decoration: none;">${data.phone}</a>
            </td>
          </tr>
          ` : ''}
          ${data.summary ? `
          <tr>
            <td style="padding: 8px 0; border-bottom: 1px solid #e5e7eb;"><strong style="color: #374151;">Summary</strong></td>
            <td style="padding: 8px 0; border-bottom: 1px solid #e5e7eb; color: #111827;">${data.summary}</td>
          </tr>
          ` : ''}
          ${detailsHtml}
        </table>
      </div>

      <!-- CTA Button -->
      <a href="${data.adminLink || getAdminLink(data.type, '')}" style="display: inline-block; background: #0302cb; color: white; padding: 14px 28px; border-radius: 8px; text-decoration: none; font-weight: 600; font-size: 14px;">
        View in Dashboard →
      </a>

      <!-- Footer -->
      <div style="margin-top: 32px; padding-top: 24px; border-top: 1px solid #e5e7eb; text-align: center;">
        <p style="margin: 0; font-size: 12px; color: #9ca3af;">
          This alert was sent automatically from ferdsilinks.com<br>
          <a href="${process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'}" style="color: #0302cb; text-decoration: none;">Visit Website</a> • 
          <a href="${process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'}/admin" style="color: #0302cb; text-decoration: none;">Admin Dashboard</a>
        </p>
      </div>
    </div>
  </div>
</body>
</html>
  `.trim();

  return {
    to: ADMIN_EMAIL,
    subject: `${typeLabel} - ${data.name}`,
    html,
  };
}

export async function sendAlertEmail(data: AlertData) {
  try {
    // Skip if no RESEND_API_KEY (development mode)
    if (!process.env.RESEND_API_KEY) {
      console.log('📧 [Email Alert - Development Mode]', {
        type: data.type,
        to: ADMIN_EMAIL,
        subject: `${getAlertTypeLabel(data.type)} - ${data.name}`,
      });
      return { success: true, development: true };
    }

    const { to, subject, html } = generateAlertEmail(data);

    const result = await resend.emails.send({
      from: FROM_EMAIL,
      to,
      subject,
      html,
    });

    console.log('📧 [Email Alert Sent]', {
      type: data.type,
      to,
      subject,
      id: result.data?.id,
    });

    return { success: true, id: result.data?.id };
  } catch (error) {
    console.error('📧 [Email Alert Failed]', error);
    return { success: false, error };
  }
}

// Convenience functions for each event type
export async function sendContactAlert(data: { name: string; email: string; phone?: string; message: string }) {
  return sendAlertEmail({
    type: 'contact',
    name: data.name,
    email: data.email,
    phone: data.phone,
    summary: data.message.substring(0, 100) + (data.message.length > 100 ? '...' : ''),
    details: {
      Message: data.message,
    },
  });
}

export async function sendQuoteRequestAlert(data: { name: string; email: string; phone?: string; company?: string; service?: string; message: string }) {
  return sendAlertEmail({
    type: 'quote',
    name: data.name,
    email: data.email,
    phone: data.phone,
    summary: `${data.service || 'Service'} request from ${data.company || data.name}`,
    details: {
      Company: data.company || 'Not provided',
      Service: data.service || 'Not specified',
      'Project Details': data.message,
    },
  });
}

export async function sendEnrollmentAlert(data: { name: string; email: string; phone?: string; course: string }) {
  return sendAlertEmail({
    type: 'enrollment',
    name: data.name,
    email: data.email,
    phone: data.phone,
    summary: `Enrolled in ${data.course}`,
    details: {
      Course: data.course,
      'Enrollment Date': new Date().toLocaleDateString(),
    },
  });
}

export async function sendNewsletterAlert(data: { email: string; name?: string; source?: string }) {
  return sendAlertEmail({
    type: 'newsletter',
    name: data.name || data.email.split('@')[0],
    email: data.email,
    summary: 'New newsletter subscriber',
    details: {
      Source: data.source || 'Website',
    },
  });
}

export async function sendApplicationAlert(data: { name: string; email: string; phone?: string; position: string }) {
  return sendAlertEmail({
    type: 'application',
    name: data.name,
    email: data.email,
    phone: data.phone,
    summary: `Applied for ${data.position}`,
    details: {
      Position: data.position,
      'Application Date': new Date().toLocaleDateString(),
    },
  });
}