import { z } from 'zod';

export const contactSchema = z.object({
  name: z
    .string()
    .min(2, 'Name must be at least 2 characters')
    .max(100, 'Name must be less than 100 characters')
    .regex(/^[a-zA-Z\s'-]+$/, 'Name can only contain letters, spaces, hyphens, and apostrophes'),
  email: z
    .string()
    .email('Please enter a valid email address'),
  phone: z
    .string()
    .optional()
    .refine(
      (val) => !val || /^[+]?[(]?[0-9]{1,4}[)]?[-\s./0-9]*$/.test(val),
      'Please enter a valid phone number'
    ),
  company: z
    .string()
    .max(100, 'Company name must be less than 100 characters')
    .optional(),
  service_interest: z
    .string()
    .optional(),
  message: z
    .string()
    .min(10, 'Message must be at least 10 characters')
    .max(5000, 'Message must be less than 5000 characters'),
});

export const newsletterSchema = z.object({
  email: z
    .string()
    .email('Please enter a valid email address'),
  name: z
    .string()
    .max(100, 'Name must be less than 100 characters')
    .optional(),
});

export const enrollmentSchema = z.object({
  course_id: z
    .string()
    .min(1, 'Course ID is required'),
  course_title: z
    .string()
    .min(1, 'Course title is required'),
  full_name: z
    .string()
    .min(2, 'Full name must be at least 2 characters')
    .max(100, 'Full name must be less than 100 characters'),
  email: z
    .string()
    .email('Please enter a valid email address'),
  phone: z
    .string()
    .optional()
    .refine(
      (val) => !val || /^[+]?[(]?[0-9]{1,4}[)]?[-\s./0-9]*$/.test(val),
      'Please enter a valid phone number'
    ),
  education_level: z
    .enum(['high-school', 'bachelors', 'masters', 'phd', ''])
    .optional(),
  experience_level: z
    .enum(['beginner', 'intermediate', 'advanced', ''])
    .optional(),
  motivation: z
    .string()
    .min(20, 'Please provide more detail (at least 20 characters)')
    .max(2000, 'Motivation must be less than 2000 characters'),
  payment_method: z
    .string()
    .optional(),
});

export const jobApplicationSchema = z.object({
  job_id: z
    .string()
    .optional(),
  job_title: z
    .string()
    .min(1, 'Job title is required'),
  full_name: z
    .string()
    .min(2, 'Full name must be at least 2 characters')
    .max(100, 'Full name must be less than 100 characters'),
  email: z
    .string()
    .email('Please enter a valid email address'),
  phone: z
    .string()
    .optional()
    .refine(
      (val) => !val || /^[+]?[(]?[0-9]{1,4}[)]?[-\s./0-9]*$/.test(val),
      'Please enter a valid phone number'
    ),
  linkedin_url: z
    .string()
    .url('Please enter a valid URL')
    .optional()
    .or(z.literal('')),
  portfolio_url: z
    .string()
    .url('Please enter a valid URL')
    .optional()
    .or(z.literal('')),
  cover_letter: z
    .string()
    .min(50, 'Cover letter must be at least 50 characters')
    .max(5000, 'Cover letter must be less than 5000 characters'),
  resume_url: z
    .string()
    .url('Please enter a valid URL for your resume')
    .optional()
    .or(z.literal('')),
});

export const teamMemberSchema = z.object({
  name: z
    .string()
    .min(2, 'Name must be at least 2 characters')
    .max(100, 'Name must be less than 100 characters'),
  role: z
    .string()
    .min(2, 'Role must be at least 2 characters')
    .max(100, 'Role must be less than 100 characters'),
  department: z
    .string()
    .max(50, 'Department must be less than 50 characters')
    .optional(),
  bio: z
    .string()
    .min(10, 'Bio must be at least 10 characters')
    .max(1000, 'Bio must be less than 1000 characters'),
  image_url: z
    .string()
    .url('Please enter a valid image URL')
    .optional()
    .or(z.literal('')),
  linkedin_url: z
    .string()
    .url('Please enter a valid LinkedIn URL')
    .optional()
    .or(z.literal('')),
  twitter_url: z
    .string()
    .url('Please enter a valid Twitter URL')
    .optional()
    .or(z.literal('')),
  email: z
    .string()
    .email('Please enter a valid email address')
    .optional()
    .or(z.literal('')),
  order: z
    .number()
    .int()
    .min(0)
    .optional(),
  status: z
    .enum(['active', 'inactive'])
    .optional(),
});

export const blogPostSchema = z.object({
  title: z
    .string()
    .min(5, 'Title must be at least 5 characters')
    .max(200, 'Title must be less than 200 characters'),
  slug: z
    .string()
    .min(3, 'Slug must be at least 3 characters')
    .max(200, 'Slug must be less than 200 characters')
    .regex(/^[a-z0-9-]+$/, 'Slug must contain only lowercase letters, numbers, and hyphens'),
  excerpt: z
    .string()
    .min(10, 'Excerpt must be at least 10 characters')
    .max(500, 'Excerpt must be less than 500 characters'),
  content: z
    .string()
    .min(100, 'Content must be at least 100 characters'),
  cover_image: z
    .string()
    .url('Please enter a valid image URL')
    .optional()
    .or(z.literal('')),
  author_name: z
    .string()
    .min(2, 'Author name must be at least 2 characters')
    .max(100, 'Author name must be less than 100 characters'),
  category: z
    .string()
    .max(50, 'Category must be less than 50 characters')
    .optional(),
  tags: z
    .array(z.string())
    .max(10, 'Maximum 10 tags allowed')
    .optional(),
  status: z
    .enum(['draft', 'published'])
    .optional(),
});

export const courseSchema = z.object({
  title: z
    .string()
    .min(5, 'Title must be at least 5 characters')
    .max(200, 'Title must be less than 200 characters'),
  slug: z
    .string()
    .min(3, 'Slug must be at least 3 characters')
    .max(200, 'Slug must be less than 200 characters')
    .regex(/^[a-z0-9-]+$/, 'Slug must contain only lowercase letters, numbers, and hyphens'),
  short_description: z
    .string()
    .min(10, 'Short description must be at least 10 characters')
    .max(300, 'Short description must be less than 300 characters'),
  description: z
    .string()
    .min(50, 'Description must be at least 50 characters')
    .optional(),
  cover_image: z
    .string()
    .url('Please enter a valid image URL')
    .optional()
    .or(z.literal('')),
  price: z
    .number()
    .min(0, 'Price cannot be negative'),
  currency: z
    .enum(['USD', 'XAF', 'EUR'])
    .default('USD'),
  duration: z
    .string()
    .max(50, 'Duration must be less than 50 characters')
    .optional(),
  level: z
    .enum(['beginner', 'intermediate', 'advanced'])
    .optional(),
  category: z
    .string()
    .max(50, 'Category must be less than 50 characters')
    .optional(),
  curriculum: z
    .array(z.string())
    .optional(),
  instructor_name: z
    .string()
    .max(100, 'Instructor name must be less than 100 characters')
    .optional(),
  max_students: z
    .number()
    .int()
    .min(1, 'Maximum students must be at least 1')
    .optional(),
  certificate_provided: z
    .boolean()
    .optional(),
  is_online: z
    .boolean()
    .optional(),
  status: z
    .enum(['draft', 'published'])
    .optional(),
  featured: z
    .boolean()
    .optional(),
});

export const serviceSchema = z.object({
  title: z
    .string()
    .min(5, 'Title must be at least 5 characters')
    .max(200, 'Title must be less than 200 characters'),
  slug: z
    .string()
    .min(3, 'Slug must be at least 3 characters')
    .max(200, 'Slug must be less than 200 characters')
    .regex(/^[a-z0-9-]+$/, 'Slug must contain only lowercase letters, numbers, and hyphens'),
  short_description: z
    .string()
    .min(10, 'Short description must be at least 10 characters')
    .max(300, 'Short description must be less than 300 characters'),
  description: z
    .string()
    .min(50, 'Description must be at least 50 characters')
    .optional(),
  icon: z
    .string()
    .max(50, 'Icon must be less than 50 characters')
    .optional(),
  cover_image: z
    .string()
    .url('Please enter a valid image URL')
    .optional()
    .or(z.literal('')),
  category: z
    .string()
    .max(50, 'Category must be less than 50 characters')
    .optional(),
  highlight: z
    .boolean()
    .optional(),
  status: z
    .enum(['draft', 'published'])
    .optional(),
});

export const portfolioSchema = z.object({
  title: z
    .string()
    .min(5, 'Title must be at least 5 characters')
    .max(200, 'Title must be less than 200 characters'),
  slug: z
    .string()
    .min(3, 'Slug must be at least 3 characters')
    .max(200, 'Slug must be less than 200 characters')
    .regex(/^[a-z0-9-]+$/, 'Slug must contain only lowercase letters, numbers, and hyphens'),
  short_description: z
    .string()
    .min(10, 'Short description must be at least 10 characters')
    .max(300, 'Short description must be less than 300 characters'),
  description: z
    .string()
    .min(50, 'Description must be at least 50 characters')
    .optional(),
  client_name: z
    .string()
    .max(100, 'Client name must be less than 100 characters')
    .optional(),
  industry: z
    .string()
    .max(50, 'Industry must be less than 50 characters')
    .optional(),
  cover_image: z
    .string()
    .url('Please enter a valid image URL')
    .optional()
    .or(z.literal('')),
  project_url: z
    .string()
    .url('Please enter a valid project URL')
    .optional()
    .or(z.literal('')),
  category: z
    .string()
    .max(50, 'Category must be less than 50 characters')
    .optional(),
  featured: z
    .boolean()
    .optional(),
  status: z
    .enum(['draft', 'published'])
    .optional(),
});

export const podcastSchema = z.object({
  title: z
    .string()
    .min(5, 'Title must be at least 5 characters')
    .max(200, 'Title must be less than 200 characters'),
  slug: z
    .string()
    .min(3, 'Slug must be at least 3 characters')
    .max(200, 'Slug must be less than 200 characters')
    .regex(/^[a-z0-9-]+$/, 'Slug must contain only lowercase letters, numbers, and hyphens'),
  description: z
    .string()
    .min(20, 'Description must be at least 20 characters')
    .max(1000, 'Description must be less than 1000 characters'),
  episode_number: z
    .number()
    .int()
    .min(1, 'Episode number must be at least 1'),
  season_number: z
    .number()
    .int()
    .min(1)
    .optional(),
  duration: z
    .string()
    .max(20, 'Duration must be less than 20 characters')
    .optional(),
  audio_url: z
    .string()
    .url('Please enter a valid audio URL'),
  cover_image: z
    .string()
    .url('Please enter a valid image URL')
    .optional()
    .or(z.literal('')),
  guest_name: z
    .string()
    .max(100, 'Guest name must be less than 100 characters')
    .optional(),
  guest_role: z
    .string()
    .max(100, 'Guest role must be less than 100 characters')
    .optional(),
  guest_bio: z
    .string()
    .max(500, 'Guest bio must be less than 500 characters')
    .optional(),
  guest_image: z
    .string()
    .url('Please enter a valid image URL')
    .optional()
    .or(z.literal('')),
  published_date: z
    .string()
    .optional(),
  category: z
    .string()
    .max(50, 'Category must be less than 50 characters')
    .optional(),
  featured: z
    .boolean()
    .optional(),
  status: z
    .enum(['draft', 'published'])
    .optional(),
});

export const jobListingSchema = z.object({
  title: z
    .string()
    .min(5, 'Title must be at least 5 characters')
    .max(200, 'Title must be less than 200 characters'),
  department: z
    .string()
    .min(2, 'Department must be at least 2 characters')
    .max(50, 'Department must be less than 50 characters'),
  location: z
    .string()
    .min(2, 'Location must be at least 2 characters')
    .max(100, 'Location must be less than 100 characters'),
  type: z
    .enum(['full-time', 'part-time', 'contract', 'internship']),
  remote: z
    .boolean()
    .optional(),
  description: z
    .string()
    .min(50, 'Description must be at least 50 characters'),
  requirements: z
    .string()
    .min(20, 'Requirements must be at least 20 characters'),
  responsibilities: z
    .string()
    .min(20, 'Responsibilities must be at least 20 characters'),
  salary_range: z
    .string()
    .max(100, 'Salary range must be less than 100 characters')
    .optional(),
  status: z
    .enum(['draft', 'published'])
    .optional(),
});

export type ContactFormData = z.infer<typeof contactSchema>;
export type NewsletterFormData = z.infer<typeof newsletterSchema>;
export type EnrollmentFormData = z.infer<typeof enrollmentSchema>;
export type JobApplicationFormData = z.infer<typeof jobApplicationSchema>;
export type TeamMemberFormData = z.infer<typeof teamMemberSchema>;
export type BlogPostFormData = z.infer<typeof blogPostSchema>;
export type CourseFormData = z.infer<typeof courseSchema>;
export type ServiceFormData = z.infer<typeof serviceSchema>;
export type PortfolioFormData = z.infer<typeof portfolioSchema>;
export type PodcastFormData = z.infer<typeof podcastSchema>;
export type JobListingFormData = z.infer<typeof jobListingSchema>;
