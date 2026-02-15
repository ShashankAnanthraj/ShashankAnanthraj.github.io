import { useState, useCallback } from "react";
import { motion } from "framer-motion";
import Particles from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import { Download, Database, Server, Code2, Cloud, FileCode, LayoutDashboard, Terminal, GitBranch, Cpu, Zap, Layers, ArrowDownToLine, Gauge, CheckCircle, Workflow, Bot, Brain, Binary, Sparkles, Container } from "lucide-react";
import medallion from "./assets/medallion.jpg";
import profileImg from "../profile.jpg";
import oracleImg from "./assets/oracle.png";
import databricksImg from "./assets/databricks.png";
import nxpImg from "./assets/nxp.png";
import gfmImg from "./assets/gfm.png";
import indigoImg from "./assets/indigo.png";
import abeyaantrixImg from "./assets/abeyaantrix.jpg";
import atmeImg from "./assets/ATME-logo.png";
import dmImg from "./assets/dm.jpg";
import quessImg from "./assets/quess.png";

function App() {
  const [dark, setDark] = useState(true);

  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine);
  }, []);

  const layers = [
    {
      name: "Bronze Layer",
      desc: "Raw ingestion from Oracle, APIs & external systems into Delta Lake."
    },
    {
      name: "Silver Layer",
      desc: "Cleansed & transformed using PySpark, DLT & incremental pipelines."
    },
    {
      name: "Gold Layer",
      desc: "Business-ready marts powering BI, ML & enterprise analytics."
    }
  ];

  const techStack = [
    "Databricks", "PySpark", "Snowflake", "AWS", "Azure Cloud", "DBT Cloud", "Python", "SQL", "Agentic AI", "ML", "Automation"
  ];

  const skills = [
    {
      category: "Data Platforms",
      icon: Database,
      color: "from-blue-500 to-cyan-500",
      skills: ["Databricks", "Snowflake"],
      description: "Enterprise lakehouse & data warehouse"
    },
    {
      category: "Programming",
      icon: Code2,
      color: "from-green-500 to-emerald-500",
      skills: ["Python", "PySpark", "SQL"],
      description: "Data transformation & analytics"
    },
    {
      category: "Databricks Stack",
      icon: Layers,
      color: "from-purple-500 to-pink-500",
      skills: ["Delta Lake", "DLT", "LakeFlow", "Lakebridge", "SDP"],
      description: "Pipeline development & migration"
    },
    {
      category: "Databases",
      icon: Server,
      color: "from-orange-500 to-red-500",
      skills: ["Oracle", "Snowflake"],
      description: "Enterprise & cloud databases"
    },
    {
      category: "Cloud Platforms",
      icon: Cloud,
      color: "from-yellow-500 to-amber-500",
      skills: ["AWS", "Azure"],
      description: "Cloud infrastructure & services"
    },
    {
      category: "BI & Reporting",
      icon: LayoutDashboard,
      color: "from-indigo-500 to-blue-500",
      skills: ["PowerBI", "Tableau", "Looker"],
      description: "Data visualization & analytics"
    },
    {
      category: "Tools & DevOps",
      icon: Terminal,
      color: "from-slate-500 to-zinc-500",
      skills: ["Github", "GitLab", "Linux", "Airflow", "Docker", "Jobs & Pipelines"],
      description: "Version control & orchestration"
    },
    {
      category: "Core Expertise",
      icon: Zap,
      color: "from-rose-500 to-pink-500",
      skills: ["DLT Pipelines", "SCD Type 2", "Medallion Architecture", "Performance Tuning"],
      description: "Advanced data engineering"
    }
  ];

  const aiSkills = [
    {
      category: "AI & ML",
      icon: Brain,
      color: "from-violet-500 to-purple-500",
      skills: ["Agentic AI", "AI Agents", "Automation"],
      description: "Intelligent automation & agents"
    },
    {
      category: "MLOps & Servers",
      icon: Cpu,
      color: "from-cyan-500 to-blue-500",
      skills: ["MCP Servers", "API-based Model Integration", "Inference Optimization"],
      description: "Model deployment & serving"
    },
    {
      category: "RAG & Vectors",
      icon: Binary,
      color: "from-amber-500 to-orange-500",
      skills: ["RAG", "Vector Databases", "Fine-tuning"],
      description: "Retrieval & embeddings"
    },
    {
      category: "Deep Learning",
      icon: Sparkles,
      color: "from-pink-500 to-rose-500",
      skills: ["TensorFlow", "PyTorch", "CNN", "RNN", "LSTM", "Transformers", "BERT"],
      description: "Neural networks & NLP"
    },
    {
      category: "Inference",
      icon: Zap,
      color: "from-red-500 to-orange-500",
      skills: ["Batch Inference", "Real-time Inference", "Model Optimization"],
      description: "AI model execution"
    }
  ];

  const certifications = [
    "Databricks Certified Data Engineer – Associate",
    "Aspiring Databricks Certified Data Engineer – Professional",
    "Databricks Lakehouse Fundamentals",
    "SnowPro Core Certification",
    "MLOps (Machine Learning Operations) Certificate"
  ];

  const education = {
    degree: "Bachelor of Engineering (BE) – Computer Science",
    college: "ATME College of Engineering, Mysuru"
  };

  const experiences = [
    {
      company: "Decision Minds",
      role: "Data Engineer",
      client: "NXP Semiconductors",
      logo: dmImg,
      clientLogos: [gfmImg, nxpImg],
      desc: "Built DLT pipelines, implemented LakeFlow with SCD Type 2, and executed Oracle to Databricks migration for enterprise clients."
    },
    {
      company: "Quess Corp Limited",
      role: "Associate Engineer",
      logo: quessImg,
      clientLogos: [indigoImg],
      desc: "Designed ingestion pipelines using PySpark & SQL, implemented validation frameworks and performance tuning."
    },
    {
      company: "Abeyaantrix Solutions",
      role: "Trainee Engineer",
      logo: abeyaantrixImg,
      clientLogos: [],
      desc: "Assisted in building batch and near-real-time data pipelines using Spark and Databricks. Gained hands-on experience with SQL, PySpark, Git, and ETL workflows."
    }
  ];

  return (
    <div className={dark ? "bg-slate-900 text-white min-h-screen relative" : "bg-white text-black min-h-screen relative"}>

      {/* Particles Background */}
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={{
          background: {
            color: {
              value: dark ? "#0f172a" : "#ffffff"
            }
          },
          particles: {
            number: { value: 35 },
            size: { value: 3 },
            move: { speed: 1 },
            links: { enable: true, opacity: 0.3 }
          }
        }}
        className="absolute inset-0 -z-10"
      />

      {/* Navbar */}
      <nav className="flex justify-between items-center p-6 max-w-6xl mx-auto">
        <h1 className="font-bold text-lg tracking-wide">Professional Portfolio</h1>

        <a
          href="/shashank_Resume.pdf"
          download
          className="flex items-center gap-2 px-6 py-3 bg-blue-500 rounded-full font-semibold hover:bg-blue-600 transition"
        >
          <Download size={18} /> Download Resume
        </a>
      </nav>

      {/* Hero Section */}
      <section className="text-center py-20 px-6">
        <motion.img
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          src={profileImg}
          alt="Shashank Anantharaju"
          className="w-56 h-56 rounded-full border-4 border-blue-400 object-cover mx-auto mb-8"
        />
        <motion.h1
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl md:text-7xl font-bold"
        >
          Shashank Anantharaju
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-6 text-2xl md:text-3xl text-blue-400 font-semibold"
        >
          Data + AI Engineer
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
          className="mt-4 text-xl text-slate-400"
        >
          Databricks | PySpark | Delta Lake | Snowflake
        </motion.p>
      </section>

      {/* Skills Section */}
      <section className="max-w-6xl mx-auto py-20 px-6">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-center mb-4"
        >
          Technical Skills
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          viewport={{ once: true }}
          className="text-center text-slate-400 mb-16 max-w-2xl mx-auto"
        >
          Building scalable data solutions with modern technologies
        </motion.p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((skillGroup, index) => (
            <motion.div
              key={skillGroup.category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.03, y: -5 }}
              className="bg-slate-800/50 backdrop-blur-sm p-6 rounded-2xl border border-slate-700 hover:border-slate-500 cursor-default group"
            >
              <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${skillGroup.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                <skillGroup.icon className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2">{skillGroup.category}</h3>
              <p className="text-slate-400 text-sm mb-3">{skillGroup.description}</p>
              <div className="flex flex-wrap gap-2">
                {skillGroup.skills.map((skill) => (
                  <span key={skill} className="px-3 py-1 bg-slate-700/50 rounded-full text-sm text-slate-300 hover:bg-slate-600 transition-colors">
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* AI/ML Skills Section */}
      <section className="max-w-6xl mx-auto py-20 px-6">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-center mb-4"
        >
          AI & Machine Learning
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          viewport={{ once: true }}
          className="text-center text-slate-400 mb-16 max-w-2xl mx-auto"
        >
          Building intelligent data solutions with AI/ML integration
        </motion.p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {aiSkills.map((skillGroup, index) => (
            <motion.div
              key={skillGroup.category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.03, y: -5 }}
              className="bg-slate-800/50 backdrop-blur-sm p-6 rounded-2xl border border-slate-700 hover:border-slate-500 cursor-default group"
            >
              <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${skillGroup.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                <skillGroup.icon className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2">{skillGroup.category}</h3>
              <p className="text-slate-400 text-sm mb-3">{skillGroup.description}</p>
              <div className="flex flex-wrap gap-2">
                {skillGroup.skills.map((skill) => (
                  <span key={skill} className="px-3 py-1 bg-slate-700/50 rounded-full text-sm text-slate-300 hover:bg-slate-600 transition-colors">
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Expertise Highlights */}
      <section className="max-w-4xl mx-auto py-16 px-6">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-center mb-12"
        >
          Expertise Highlights
        </motion.h2>
        <div className="grid md:grid-cols-2 gap-4">
          {[
            { icon: ArrowDownToLine, text: "DLT Pipelines with full & incremental loads" },
            { icon: Layers, text: "Medallion Architecture (Bronze/Silver/Gold)" },
            { icon: Workflow, text: "LakeFlow Connect with SCD Type 2" },
            { icon: Server, text: "Oracle to Databricks migration via Lakebridge" },
            { icon: Gauge, text: "Data validation, reconciliation & optimization" },
            { icon: CheckCircle, text: "Data marts for reporting & analytics" },
            { icon: Bot, text: "Agentic AI for production-grade automation" },
            { icon: Binary, text: "RAG pipelines with Vector Databases" },
            { icon: Brain, text: "LLM integration & fine-tuning for enterprise" }
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="flex items-center gap-4 p-4 bg-slate-800/30 rounded-xl border border-slate-700"
            >
              <div className="w-10 h-10 bg-blue-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                <item.icon className="w-5 h-5 text-blue-400" />
              </div>
              <span className="text-slate-300">{item.text}</span>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Tech Stack */}
      <section className="max-w-4xl mx-auto py-16 px-6">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-center mb-10"
        >
          Tech Stack
        </motion.h2>
        <div className="flex flex-wrap justify-center gap-3">
          {techStack.map((tech, index) => (
            <motion.span
              key={tech}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.05 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.1, backgroundColor: "#ffffff", color: "#0f172a" }}
              className="px-5 py-2 bg-blue-500 text-black font-semibold rounded-full cursor-default"
            >
              {tech}
            </motion.span>
          ))}
        </div>
      </section>

      {/* Corporate Experience */}
      <section className="max-w-6xl mx-auto py-24 px-6">
        <motion.h2
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-center mb-16"
        >
          Corporate Experience
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              viewport={{ once: true }}
              className="p-10 bg-slate-800 rounded-xl border border-slate-700 text-center"
            >
              {exp.logo && (
                <img 
                  src={exp.logo} 
                  alt={exp.company} 
                  className="w-24 h-24 mx-auto object-contain mb-4"
                />
              )}
              <h3 className="text-2xl font-bold">{exp.company}</h3>
              <p className="mt-4 text-slate-300">{exp.desc}</p>
              {exp.clientLogos && exp.clientLogos.length > 0 && (
                <div className="mt-4 pt-4 border-t border-slate-700">
                  <p className="text-xs text-slate-500 mb-2">Clients</p>
                  <div className="flex justify-center gap-3">
                    {exp.clientLogos.map((clientLogo, idx) => (
                      <img 
                        key={idx}
                        src={clientLogo} 
                        alt="Client" 
                        className="w-14 h-14 object-contain"
                      />
                    ))}
                  </div>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </section>

      {/* Featured Project */}
      <section className="max-w-5xl mx-auto py-16 px-6">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-center mb-10"
        >
          Featured Project
        </motion.h2>
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-slate-800 p-8 rounded-2xl border border-slate-700"
        >
          <h3 className="text-2xl font-bold text-blue-400 mb-4">Oracle to Databricks Migration</h3>
          <p className="text-slate-300 mb-8">
            Led Oracle to Databricks migration using Lakebridge. Implemented schema conversion, 
            incremental loads, and data validation for enterprise datasets. Achieved 40% cost reduction 
            and improved data freshness from daily to near real-time.
          </p>
          
          {/* Migration Architecture - Source to Target */}
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div className="bg-slate-700/50 p-8 rounded-xl text-center">
              <p className="text-sm text-slate-400 mb-4 font-semibold">SOURCE</p>
              <img 
                src={oracleImg}
                alt="Oracle Database"
                className="w-64 h-64 mx-auto object-contain"
              />
              <p className="mt-4 font-bold text-orange-400 text-xl">Oracle</p>
            </div>
            <div className="bg-slate-700/50 p-8 rounded-xl text-center">
              <p className="text-sm text-slate-400 mb-4 font-semibold">TARGET</p>
              <img 
                src={databricksImg}
                alt="Databricks Lakehouse"
                className="w-64 h-64 mx-auto object-contain"
              />
              <p className="mt-4 font-bold text-blue-400 text-xl">Databricks</p>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Certifications */}
      <section className="max-w-4xl mx-auto py-16 px-6">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-center mb-10"
        >
          Certifications
        </motion.h2>
        <div className="grid md:grid-cols-2 gap-4">
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-slate-800 p-5 rounded-xl border border-slate-700 text-center"
            >
              <span className="text-blue-400 font-semibold">{cert}</span>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Education */}
      <section className="max-w-4xl mx-auto py-16 px-6">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-center mb-10"
        >
          Education
        </motion.h2>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-slate-800 p-8 rounded-2xl border border-slate-700 text-center"
        >
          <img 
            src={atmeImg} 
            alt="ATME College" 
            className="w-32 h-32 mx-auto object-contain mb-4"
          />
          <h3 className="text-2xl font-bold text-blue-400 mb-2">{education.degree}</h3>
          <p className="text-slate-300 text-lg">{education.college}</p>
        </motion.div>
      </section>

      {/* Projects */}
      <section className="max-w-6xl mx-auto py-24 px-6">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-center mb-16"
        >
          Projects
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              title: "NXP Semiconductor Data Platform",
              description: "Built enterprise data lakehouse with DLT pipelines and real-time analytics.",
              tags: ["Databricks", "DLT", "Delta Lake"]
            },
            {
              title: "Oracle to Databricks Migration",
              description: "Migrated legacy Oracle databases to Databricks lakehouse using Lakebridge.",
              tags: ["Oracle", "Lakebridge", "Snowflake"]
            },
            {
              title: "Real-time Analytics Dashboard",
              description: "Created near real-time dashboards for business intelligence and reporting.",
              tags: ["PowerBI", "PySpark", "Airflow"]
            }
          ].map((project, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.03, y: -5 }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-slate-800 p-8 rounded-2xl border border-slate-700 cursor-default"
            >
              <h3 className="text-xl font-bold text-blue-400 mb-3">{project.title}</h3>
              <p className="text-slate-300 mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span key={tag} className="px-3 py-1 bg-slate-700 rounded-full text-sm text-slate-300">
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <footer className="text-center py-12 text-slate-400">
        © 2026 Shashank Anantharaju
      </footer>

    </div>
  );
}

export default App;
