import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.jpg";

export const HERO_CONTENT = `I'm an enthusiastic third-year computer science student in Faculty of Science Sfax with a passion for full-stack development and a deep interest in AI and machine learning. With experience in React, Node.js, Laravel, and the MERN stack, I enjoy building dynamic,scalable web applications and constantly exploring new technologies. My goal is to combine my development skills with AI and ML to create impactful solutions that enhance user experiences and drive innovation.`;

export const ABOUT_TEXT = `Through my studies and hands-on projects, I’ve gained experience with technologies like React, Node.js, MySQL, and PHP. My curiosity about how websites function sparked my passion for web development, driving me to constantly learn and tackle new challenges. I enjoy collaborating in team settings, solving complex problems, and writing clean, maintainable code.
I am particularly interested in real-time communication, responsive design, and application performance optimization. Additionally, I am eager to expand my knowledge in both front-end and back-end development, as well as AI and machine learning, to create smarter, user-centered applications. I actively explore new technologies and contribute to open-source projects, driven by the goal of making a meaningful impact through my work.`;

export const EXPERIENCES = [
  {
    year: "August 2024",
    role: "Full Stack Developer",
    company: "Web Vue.",
    description: ` Developed a full stack chat web application based on real time messaging using React.js,Tailwind CSS and Laravel. Implemented responsive designs and optimized frontend performance.`,
    technologies: ["React.js", "Laravel", "TailwindCss", "MySql"],
  },
  /*{
    year: "2022 - 2023",
    role: "Frontend Developer",
    company: "Adobe",
    description: `Designed and developed user interfaces for web applications using Next.js and React. Worked closely with backend developers to integrate frontend components with Node.js APIs. Implemented responsive designs and optimized frontend performance.`,
    technologies: ["HTML", "CSS", "Vue.js", "mySQL"],
  },
  {
    year: "2021 - 2022",
    role: "Full Stack Developer",
    company: "Facebook",
    description: `Developed and maintained web applications using JavaScript, React.js, and Node.js. Designed and implemented RESTful APIs for data communication. Collaborated with cross-functional teams to deliver high-quality software products on schedule.`,
    technologies: ["Python", "Svelte", "Three.js", "Postgres"],
  },
  {
    year: "2020 - 2021",
    role: "Software Engineer",
    company: "Paypal",
    description: `Contributed to the development of web applications using JavaScript, React.js, and Node.js. Managed databases and implemented data storage solutions using MongoDB. Worked closely with product managers to prioritize features and enhancements.`,
    technologies: ["Ruby", "Rails", "PHP", "Sqlite"],
  },*/
];

export const PROJECTS = [
  {
    title: "LaReChat Web Application",
    image: project1,
    description:
      "LaReChat is a real-time messaging platform that offers key features like real-time messaging for both users and groups, file sharing (including images, videos, audio, and PDFs), audio and video recording, and a responsive design fully functional on all devices.",
    technologies: ["React.js", "Laravel","Tailwind Css","MySql"],
  },
  {
    title: "Task Management App",
    image: project2,
    description:
      "An application for managing tasks and projects, with features such as task creation, assignment, and progress tracking.",
    technologies: ["HTML", "CSS", "Angular", "Firebase"],
  },
  {
    title: "Portfolio Website",
    image: project3,
    description:
      "A personal portfolio website showcasing projects, skills, and contact information.",
    technologies: ["HTML", "CSS", "React", "Bootstrap"],
  },
  {
    title: "Blogging Platform",
    image: project4,
    description:
      "A platform for creating and publishing blog posts, with features like rich text editing, commenting, and user profiles.",
    technologies: ["HTML", "CSS", "Vue.js", "Express", "mySQL"],
  },
];

export const CONTACT = {
  address: "767 Fifth Avenue, New York, NY 10153 ",
  phoneNo: "+12 4555 666 00 ",
  email: "me@example.com",
};
