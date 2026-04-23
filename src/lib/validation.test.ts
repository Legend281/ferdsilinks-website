import { describe, it, expect } from 'vitest';
import {
  contactSchema,
  newsletterSchema,
  enrollmentSchema,
  jobApplicationSchema,
  teamMemberSchema,
  blogPostSchema,
  courseSchema,
  serviceSchema,
  portfolioSchema,
  podcastSchema,
  jobListingSchema,
} from './validation';

describe('contactSchema', () => {
  it('should validate a valid contact form', () => {
    const validData = {
      name: 'John Doe',
      email: 'john@example.com',
      phone: '+237 676 817 339',
      company: 'Acme Inc',
      message: 'I would like to inquire about your services.',
    };
    const result = contactSchema.safeParse(validData);
    expect(result.success).toBe(true);
  });

  it('should validate without optional fields', () => {
    const validData = {
      name: 'John Doe',
      email: 'john@example.com',
      message: 'I would like to inquire about your services.',
    };
    const result = contactSchema.safeParse(validData);
    expect(result.success).toBe(true);
  });

  it('should reject empty name', () => {
    const invalidData = {
      name: '',
      email: 'john@example.com',
      message: 'Test message',
    };
    const result = contactSchema.safeParse(invalidData);
    expect(result.success).toBe(false);
  });

  it('should reject name with special characters', () => {
    const invalidData = {
      name: 'John@Doe123!',
      email: 'john@example.com',
      message: 'Test message',
    };
    const result = contactSchema.safeParse(invalidData);
    expect(result.success).toBe(false);
  });

  it('should reject invalid email', () => {
    const invalidData = {
      name: 'John Doe',
      email: 'not-an-email',
      message: 'Test message',
    };
    const result = contactSchema.safeParse(invalidData);
    expect(result.success).toBe(false);
  });

  it('should reject short message', () => {
    const invalidData = {
      name: 'John Doe',
      email: 'john@example.com',
      message: 'Short',
    };
    const result = contactSchema.safeParse(invalidData);
    expect(result.success).toBe(false);
  });

  it('should accept name with hyphens and apostrophes', () => {
    const validData = {
      name: "O'Brien-Smith",
      email: 'john@example.com',
      message: 'This is a valid message that is long enough.',
    };
    const result = contactSchema.safeParse(validData);
    expect(result.success).toBe(true);
  });
});

describe('newsletterSchema', () => {
  it('should validate a valid newsletter subscription', () => {
    const validData = {
      email: 'subscriber@example.com',
      name: 'John Doe',
    };
    const result = newsletterSchema.safeParse(validData);
    expect(result.success).toBe(true);
  });

  it('should validate with only email', () => {
    const validData = {
      email: 'subscriber@example.com',
    };
    const result = newsletterSchema.safeParse(validData);
    expect(result.success).toBe(true);
  });

  it('should reject invalid email', () => {
    const invalidData = {
      email: 'invalid-email',
    };
    const result = newsletterSchema.safeParse(invalidData);
    expect(result.success).toBe(false);
  });

  it('should reject empty email', () => {
    const invalidData = {
      email: '',
    };
    const result = newsletterSchema.safeParse(invalidData);
    expect(result.success).toBe(false);
  });
});

