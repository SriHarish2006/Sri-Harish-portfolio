export const profile = {
  name: "Sri Harish",
  image: "/harish.png",

  roles: [
    "Computer Science Engineer",
    "AI & Machine Learning Enthusiast",
    "Data Analyst",
    "Business Intelligence Developer",
    "Full Stack Java Developer",
    "Python Developer",
  ],

  tagline:
    "I build data-driven products and intelligent systems — from deep learning research to full-stack enterprise applications.",

  location: "Thiruvannamalai, Tamil Nadu, India",

  phone: "+91 9489231147",

  email: "harishsri632@gmail.com",

  social: {
    github: "https://github.com/SriHarish2006",
    linkedin: "https://www.linkedin.com/in/sri-harish-2b34a930a",
    leetcode: "https://leetcode.com/u/YOUR_USERNAME/",
    hackerrank: "https://www.hackerrank.com/profile/YOUR_USERNAME",
  },
  stats: [
    { label: "Projects Built", value: 6 },
    { label: "Research Publications", value: 1 },
    { label: "Internships", value: 2 },
    { label: "Core Technologies", value: 15 },
  ],
};

export const education = [
  {
    degree: "B.E. Computer Science Engineering",
    school:
      "Vel Tech High Tech Dr. Rangarajan Dr. Sakunthala Engineering College",
    location: "Chennai, Tamil Nadu",
    period: "2023 — 2027",
    detail:
      "Coursework spanning data structures, DBMS, mobile computing, compiler design, and machine learning, paired with hands-on project work in analytics and full-stack development.",
  },
  {
    degree: "Higher Secondary Certificate (Class XII)",
    school: "Sishya Matriculation Higher Secondary School",
    location: "Thiruvannamalai, Tamil Nadu",
    period: "2022 – 2023",
    detail:
      "Completed Higher Secondary education with a focus on Mathematics, Physics, Chemistry, and Computer Science.",
  },
  {
    degree: "Secondary School Leaving Certificate (Class X)",
    school: "Kendriya Vidyalaya",
    location: "Thiruvannamalai, Tamil Nadu",
    period: "2020 – 2021",
    detail:
      "Completed secondary education with a strong academic foundation in Mathematics, Science, English, and Computer fundamentals.",
  },
];

export const experience = [
  {
    role: "AI & Data Analytics Intern",
    company: "NoviTech R&D Private Limited",
    period: "Jun 2024 – Jul 2024",
    type: "Internship",
    points: [
      "Built and deployed interactive Power BI dashboards for the R&D team, streamlining data refresh cycles and reducing manual reporting time.",
      "Analyzed large-scale operational datasets using SQL and Python (Pandas) to generate actionable insights for research and business decision-making.",
      "Collaborated with cross-functional teams to create Excel-based visualizations and transform raw datasets into client-ready reports.",
    ],
    tech: ["Python", "SQL", "Power BI", "Pandas", "Excel", "Data Analytics"],
  },
  {
    role: "Software Development Engineer (SDE) Intern",
    company: "Bluestock Fintech",
    period: "Aug 2025 – Sep 2025",
    type: "Internship",
    points: [
      "Developed and enhanced backend modules using Java and SQL for a live fintech application.",
      "Contributed to database management and backend integration, improving query performance and application functionality.",
      "Performed debugging, unit testing, and feature implementation to deliver stable, production-ready software releases.",
    ],
    tech: ["Java", "SQL", "MySQL", "Git", "Backend Development"],
  },
  {
    role: "Java & Data Structures Intern",
    company: "Innoknowvex",
    period: "2026",
    type: "Internship",
    points: [
      "Strengthened problem-solving skills by implementing Data Structures and Algorithms using Java.",
      "Solved coding challenges involving arrays, linked lists, stacks, queues, trees, graphs, recursion, and dynamic programming.",
      "Applied object-oriented programming concepts and optimized algorithms for time and space complexity.",
      "Participated in coding assessments and hands-on programming exercises focused on placement preparation.",
    ],
    tech: ["Java", "DSA", "OOP", "Collections Framework", "Algorithms", "Git"],
  },
];

