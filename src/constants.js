// ================= SKILLS SECTION LOGOS =================
import htmlLogo from './assets/tech_logo/html.png';
import cssLogo from './assets/tech_logo/css.png';
import javascriptLogo from './assets/tech_logo/javascript.png';
import reactjsLogo from './assets/tech_logo/reactjs.png';
import reduxLogo from './assets/tech_logo/redux.png';
import tailwindcssLogo from './assets/tech_logo/tailwindcss.png';
import bootstrapLogo from './assets/tech_logo/bootstrap.png';
import fastapiLogo from "./assets/tech_logo/fastapi.png";
import sqliteLogo from "./assets/tech_logo/sqlite.png";
import dockerLogo from "./assets/tech_logo/docker.png";
import kubernetesLogo from "./assets/tech_logo/kubernetes.png";
import awsLogo from "./assets/tech_logo/aws.png";
import railwayLogo from "./assets/tech_logo/railway.png";
import renderLogo from "./assets/tech_logo/render.png";
import githubactionsLogo from "./assets/tech_logo/githubactions.png";
import langchainLogo from "./assets/tech_logo/langchain.png";
import faissLogo from "./assets/tech_logo/faiss.png";
import openaiLogo from "./assets/tech_logo/openai.png";
import claudeLogo from "./assets/tech_logo/claude.png";
import chromadbLogo from "./assets/tech_logo/chromadb.png";
import xgboostLogo from "./assets/tech_logo/xgboost.png";
import sklearnLogo from "./assets/tech_logo/sklearn.png";

import nodejsLogo from './assets/tech_logo/nodejs.png';
import expressjsLogo from './assets/tech_logo/express.png';

import mongodbLogo from './assets/tech_logo/mongodb.png';
import mysqlLogo from './assets/tech_logo/mysql.png';
import firebaseLogo from './assets/tech_logo/firebase.png';
import postgreLogo from './assets/tech_logo/postgre.png';

import cLogo from './assets/tech_logo/c.png';
import cppLogo from './assets/tech_logo/cpp.png';
import pythonLogo from './assets/tech_logo/python.png';

import gitLogo from './assets/tech_logo/git.png';
import githubLogo from './assets/tech_logo/github.png';
import vscodeLogo from './assets/tech_logo/vscode.png';
import postmanLogo from './assets/tech_logo/postman.png';
import figmaLogo from './assets/tech_logo/figma.png';
import vercelLogo from './assets/tech_logo/vercel.png';
import netlifyLogo from './assets/tech_logo/netlify.png';

// ================= PROJECT IMAGES =================
import streetbaseImg from './assets/work_logo/cm.png';
import portfolioImg from './assets/work_logo/portfolio.png';
import retrivoLogo from './assets/work_logo/RETRIVO_.png';
import aiJobAssistantLogo from "./assets/work_logo/ai_job_form_assistant.png";
import cineVibeLogo from "./assets/work_logo/cineVibe.png";

// ================= EXPERIENCE LOGO =================
import infosysLogo from './assets/company_logo/webverse_logo.png';
import hapscaleLogo from './assets/company_logo/hapscale_logo.png';

// ================= EDUCATION LOGO =================
import mmmutLogo from './assets/education_logo/gla_logo.png';
import vpsLogo from './assets/education_logo/vps_logo.png';
import gulabraiLogo from './assets/education_logo/gulab_logo.png';


// ================= HERO =================
export const HERO_CONTENT = {
  name: "Aanshi Gahlot",
  title: "Full Stack Developer & ML Enthusiast",
  subtitle: "I build intelligent web applications using ML and React",
};


// ================= ABOUT =================
export const ABOUT_CONTENT = `
I am a passionate Full Stack Developer with hands-on experience in
building intelligent and scalable web applications. I enjoy working
with modern frontend frameworks like React.js and backend technologies
like Node.js, Express, and FastAPI.

I have practical experience in Machine Learning — from training
TF-IDF models on 40,000+ movie datasets to deploying end-to-end ML
pipelines on cloud platforms. I am always eager to learn new
technologies and solve real-world problems through clean, efficient code.
`;