describe('enrollmentSchema', () => {
  it('should validate a valid enrollment', () => {
    const validData = {
      course_id: 'course-123',
      course_title: 'Introduction to React',
      full_name: 'John Doe',
      email: 'john@example.com',
      motivation: 'I want to learn React to build modern web applications.',
    };
    const result = enrollmentSchema.safeParse(validData);
    expect(result.success).toBe(true);
  });

  it('should validate with all optional fields', () => {
    const validData = {
      course_id: 'course-123',
      course_title: 'Introduction to React',
      full_name: 'John Doe',
      email: 'john@example.com',
      phone: '+237 676 817 339',
      education_level: 'bachelors',
      experience_level: 'intermediate',
      motivation: 'I want to learn React to build modern web applications.',
      payment_method: 'mobile_money',
    };
    const result = enrollmentSchema.safeParse(validData);
    expect(result.success).toBe(true);
  });

  it('should reject short motivation', () => {
    const invalidData = {
      course_id: 'course-123',
      course_title: 'Introduction to React',
      full_name: 'John Doe',
      email: 'john@example.com',
      motivation: 'I want to learn.',
    };
    const result = enrollmentSchema.safeParse(invalidData);
    expect(result.success).toBe(false);
  });

  it('should reject missing required fields', () => {
    const invalidData = {
      course_id: 'course-123',
    };
    const result = enrollmentSchema.safeParse(invalidData);
    expect(result.success).toBe(false);
  });

  it('should reject invalid education level', () => {
    const invalidData = {
      course_id: 'course-123',
      course_title: 'Introduction to React',
      full_name: 'John Doe',
      email: 'john@example.com',
      education_level: 'invalid',
      motivation: 'I want to learn React to build modern web applications.',
    };
    const result = enrollmentSchema.safeParse(invalidData);
    expect(result.success).toBe(false);
  });
});

describe('jobApplicationSchema', () => {
  it('should validate a valid job application', () => {
    const validData = {
      job_title: 'Senior Developer',
      full_name: 'John Doe',
      email: 'john@example.com',
      cover_letter: 'I am excited to apply for this position. I have 5 years of experience...',
    };
    const result = jobApplicationSchema.safeParse(validData);
    expect(result.success).toBe(true);
  });

  it('should validate with all optional fields', () => {
    const validData = {
      job_id: 'job-123',
      job_title: 'Senior Developer',
      full_name: 'John Doe',
      email: 'john@example.com',
      phone: '+237 676 817 339',
      linkedin_url: 'https://linkedin.com/in/johndoe',
      portfolio_url: 'https://johndoe.com',
      cover_letter: 'I am excited to apply for this position. I have 5 years of experience...',
      resume_url: 'https://johndoe.com/resume.pdf',
    };
    const result = jobApplicationSchema.safeParse(validData);
    expect(result.success).toBe(true);
  });

  it('should reject short cover letter', () => {
    const invalidData = {
      job_title: 'Senior Developer',
      full_name: 'John Doe',
      email: 'john@example.com',
      cover_letter: 'I want this job.',
    };
    const result = jobApplicationSchema.safeParse(invalidData);
    expect(result.success).toBe(false);
  });

  it('should reject invalid URL for portfolio', () => {
    const invalidData = {
      job_title: 'Senior Developer',
      full_name: 'John Doe',
      email: 'john@example.com',
      portfolio_url: 'not-a-url',
      cover_letter: 'I am excited to apply for this position. I have 5 years of experience...',
    };
    const result = jobApplicationSchema.safeParse(invalidData);
    expect(result.success).toBe(false);
  });

  it('should accept empty string for optional URLs', () => {
    const validData = {
      job_title: 'Senior Developer',
      full_name: 'John Doe',
      email: 'john@example.com',
      linkedin_url: '',
      portfolio_url: '',
      cover_letter: 'I am excited to apply for this position. I have 5 years of experience...',
    };
    const result = jobApplicationSchema.safeParse(validData);
    expect(result.success).toBe(true);
  });
});