export const skills = [
  {
    category: "Programming",
    items: [
      { name: "Python", level: 65 },
      { name: "Java", level: 85 },
      { name: "SQL", level: 88 },
    ],
  },
  {
    category: "Data & Analytics",
    items: [
      { name: "Power BI", level: 88 },
      { name: "Tableau", level: 75 },
      { name: "DAX / Power Query", level: 80 },
      { name: "Excel", level: 85 },
    ],
  },
  {
    category: "Machine Learning",
    items: [
      { name: "TensorFlow / Keras", level: 82 },
      { name: "Scikit-learn", level: 85 },
      { name: "Deep Learning (CNNs)", level: 80 },
    ],
  },
  {
    category: "Web & Backend",
    items: [
      { name: "React / TypeScript", level: 80 },
      { name: "Java (Spring Boot)", level: 80 },
      { name: "REST APIs", level: 82 },
    ],
  },
  {
    category: "Databases & Tools",
    items: [
      { name: "MySQL", level: 85 },
      { name: "MongoDB", level: 72 },
      { name: "Git", level: 85 },
      { name: "Docker", level: 68 },
    ],
  },
];

export const projects = [
  {
  title: "Hybrid Convergence Of Education Dynamic",
  image: "/projects/hybrid-education.png",
  summary:
    "A published research project proposing an AI-driven hybrid education framework that enhances personalized learning through adaptive technologies and learning analytics.",
  problem:
    "Conventional educational systems struggle to provide personalized instruction, continuous performance monitoring, and intelligent decision support for students and educators.",
  solution:
    "Designed and evaluated a hybrid education framework that integrates artificial intelligence, machine learning, and learning analytics to improve student engagement, academic performance, and educational decision-making.",
  features: [
    "Personalized learning recommendations",
    "Learning analytics and visualization",
    "Student performance prediction",
    "Adaptive educational framework",
    "Research publication presented at an international conference"
  ],
  tech: [
    "Python",
    "Machine Learning",
    "Data Analytics",
    "AI",
    "Research"
  ],
  tags: ["Research", "Featured"],
},
    {
    title: "An Optimization-Driven Deep Neural Framework for Automated Alzheimer’s Disease Screening ",
    image: "/projects/alzheimer-screening.png",
    summary:
      "A neural network–based screening approach for Alzheimer's disease, presented as a published research paper at ICIRIST 2026.",
    problem:
      "Early, accessible screening for Alzheimer's disease remains a challenge in clinical and research settings.",
    solution:
      "Developed and evaluated deep learning models for screening, culminating in a peer-reviewed conference publication.",
    features: [
      "Neural network architecture for classification",
      "Model evaluation and benchmarking",
      "Published and presented at ICIRIST 2026",
    ],
    tech: ["Python", "TensorFlow", "Keras", "Deep Learning"],
    tags: ["Research", "Featured"],
  },
  { 
    title: "Enterprise Registration & Identity Management Portal",
    image: "/projects/enterprise-identity-portal.png", // e.g. "/projects/my-screenshot.png"
    summary:
      "A production-ready identity platform built from scratch with a full React/TypeScript frontend and a Java 21 / Spring Boot 3 backend.",
    problem:
      "Organizations need a secure, auditable way to onboard and manage user identities with role-based access and approval workflows.",
    solution:
      "Designed and built an end-to-end registration and identity management system covering authentication, authorization, and approval pipelines.",
    features: [
      "JWT-based authentication",
      "Role-Based Access Control (RBAC)",
      "Multi-step approval workflows",
      "Dockerized deployment",
    ],
    tech: ["React", "TypeScript", "Vite", "Java 21", "Spring Boot 3", "Docker", "JWT"],
    tags: ["Full Stack", "Featured"],
  },
  {
    title: "Starbucks-Branded Interactive BI Dashboard",
    image: "/projects/starbucks-bi-dashboard.png",
    summary:
      "A self-contained, Power BI-style analytics dashboard built as a single interactive HTML file using Chart.js.",
    problem:
      "Stakeholders needed an interactive, shareable way to explore nutrition and store directory data without a BI license.",
    solution:
      "Processed real nutrition and store directory datasets with Python and pandas, then built a fully interactive dashboard with KPI cards, charts, and filters.",
    features: [
      "Interactive KPI cards and charts",
      "Store directory and nutrition data exploration",
      "Zero-dependency, single-file deployment",
    ],
    tech: ["Python", "Pandas", "Chart.js", "HTML/CSS/JS"],
    tags: ["Data Analytics"],
  },
  {
    title: "Parking Lot Management System",
    image: "/projects/parking lot.png",
    summary:
      "An object-oriented Java application modeling real-world parking lot operations.",
    problem: "Manual parking lot management is error-prone and hard to scale.",
    solution:
      "Applied core OOP principles to design a modular system for slot allocation, tracking, and management.",
    features: [
      "Object-oriented design (OOP)",
      "Slot allocation and tracking logic",
      "Clean, modular Java architecture",
    ],
    tech: ["Java", "OOP"],
    tags: ["Software Development"],
  },
  {
    title: "Employee Data Analysis System",
    image: "/projects/employee-data-analysis.png",
    summary:
      "A data analysis system for exploring and reporting on employee datasets.",
    problem: "HR and management teams need clear insight into workforce data trends.",
    solution:
      "Built data processing and analysis workflows to surface trends and generate reports from employee data.",
    features: ["Data cleaning and transformation", "Trend analysis and reporting"],
    tech: ["Python", "SQL", "Pandas"],
    tags: ["Data Analytics"],
  },
];

