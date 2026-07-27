import {
  Database, Server, Code2, Cloud, LayoutDashboard, Terminal, Layers,
  Workflow, Brain, Snowflake, GitBranch,
} from "lucide-react";

import canarysImg from "./assets/Canarys.png";
import dmImg from "./assets/dm.jpg";
import quessImg from "./assets/quess.png";
import abeyaantrixImg from "./assets/abeyaantrix.jpg";
import nxpImg from "./assets/nxp.png";
import gfmImg from "./assets/gfm.png";
import indigoImg from "./assets/indigo.png";
import atmeImg from "./assets/ATME-logo.png";
import dbxassociateImg from "./assets/dbxassociate.png";
import sfcoreImg from "./assets/sfcore.png";
import mlopsImg from "./assets/mlops.jpg";
import gaiImg from "./assets/GAI.png";
import ccafImg from "./assets/CCAF.png";
import sadeImg from "./assets/SADE.png";

/** Credential surfaced on the hero portrait, alongside the current-role pill. */
export const HIGHLIGHT_BADGE = {
  img: ccafImg,
  title: "Claude Certified Architect",
  subtitle: "Foundations · Anthropic",
  href: "#certifications",
};

// Drop a logo into src/assets and import it here to replace any `logo: null`
// below — cards fall back to initials in a gradient tile until then.

export const CONTACT = {
  name: "Shashank Anantharaju",
  title: "Data + AI Engineer",
  location: "Bengaluru, India",
  email: "shashankanantharaju@gmail.com",
  phone: "+91-6364280057",
  linkedin: "https://www.linkedin.com/in/shashank-anantharaju-a701951bb",
  github: "https://github.com/ShashankAnanthraj",
  resume: "/Shashank_Anantharaju.pdf",
  // Filename the browser saves as, independent of the served path.
  resumeFileName: "Shashank_Anantharaju.pdf",
};

export const ROLES = [
  "Data Engineer",
  "Snowflake Developer",
  "Databricks & PySpark Engineer",
  "AI / ML Practitioner",
];

export const SUMMARY =
  "Data Engineer with 3+ years of experience building enterprise-scale data platforms using Snowflake, Databricks, PySpark, SQL and DBT. Experienced in SQL Server to Snowflake migrations, ETL/ELT pipelines, Lakehouse architecture, Snowpark, Streams, Tasks, REST APIs, Row Access Policies (RAP), and cloud data engineering solutions processing 100M+ records/day.";

export const STATS = [
  { value: 3, suffix: "+", label: "Years of experience" },
  { value: 100, suffix: "M+", label: "Records processed / day" },
  { value: 40, suffix: "%", label: "Pipeline performance gain" },
  { value: 9, suffix: "+", label: "Certifications earned" },
];

export const TECH_STACK = [
  "Snowflake", "Databricks", "PySpark", "DBT", "Delta Lake", "Python", "SQL",
  "Snowpark", "Airflow", "AWS", "Azure", "REST APIs", "Power BI",
];

export const SKILL_TABS = ["All", "Data & Cloud", "Engineering", "AI & ML", "Tools & BI"];