describe('blogPostSchema', () => {
  it('should validate a valid blog post', () => {
    const validData = {
      title: 'Introduction to Next.js 16',
      slug: 'introduction-to-nextjs-16',
      excerpt: 'A comprehensive guide to getting started with Next.js 16.',
      content: 'Next.js 16 introduces many new features including improved server components, better performance optimizations, and enhanced developer experience across the board for all users.',
      author_name: 'John Doe',
      category: 'Technology',
    };
    const result = blogPostSchema.safeParse(validData);
    expect(result.success).toBe(true);
  });

  it('should reject invalid slug', () => {
    const invalidData = {
      title: 'Introduction to Next.js 16',
      slug: 'Introduction-To-NextJS-16!',
      excerpt: 'A comprehensive guide to getting started with Next.js 16.',
      content: 'Next.js 16 introduces many new features including improved server components, better performance optimizations, and enhanced developer experience across the board for all users.',
      author_name: 'John Doe',
    };
    const result = blogPostSchema.safeParse(invalidData);
    expect(result.success).toBe(false);
  });

  it('should accept valid slug with numbers', () => {
    const validData = {
      title: 'React 19 Features',
      slug: 'react-19-features-2026',
      excerpt: 'A comprehensive guide to React 19.',
      content: 'React 19 introduces many new features including improved server components, better performance optimizations, and enhanced developer experience across the board for all users.',
      author_name: 'John Doe',
    };
    const result = blogPostSchema.safeParse(validData);
    expect(result.success).toBe(true);
  });

  it('should reject short content', () => {
    const invalidData = {
      title: 'Introduction to Next.js 16',
      slug: 'introduction-to-nextjs-16',
      excerpt: 'A comprehensive guide to getting started with Next.js 16.',
      content: 'Short content',
      author_name: 'John Doe',
    };
    const result = blogPostSchema.safeParse(invalidData);
    expect(result.success).toBe(false);
  });

  it('should validate with tags', () => {
    const validData = {
      title: 'Introduction to Next.js 16',
      slug: 'introduction-to-nextjs-16',
      excerpt: 'A comprehensive guide to getting started with Next.js 16.',
      content: 'Next.js 16 introduces many new features including improved server components, better performance optimizations, and enhanced developer experience across the board for all users.',
      author_name: 'John Doe',
      tags: ['react', 'nextjs', 'typescript'],
    };
    const result = blogPostSchema.safeParse(validData);
    expect(result.success).toBe(true);
  });
});

describe('courseSchema', () => {
  it('should validate a valid course', () => {
    const validData = {
      title: 'Introduction to React',
      slug: 'introduction-to-react',
      short_description: 'Learn the fundamentals of React development.',
      price: 99.99,
      duration: '8 weeks',
      level: 'beginner',
    };
    const result = courseSchema.safeParse(validData);
    expect(result.success).toBe(true);
  });

  it('should validate free course with price 0', () => {
    const validData = {
      title: 'Free React Basics',
      slug: 'free-react-basics',
      short_description: 'Learn React from scratch for free.',
      price: 0,
    };
    const result = courseSchema.safeParse(validData);
    expect(result.success).toBe(true);
  });

  it('should reject negative price', () => {
    const invalidData = {
      title: 'React Course',
      slug: 'react-course',
      short_description: 'Learn React development.',
      price: -10,
    };
    const result = courseSchema.safeParse(invalidData);
    expect(result.success).toBe(false);
  });

  it('should validate with all fields', () => {
    const validData = {
      title: 'Advanced React Patterns',
      slug: 'advanced-react-patterns',
      short_description: 'Master advanced React patterns and best practices.',
      description: 'This comprehensive course covers advanced React patterns...',
      cover_image: 'https://example.com/image.jpg',
      price: 199.99,
      currency: 'USD',
      duration: '12 weeks',
      level: 'advanced',
      category: 'Web Development',
      curriculum: ['Module 1', 'Module 2', 'Module 3'],
      instructor_name: 'John Doe',
      max_students: 30,
      certificate_provided: true,
      is_online: true,
      status: 'published',
      featured: true,
    };
    const result = courseSchema.safeParse(validData);
    expect(result.success).toBe(true);
  });

  it('should reject invalid level', () => {
    const invalidData = {
      title: 'React Course',
      slug: 'react-course',
      short_description: 'Learn React development.',
      price: 99,
      level: 'expert',
    };
    const result = courseSchema.safeParse(invalidData);
    expect(result.success).toBe(false);
  });
});