export const research = {
  title: "Research Publications & Conference Presentations",

  conference:
    "ICIRIST 2026 • ICRETM 2025",

  summary:
    "Published and presented two peer-reviewed research papers in international conferences focusing on Artificial Intelligence, Deep Learning, and Educational Technology. The research emphasizes intelligent systems for healthcare and innovative approaches to modern education.",

  publications: [
    {
      title:
        "An Optimization-Driven Deep Neural Framework for Automated Alzheimer's Disease Screening",
      conference:
        "International Conference on Integrating Recent Innovations in Science and Technology (ICIRIST 2026)",
      date: "26 March 2026",
      venue:
        "Dhanalakshmi Srinivasan Engineering College, Perambalur, Tamil Nadu",
      isbn: "978-93-5782-647-1",
      description:
        "Presented a deep learning framework for automated Alzheimer's disease screening using optimized neural network architectures to improve early diagnosis accuracy and computational efficiency.",
      image: "/research/icirist-2026.png",
    },

    {
      title:
        "Hybrid Convergence of Education Dynamic",
      conference:
        "5th International Conference on Recent Trends in Engineering, Technology and Management (ICRETM 2025)",
      date: "4–5 April 2025",
      venue:
        "Suguna College of Engineering, Coimbatore, Tamil Nadu",
      description:
        "Presented a research paper proposing an intelligent hybrid education framework that integrates emerging technologies to enhance digital learning and academic engagement.",
      image: "/research/icretm-2025.jpg",
    },
  ],
};

