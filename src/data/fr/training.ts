import { Course } from '../training';

export const courses: Course[] = [
    {
        id: "crs_data_01",
        slug: "applied-data-science-bootcamp",
        title: "Bootcamp en Data Science Appliquée",
        category: "Science des Données",
        level: "Débutant",
        duration: "12 Semaines",
        icon: "dataset",
        short_description: "Des bases Python aux modèles prédictifs d'apprentissage automatique.",
        long_description: "Cette cohorte intensive est conçue pour prendre des débutants absolus et les transformer en data scientists juniors fonctionnels. Vous construirez des modèles prédictifs massifs, analyserez des données non structurées et déploierez des environnements Python utilisant les écosystèmes modernes Jupyter et Pandas.",
        skills_gained: ["Python Avancé", "Apprentissage Automatique", "Visualisation de Données", "Écosystèmes Big Data"],
        curriculum: [
            {
                title: "Fondements de l'Architecture des Données",
                topics: ["Introduction à la Data Science", "Configuration des Notebooks Jupyter", "Types et Structures de Données Essentiels"]
            },
            {
                title: "Traitement de Données avec Python",
                topics: ["Opérations vectorisées avec NumPy", "DataFrames haute performance avec Pandas", "Techniques de Nettoyage de Données"]
            },
            {
                title: "Modélisation Statistique & Inférence",
                topics: ["Distribution de Probabilité", "Tests d'Hypothèse", "Stratégies de tests A/B"]
            }
        ]
    },
    {
        id: "crs_swe_01",
        slug: "fullstack-nextjs-engineering",
        title: "Ingénierie Full-Stack Next.js",
        category: "Ingénierie Logicielle",
        level: "Intermédiaire",
        duration: "10 Semaines",
        icon: "developer_board",
        short_description: "Maîtrisez l'architecture web moderne avec React, Next.js App Router et Tailwind CSS.",
        long_description: "Une plongée intensive dans le développement web moderne. Ce cours se concentre sur la création d'applications évolutives rendues côté serveur en utilisant Next.js 14, la mécanique profondément imbriquée d'App Router, les Composants Clientes interactifs et des architectures UI impeccables avec Tailwind.",
        skills_gained: ["Contexte & Hooks React", "Rendu Côté Serveur (SSR)", "Construction de Routes d'API", "Interface Intuitive Tailwind"],
        curriculum: [
            {
                title: "Rappel des Fondamentaux React",
                topics: ["Cycle de Vie des Composants", "Gestion d'État", "Forage de Propriétés (Prop Drilling) vs Contexte"]
            },
            {
                title: "Mécanique du Routeur d'Applications Next.js",
                topics: ["Serveur vs Composants Clients", "Mises en Page Imbriquées", "Gestionnaires de Routes"]
            },
            {
                title: "Intégration de Bases de Données",
                topics: ["Bases de PostgreSQL", "Configuration de l'ORM Prisma", "Déploiements Vercel"]
            }
        ]
    },
    {
        id: "crs_cloud_01",
        slug: "aws-cloud-architect",
        title: "Certification d'Architecte Cloud AWS",
        category: "Cloud et DevOps",
        level: "Avancé",
        duration: "8 Semaines",
        icon: "cloud",
        short_description: "Concevez des infrastructures cloud d'entreprise hautement disponibles sur AWS.",
        long_description: "Préparez-vous pour votre examen d'Architecte de Solutions Certifié AWS tout en acquérant une expérience pratique dans le provisionnement de clusters EC2, de lacs de données S3 et de réseaux VPC complexes. Ferdsilinks fournit de vrais environnements sandbox.",
        skills_gained: ["Architecture Réseau VPC", "Déploiement Serverless", "Profilage de Sécurité IAM", "Équilibrage de Charge Élastique"],
        curriculum: [
            {
                title: "Gestion d'Identité et d'Accès (IAM)",
                topics: ["Création d'Utilisateurs et Rôles", "Structures JSON de Politiques", "Amélioration des Pratiques de Sécurité"]
            },
            {
                title: "Mise en Réseau VPC et Sous-réseaux",
                topics: ["Sous-réseaux Publics vs Privés", "Passerelles Internet", "Routage via NAT"]
            },
            {
                title: "Haute Disponibilité et Auto-Scale",
                topics: ["Équilibrage de charge élastique", "Groupes d'Auto-scaling EC2", "Stratégies de Basculement"]
            }
        ]
    },
    {
        id: "crs_sec_01",
        slug: "ethical-hacking-offensive-security",
        title: "Piratage Éthique & Sécurité Offensive",
        category: "Cyber Sécurité",
        level: "Intermédiaire",
        duration: "14 Semaines",
        icon: "gpp_bad",
        short_description: "Pensez comme un attaquant pour bâtir des défenses numériques impénétrables.",
        long_description: "Les cybermenaces sur le marché numérique africain augmentent de manière exponentielle. Ce cours s'appuie sur Kali Linux, Metasploit et des outils d'analyse réseau avancés pour effectuer des tests d'intrusion sur des réseaux virtuels vulnérables.",
        skills_gained: ["Évaluation de Vulnérabilités", "Framework Metasploit", "Contournement de Pare-feu", "Analyse Symétrique / Sniffing"],
        curriculum: [
            {
                title: "Reconnaissance de Réseau",
                topics: ["Recherche via Nmap", "Analyse OSINT", "Reconnaissance Active vs Passive"]
            },
            {
                title: "Tests de Vulnérabilité",
                topics: ["Configuration de Nessus", "Identification des CVEs", "Évaluation des Surfaces d'Attaque"]
            },
            {
                title: "Techniques d'Exploitation",
                topics: ["Fondamentaux Metasploit", "Génération de Payload", "Escalade de Privilèges"]
            }
        ]
    },
    {
        id: "crs_data_02",
        slug: "big-data-engineering",
        title: "Ingénierie Big Data d'Entreprise",
        category: "Science des Données",
        level: "Avancé",
        duration: "10 Semaines",
        icon: "database",
        short_description: "Architecturez des pipelines évolutifs avec Spark et Hadoop.",
        long_description: "Pour les professionnels naviguant dans la couche d'architecture des données. Apprenez à concevoir des pipelines ETL incassables, à gérer de massifs clusters distribués et orchestrer analytiquement.",
        skills_gained: ["Flux en temps réel Kafka", "Configuration de clusters Spark", "Optimisation ETL", "Orchestration avec Airflow"],
        curriculum: [
            {
                title: "Les Fondamentaux d'Apache Spark",
                topics: ["L'Architecture de Spark", "RDDs vs DataFrames", "Mécanique d'Évaluation Paresseuse"]
            },
            {
                title: "Architecture du Hub des Données",
                topics: ["Systèmes de fichiers HDFS", "Formats Parquet vs CSV", "Intégration d'Amazon S3"]
            },
            {
                title: "Traitement des flux Kafka",
                topics: ["Modèles de messagerie Pub/Sub", "Producteurs et Consommateurs Kafka", "Optimisation du traitement des flux"]
            }
        ]
    }
];