// ================= SKILLS =================
export const SkillsInfo = [
  {
    title: "Frontend",
    skills: [
      { name: "HTML", logo: htmlLogo },
      { name: "CSS", logo: cssLogo },
      { name: "JavaScript", logo: javascriptLogo },
      { name: "React.js", logo: reactjsLogo },
      { name: "Redux", logo: reduxLogo },
      { name: "Tailwind CSS", logo: tailwindcssLogo },
      { name: "Bootstrap", logo: bootstrapLogo },
    ],
  },

  {
    title: "Backend",
    skills: [
      { name: "Node.js", logo: nodejsLogo },
      { name: "Express.js", logo: expressjsLogo },
      { name: "FastAPI", logo: fastapiLogo },
    ],
  },

  {
    title: "Databases",
    skills: [
      { name: "MongoDB", logo: mongodbLogo },
      { name: "Firebase", logo: firebaseLogo },
      { name: "MySQL", logo: mysqlLogo },
      { name: "PostgreSQL", logo: postgreLogo },
      { name: "SQLite", logo: sqliteLogo },
    ],
  },

  {
    title: "Programming Languages",
    skills: [
      { name: "C", logo: cLogo },
      { name: "C++", logo: cppLogo },
      { name: "Python", logo: pythonLogo },
      { name: "JavaScript", logo: javascriptLogo },
    ],
  },

  {
    title: "AI & Machine Learning",
    skills: [
      { name: "Scikit-Learn", logo: sklearnLogo },
      { name: "XGBoost", logo: xgboostLogo },
      { name: "LangChain", logo: langchainLogo },
      { name: "FAISS", logo: faissLogo },
      { name: "OpenAI API", logo: openaiLogo },
      { name: "Claude AI", logo: claudeLogo },
      { name: "ChromaDB", logo: chromadbLogo },
    ],
  },

  {
    title: "Cloud & DevOps",
    skills: [
      { name: "Docker", logo: dockerLogo },
      { name: "Kubernetes", logo: kubernetesLogo },
      { name: "AWS", logo: awsLogo },
      { name: "Railway", logo: railwayLogo },
      { name: "Render", logo: renderLogo },
      { name: "Vercel", logo: vercelLogo },
      { name: "GitHub Actions", logo: githubactionsLogo },
    ],
  },

  {
    title: "Tools",
    skills: [
      { name: "Git", logo: gitLogo },
      { name: "GitHub", logo: githubLogo },
      { name: "VS Code", logo: vscodeLogo },
      { name: "Postman", logo: postmanLogo },
      { name: "Figma", logo: figmaLogo },
    ],
  },
];


// ================= EXPERIENCE =================
export const experiences = [
  {
    id: 0,
    img: hapscaleLogo,
    role: "Software Engineer Intern",
    company: "HapScale",
    date: "Jan 2025 - Apr 2025",
    desc: "Architected secure RESTful API integrations with middleware-level validation and optimized request/response pipelines. Implemented authentication and authorization flows while delivering full-stack optimizations using React.js, Node.js, Firebase and REST APIs, increasing user engagement by 30%.",
    skills: [
      "React.js",
      "Node.js",
      "Firebase",
      "REST API",
      "Authentication",
      "Express.js",
      "JavaScript",
      "Git",
    ],
  },
  {
    id: 1,
    img: infosysLogo,
    role: "Software Engineering Intern (AI/ML Track)",
    company: "Infosys Springboard",
    date: "Oct 2025 - Dec 2025",
    desc: "Engineered an end-to-end ML pipeline over 50,000+ records and deployed a real-time Streamlit inference application. Improved model accuracy through XGBoost benchmarking while following Git workflows and CI/CD best practices.",
    skills: [
      "Python",
      "XGBoost",
      "Streamlit",
      "Machine Learning",
      "Git",
      "CI/CD",
      "PyTest",
      "Data Processing",
    ],
  },
];