// Add one entry per certificate. Drop the certificate image/screenshot at
// public/certificates/<filename> and reference it below (or leave "" to show a placeholder icon).
// NOTE: filenames below contain spaces / & / em-dashes. They should still resolve from
// public/, but consider renaming to kebab-case (e.g. "power-bi-basics.png") for robustness
// across deployment platforms that re-encode URLs.
export const certifications = [
  {
    name: "Generative AI Fundamentals (SAWIT.AI Learnathon)",
    issuer: "GUVI, HCL Group, AICTE & NASSCOM",
    date: "Feb 2025",
    credentialId: "",
    verifyUrl: "",
    image: "/certificates/HCL GUVI Certification - 233Y710VNL44R35oG4.png",
  },
  {
    name: "Data Analytics Internship",
    issuer: "NoviTech R&D Pvt. Ltd.",
    date: "2024",
    image: "/certificates/data-analytics.png",
    verifyUrl: ""
  },
  {
    name: "Artificial Intelligence Internship",
    issuer: "NoviTech R&D Pvt. Ltd.",
    date: "2024",
    image: "/certificates/artificial-intelligence.png",
    verifyUrl: ""
  },
  {
    name: "Basics of Microsoft Power BI",
    issuer: "UniAthena & Cambridge International Qualifications",
    date: "Apr 2025",
    credentialId: "CR640",
    verifyUrl: "",
    image: "/certificates/Basics of Microsoft Power BI.png",
  },
  {
    name: "Basics of DAX in Power BI",
    issuer: "UniAthena & Cambridge International Qualifications",
    date: "Apr 2025",
    credentialId: "CR641",
    verifyUrl: "",
    image: "/certificates/Basics of DAX in Power BI.png",
  },
  {
    name: "Basics of Visualization in Power BI",
    issuer: "UniAthena & Cambridge International Qualifications",
    date: "Apr 2025",
    credentialId: "CR920",
    verifyUrl: "",
    image: "/certificates/Basics of Visualization in Power BI.png",
  },
  {
    name: "Essentials of MS Excel – Formulas & Functions",
    issuer: "UniAthena & Cambridge International Qualifications",
    date: "Apr 2025",
    credentialId: "CR924",
    verifyUrl: "",
    image: "/certificates/Essentials of MS Excel - Formulas and Functions.png",
  },
  {
    name: "Introduction to Power Query in Excel",
    issuer: "Simplilearn SkillUp",
    date: "Apr 2025",
    credentialId: "",
    verifyUrl: "",
    image: "/certificates/Introduction to Power Query in Excel.png",
  },
  {
    name: "Essentials of Data Visualization using MS Excel",
    issuer: "UniAthena & Acacia University",
    date: "May 2025",
    credentialId: "CR1068",
    verifyUrl: "",
    image: "/certificates/Essentials of Data Visualization using MS Excel.png",
  },
  {
    name: "Basics of Machine Learning Algorithms",
    issuer: "UniAthena & Cambridge International Qualifications",
    date: "May 2025",
    credentialId: "CR1169",
    verifyUrl: "",
    image: "/certificates/Basics of Machine Learning.png",
  },
  {
    name: "Basics of Python",
    issuer: "UniAthena & Cambridge International Qualifications",
    date: "May 2025",
    credentialId: "CR1200",
    verifyUrl: "",
    image: "/certificates/Basics of Python.png",
  },
  {
  title: "Basics of NumPy",
  issuer: "UniAthena × Cambridge International Qualifications, UK",
  date: "July 2026",
  description:
    "Successfully completed the Basics of NumPy certification with a perfect score of 100/100. Gained practical knowledge of NumPy arrays, vectorized computations, mathematical operations, and efficient data manipulation for data science and machine learning.",
  skills: [
    "Python",
    "NumPy",
    "Data Analysis",
    "Scientific Computing",
    "Array Operations",
    "Vectorized Computing",
    "Mathematical Operations"
  ],
  credential: "#",
  image: "/certificates/basics-of-numpy.png"
},
  {
    name: "Exploring Data Transformation with Google Cloud",
    issuer: "Simplilearn SkillUp",
    date: "Jun 2025",
    credentialId: "",
    verifyUrl: "",
    image: "/certificates/Exploring Data Transformation with Google Cloud.png",
  },
  {
    name: "Data Analytics Job Simulation",
    issuer: "Deloitte (Forage)",
    date: "Jun - Jul 2025",
    credentialId: "",
    verifyUrl: "",
    image: "/certificates/Data Analytics Job Simulation (Deloitte).png",
  },
  {
    name: "SQL for Analysts Bootcamp",
    issuer: "DevTown & Microsoft Student Chapter",
    date: "Jul 2025",
    credentialId: "",
    verifyUrl: "",
    image: "/certificates/SQL for Analysts Bootcamp (Completion)WzIk.png",
  },
    {
    name: "Java with DSA Training",
    issuer: "Innoknowvex Pvt. Ltd.",
    date: "2026",
    credentialId: "260fd5cf",
    image: "/certificates/Java with DSA Training (Innoknowvex) — Certificate ID 260fd5cf.png",
    verifyUrl: ""
  },
  {
    name: "Java with DSA Training",
    issuer: "Innoknowvex Pvt. Ltd.",
    date: "2026",
    credentialId: "49f4f3d2",
    image: "/certificates/Java with DSA Training (Innoknowvex) — Certificate ID 49f4f3d2.png",
    verifyUrl: ""
  },
  {
    name: "Data Analytics Quantum Nexus",
    issuer: "Quantum Nexus",
    date: "2025",
    credentialId: "",
    image: "/certificates/Data Analystics Quantum nexus.png",
    verifyUrl: ""
  },
  {
    name: "Software Development Engineer Internship",
    issuer: "Bluestock Fintech",
    date: "2025",
    credentialId: "",
    image: "/certificates/Software Developer Enginer.jpg",
    verifyUrl: ""
  },
  {
    name: "SQL for Analysts (Participation)",
    issuer: "DevTown",
    date: "Jul 2025",
    credentialId: "",
    verifyUrl: "",
    image: "/certificates/SQL for Analysts Bootcamp (Participation) — Certificate ID 1MqFEF.png",
  },
  {
    name: "Certificate of Appreciation",
    issuer: "DevTown",
    date: "Jul 2025",
    credentialId: "",
    verifyUrl: "",
    image: "/certificates/Certificate of Appreciation (DevTown) — Certificate ID3LAXV.png",
  },
  {
    name: "Data Science & Analytics",
    issuer: "HP LIFE",
    date: "Jul 2025",
    credentialId: "",
    verifyUrl: "",
    image: "/certificates/Data Science & Analytics.png",
  },
  {
    name: "Basics of Data Analytics & Macros in Excel",
    issuer: "UniAthena & Cambridge International Qualifications",
    date: "Jul 2025",
    credentialId: "CR1202",
    verifyUrl: "",
    image: "/certificates/Basics of Data Analytics & Macros in Excel.png",
  },
  {
    name: "Introduction to Data Mining",
    issuer: "Infosys Springboard",
    date: "Jul 2025",
    credentialId: "",
    verifyUrl: "",
    image: "/certificates/Introduction to Data Mining (Infosys Springboard).png",
  },
  {
    name: "Data Fundamentals",
    issuer: "IBM SkillsBuild",
    date: "Jan 2026",
    credentialId: "",
    verifyUrl: "",
    image: "/certificates/Data Fundamentals (IBM SkillsBuild) .png",
  },
  {
    name: "Data Science Job Simulation",
    issuer: "British Airways (Forage)",
    date: "Jun 2026",
    credentialId: "",
    verifyUrl: "",
    image: "/certificates/Data Science Job Simulation (British Airways).png",
  },
  {
    name: "Power BI Employment Data Analysis Workshop",
    issuer: "Elysium Academy",
    date: "May 2025",
    credentialId: "",
    verifyUrl: "",
    image: "/certificates/Power BI Employment Data Analysis Workshop.png",
  },
  {
    name: "Game Development Workshop",
    issuer: "Zee Institute of Creative Art (ZICA)",
    date: "2025",
    credentialId: "",
    verifyUrl: "",
    image: "/certificates/Zee Institute of Creative Art (ZICA).jpeg",
  },
  {
    title: "GenAI Powered Data Analytics Job Simulation",
    issuer: "Tata / Forage",
    date: "July 30, 2026",
    type: "Job Simulation",
    image: "/certificates/tata-forage-genai-data-analytics.jpg",
    description:
      "Completed a GenAI-powered Data Analytics job simulation covering exploratory data analysis and risk profiling, delinquency prediction with AI, business reporting and data storytelling for collections strategy, and implementation of an AI-driven collections strategy.",
    skills: [
      "Data Analytics",
      "Generative AI",
      "Risk Profiling",
      "Data Storytelling",
      "AI-Driven Analytics",
      "Business Reporting",
    ],
  },
];

export const resume = {
  highlights: [
    "Published deep learning research at ICIRIST 2026",
    "Built a production-ready full-stack identity management platform",
    // TODO: confirm this competition placement is real / add a matching certification entry above,
    // or remove this line if it was a placeholder.
    "2nd place, Data Analytics competition",
    "2 internships across AI/Data Analytics and Software Development",
  ],
};
