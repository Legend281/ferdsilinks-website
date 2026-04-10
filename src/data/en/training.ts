import { Course } from '../training';

export const courses: Course[] = [
    {
        id: "crs_data_01",
        slug: "applied-data-science-bootcamp",
        title: "Applied Data Science Bootcamp",
        category: "Data Science",
        level: "Beginner",
        duration: "12 Weeks",
        icon: "dataset",
        short_description: "From Python fundamentals to predictive machine learning models.",
        long_description: "This comprehensive cohort is designed to take absolute beginners and transform them into functional junior data scientists. You will be building massive predictive models, analyzing unstructured data, and deploying Python environments using modern Jupyter ecosystems and Pandas.",
        skills_gained: ["Advanced Python", "Machine Learning", "Data Visualization", "Big Data Ecosystems"],
        curriculum: [
            {
                title: "Foundations of Data Architecture",
                topics: ["Introduction to Data Science", "Setting up Jupyter Notebooks", "Basic Data Types and Structures"]
            },
            {
                title: "Python for Big Data Processing",
                topics: ["Vectorized Operations with NumPy", "High-performance DataFrames with Pandas", "Data Cleaning Techniques"]
            },
            {
                title: "Statistical Modeling & Inference",
                topics: ["Probability Distribution", "Hypothesis Testing", "A/B Testing Strategies"]
            }
        ]
    },
    {
        id: "crs_swe_01",
        slug: "fullstack-nextjs-engineering",
        title: "Full-Stack Next.js Engineering",
        category: "Software Engineering",
        level: "Intermediate",
        duration: "10 Weeks",
        icon: "developer_board",
        short_description: "Master modern web architecture with React, Next.js App Router, and Tailwind CSS.",
        long_description: "An intensive dive into the bleeding edge of structural web development. This course focuses on building scalable, server-rendered applications utilizing Next.js 14, deeply nested App Router mechanics, interactive Client Components, and pristine Tailwind UI architectures.",
        skills_gained: ["React Context & Hooks", "Server-Side Rendering", "API Route Construction", "Responsive Tailwind UI"],
        curriculum: [
            {
                title: "React Fundamentals Refresher",
                topics: ["Component Lifecycle", "State Management", "Prop Drilling vs Context"]
            },
            {
                title: "Next.js App Router Mechanics",
                topics: ["Server vs Client Components", "Nested Layouts", "Route Handlers"]
            },
            {
                title: "Database Integration",
                topics: ["PostgreSQL Basics", "Prisma ORM Configuration", "Vercel Deployments"]
            }
        ]
    },
    {
        id: "crs_cloud_01",
        slug: "aws-cloud-architect",
        title: "AWS Cloud Architect Certification",
        category: "Cloud & DevOps",
        level: "Advanced",
        duration: "8 Weeks",
        icon: "cloud",
        short_description: "Design highly available, scalable enterprise cloud infrastructures on AWS.",
        long_description: "Prepare for your AWS Certified Solutions Architect exam while gaining practical, hands-on experience provisioning EC2 clusters, S3 data lakes, and complex VPC networking. Ferdsilinks provides actual sandbox environments to build zero-downtime architecture.",
        skills_gained: ["VPC Networking Architecture", "Serverless Deployment", "IAM Security Profiling", "Elastic Load Balancing"],
        curriculum: [
            {
                title: "Identity & Access Management (IAM)",
                topics: ["Creating Users and Roles", "Policy JSON Structures", "Security Best Practices"]
            },
            {
                title: "VPC Networking & Subnets",
                topics: ["Public vs Private Subnets", "Internet Gateways", "NAT Gateways Routing"]
            },
            {
                title: "High Availability & Auto-Scaling",
                topics: ["Elastic Load Balancing setup", "EC2 Auto Scaling Groups", "Failover Strategies"]
            }
        ]
    },
    {
        id: "crs_sec_01",
        slug: "ethical-hacking-offensive-security",
        title: "Offensive Security & Ethical Hacking",
        category: "Cyber Security",
        level: "Intermediate",
        duration: "14 Weeks",
        icon: "gpp_bad",
        short_description: "Think like an attacker to build impenetrable digital defenses.",
        long_description: "Cyber threats in the digital African market are growing exponentially. This course leverages Kali Linux, Metasploit, and advanced network analysis tools to perform structural penetration testing on simulated vulnerable corporate networks.",
        skills_gained: ["Vulnerability Assessment", "Metasploit Framework", "Web Application Firewall Bypass", "Network Sniffing"],
        curriculum: [
            {
                title: "Network Reconnaissance",
                topics: ["Nmap Scanning", "OSINT Data Gathering", "Active vs Passive Recon"]
            },
            {
                title: "Vulnerability Scanning",
                topics: ["Nessus Setup", "Identifying CVEs", "Evaluating Attack Surfaces"]
            },
            {
                title: "Exploitation Techniques",
                topics: ["Metasploit Fundamentals", "Payload Generation", "Privilege Escalation"]
            }
        ]
    },
    {
        id: "crs_data_02",
        slug: "big-data-engineering",
        title: "Enterprise Big Data Engineering",
        category: "Data Science",
        level: "Advanced",
        duration: "10 Weeks",
        icon: "database",
        short_description: "Architect scalable pipelines processing millions of rows using Spark and Hadoop.",
        long_description: "For professionals entering the architecture layer of data. Learn to construct unbreakable ETL pipelines, manage massive distributed data clusters, and orchestrate automated analytical workflows.",
        skills_gained: ["Kafka Real-time Streams", "Spark Cluster Configuration", "ETL Optimization", "Airflow Orchestration"],
        curriculum: [
            {
                title: "Apache Spark Fundamentals",
                topics: ["Spark Architecture", "RDDs vs DataFrames", "Lazy Evaluation Mechanics"]
            },
            {
                title: "Data Lake Architecture",
                topics: ["HDFS File Systems", "Parquet vs CSV Formatting", "Amazon S3 Integration"]
            },
            {
                title: "Kafka Real-Time Streaming",
                topics: ["Pub/Sub Messaging Models", "Kafka Producers and Consumers", "Stream Processing Optimization"]
            }
        ]
    }
];