// ================= EDUCATION =================
export const education = [
  {
    id: 0,
    img: mmmutLogo,
    school: "Madan Mohan Malaviya University of Technology",
    date: "2023 – 2027",
    CGPA: "8.39",
    desc: "Pursuing B.Tech in Computer Science and Engineering with a focus on full-stack development and machine learning.",
    degree: "B.Tech – Computer Science and Engineering",
  },
  {
    id: 1,
    img: vpsLogo,
    school: "BasuBaral Saraswati Vihar Senior Secondary School",
    date: "Class XII (CBSE)",
    grade: "82.2%",          // ✅ changed from CGPA to grade
    desc: "Completed Class XII with PCM under CBSE board.",
    degree: "Senior Secondary (PCM)",
  },
  {
    id: 2,
    img: gulabraiLogo,
    school: "Gulabrai Montessori Senior Secondary School",
    date: "Class X (CBSE)",
    grade: "94.2%",          // ✅ changed from CGPA to grade
    desc: "Completed Class X with excellent academic performance.",
    degree: "Secondary School (Class X)",
  },
];


// ================= PROJECTS =================
export const projects = [
  {
    id: 0,
    title: "AI Job Form Assistant",
    description:
      "A production-ready AI-powered Chrome Extension that automatically detects and fills job and internship application forms across platforms like LinkedIn, Workday, Google Forms, Unstop and Greenhouse using semantic AI understanding and self-learning memory powered by ChromaDB and Claude AI.",
    image: aiJobAssistantLogo,
    tags: [
      "React.js",
      "Node.js",
      "MongoDB",
      "ChromaDB",
      "Claude AI",
      "Chrome Extension",
      "Manifest V3",
      "Docker",
    ],
    github: "https://github.com/aanshigahlot1/ai-form-assistant",
    webapp: "",
  },
  {
    id: 1,
    title: "StreetBase – House Price Prediction App",
    description:
      "An end-to-end ML web app that predicts accurate house prices in India with real-time insights, EMI calculator, chatbot, and news integration.",
    image: streetbaseImg,
    tags: ["Python", "Machine Learning", "Streamlit", "End-to-End ML"],
    github: "https://github.com/aanshigahlot1/StreetBase",
    webapp: "https://streetbase-7cklxuyaukme8j2uwxjbi8.streamlit.app/",
  },
  {
    id: 2,
    title: "CineVibe – AI Movie Recommendation System",
    description:
      "A full-stack AI-powered movie recommendation system using TF-IDF vectorization and Cosine Similarity on 40,000+ movies. Built with async FastAPI backend, React.js SPA with custom hooks, and real-time TMDB API integration. Deployed on Render and Vercel with GitHub CI/CD.",
    image: cineVibeLogo,
    tags: [
      "React.js",
      "FastAPI",
      "Python",
      "scikit-learn",
      "TF-IDF",
      "Cosine Similarity",
      "TMDB API",
      "Render",
      "Vercel",
    ],
    github: "https://github.com/aanshigahlot1/CineVibe",
    webapp: "https://cine-vibe-xi.vercel.app",
  },
  {
    id: 3,
    title: "Retrivo – Lost & Found Application",
    description:
      "A modern lost and found web application where users can report lost items, post found items, and connect securely to recover belongings. Built with a clean UI and real-time interactions to improve user experience.",
    image: retrivoLogo,
    tags: [
      "React JS",
      "Tailwind CSS",
      "Firebase",
      "Cloudinary",
      "EmailJS",
    ],
    github: "https://github.com/aanshigahlot1/RETRIVO_",
    webapp: "https://aanshigahlot1.github.io/RETRIVO_/",
  },
  {
    id: 4,
    title: "Personal Portfolio Website",
    description:
      "A responsive personal portfolio built using React.js to showcase skills, projects, experience, and contact details.",
    image: portfolioImg,
    tags: ["React JS", "Bootstrap", "JavaScript"],
    github: "https://github.com/aanshigahlot1/portfolio",
    webapp: "",
  },
];


// ================= CONTACT =================
export const CONTACT = {
  email: "aanshigahlot@gmail.com",
  github: "https://github.com/aanshigahlot1",
  linkedin: "https://www.linkedin.com/in/aanshi-gahlot-752235294",
};