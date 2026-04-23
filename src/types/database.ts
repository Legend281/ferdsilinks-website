export interface Lead {
  id: string;
  name: string;
  email: string;
  phone?: string;
  company?: string;
  service_interest?: string;
  message: string;
  source?: string;
  status: 'new' | 'contacted' | 'qualified' | 'converted' | 'lost';
  created_at: string;
  updated_at: string;
}

export interface Subscriber {
  id: string;
  email: string;
  name?: string;
  source?: string;
  status: 'active' | 'unsubscribed';
  created_at: string;
}

export interface JobApplication {
  id: string;
  job_id: string;
  job_title: string;
  full_name: string;
  email: string;
  phone?: string;
  linkedin_url?: string;
  portfolio_url?: string;
  cover_letter: string;
  resume_url?: string;
  status: 'pending' | 'reviewing' | 'interview' | 'rejected' | 'accepted';
  notes?: string;
  created_at: string;
  updated_at: string;
}

export interface Enrollment {
  id: string;
  course_id: string;
  course_title: string;
  full_name: string;
  email: string;
  phone?: string;
  education_level?: string;
  experience_level?: string;
  motivation?: string;
  payment_method?: string;
  status: 'pending' | 'confirmed' | 'completed' | 'cancelled';
  created_at: string;
  updated_at: string;
}

export interface JobListing {
  id: string;
  title: string;
  department: string;
  location: string;
  type: 'full-time' | 'part-time' | 'contract' | 'internship';
  remote: boolean;
  description: string;
  requirements: string[];
  responsibilities: string[];
  salary_range?: string;
  status: 'draft' | 'published' | 'closed';
  created_at: string;
  updated_at: string;
}

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  cover_image?: string;
  author_id?: string;
  author_name?: string;
  category: string;
  tags: string[];
  featured?: boolean;
  status: 'draft' | 'published';
  published_at?: string;
  created_at: string;
  updated_at: string;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  department?: string;
  bio: string;
  image_url?: string;
  linkedin_url?: string;
  twitter_url?: string;
  email?: string;
  order?: number;
  status: 'active' | 'inactive';
  created_at: string;
  updated_at: string;
}

export interface ServiceRequest {
  id: string;
  service_type: string;
  name: string;
  email: string;
  phone?: string;
  company?: string;
  message: string;
  budget_range?: string;
  timeline?: string;
  status: 'new' | 'in_progress' | 'completed' | 'cancelled';
  created_at: string;
  updated_at: string;
}

export interface Service {
  id: string;
  title: string;
  slug: string;
  short_description?: string;
  description?: string;
  icon?: string;
  features?: string[];
  benefits?: string[];
  cover_image?: string;
  category?: string;
  order_index?: number;
  highlight?: boolean;
  status: 'active' | 'inactive';
  created_at: string;
  updated_at: string;
}

export interface Portfolio {
  id: string;
  title: string;
  slug: string;
  short_description?: string;
  description?: string;
  client_name?: string;
  industry?: string;
  cover_image?: string;
  images?: string[];
  technologies?: string[];
  project_url?: string;
  category?: string;
  featured: boolean;
  order_index?: number;
  status: 'active' | 'inactive';
  created_at: string;
  updated_at: string;
}

export interface Course {
  id: string;
  title: string;
  slug: string;
  short_description?: string;
  description?: string;
  cover_image?: string;
  price: number;
  currency: string;
  duration?: string;
  level?: string;
  category?: string;
  curriculum?: string[];
  instructor_id?: string;
  instructor_name?: string;
  max_students?: number;
  start_date?: string;
  end_date?: string;
  enrollment_deadline?: string;
  location?: string;
  is_online: boolean;
  certificate_provided: boolean;
  status: 'draft' | 'published' | 'archived';
  featured: boolean;
  created_at: string;
  updated_at: string;
}

export interface Podcast {
  id: string;
  title: string;
  slug?: string;
  description?: string;
  content?: string;
  cover_image?: string;
  youtube_url?: string;
  video_id?: string;
  duration?: string;
  guest_name?: string;
  guest_bio?: string;
  guest_image?: string;
  category?: string;
  season_number?: number;
  episode_number?: number;
  published_date?: string;
  status: 'draft' | 'published' | 'archived';
  featured?: boolean;
  created_at: string;
  updated_at: string;
}