export const SKILL_GROUPS = [
  {
    category: "Snowflake Platform",
    tab: "Data & Cloud",
    icon: Snowflake,
    color: "from-sky-500 to-cyan-500",
    description: "Secure, automated warehouse workflows",
    skills: ["Snowflake", "Snowpark", "Streams", "Tasks", "Dynamic Tables", "Row Access Policies", "RBAC", "Masking Policies", "Time Travel"],
  },
  {
    category: "Databricks & Spark",
    tab: "Data & Cloud",
    icon: Layers,
    color: "from-orange-500 to-red-500",
    description: "Lakehouse pipeline development",
    skills: ["Databricks", "Apache Spark", "Delta Lake", "Delta Live Tables", "LakeFlow", "Lakebridge"],
  },
  {
    category: "Cloud Platforms",
    tab: "Data & Cloud",
    icon: Cloud,
    color: "from-amber-500 to-yellow-500",
    description: "Cloud infrastructure & services",
    skills: ["AWS", "Azure"],
  },
  {
    category: "Databases",
    tab: "Data & Cloud",
    icon: Server,
    color: "from-emerald-500 to-teal-500",
    description: "Enterprise & cloud databases",
    skills: ["SQL Server", "Oracle", "MySQL"],
  },
  {
    category: "Programming",
    tab: "Engineering",
    icon: Code2,
    color: "from-green-500 to-emerald-500",
    description: "Data transformation & analytics",
    skills: ["Python", "PySpark", "SQL", "Bash"],
  },
  {
    category: "Data Engineering",
    tab: "Engineering",
    icon: Workflow,
    color: "from-violet-500 to-purple-500",
    description: "Migration, modelling & data quality",
    skills: ["ETL / ELT", "Data Migration", "CDC", "SCD Type 2", "Data Modeling", "Data Validation", "Reconciliation", "Medallion Architecture"],
  },
  {
    category: "Transformation & Orchestration",
    tab: "Engineering",
    icon: GitBranch,
    color: "from-blue-500 to-indigo-500",
    description: "Modular, tested, scheduled pipelines",
    skills: ["DBT", "Airflow", "Jobs & Pipelines", "CI/CD"],
  },
  {
    category: "AI & Machine Learning",
    tab: "AI & ML",
    icon: Brain,
    color: "from-fuchsia-500 to-pink-500",
    description: "Intelligent automation & agents",
    skills: ["Agentic AI", "AI Agents", "RAG", "Vector Databases", "LLM Integration", "Fine-tuning", "MCP Servers", "Batch & Real-time Inference"],
  },
  {
    category: "BI & Design",
    tab: "Tools & BI",
    icon: LayoutDashboard,
    color: "from-indigo-500 to-blue-500",
    description: "Reporting & stakeholder collaboration",
    skills: ["Power BI", "Looker", "Figma", "Jira"],
  },
  {
    category: "Tools & DevOps",
    tab: "Tools & BI",
    icon: Terminal,
    color: "from-slate-500 to-zinc-500",
    description: "Version control & integrations",
    skills: ["Git", "REST APIs", "FastAPI", "Linux", "Docker"],
  },
  {
    category: "Core Expertise",
    tab: "Engineering",
    icon: Database,
    color: "from-rose-500 to-pink-500",
    description: "Where I do my deepest work",
    skills: ["SQL Server → Snowflake Migration", "Oracle → Databricks Migration", "DLT Pipelines", "Performance Tuning"],
  },
];

export const MEDALLION = [
  {
    name: "Bronze",
    accent: "from-amber-600 to-orange-700",
    tagline: "Raw landing zone",
    desc: "Raw ingestion from SQL Server, Oracle, REST APIs and external systems into Delta Lake and Snowflake — captured as-is, with full history retained.",
    points: ["Batch & incremental ingestion", "CDC and change streams", "Schema drift capture"],
  },
  {
    name: "Silver",
    accent: "from-slate-400 to-slate-600",
    tagline: "Cleansed & conformed",
    desc: "Cleansed and transformed using PySpark, DLT and DBT — deduplicated, validated and reconciled against the source system.",
    points: ["SCD Type 2 history", "Data quality & validation rules", "Joins, windows, skew handling"],
  },
  {
    name: "Gold",
    accent: "from-yellow-400 to-amber-500",
    tagline: "Business-ready marts",
    desc: "Curated marts powering BI, ML feature engineering and enterprise analytics, tuned for fast, predictable query performance.",
    points: ["Analytics-ready data marts", "BI & reporting models", "ML feature tables"],
  },
];

