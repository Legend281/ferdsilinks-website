import { ServiceCategory } from '../services';

export const serviceCategories: ServiceCategory[] = [
    {
        id: "cat_data_ai",
        slug: "data-ai",
        domain: "Intelligence Architecturale",
        title: "Data Science & Intelligence Prédictive",
        description: "Transformation d'ensembles de données complexes en feuilles de route stratégiques pour l'innovation africaine. Nous construisons les réseaux neuronaux qui alimentent l'avenir du continent.",
        heroImage: "https://lh3.googleusercontent.com/aida-public/AB6AXuA-FQ3Kem2h2d5kOY9ZfH-4nvaf2V9PvRohllSXheEzVBYhuWlK_OHQwdDaXhP6XtVNM2-gjhce2yVuKHBlPP7e9rL1W0NelaX7ETiIE1mjjCIxUc4SymOgCuWGNbRUjex7mNESnkKSlBMkRJu5tYJ6rJv0P8UCSQPVkuB4we94NkHuvH22tevokqdbK4MjMpERADu-3HM-8VxdWNfHgjVxktpq7UIcZ7POu2daXVx5cZWsFJOIGIFbg1HRX2U7nOSYTpcdrTVmGPBV",
        methodology: [
            { number: "01", title: "Découverte", description: "Identification des KPI critiques et cartographie des silos de données au sein de l'architecture." },
            { number: "02", title: "Ingénierie des Données", description: "Développement de pipelines robustes pour l'ingestion, le nettoyage et la normalisation à grande échelle." },
            { number: "03", title: "Modélisation", description: "Développement algorithmique personnalisé utilisant l'apprentissage automatique avancé." },
            { number: "04", title: "Déploiement", description: "Intégration de moteurs prédictifs dans les environnements de production avec surveillance continue." }
        ],
        capabilities: [
            {
                icon: "insights",
                title: "Analytique Prédictive",
                description: "Prévision des évolutions du marché et du comportement des consommateurs grâce à l'analyse de séries temporelles adaptée à la volatilité du marché africain.",
                bullets: ["STRATIFICATION DES RISQUES", "PRÉDICTION DU CHURN"]
            },
            {
                icon: "language",
                title: "NLP : Accent sur les Dialectes",
                description: "Briser les barrières linguistiques avec des LLM personnalisés formés sur les dialectes régionaux (Pidgin, Camfranglais) et les hybrides français/anglais.",
                bullets: ["ARCHITECTURE DES SENTIMENTS", "MOTEURS BOTS LOCALISÉS"]
            },
            {
                icon: "visibility",
                title: "Vision par Ordinateur",
                description: "Reconnaissance visuelle automatisée pour la logistique, la surveillance agricole par satellite et l'optimisation de l'infrastructure de sécurité.",
                bullets: ["IDENTIFICATION D'OBJETS", "CARTOGRAPHIE GÉOSPATIALE"]
            },
            {
                icon: "database",
                title: "Infrastructure Big Data",
                description: "Construction de pipelines gérant des pétaoctets. Solutions de calcul distribué conçues pour de hautes performances avec une latence minimale.",
                bullets: ["DATA LAKES & ENTREPÔTS", "FLUX EN TEMPS RÉEL"]
            }
        ],
        techStack: ["Python", "TensorFlow", "PyTorch", "AWS", "Apache Spark", "Kubernetes"],
        caseStudy: {
            title: "Optimisation AgTech : Mise à l'Échelle du Grenier du Nord",
            description: "Nous avons conçu un moteur localisé d'analyse météorologique et des sols pour un consortium de coopératives agricoles, permettant des calendriers de plantation hyper-précis.",
            image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDXDvHe1aLt8LZthcKJgOpcRkIuHDMSh5ZMH8KRosdlJCNwJvihrAS5g2xRp1LVdXvCmKYjaOTVb_NDrwStXwbt5nSrj78q18OhVYz3uyWJEwr1ICa1ed24A9rBE_-qDioueZ6PoP1M-NAWvxoCPyc70wO_T7ypQRtA2WE2Kk6HgALC4L9iqkMC7jYi3v1Hy1ev81YQqntTbOD-i5gcUBHe_kZoYLXvOpwr9RWHKybSnGFnQMZGKOys8791wmHdkNSfz5sRXvqEdSm-",
            metric: "+42%",
            metricText: "Augmentation de l'efficacité de la production agricole grâce à la modélisation prédictive des rendements."
        },
        expert: {
            name: "Dr. Ambe T.",
            role: "Architecte Principal des Données & PhD en Physique Informatique",
            quote: "\"Les données ne sont pas que des chiffres ; c'est le pouls du commerce africain. Notre mission est d'écouter ce pouls et de le traduire en stratégies de croissance exploitables.\"",
            image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDacY8YfHhdHiFnDU_1x2OqM3ZXQO5vQv-0y6f1ELosxqgA6PxkMr0ZsbXdp0UFukc3crZboMSC4a87CnuLeDq-Gi3qBY5AwN91sAR5M3E6XG8puJELQdt482VY3u1cwYJVjT_SQs4aHIn1GXLqWfkZCfUqtHMPFGONK7X6Z-2J5Z4-ifn8KcQnxtjRCfg0sIqG4757CNEssoWOa4SObE9-So-bXDcmXgeJX4vCcfm08t26B6_o7Eps9Ittde5iU5hcfz8zXTRYeP3V"
        }
    },
    {
        id: "cat_it_software",
        slug: "it-software",
        domain: "Ingénierie des Systèmes",
        title: "Architecture Cloud & Applications d'Entreprise",
        description: "Des écosystèmes logiciels robustes conçus pour une évolutivité sans temps d'arrêt. Nous construisons la colonne vertébrale numérique des entreprises africaines modernes.",
        heroImage: "https://api.dicebear.com/7.x/shapes/svg?seed=software&backgroundColor=002147",
        methodology: [
            { number: "01", title: "Architecture des Besoins", description: "Traduction des objectifs commerciaux en plans techniques stricts et topologies de système." },
            { number: "02", title: "Prototypage & UX", description: "Conception de maquettes haute fidélité et de parcours utilisateurs optimisés pour une conversion maximale." },
            { number: "03", title: "Ingénierie Agile", description: "Cycles de développement itératifs utilisant des frameworks modernes (Next.js, React Native, Node.js)." },
            { number: "04", title: "Déploiement Cloud", description: "Transition transparente vers des clusters AWS/GCP hautement disponibles avec basculements automatisés." }
        ],
        capabilities: [
            {
                icon: "terminal",
                title: "Applications Web Sur Mesure",
                description: "Applications web à grande échelle utilisant le rendu côté serveur pour des performances optimales.",
                bullets: ["REACT & NEXT.JS", "PROGRESSIVE WEB APPS"]
            },
            {
                icon: "smartphone",
                title: "Écosystèmes Mobiles",
                description: "Applications mobiles natives et multiplateformes conçues pour diverses capacités matérielles et contraintes réseau.",
                bullets: ["REACT NATIVE & EXPO", "ARCHITECTURE OFFLINE-FIRST"]
            },
            {
                icon: "cloud_done",
                title: "Infrastructure Cloud",
                description: "Migration et gestion des systèmes d'entreprise vers des environnements cloud profondément sécurisés.",
                bullets: ["ARCHITECTURE SERVERLESS", "ORCHESTRATION DE CONTENEURS"]
            },
            {
                icon: "security",
                title: "Opérations de Cyber Sécurité",
                description: "Protection des interfaces numériques contre les menaces évolutives grâce à une fortification architecturale persistante.",
                bullets: ["TESTS D'INTRUSION", "RÉSEAUX ZERO-TRUST"]
            }
        ],
        techStack: ["Next.js", "React Native", "Node.js", "PostgreSQL", "Docker", "Vercel"],
        caseStudy: {
            title: "Mise à l'Échelle FinTech : Portefeuilles Mobiles Sécurisés",
            description: "Développement d'une passerelle de paiement à grand livre distribué connectant des millions de citoyens non bancarisés à des options de micro-financement fiables.",
            image: "https://api.dicebear.com/7.x/shapes/svg?seed=fintech&backgroundColor=002147",
            metric: "99.9%",
            metricText: "Disponibilité maintenue pendant des pics de transactions extrêmes durant les périodes de fêtes."
        },
        expert: {
            name: "Eng. M. Ferdinand",
            role: "Directeur Technique & Architecte Systèmes",
            quote: "\"L'avenir des logiciels est invisible. La meilleure technologie s'efface et donne aux gens les moyens d'exécuter leur vision sans friction.\"",
            image: "https://api.dicebear.com/7.x/adventurer/svg?seed=ferdinand"
        }
    },
    {
        id: "cat_training",
        slug: "training-research",
        domain: "Capital Humain",
        title: "Perfectionnement & Renforcement des Capacités",
        description: "Transformez votre main-d'œuvre en une armée axée sur le numérique. Nous comblons le déficit critique de compétences grâce à des bootcamps techniques intensifs.",
        heroImage: "https://api.dicebear.com/7.x/shapes/svg?seed=training&backgroundColor=002147",
        methodology: [
            { number: "01", title: "Analyse des Écarts", description: "Évaluation des angles morts organisationnels et mesure des compétences techniques existantes de l'équipe." },
            { number: "02", title: "Conception du Programme", description: "Personnalisation des itérations autour de la pile technologique propriétaire de votre entreprise." },
            { number: "03", title: "Bootcamp Immersif", description: "Sprints architecturaux intenses nécessitant un codage actif et une configuration système rigoureuse." },
            { number: "04", title: "Évaluation", description: "Mesure du RSI (ROI) à travers des livrables structurels post-formation intégrés directement à votre pipeline." }
        ],
        capabilities: [
            {
                icon: "developer_board",
                title: "Cohortes d'Ingénierie",
                description: "Mise à niveau des développeurs hérités vers App Router, React et le rendu côté serveur.",
                bullets: ["MAÎTRISE DE NEXT.JS", "HOOKS REACT MODERNES"]
            },
            {
                icon: "analytics",
                title: "Programmes de Littératie des Données",
                description: "Formation des cadres à l'interprétation des flux de données en avantages concurrentiels bruts.",
                bullets: ["CRÉATION DE TABLEAUX DE BORD", "STRATIFICATION DES MÉTRIQUES"]
            },
            {
                icon: "psychology",
                title: "Ingénierie de Prompts IA",
                description: "Ateliers maximisant l'efficacité opérationnelle en formant le personnel aux outils d'IA générative.",
                bullets: ["FLUX DE TRAVAIL LLM", "INTÉGRATION DE COPILOTS"]
            },
            {
                icon: "shield_person",
                title: "Hygiène de Sécurité",
                description: "Formation de défense pour le personnel non technique afin de prévenir l'hameçonnage et l'ingénierie sociale.",
                bullets: ["RECONNAISSANCE DES MENACES", "CONFORMITÉ DES DONNÉES"]
            }
        ],
        techStack: ["Interactive LMS", "Jupyter Hubs", "AWS Educate", "GitHub Enterprise"],
        caseStudy: {
            title: "Mise à Niveau Structurelle Informatique Bancaire",
            description: "Transition d'une division informatique bancaire entière de 45 ingénieurs des anciens systèmes Java monolithiques vers des microservices agiles en seulement 8 semaines.",
            image: "https://api.dicebear.com/7.x/shapes/svg?seed=bank&backgroundColor=002147",
            metric: "8 Semaines",
            metricText: "Délai de réalisation pour obtenir une équipe capable de déploiement de microservices entièrement localisés."
        },
        expert: {
            name: "S. Nguema",
            role: "Responsable des Partenariats Éducatifs",
            quote: "\"Les outils changent quotidiennement, mais la résolution fondamentale de problèmes perdure. Nous apprenons aux ingénieurs à apprendre.\"",
            image: "https://api.dicebear.com/7.x/adventurer/svg?seed=nguema"
        }
    },
    {
        id: "cat_consulting",
        slug: "consulting-print",
        domain: "Partenariats Stratégiques",
        title: "Planification Numérique & Achat de Matériel",
        description: "Avant d'écrire le moindre code, une fondation doit être posée. Nous fournissons des conseils de niveau CTO sur la transformation numérique et les acquisitions matérielles complexes.",
        heroImage: "https://api.dicebear.com/7.x/shapes/svg?seed=consulting&backgroundColor=002147",
        methodology: [
            { number: "01", title: "Alignement Exécutif", description: "Synchronisation des feuilles de route technologiques directement avec les objectifs financiers globaux de la direction." },
            { number: "02", title: "Audit des Ressources", description: "Évaluation de l'infrastructure numérique existante et des terminaux matériels hérités pour l'obsolescence." },
            { number: "03", title: "Feuille de Route Stratégique", description: "Rédaction de plans de transformation pluriannuels avec des prévisions budgétaires précises." },
            { number: "04", title: "Sécurisation Matérielle", description: "Achat d'installations de calcul hautement optimisées et rentables, ainsi que de serveurs d'entreprise virtuels et physiques." }
        ],
        capabilities: [
            {
                icon: "strategy",
                title: "CTO en tant que Service",
                description: "Leadership technique exécutif à temps partiel pour les entreprises émergentes se développant sans directeurs informatiques internes.",
                bullets: ["NÉGOCIATION DE FOURNISSEURS", "FEUILLE DE ROUTE TECHNOLOGIQUE"]
            },
            {
                icon: "transform",
                title: "Transformation Numérique",
                description: "Accompagnement des opérations traditionnelles vers des puissances entièrement numérisées et allégées en actifs.",
                bullets: ["AUTOMATISATION DES PROCESSUS", "SÉLECTION ERP"]
            },
            {
                icon: "memory",
                title: "Opérations Matérielles Entreprise",
                description: "Recherche et déploiement de serveurs, de baies d'impression commerciales et de clusters de calcul localisés.",
                bullets: ["ACHAT DE SERVEURS", "TOPOLOGIES RÉSEAU"]
            },
            {
                icon: "inventory_2",
                title: "Numérisation de la Supply Chain",
                description: "Installation de terminaux de gestion des stocks robustes reliant les biens physiques à des bases de données dynamiques.",
                bullets: ["DÉPLOIEMENT RFID", "TABLEAUX DE BORD LOGISTIQUES"]
            }
        ],
        techStack: ["Enterprise Arch", "Cisco Systems", "Dell EMC", "SAP Frameworks"],
        caseStudy: {
            title: "Transformation d'une Flotte Logistique Nationale",
            description: "Nous avons guidé un conglomérat de transport traditionnel dans une refonte complète de la machinerie matérielle et logicielle, en numérisant les expéditions.",
            image: "https://api.dicebear.com/7.x/shapes/svg?seed=fleet&backgroundColor=002147",
            metric: "-27%",
            metricText: "Réduction des frais généraux opérationnels lors des deux premiers trimestres."
        },
        expert: {
            name: "J. Eloundou",
            role: "Directeur Stratégie Principal",
            quote: "\"La technologie sans stratégie n'est qu'une dépense. Nous veillons à ce que chaque dollar dépensé en octets ou en fer produise des dividendes mesurables.\"",
            image: "https://api.dicebear.com/7.x/adventurer/svg?seed=eloundou"
        }
    }
];