describe('serviceSchema', () => {
  it('should validate a valid service', () => {
    const validData = {
      title: 'Web Development',
      slug: 'web-development',
      short_description: 'Custom web application development services.',
    };
    const result = serviceSchema.safeParse(validData);
    expect(result.success).toBe(true);
  });

  it('should reject short title', () => {
    const invalidData = {
      title: 'Web',
      slug: 'web-development',
      short_description: 'Custom web application development services.',
    };
    const result = serviceSchema.safeParse(invalidData);
    expect(result.success).toBe(false);
  });

  it('should validate with all optional fields', () => {
    const validData = {
      title: 'Enterprise Software Development',
      slug: 'enterprise-software-development',
      short_description: 'Custom enterprise software development services.',
      description: 'We build robust software ecosystems designed for zero-downtime scalability...',
      icon: 'terminal',
      cover_image: 'https://example.com/image.jpg',
      category: 'Software',
      highlight: true,
      status: 'published',
    };
    const result = serviceSchema.safeParse(validData);
    expect(result.success).toBe(true);
  });
});

describe('portfolioSchema', () => {
  it('should validate a valid portfolio item', () => {
    const validData = {
      title: 'E-commerce Platform',
      slug: 'ecommerce-platform',
      short_description: 'A modern e-commerce solution for African businesses.',
    };
    const result = portfolioSchema.safeParse(validData);
    expect(result.success).toBe(true);
  });

  it('should reject invalid slug', () => {
    const invalidData = {
      title: 'E-commerce Platform',
      slug: 'E-Commerce_Platform!',
      short_description: 'A modern e-commerce solution for African businesses.',
    };
    const result = portfolioSchema.safeParse(invalidData);
    expect(result.success).toBe(false);
  });

  it('should validate with all fields', () => {
    const validData = {
      title: 'FinTech Mobile App',
      slug: 'fintech-mobile-app',
      short_description: 'A secure mobile wallet application.',
      description: 'We developed a distributed ledger payment gateway...',
      client_name: 'ABC Bank',
      industry: 'Financial Services',
      cover_image: 'https://example.com/image.jpg',
      project_url: 'https://example.com/project',
      category: 'Mobile',
      featured: true,
      status: 'published',
    };
    const result = portfolioSchema.safeParse(validData);
    expect(result.success).toBe(true);
  });
});

describe('podcastSchema', () => {
  it('should validate a valid podcast', () => {
    const validData = {
      title: 'The Future of AI in Africa',
      slug: 'future-of-ai-in-africa',
      description: 'Discussing the impact of AI on African businesses and societies.',
      episode_number: 42,
      audio_url: 'https://example.com/podcast/episode42.mp3',
    };
    const result = podcastSchema.safeParse(validData);
    expect(result.success).toBe(true);
  });

  it('should reject episode number less than 1', () => {
    const invalidData = {
      title: 'Test Episode',
      slug: 'test-episode',
      description: 'A test episode description.',
      episode_number: 0,
      audio_url: 'https://example.com/podcast/episode.mp3',
    };
    const result = podcastSchema.safeParse(invalidData);
    expect(result.success).toBe(false);
  });

  it('should validate with guest information', () => {
    const validData = {
      title: 'Tech Innovation in Cameroon',
      slug: 'tech-innovation-in-cameroon',
      description: 'Exploring the tech startup scene in Cameroon.',
      episode_number: 15,
      season_number: 2,
      duration: '45 min',
      audio_url: 'https://example.com/podcast/episode15.mp3',
      cover_image: 'https://example.com/cover.jpg',
      guest_name: 'Jane Smith',
      guest_role: 'Tech Entrepreneur',
      guest_bio: 'Jane is a successful tech entrepreneur...',
      category: 'Technology',
      featured: true,
      status: 'published',
    };
    const result = podcastSchema.safeParse(validData);
    expect(result.success).toBe(true);
  });
});

