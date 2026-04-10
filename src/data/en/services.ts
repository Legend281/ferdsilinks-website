export interface ProcessStep {
    number: string;
    title: string;
    description: string;
}

export interface CapabilityFeature {
    icon: string;
    title: string;
    description: string;
    bullets: string[];
}

export interface CaseStudyTeaser {
    title: string;
    description: string;
    image: string;
    metric: string;
    metricText: string;
}

export interface ExpertLead {
    name: string;
    role: string;
    quote: string;
    image: string;
}

export interface ServiceCategory {
    id: string;
    slug: string;
    domain: string;
    title: string;
    description: string;
    heroImage: string;
    methodology: ProcessStep[];
    capabilities: CapabilityFeature[];
    techStack: string[];
    caseStudy: CaseStudyTeaser;
    expert: ExpertLead;
}

// Re-export old interface for backward compat for any other pages if temporarily needed, 
// but we will primarily use ServiceCategory.
export const serviceCategories: ServiceCategory[] = [
    {
        id: "cat_data_ai",
        slug: "data-ai",
        domain: "Architectural Intelligence",
        title: "Data Science & Predictive Intelligence",
        description: "Transforming complex datasets into strategic roadmaps for African innovation. We build the neural networks that power the future of the continent.",
        heroImage: "https://lh3.googleusercontent.com/aida-public/AB6AXuA-FQ3Kem2h2d5kOY9ZfH-4nvaf2V9PvRohllSXheEzVBYhuWlK_OHQwdDaXhP6XtVNM2-gjhce2yVuKHBlPP7e9rL1W0NelaX7ETiIE1mjjCIxUc4SymOgCuWGNbRUjex7mNESnkKSlBMkRJu5tYJ6rJv0P8UCSQPVkuB4we94NkHuvH22tevokqdbK4MjMpERADu-3HM-8VxdWNfHgjVxktpq7UIcZ7POu2daXVx5cZWsFJOIGIFbg1HRX2U7nOSYTpcdrTVmGPBV",
        methodology: [
            { number: "01", title: "Discovery", description: "Identification of critical KPIs and data silo mapping within the organizational architecture." },
            { number: "02", title: "Data Engineering", description: "Developing robust pipelines for ingestion, cleaning, and structural normalization at scale." },
            { number: "03", title: "Modeling", description: "Custom algorithmic development using advanced machine learning and statistical physics principles." },
            { number: "04", title: "Deployment", description: "Integration of predictive engines into production environments with continuous monitoring." }
        ],
        capabilities: [
            {
                icon: "insights",
                title: "Predictive Analytics",
                description: "Forecasting market shifts and consumer behavior using time-series analysis and ensemble modeling techniques tuned for African market volatility.",
                bullets: ["RISK STRATIFICATION", "CHURN PREDICTION"]
            },
            {
                icon: "language",
                title: "NLP: Dialect Focused",
                description: "Breaking language barriers with custom LLMs trained on regional dialects (Pidgin, Camfranglais) and French/English hybrids.",
                bullets: ["SENTIMENT ARCHITECTURE", "LOCALIZED BOT ENGINES"]
            },
            {
                icon: "visibility",
                title: "Computer Vision",
                description: "Automated visual recognition for logistics, agricultural monitoring via satellite, and security infrastructure optimization.",
                bullets: ["OBJECT IDENTIFICATION", "GEOSPATIAL MAPPING"]
            },
            {
                icon: "database",
                title: "Big Data Infrastructure",
                description: "Building the pipelines that handle petabytes. Distributed computing solutions designed for high performance with minimal latency.",
                bullets: ["DATA LAKES & WAREHOUSING", "REAL-TIME STREAMING"]
            }
        ],
        techStack: ["Python", "TensorFlow", "PyTorch", "AWS", "Apache Spark", "Kubernetes"],
        caseStudy: {
            title: "AgTech Optimization: Scaling the Northern Breadbasket",
            description: "We engineered a localized weather and soil analysis engine for a consortium of agricultural cooperatives, enabling hyper-accurate planting schedules despite shifting climate patterns.",
            image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDXDvHe1aLt8LZthcKJgOpcRkIuHDMSh5ZMH8KRosdlJCNwJvihrAS5g2xRp1LVdXvCmKYjaOTVb_NDrwStXwbt5nSrj78q18OhVYz3uyWJEwr1ICa1ed24A9rBE_-qDioueZ6PoP1M-NAWvxoCPyc70wO_T7ypQRtA2WE2Kk6HgALC4L9iqkMC7jYi3v1Hy1ev81YQqntTbOD-i5gcUBHe_kZoYLXvOpwr9RWHKybSnGFnQMZGKOys8791wmHdkNSfz5sRXvqEdSm-",
            metric: "+42%",
            metricText: "Efficiency increase in agricultural output through predictive yield modeling."
        },
        expert: {
            name: "Dr. Ambe T.",
            role: "Lead Data Architect & PhD in Computational Physics",
            quote: "\"Data is not just numbers; it is the heartbeat of African commerce. Our mission is to listen to that heartbeat and translate it into actionable growth strategies that can compete globally.\"",
            image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDacY8YfHhdHiFnDU_1x2OqM3ZXQO5vQv-0y6f1ELosxqgA6PxkMr0ZsbXdp0UFukc3crZboMSC4a87CnuLeDq-Gi3qBY5AwN91sAR5M3E6XG8puJELQdt482VY3u1cwYJVjT_SQs4aHIn1GXLqWfkZCfUqtHMPFGONK7X6Z-2J5Z4-ifn8KcQnxtjRCfg0sIqG4757CNEssoWOa4SObE9-So-bXDcmXgeJX4vCcfm08t26B6_o7Eps9Ittde5iU5hcfz8zXTRYeP3V"
        }
    },
    {
        id: "cat_it_software",
        slug: "it-software",
        domain: "Systems Engineering",
        title: "Enterprise Application & Cloud Architecture",
        description: "Robust software ecosystems designed for zero-downtime scalability. We build the digital backbone for modern African enterprises.",
        heroImage: "https://api.dicebear.com/7.x/shapes/svg?seed=software&backgroundColor=002147",
        methodology: [
            { number: "01", title: "Requirement Architecture", description: "Translating business objectives into strict technical blueprints and system topologies." },
            { number: "02", title: "Prototyping & UX", description: "Designing high-fidelity wireframes and user journeys optimized for maximum conversion." },
            { number: "03", title: "Agile Engineering", description: "Iterative development cycles utilizing modern frameworks (Next.js, React Native, Node.js)." },
            { number: "04", title: "Cloud Deployment", description: "Seamless transition to highly-available AWS/GCP clusters with automated failovers." }
        ],
        capabilities: [
            {
                icon: "terminal",
                title: "Custom Web Applications",
                description: "Massive scale web applications utilizing server-side rendering for optimal performance.",
                bullets: ["REACT & NEXT.JS", "PROGRESSIVE WEB APPS"]
            },
            {
                icon: "smartphone",
                title: "Mobile Ecosystems",
                description: "Native and cross-platform mobile apps designed for diverse device capabilities and network constraints.",
                bullets: ["REACT NATIVE & EXPO", "OFFLINE-FIRST ARCHITECTURE"]
            },
            {
                icon: "cloud_done",
                title: "Cloud Infrastructure",
                description: "Migration and management of corporate systems into deeply secured cloud environments.",
                bullets: ["SERVERLESS ARCHITECTURE", "CONTAINER ORCHESTRATION"]
            },
            {
                icon: "security",
                title: "Cyber Security Ops",
                description: "Protecting digital interfaces against evolving threats through persistent architectural fortification.",
                bullets: ["PENETRATION TESTING", "ZERO-TRUST NETWORKS"]
            }
        ],
        techStack: ["Next.js", "React Native", "Node.js", "PostgreSQL", "Docker", "Vercel"],
        caseStudy: {
            title: "FinTech Scaling: Secure Mobile Wallets",
            description: "Developed a distributed ledger payment gateway connecting millions of unbanked citizens to reliable micro-financing options with latency under 200ms.",
            image: "https://api.dicebear.com/7.x/shapes/svg?seed=fintech&backgroundColor=002147",
            metric: "99.9%",
            metricText: "Uptime maintained during extreme peak transaction volumes across holiday periods."
        },
        expert: {
            name: "Eng. M. Ferdinand",
            role: "Chief Technical Officer & Systems Architect",
            quote: "\"The future of software is invisible. The best technology gets out of the way and empowers people to execute their vision without friction.\"",
            image: "https://api.dicebear.com/7.x/adventurer/svg?seed=ferdinand"
        }
    },
    {
        id: "cat_training",
        slug: "training-research",
        domain: "Human Capital",
        title: "Corporate Upskilling & Capacity Building",
        description: "Transforming your workforce into a digital-first army. We bridge the critical skills gap through intensive, real-world technical bootcamps.",
        heroImage: "https://api.dicebear.com/7.x/shapes/svg?seed=training&backgroundColor=002147",
        methodology: [
            { number: "01", title: "Gap Analysis", description: "Assessing organizational blind spots and measuring existing team technical proficiencies." },
            { number: "02", title: "Curriculum Design", description: "Tailoring rigorous sprint schedules specifically around your business's proprietary stack." },
            { number: "03", title: "Immersive Bootcamp", description: "Intense, hands-on architectural sprints requiring active coding and system configuration." },
            { number: "04", title: "Evaluation", description: "Measuring ROI through post-training structural deliverables integrated directly into your pipeline." }
        ],
        capabilities: [
            {
                icon: "developer_board",
                title: "Engineering Cohorts",
                description: "Upgrading legacy developers to modern App Router, React, and server-side paradigms.",
                bullets: ["NEXT.JS MASTERY", "MODERN REACT HOOKS"]
            },
            {
                icon: "analytics",
                title: "Data Literacy Programs",
                description: "Training executives and managers to interpret raw data feeds into competitive advantages.",
                bullets: ["DASHBOARD CREATION", "METRIC STRATIFICATION"]
            },
            {
                icon: "psychology",
                title: "AI Prompt Engineering",
                description: "Workshops maximizing operational efficiency by training staff to command powerful generative AI tools.",
                bullets: ["LLM WORKFLOWS", "COPILOT INTEGRATION"]
            },
            {
                icon: "shield_person",
                title: "Security Hygiene",
                description: "Corporate level defense training for non-technical staff to prevent phishing and social engineering.",
                bullets: ["THREAT RECOGNITION", "DATA COMPLIANCE"]
            }
        ],
        techStack: ["Interactive LMS", "Jupyter Hubs", "AWS Educate", "GitHub Enterprise"],
        caseStudy: {
            title: "Bank IT Department Structural Upgrade",
            description: "Transitioned an entire banking IT division of 45 engineers from legacy monolithic Java systems to modern, agile Microservices in just 8 weeks.",
            image: "https://api.dicebear.com/7.x/shapes/svg?seed=bank&backgroundColor=002147",
            metric: "8 Weeks",
            metricText: "Completion time to achieve a fully localized microservice deployment capable team."
        },
        expert: {
            name: "S. Nguema",
            role: "Head of Educational Partnerships",
            quote: "\"Tools change daily, but foundational problem-solving endures. We teach engineers how to learn, adapting seamlessly to the shifting tectonic plates of technology.\"",
            image: "https://api.dicebear.com/7.x/adventurer/svg?seed=nguema"
        }
    },
    {
        id: "cat_consulting",
        slug: "consulting-print",
        domain: "Strategic Partnerships",
        title: "Digital Blueprinting & Hardware Procurement",
        description: "Before code is written, a foundation must be laid. We provide CTO-level guidance on digital transformation and complex hardware acquisitions.",
        heroImage: "https://api.dicebear.com/7.x/shapes/svg?seed=consulting&backgroundColor=002147",
        methodology: [
            { number: "01", title: "Executive Alignment", description: "Synchronizing technological roadmaps directly with C-Suite overarching financial objectives." },
            { number: "02", title: "Resource Auditing", description: "Evaluating existing digital infrastructure and legacy hardware endpoints for obsolescence." },
            { number: "03", title: "Strategic Roadmapping", description: "Drafting multi-year transformation blueprints with precise budget forecasting." },
            { number: "04", title: "Hardware Securing", description: "Procuring heavily optimized, cost-effective computational rigs and enterprise servers." }
        ],
        capabilities: [
            {
                icon: "strategy",
                title: "CTO as a Service",
                description: "Fractions executive technical leadership for emerging firms scaling without internal IT directors.",
                bullets: ["VENDOR NEGOTIATION", "TECH SCALING ROADMAP"]
            },
            {
                icon: "transform",
                title: "Digital Transformation",
                description: "Shepherding traditional brick-and-mortar operations into fully-digitized, asset-light powerhouses.",
                bullets: ["PROCESS AUTOMATION", "ERP SELECTION"]
            },
            {
                icon: "memory",
                title: "Enterprise Hardware Ops",
                description: "Sourcing and deploying servers, commercial printing arrays, and localized computational clusters.",
                bullets: ["SERVER PROCUREMENT", "NETWORK TOPOLOGIES"]
            },
            {
                icon: "inventory_2",
                title: "Supply Chain Digitization",
                description: "Installing robust inventory management endpoints linking physical goods to dynamic databases.",
                bullets: ["RFID DEPLOYMENT", "LOGISTICS DASHBOARDS"]
            }
        ],
        techStack: ["Enterprise Arch", "Cisco Systems", "Dell EMC", "SAP Frameworks"],
        caseStudy: {
            title: "National Logistics Fleet Transformation",
            description: "Guided a legacy transport conglomerate through a full hardware and software overhaul, digitizing their entire dispatch protocol and reducing fuel waste.",
            image: "https://api.dicebear.com/7.x/shapes/svg?seed=fleet&backgroundColor=002147",
            metric: "-27%",
            metricText: "Reduction in operational overhead within the first two quarters of deployment."
        },
        expert: {
            name: "J. Eloundou",
            role: "Principal Strategy Director",
            quote: "\"Technology without strategy is just expenditure. We ensure every dollar spent on bytes or iron yields measurable, explosive dividends on your balance sheet.\"",
            image: "https://api.dicebear.com/7.x/adventurer/svg?seed=eloundou"
        }
    }
];