export const EXPERIENCES = [
  {
    company: "Canarys Automations",
    role: "Data Engineer",
    period: "May 2026 – Present",
    current: true,
    logo: canarysImg,
    // Wide wordmark — needs a landscape box rather than the default square.
    logoWide: true,
    summary:
      "Building enterprise-scale cloud data applications on Snowflake for the Insurance domain, and leading a SQL Server to Snowflake migration end to end.",
    clients: [
      {
        name: "Confidential",
        logo: null,
        points: [
          "Developing enterprise-scale cloud data applications using Snowflake for the Insurance domain.",
          "Leading Microsoft SQL Server to Snowflake migration by designing scalable ETL/ELT pipelines, ensuring seamless data migration and modernization.",
          "Implementing Snowflake Streams, Tasks, Snowpark, Dynamic Tables, and Row Access Policies (RAP) to build secure, automated, and scalable data workflows.",
          "Designing data validation, reconciliation, and testing frameworks to ensure migration accuracy and data integrity.",
          "Integrating enterprise applications using REST APIs and JSON-based services for automated data ingestion and synchronization.",
          "Optimizing Snowflake query performance through warehouse tuning, clustering strategies, and SQL optimization.",
          "Implementing RBAC, Masking Policies, and governance controls to secure sensitive insurance data.",
          "Collaborating with business analysts, UI/UX teams, and stakeholders using Figma to translate business requirements into scalable application solutions.",
          "Participating in Agile ceremonies, sprint planning, production deployments, and release management.",
        ],
      },
    ],
    tags: ["Snowflake", "Snowpark", "ETL/ELT", "RAP", "Insurance"],
  },
  {
    company: "Decision Minds",
    role: "Data Engineer",
    period: "Apr 2025 – May 2026",
    logo: dmImg,
    summary:
      "Built enterprise DLT pipelines processing 100M+ records/day, led an Oracle to Databricks migration, and delivered Snowflake + DBT ELT pipelines.",
    clients: [
      {
        name: "NXP Semiconductors",
        logo: nxpImg,
        points: [
          "Built enterprise Delta Live Tables (DLT) pipelines processing over 100M+ records/day using Databricks and PySpark.",
          "Designed Medallion Architecture (Bronze → Silver → Gold) for scalable enterprise analytics.",
          "Implemented Slowly Changing Dimension (SCD Type 2) pipelines for historical data tracking.",
          "Engineered distributed Spark transformations involving joins, aggregations, window functions, and skew optimization.",
          "Improved Spark pipeline performance by 30–40% through partitioning, caching, broadcast joins, and query optimization.",
          "Led Oracle to Databricks migration including schema conversion, validation, reconciliation, and production rollout.",
          "Built analytics-ready data marts supporting BI reporting and Machine Learning feature engineering.",
          "Optimized Delta Lake storage using compaction, partitioning, and file optimization strategies.",
        ],
      },
      {
        name: "GoFundMe",
        logo: gfmImg,
        points: [
          "Developed enterprise ELT pipelines using Snowflake and DBT.",
          "Designed modular DBT models supporting incremental processing and reusable transformations.",
          "Built complex SQL transformations using CTEs, joins, window functions, and analytical functions.",
          "Optimized Snowflake warehouse utilization, clustering, pruning, and query execution.",
          "Implemented automated testing, documentation, and lineage within DBT.",
        ],
      },
    ],
    tags: ["Databricks", "DLT", "PySpark", "Snowflake", "DBT"],
  },
  {
    company: "Quess Corp",
    role: "Associate Engineer",
    period: "Aug 2024 – Apr 2025",
    logo: quessImg,
    summary:
      "Developed end-to-end ETL pipelines and reusable ingestion frameworks on Databricks, with Airflow-based quality monitoring.",
    clients: [
      {
        name: "Indigo Airlines",
        logo: indigoImg,
        points: [
          "Developed end-to-end ETL pipelines using PySpark, SQL, and Databricks.",
          "Built ingestion frameworks for REST APIs, MySQL, and enterprise relational databases.",
          "Implemented data quality validation and automated monitoring using Apache Airflow.",
          "Designed reusable ETL components supporting enterprise analytics.",
          "Optimized Spark jobs and SQL queries to improve processing efficiency.",
          "Collaborated with business stakeholders to deliver reporting-ready datasets.",
          "Supported production deployments, issue resolution, and workflow monitoring.",
        ],
      },
    ],
    tags: ["PySpark", "Databricks", "Airflow", "ETL"],
  },
  {
    company: "Abeyaantrix Solutions",
    role: "Trainee Engineer",
    period: "May 2023 – Feb 2024",
    logo: abeyaantrixImg,
    summary:
      "Built Spark-based batch and near real-time ETL pipelines and worked extensively with Snowflake loading and query optimization.",
    clients: [
      {
        name: "Lockheed Martin",
        logo: null,
        points: [
          "Built scalable Spark-based batch and near real-time ETL pipelines.",
          "Assisted in designing data transformation workflows using Python and SQL.",
          "Worked extensively with Snowflake for loading, transformation, and query optimization.",
          "Developed ingestion pipelines from MySQL and enterprise data sources.",
          "Supported Airflow workflow scheduling and monitoring.",
          "Contributed to Power BI dashboards and reporting solutions.",
          "Followed Git-based version control and Agile development practices.",
        ],
      },
    ],
    tags: ["Spark", "Snowflake", "Airflow", "Power BI"],
  },
];

