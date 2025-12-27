// ================= SKILLS SECTION LOGOS =================
import htmlLogo from './assets/tech_logo/html.png';
import cssLogo from './assets/tech_logo/css.png';
import javascriptLogo from './assets/tech_logo/javascript.png';
import reactjsLogo from './assets/tech_logo/reactjs.png';
import reduxLogo from './assets/tech_logo/redux.png';
import tailwindcssLogo from './assets/tech_logo/tailwindcss.png';
import bootstrapLogo from './assets/tech_logo/bootstrap.png';

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
import portfolioImg from './assets/work_logo/web_dig.png';

// ================= EXPERIENCE LOGO =================
import infosysLogo from './assets/company_logo/webverse_logo.png';

// ================= EDUCATION LOGO =================
import mmmutLogo from './assets/education_logo/gla_logo.png';
import vpsLogo from './assets/education_logo/vps_logo.png';
import gulabraiLogo from './assets/education_logo/gulab_logo.png';


// ================= HERO =================
export const HERO_CONTENT = {
  name: "Aanshi Gahlot",
  title: "MERN Stack Developer",
  subtitle: "I build intelligent web applications using ML and React",
};


// ================= ABOUT =================
export const ABOUT_CONTENT = `
I am a passionate MERN Stack Developer with a strong interest in building
intelligent and scalable web applications. I enjoy working with modern
frontend frameworks like React and backend technologies like Node.js and Express.

I also have hands-on exposure to Machine Learning concepts and collaborative
project development. I am always eager to learn new technologies and solve
real-world problems.
`;


// ================= SKILLS =================
export const SkillsInfo = [
  {
    title: 'Frontend',
    skills: [
      { name: 'HTML', logo: htmlLogo },
      { name: 'CSS', logo: cssLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'React JS', logo: reactjsLogo },
      { name: 'Redux', logo: reduxLogo },
      { name: 'Tailwind CSS', logo: tailwindcssLogo },
      { name: 'Bootstrap', logo: bootstrapLogo },
    ],
  },
  {
    title: 'Backend',
    skills: [
      { name: 'Node JS', logo: nodejsLogo },
      { name: 'Express JS', logo: expressjsLogo },
    ],
  },
  {
    title: 'Databases',
    skills: [
      { name: 'MongoDB', logo: mongodbLogo },
      { name: 'MySQL', logo: mysqlLogo },
      { name: 'PostgreSQL', logo: postgreLogo },
      { name: 'Firebase', logo: firebaseLogo },
    ],
  },
  {
    title: 'Programming Languages',
    skills: [
      { name: 'C', logo: cLogo },
      { name: 'C++', logo: cppLogo },
      { name: 'Python', logo: pythonLogo },
      { name: 'JavaScript', logo: javascriptLogo },
    ],
  },
  {
    title: 'Tools',
    skills: [
      { name: 'Git', logo: gitLogo },
      { name: 'GitHub', logo: githubLogo },
      { name: 'VS Code', logo: vscodeLogo },
      { name: 'Postman', logo: postmanLogo },
      { name: 'Figma', logo: figmaLogo },
      { name: 'Vercel', logo: vercelLogo },
      { name: 'Netlify', logo: netlifyLogo },
    ],
  },
];


// ================= EXPERIENCE =================
export const experiences = [
  {
    id: 0,
    img: infosysLogo,
    role: "AI Intern (Virtual Internship 6.0)",
    company: "Infosys Springboard",
    date: "Oct 2025 – Dec 2025",
    desc: "Completed Infosys Virtual Internship Program 6.0. Worked in a collaborative environment and gained hands-on experience in ML-based project development and problem solving.",
    skills: [
      "Machine Learning",
      "Team Collaboration",
      "Problem Solving",
      "Project Development",
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
    grade: "82.2%",
    desc: "Completed Class XII with PCM under CBSE board.",
    degree: "Senior Secondary (PCM)",
  },
  {
    id: 2,
    img: gulabraiLogo,
    school: "Gulabrai Montessori Senior Secondary School",
    date: "Class X (CBSE)",
    grade: "94.2%",
    desc: "Completed Class X with excellent academic performance.",
    degree: "Secondary School (Class X)",
  },
];


// ================= PROJECTS =================
export const projects = [
  {
    id: 0,
    title: "StreetBase – House Price Prediction App",
    description:
      "An end-to-end ML web app that predicts accurate house prices in India with real-time insights, EMI calculator, chatbot, and news integration.",
    image: streetbaseImg,
    tags: ["Python", "Machine Learning", "Streamlit", "End-to-End ML"],
    github: "https://github.com/aanshigahlot1/StreetBase",
    webapp: "https://streetbase-7cklxuyaukme8j2uwxjbi8.streamlit.app/",
  },
  {
    id: 1,
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
