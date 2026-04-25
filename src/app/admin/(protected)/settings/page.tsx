'use client';

import { useState, useEffect } from 'react';
import toast from 'react-hot-toast';
import { createClient } from '@/lib/supabase/supabase-browser-client';

interface SiteSettings {
  id: number;
  site_name: string;
  site_description: string;
  contact_email: string;
  phone: string;
  address: string;
  social_links: {
    linkedin: string;
    twitter: string;
    facebook: string;
    instagram: string;
  };
  notification_preferences: {
    new_lead: boolean;
    new_application: boolean;
    new_enrollment: boolean;
    newsletter_signup: boolean;
  };
}

interface ProfileData {
  name: string;
  email: string;
  role: string;
}

export default function SettingsPage() {
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [activeTab, setActiveTab] = useState('profile');
  const [user, setUser] = useState<ProfileData | null>(null);
  
  const [siteSettings, setSiteSettings] = useState<SiteSettings | null>(null);
  const [siteSettingsForm, setSiteSettingsForm] = useState({
    siteName: '',
    siteDescription: '',
    contactEmail: '',
    phone: '',
    address: '',
    socialLinks: {
      linkedin: '',
      twitter: '',
      facebook: '',
      instagram: '',
    },
  });

  const [notifications, setNotifications] = useState({
    newLead: true,
    newApplication: true,
    newEnrollment: true,
    newsletterSignup: false,
  });

  const [passwordData, setPasswordData] = useState({
    currentPassword: '',
    newPassword: '',
    confirmPassword: '',
  });

  useEffect(() => {
    loadUserProfile();
    loadSiteSettings();
  }, []);

  const loadUserProfile = async () => {
    try {
      const supabase = createClient();
      const { data: { user: authUser } } = await supabase.auth.getUser();
      
      if (authUser) {
        setUser({
          name: authUser.user_metadata?.full_name || authUser.email?.split('@')[0] || 'Admin',
          email: authUser.email || '',
          role: 'Administrator',
        });
      }
    } catch (error) {
      console.error('Error loading user:', error);
    }
  };

  const loadSiteSettings = async () => {
    setLoading(true);
    try {
      const response = await fetch('/api/admin/settings');
      if (response.ok) {
        const data = await response.json();
        setSiteSettings(data);
        setSiteSettingsForm({
          siteName: data.site_name || 'Ferdsilinks',
          siteDescription: data.site_description || '',
          contactEmail: data.contact_email || '',
          phone: data.phone || '',
          address: data.address || '',
          socialLinks: data.social_links || {
            linkedin: '',
            twitter: '',
            facebook: '',
            instagram: '',
          },
        });
        setNotifications({
          newLead: data.notification_preferences?.new_lead ?? true,
          newApplication: data.notification_preferences?.new_application ?? true,
          newEnrollment: data.notification_preferences?.new_enrollment ?? true,
          newsletterSignup: data.notification_preferences?.newsletter_signup ?? false,
        });
      }
    } catch (error) {
      console.error('Error loading settings:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleProfileSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    toast.error('Profile editing is disabled for security. Contact support to update your profile.');
  };

  const handleSiteSettingsSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSaving(true);
    
    try {
      const response = await fetch('/api/admin/settings', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          siteName: siteSettingsForm.siteName,
          siteDescription: siteSettingsForm.siteDescription,
          contactEmail: siteSettingsForm.contactEmail,
          phone: siteSettingsForm.phone,
          address: siteSettingsForm.address,
          socialLinks: siteSettingsForm.socialLinks,
          notifications: {
            new_lead: notifications.newLead,
            new_application: notifications.newApplication,
            new_enrollment: notifications.newEnrollment,
            newsletter_signup: notifications.newsletterSignup,
          },
        }),
      });

      if (response.ok) {
        toast.success('Settings saved successfully');
        loadSiteSettings();
      } else {
        toast.error('Failed to save settings');
      }
    } catch (error) {
      console.error('Error saving settings:', error);
      toast.error('Failed to save settings');
    } finally {
      setSaving(false);
    }
  };

  const handleNotificationsSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSaving(true);
    
    try {
      const response = await fetch('/api/admin/settings', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          notifications: {
            new_lead: notifications.newLead,
            new_application: notifications.newApplication,
            new_enrollment: notifications.newEnrollment,
            newsletter_signup: notifications.newsletterSignup,
          },
        }),
      });

      if (response.ok) {
        toast.success('Notification preferences saved');
      } else {
        toast.error('Failed to save preferences');
      }
    } catch (error) {
      console.error('Error saving notifications:', error);
      toast.error('Failed to save preferences');
    } finally {
      setSaving(false);
    }
  };

  const handleChangePassword = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (passwordData.newPassword !== passwordData.confirmPassword) {
      toast.error('Passwords do not match');
      return;
    }
    
    if (passwordData.newPassword.length < 8) {
      toast.error('Password must be at least 8 characters');
      return;
    }

    setSaving(true);
    
    try {
      const supabase = createClient();
      const { error } = await supabase.auth.updateUser({
        password: passwordData.newPassword,
      });

      if (error) {
        toast.error(error.message);
      } else {
        toast.success('Password updated successfully');
        setPasswordData({ currentPassword: '', newPassword: '', confirmPassword: '' });
      }
    } catch (error: any) {
      toast.error(error.message || 'Failed to update password');
    } finally {
      setSaving(false);
    }
  };

  const tabs = [
    { id: 'profile', name: 'Profile', icon: 'person' },
    { id: 'site', name: 'Site Settings', icon: 'settings' },
    { id: 'notifications', name: 'Notifications', icon: 'notifications' },
    { id: 'security', name: 'Security', icon: 'security' },
  ];

  if (loading) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="w-8 h-8 border-4 border-[#ef0d11] border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-headline font-bold text-[#0302cb]">Settings</h1>
        <p className="text-slate-500">Manage your account and site preferences</p>
      </div>

      <div className="flex flex-col lg:flex-row gap-6">
        {/* Tabs */}
        <div className="lg:w-64 flex-shrink-0">
          <div className="bg-white rounded-xl shadow-sm border border-slate-100 overflow-hidden">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`w-full flex items-center gap-3 px-4 py-3 text-left transition-all ${
                  activeTab === tab.id
                    ? 'bg-[#ef0d11] text-white'
                    : 'text-slate-600 hover:bg-slate-50'
                }`}
              >
                <span className="material-symbols-outlined">{tab.icon}</span>
                <span className="font-medium">{tab.name}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Content */}
        <div className="flex-1">
          {/* Profile Tab */}
          {activeTab === 'profile' && user && (
            <div className="bg-white rounded-xl shadow-sm border border-slate-100">
              <div className="px-6 py-4 border-b border-slate-100">
                <h2 className="font-headline font-bold text-[#0302cb]">Profile Information</h2>
                <p className="text-sm text-slate-500">Your account details</p>
              </div>
              <form onSubmit={handleProfileSubmit} className="p-6 space-y-6">
                <div className="flex items-center gap-6">
                  <div className="w-20 h-20 bg-[#0302cb] rounded-full flex items-center justify-center text-white text-2xl font-bold">
                    {user.name.charAt(0).toUpperCase()}
                  </div>
                  <div>
                    <p className="text-sm text-slate-500">Profile picture from your auth provider</p>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">Full Name</label>
                    <input
                      type="text"
                      value={user.name}
                      disabled
                      className="w-full px-4 py-2 border border-slate-200 rounded-lg bg-slate-50 cursor-not-allowed"
                    />
                    <p className="text-xs text-slate-400 mt-1">Contact support to update your name</p>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">Email</label>
                    <input
                      type="email"
                      value={user.email}
                      disabled
                      className="w-full px-4 py-2 border border-slate-200 rounded-lg bg-slate-50 cursor-not-allowed"
                    />
                    <p className="text-xs text-slate-400 mt-1">Email cannot be changed</p>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Role</label>
                  <input
                    type="text"
                    value={user.role}
                    disabled
                    className="w-full px-4 py-2 border border-slate-200 rounded-lg bg-slate-50 cursor-not-allowed"
                  />
                </div>
              </form>
            </div>
          )}

          {/* Site Settings Tab */}
          {activeTab === 'site' && (
            <div className="bg-white rounded-xl shadow-sm border border-slate-100">
              <div className="px-6 py-4 border-b border-slate-100">
                <h2 className="font-headline font-bold text-[#0302cb]">Site Settings</h2>
                <p className="text-sm text-slate-500">Configure your website preferences</p>
              </div>
              <form onSubmit={handleSiteSettingsSubmit} className="p-6 space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">Site Name</label>
                    <input
                      type="text"
                      value={siteSettingsForm.siteName}
                      onChange={(e) => setSiteSettingsForm({ ...siteSettingsForm, siteName: e.target.value })}
                      className="w-full px-4 py-2 border border-slate-200 rounded-lg focus:ring-2 focus:ring-[#ef0d11]/20 focus:border-[#ef0d11] outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-2">Contact Email</label>
                    <input
                      type="email"
                      value={siteSettingsForm.contactEmail}
                      onChange={(e) => setSiteSettingsForm({ ...siteSettingsForm, contactEmail: e.target.value })}
                      className="w-full px-4 py-2 border border-slate-200 rounded-lg focus:ring-2 focus:ring-[#ef0d11]/20 focus:border-[#ef0d11] outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Phone Number</label>
                  <input
                    type="text"
                    value={siteSettingsForm.phone}
                    onChange={(e) => setSiteSettingsForm({ ...siteSettingsForm, phone: e.target.value })}
                    className="w-full px-4 py-2 border border-slate-200 rounded-lg focus:ring-2 focus:ring-[#ef0d11]/20 focus:border-[#ef0d11] outline-none"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Address</label>
                  <input
                    type="text"
                    value={siteSettingsForm.address}
                    onChange={(e) => setSiteSettingsForm({ ...siteSettingsForm, address: e.target.value })}
                    className="w-full px-4 py-2 border border-slate-200 rounded-lg focus:ring-2 focus:ring-[#ef0d11]/20 focus:border-[#ef0d11] outline-none"
                  />
                </div>

                <div className="border-t border-slate-100 pt-6">
                  <h3 className="font-medium text-slate-900 mb-4">Social Media Links</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">LinkedIn</label>
                      <input
                        type="url"
                        value={siteSettingsForm.socialLinks.linkedin}
                        onChange={(e) => setSiteSettingsForm({
                          ...siteSettingsForm,
                          socialLinks: { ...siteSettingsForm.socialLinks, linkedin: e.target.value }
                        })}
                        className="w-full px-4 py-2 border border-slate-200 rounded-lg focus:ring-2 focus:ring-[#ef0d11]/20 focus:border-[#ef0d11] outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">Twitter</label>
                      <input
                        type="url"
                        value={siteSettingsForm.socialLinks.twitter}
                        onChange={(e) => setSiteSettingsForm({
                          ...siteSettingsForm,
                          socialLinks: { ...siteSettingsForm.socialLinks, twitter: e.target.value }
                        })}
                        className="w-full px-4 py-2 border border-slate-200 rounded-lg focus:ring-2 focus:ring-[#ef0d11]/20 focus:border-[#ef0d11] outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">Facebook</label>
                      <input
                        type="url"
                        value={siteSettingsForm.socialLinks.facebook}
                        onChange={(e) => setSiteSettingsForm({
                          ...siteSettingsForm,
                          socialLinks: { ...siteSettingsForm.socialLinks, facebook: e.target.value }
                        })}
                        className="w-full px-4 py-2 border border-slate-200 rounded-lg focus:ring-2 focus:ring-[#ef0d11]/20 focus:border-[#ef0d11] outline-none"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">Instagram</label>
                      <input
                        type="url"
                        value={siteSettingsForm.socialLinks.instagram}
                        onChange={(e) => setSiteSettingsForm({
                          ...siteSettingsForm,
                          socialLinks: { ...siteSettingsForm.socialLinks, instagram: e.target.value }
                        })}
                        className="w-full px-4 py-2 border border-slate-200 rounded-lg focus:ring-2 focus:ring-[#ef0d11]/20 focus:border-[#ef0d11] outline-none"
                      />
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-100">
                  <button
                    type="submit"
                    disabled={saving}
                    className="px-6 py-2 bg-[#ef0d11] text-white rounded-lg font-medium hover:bg-[#b90000] transition-all flex items-center gap-2 disabled:opacity-50"
                  >
                    {saving ? (
                      <>
                        <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                        Saving...
                      </>
                    ) : (
                      'Save Settings'
                    )}
                  </button>
                </div>
              </form>
            </div>
          )}

          {/* Notifications Tab */}
          {activeTab === 'notifications' && (
            <div className="bg-white rounded-xl shadow-sm border border-slate-100">
              <div className="px-6 py-4 border-b border-slate-100">
                <h2 className="font-headline font-bold text-[#0302cb]">Email Notifications</h2>
                <p className="text-sm text-slate-500">Choose what you want to be notified about via email</p>
              </div>
              <form onSubmit={handleNotificationsSubmit} className="p-6 space-y-6">
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-4 bg-slate-50 rounded-lg">
                    <div>
                      <p className="font-medium text-slate-900">New Lead</p>
                      <p className="text-sm text-slate-500">Get notified when someone submits a contact form</p>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input
                        type="checkbox"
                        checked={notifications.newLead}
                        onChange={(e) => setNotifications({ ...notifications, newLead: e.target.checked })}
                        className="sr-only peer"
                      />
                      <div className="w-11 h-6 bg-slate-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-[#ef0d11]/20 rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-slate-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#ef0d11]"></div>
                    </label>
                  </div>

                  <div className="flex items-center justify-between p-4 bg-slate-50 rounded-lg">
                    <div>
                      <p className="font-medium text-slate-900">New Job Application</p>
                      <p className="text-sm text-slate-500">Get notified when someone applies for a job</p>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input
                        type="checkbox"
                        checked={notifications.newApplication}
                        onChange={(e) => setNotifications({ ...notifications, newApplication: e.target.checked })}
                        className="sr-only peer"
                      />
                      <div className="w-11 h-6 bg-slate-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-[#ef0d11]/20 rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-slate-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#ef0d11]"></div>
                    </label>
                  </div>

                  <div className="flex items-center justify-between p-4 bg-slate-50 rounded-lg">
                    <div>
                      <p className="font-medium text-slate-900">New Enrollment</p>
                      <p className="text-sm text-slate-500">Get notified when someone enrolls in a course</p>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input
                        type="checkbox"
                        checked={notifications.newEnrollment}
                        onChange={(e) => setNotifications({ ...notifications, newEnrollment: e.target.checked })}
                        className="sr-only peer"
                      />
                      <div className="w-11 h-6 bg-slate-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-[#ef0d11]/20 rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-slate-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#ef0d11]"></div>
                    </label>
                  </div>

                  <div className="flex items-center justify-between p-4 bg-slate-50 rounded-lg">
                    <div>
                      <p className="font-medium text-slate-900">Newsletter Signups</p>
                      <p className="text-sm text-slate-500">Get notified when someone subscribes to newsletter</p>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input
                        type="checkbox"
                        checked={notifications.newsletterSignup}
                        onChange={(e) => setNotifications({ ...notifications, newsletterSignup: e.target.checked })}
                        className="sr-only peer"
                      />
                      <div className="w-11 h-6 bg-slate-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-[#ef0d11]/20 rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-slate-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#ef0d11]"></div>
                    </label>
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-100">
                  <button
                    type="submit"
                    disabled={saving}
                    className="px-6 py-2 bg-[#ef0d11] text-white rounded-lg font-medium hover:bg-[#b90000] transition-all flex items-center gap-2 disabled:opacity-50"
                  >
                    {saving ? (
                      <>
                        <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                        Saving...
                      </>
                    ) : (
                      'Save Preferences'
                    )}
                  </button>
                </div>
              </form>
            </div>
          )}

          {/* Security Tab */}
          {activeTab === 'security' && (
            <div className="bg-white rounded-xl shadow-sm border border-slate-100">
              <div className="px-6 py-4 border-b border-slate-100">
                <h2 className="font-headline font-bold text-[#0302cb]">Security</h2>
                <p className="text-sm text-slate-500">Manage your account security</p>
              </div>
              <div className="p-6 space-y-6">
                <div className="p-4 bg-slate-50 rounded-lg">
                  <h3 className="font-medium text-slate-900 mb-2">Change Password</h3>
                  <p className="text-sm text-slate-500 mb-4">Update your password to keep your account secure</p>
                  <form onSubmit={handleChangePassword} className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">New Password</label>
                      <input
                        type="password"
                        value={passwordData.newPassword}
                        onChange={(e) => setPasswordData({ ...passwordData, newPassword: e.target.value })}
                        className="w-full px-4 py-2 border border-slate-200 rounded-lg focus:ring-2 focus:ring-[#ef0d11]/20 focus:border-[#ef0d11] outline-none"
                        placeholder="Enter new password"
                        minLength={8}
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-slate-700 mb-2">Confirm Password</label>
                      <input
                        type="password"
                        value={passwordData.confirmPassword}
                        onChange={(e) => setPasswordData({ ...passwordData, confirmPassword: e.target.value })}
                        className="w-full px-4 py-2 border border-slate-200 rounded-lg focus:ring-2 focus:ring-[#ef0d11]/20 focus:border-[#ef0d11] outline-none"
                        placeholder="Confirm new password"
                        minLength={8}
                      />
                    </div>
                    <button
                      type="submit"
                      disabled={saving || !passwordData.newPassword || !passwordData.confirmPassword}
                      className="px-4 py-2 bg-[#0302cb] text-white rounded-lg font-medium hover:bg-[#001a3a] transition-all disabled:opacity-50 flex items-center gap-2"
                    >
                      {saving ? (
                        <>
                          <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                          Updating...
                        </>
                      ) : (
                        'Update Password'
                      )}
                    </button>
                  </form>
                </div>

                <div className="p-4 bg-slate-50 rounded-lg">
                  <h3 className="font-medium text-slate-900 mb-2">Two-Factor Authentication</h3>
                  <p className="text-sm text-slate-500 mb-4">Add an extra layer of security to your account</p>
                  <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-3">
                    <p className="text-sm text-yellow-800">
                      <strong>Coming Soon:</strong> 2FA will be available in a future update.
                    </p>
                  </div>
                </div>

                <div className="p-4 bg-red-50 rounded-lg border border-red-100">
                  <h3 className="font-medium text-red-900 mb-2">Danger Zone</h3>
                  <p className="text-sm text-red-600 mb-4">Once you delete your account, there is no going back. Please contact support to delete your account.</p>
                  <button disabled className="px-4 py-2 bg-red-600 text-white rounded-lg font-medium opacity-50 cursor-not-allowed">
                    Delete Account (Contact Support)
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}