export const PROJECT_TAGS = ["All", "Snowflake", "Databricks", "LLM", "Migration", "ETL"];

export const PROJECTS = [
  {
    title: "SQL Server → Snowflake Migration",
    status: "In production",
    featured: true,
    description:
      "End-to-end migration of an insurance-domain SQL Server estate onto Snowflake. Covers scalable ETL/ELT pipeline design, schema modernization, and Streams/Tasks/Dynamic Tables for automated incremental processing. Row Access Policies, RBAC and masking policies secure sensitive policyholder data, while a purpose-built validation and reconciliation framework proves row- and column-level parity between source and target before cutover.",
    tags: ["Snowflake", "Migration", "ETL"],
  },
  {
    title: "Quantabridge",
    status: "In production",
    description:
      "Pentaho → Databricks notebook converter that automatically transforms Pentaho Data Integration files (.ktr/.kjb) into Databricks-ready Jupyter notebooks or PySpark scripts. It preserves workflow logic using hop-based ordering and converts major ETL steps (joins, filters, aggregations, lookups, file inputs) into equivalent Spark DataFrame operations. Supports batch conversion, maintains the original directory structure, and flags unsupported steps with clear TODO markers for manual review.",
    tags: ["Databricks", "Migration", "ETL"],
  },
  {
    title: "Legacy → Databricks SQL Converter",
    status: "In production",
    description:
      "A Databricks-native web application that accelerates SQL migration and schema reconciliation from legacy platforms (Snowflake, Oracle, Redshift, SSIS, Informatica) into Databricks SQL. It uses LLMs such as Claude, GPT and Llama to convert queries, validates them with EXPLAIN, and automatically retries failures with error-aware corrections. Supports both interactive and large-scale batch conversion, with results persisted in Delta tables for tracking and auditing.",
    tags: ["Databricks", "LLM", "Migration"],
  },
  {
    title: "Interview AI",
    description:
      "An AI-powered interview preparation platform built on Databricks Apps. It uses Databricks Model Serving for dynamic question generation and answer evaluation, storing structured user data and interview analytics in Delta Lake tables. Features secure secret management, scalable compute, and real-time analytics through Databricks SQL, letting candidates run mock interviews, upload learning material, receive AI-driven feedback and track improvement over time.",
    tags: ["Databricks", "LLM"],
  },
];

export const CERTIFICATIONS = [
  { title: "SnowPro Advanced: Data Engineer", issuer: "Snowflake", img: sadeImg },
  { title: "SnowPro Core Certification", issuer: "Snowflake", img: sfcoreImg },
  { title: "Databricks Certified Data Engineer Associate", issuer: "Databricks", img: dbxassociateImg },
  { title: "Databricks Certified Generative AI Engineer Associate", issuer: "Databricks", img: gaiImg },
  { title: "Databricks Lakehouse Fundamentals", issuer: "Databricks", img: null },
  { title: "Databricks MLOps Fundamentals", issuer: "Databricks", img: mlopsImg },
  { title: "Claude Certified Architect – Foundations", issuer: "Anthropic", img: ccafImg, highlight: true },
  { title: "Problem Solving (Basic)", issuer: "HackerRank", img: null },
  { title: "Data Intelligence & Interoperability with SAP", issuer: "Partner Training", img: null },
  { title: "Databricks Certified Machine Learning Engineer Associate", issuer: "Databricks", img: null, inProgress: true },
];

export const EDUCATION = {
  degree: "Bachelor of Engineering — Computer Science",
  college: "ATME College of Engineering, Mysuru",
  logo: atmeImg,
};

export const SECTIONS = [
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "experience", label: "Experience" },
  { id: "architecture", label: "Architecture" },
  { id: "projects", label: "Projects" },
  { id: "certifications", label: "Certifications" },
  { id: "contact", label: "Contact" },
];
