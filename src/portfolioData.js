import htmlLogo from "./assets/tech_logo/html.png";
import cssLogo from "./assets/tech_logo/css.png";
import javascriptLogo from "./assets/tech_logo/javascript.png";
import reactLogo from "./assets/tech_logo/reactjs.png";
import tailwindLogo from "./assets/tech_logo/tailwindcss.png";
import nodeLogo from "./assets/tech_logo/nodejs.png";
import expressLogo from "./assets/tech_logo/express.png";
import mongoLogo from "./assets/tech_logo/mongodb.png";
import mysqlLogo from "./assets/tech_logo/mysql.png";
import javaLogo from "./assets/tech_logo/java.png";
import gitLogo from "./assets/tech_logo/git.png";
import githubLogo from "./assets/tech_logo/github.png";
import vscodeLogo from "./assets/tech_logo/vscode.png";
import postmanLogo from "./assets/tech_logo/postman.png";
import resumePdf from "./assets/Ashutosh_Kumar_Resume_final.pdf";

export const profile = {
  name: "Ashutosh Kumar",
  title: "Full Stack Developer | SDE Enthusiast",
  intro:
    "I am a passionate Full Stack Developer and aspiring Software Development Engineer with strong foundations in Java, Data Structures and Algorithms, and modern web development. I enjoy building scalable, user-friendly applications and solving real-world problems through technology. I have hands-on experience developing full-stack applications using React, Node.js, Express.js, and MongoDB.",
  github: "https://github.com/ashu-coder9540",
  leetcode: "https://leetcode.com/u/Code_With_Ashu954/",
  linkedin: "https://www.linkedin.com/in/ashutosh-datascience/",
  geeksforgeeks: null,
  email: "ashu954008@gmail.com",
  resume: resumePdf,
};

export const skillGroups = [
  {
    title: "Programming languages",
    skills: [
      { name: "Java", logo: javaLogo },
      { name: "JavaScript", logo: javascriptLogo },
      { name: "SQL" },
    ],
  },
  {
    title: "Frontend development",
    skills: [
      { name: "HTML5", logo: htmlLogo },
      { name: "CSS3", logo: cssLogo },
      { name: "React.js", logo: reactLogo },
      { name: "Vite" },
      { name: "Tailwind CSS", logo: tailwindLogo },
      { name: "React Router" },
    ],
  },
  {
    title: "Backend development",
    skills: [
      { name: "Node.js", logo: nodeLogo },
      { name: "Express.js", logo: expressLogo },
      { name: "REST APIs" },
      { name: "JWT authentication" },
    ],
  },
  {
    title: "Database",
    skills: [
      { name: "MongoDB", logo: mongoLogo },
      { name: "Mongoose", logo: mongoLogo },
      { name: "MySQL", logo: mysqlLogo },
    ],
  },
  {
    title: "Tools & platforms",
    skills: [
      { name: "Git", logo: gitLogo },
      { name: "GitHub", logo: githubLogo },
      { name: "Postman", logo: postmanLogo },
      { name: "VS Code", logo: vscodeLogo },
      { name: "Stripe" },
      { name: "Razorpay" },
      { name: "Supabase" },
    ],
  },
];

export const projects = [
  {
    title: "Forever",
    subtitle: "Full Stack E-Commerce Platform",
    category: "MERN stack development",
    description:
      "A full-stack e-commerce platform with a customer storefront and dedicated admin dashboard, covering secure access, catalog management, shopping, and order workflows.",
    highlights: [
      "JWT authentication and role-based access",
      "Product, cart, and order management",
      "Stripe, Razorpay, and Cash on Delivery",
      "Supabase image storage and admin dashboard",
    ],
    technologies: [
      "React.js",
      "Vite",
      "Tailwind CSS",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Mongoose",
      "JWT",
      "Stripe",
      "Razorpay",
      "Supabase",
    ],
    github: "https://github.com/ashu-coder9540/FOREVER_E-COMMERCE",
    live: "https://forever-frontend-rhf06tlcw-ashu-coder9540s-projects.vercel.app/",
    accent: "violet",
    mark: "F.",
  },
  {
    title: "Smart Unified ERP System",
    subtitle: "SIH Hackathon Project",
    category: "Team leader & presenter",
    description:
      "An integrated student management platform designed to automate academic and administrative workflows through a unified ERP ecosystem.",
    highlights: [
      "Role-based student, faculty, admin, and parent dashboards",
      "QR-based attendance and grievance management",
      "AI-powered chatbot and scholarship workflows",
      "Study Buddy and real-time communication",
    ],
    technologies: [
      "React.js",
      "Tailwind CSS",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Socket.IO",
      "Groq LLaMA API",
    ],
    github: "https://github.com/ashu-coder9540/Unified_ERP",
    live: null,
    accent: "blue",
    mark: "ERP",
  },
  {
    title: "Machine Learning Projects",
    subtitle: "Applied machine learning",
    category: "Selected projects",
    description:
      "A collection of learning projects exploring recommendations and prediction with Python's machine learning ecosystem.",
    highlights: [
      "Movie Recommendation System",
      "Titanic Survival Prediction",
      "Heart Stroke Prediction",
    ],
    technologies: ["Python", "Scikit-learn", "Pandas", "NumPy", "Streamlit"],
    github: "https://github.com/ashu-coder9540/dsa-aiml/tree/main/AI_ML",
    live: null,
    accent: "teal",
    mark: "ML",
  },
];

export const achievements = [
  {
    value: "300+",
    label: "LeetCode problems solved",
    icon: "leetcode",
  },
  {
    value: "100+",
    label: "GeeksforGeeks problems solved",
    icon: "gfg",
  },
];

export const badges = [
  "LeetCode 100 Days Badge",
  "LeetCode July Badge",
  "GeeksforGeeks Expert POTD Solver Badge",
  "GFG x NPCI #geekstreak60 Certificate",
  "Competitive programming & daily problem-solving",
  "Smart Unified ERP — Team Leader & Presenter",
];

export const education = {
  degree: "B.Tech — Computer and Data Science (AI & ML)",
  institution: "Maharishi University of Information Technology, Noida",
  status: "7th Semester",
  graduation: "Expected 2027",
};

export const certifications = [
  "Full Stack Web Development — Skillwaala",
  "Fundamentals of Programming — upGrad",
  "Data Structures — upGrad",
  "SQL — upGrad",
  "Machine Learning — upGrad",
  "GFG x NPCI #geekstreak60",
];
