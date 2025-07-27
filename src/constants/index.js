import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.jpg";

export const HERO_CONTENT = `I'm a recent Computer Science graduate from the Faculty of Science of Sfax, specializing in software engineering. With a strong foundation in full-stack development and artificial intelligence, i have a particular interest passion for machine learning and computer vision. My goal is to create an impactful AI-powered solutions that solve real-world problems and enhance user experiences.`;

export const ABOUT_TEXT = `Through my studies and hands-on projects, I have transitioned from web development to specialize in artificial intelligence and machine learning. While I initially built a strong foundation with technologies like React, Node.js, MySQL, and PHP, my passion has evolved toward building intelligent systems that solve real-world problems.

I enjoy working on AI projects involving deep learning, computer vision, and natural language processing, using tools such as PyTorch, OpenCV, and MediaPipe. I thrive in collaborative environments where I can tackle complex challenges and continuously improve my models and algorithms. My goal is to develop innovative, user-centered AI applications that enhance lives and drive impactful change.

I am committed to ongoing learning and enjoy contributing to open-source AI projects, exploring cutting-edge research, and applying theory to practical, real time syste`;

export const EXPERIENCES = [
  {
    year: "February 2025 - June 2025",
    role: "AI Developer Intern",
    company: "Sfax Informatique",
    description: `Developed a prototype for sign language interpretation using a multimodal representation combining a trained SwinV2-Large model and hand landmarks. The system translates signs in real-time into text and audio, facilitating communication for non-verbal individuals.`,
    technologies: ["PyTorch", "OpenCV", "MediaPipe", "Python"]
  },
  {
    year: "August 2024",
    role: "Full Stack Developer Intern",
    company: "Web Vue",
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
      "LaReChat is a real-time messaging platform that offers key features like real-time messaging for both users and groups, files sharing, real time notifications, vocal messages and video/images recording,emojis and a responsive design fully functional on all devices.",
    technologies: ["React.js", "Laravel","TailwindCss","MySql"],
  },
  {
    title: "Weather App",
    image: project2,
    description:
      "A web application that provides real-time weather information for user-defined locations as well as actual timing. ",
    technologies: ["HTML", "CSS", "Java Script",],
  },
  {
    title: "Typing-Test Game",
    image: project3,
    description:
      "A web-based application to assess typing speed and accuracy with accessibility considerations and beep sounds to provide real-time auditory feedback on typing errors.",
    technologies: ["HTML", "CSS", "Java Script"],
  },
  {
    title: "Online Drawing Application",
    image: project4,
    description:
      "An interactive web application that allows users to create and download their own drawings.",
    technologies: ["HTML", "CSS", "Java Script"],
  },
];

export const CONTACT = {
  address: "Home",
  phoneNo: "+216 54 343 337",
  email: "yousfialaa01@gmail.com",
};