describe('jobListingSchema', () => {
  it('should validate a valid job listing', () => {
    const validData = {
      title: 'Senior Software Engineer',
      department: 'Engineering',
      location: 'Buea, Cameroon',
      type: 'full-time',
      description: 'We are looking for a senior software engineer with extensive experience in modern web technologies and cloud infrastructure management.',
      requirements: 'Must have 5+ years of experience in React, Node.js, and TypeScript development with a strong portfolio of completed projects.',
      responsibilities: 'Lead development of new features and mentor junior developers while maintaining code quality and best practices.',
    };
    const result = jobListingSchema.safeParse(validData);
    expect(result.success).toBe(true);
  });

  it('should validate remote job', () => {
    const validData = {
      title: 'Frontend Developer',
      department: 'Engineering',
      location: 'Remote',
      type: 'full-time',
      remote: true,
      description: 'We are looking for a frontend developer with strong skills in React and modern CSS frameworks.',
      requirements: 'Must have 3+ years of experience in React development and proficiency in responsive design principles.',
      responsibilities: 'Develop user interfaces, collaborate with designers, and ensure optimal user experience across all platforms.',
    };
    const result = jobListingSchema.safeParse(validData);
    expect(result.success).toBe(true);
  });

  it('should reject invalid job type', () => {
    const invalidData = {
      title: 'Developer',
      department: 'Engineering',
      location: 'Buea',
      type: 'permanent',
      description: 'We are looking for a permanent developer for our team with extensive experience in modern web technologies.',
      requirements: 'Must have experience in React and Node.js development with strong communication skills.',
      responsibilities: 'Develop features and collaborate with the team on various projects and initiatives.',
    };
    const result = jobListingSchema.safeParse(invalidData);
    expect(result.success).toBe(false);
  });

  it('should accept all valid job types', () => {
    const jobTypes = ['full-time', 'part-time', 'contract', 'internship'];
    jobTypes.forEach((type) => {
      const validData = {
        title: 'Software Developer',
        department: 'Engineering',
        location: 'Buea, Cameroon',
        type,
        description: 'We are looking for a software developer with strong technical skills and ability to work in a team environment.',
        requirements: 'Must have experience in modern web development and be willing to learn new technologies quickly.',
        responsibilities: 'Develop software solutions, participate in code reviews, and collaborate with cross-functional teams.',
      };
      const result = jobListingSchema.safeParse(validData);
      expect(result.success).toBe(true);
    });
  });
});

describe('teamMemberSchema', () => {
  it('should validate a valid team member', () => {
    const validData = {
      name: 'John Doe',
      role: 'Software Engineer',
      bio: 'John is a passionate software engineer with 5 years of experience...',
    };
    const result = teamMemberSchema.safeParse(validData);
    expect(result.success).toBe(true);
  });

  it('should reject short bio', () => {
    const invalidData = {
      name: 'John Doe',
      role: 'Software Engineer',
      bio: 'Short bio',
    };
    const result = teamMemberSchema.safeParse(invalidData);
    expect(result.success).toBe(false);
  });

  it('should validate with all optional fields', () => {
    const validData = {
      name: 'Dr. Jane Smith',
      role: 'Chief Technology Officer',
      department: 'Leadership',
      bio: 'Dr. Smith has over 15 years of experience in software architecture...',
      image_url: 'https://example.com/jane.jpg',
      linkedin_url: 'https://linkedin.com/in/janesmith',
      twitter_url: 'https://twitter.com/janesmith',
      email: 'jane@ferdsilinks.com',
      order: 1,
      status: 'active',
    };
    const result = teamMemberSchema.safeParse(validData);
    expect(result.success).toBe(true);
  });

  it('should reject invalid email', () => {
    const invalidData = {
      name: 'John Doe',
      role: 'Developer',
      bio: 'John is a passionate developer with experience...',
      email: 'not-an-email',
    };
    const result = teamMemberSchema.safeParse(invalidData);
    expect(result.success).toBe(false);
  });
});
