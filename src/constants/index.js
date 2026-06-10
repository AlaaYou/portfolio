import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.jpg";
import project5 from "../assets/projects/hmc.jpg";
import project6 from "../assets/projects/mouse1.png";
import project7 from "../assets/projects/result.jpg";
import project8 from "../assets/projects/sign.png";

export const HERO_CONTENT = `I'm a recent Computer Science graduate from the Faculty of Science of Sfax, and currently a Software Engineering student at IIT Sfax, with a focus on AI and Computer Vision. With a strong foundation in full-stack development and artificial intelligence, i have a particular passion for machine learning and computer vision. My goal is to create an impactful AI-powered solutions that solve real-world problems and enhance user experiences.`;

export const ABOUT_TEXT = `Through my studies and hands-on projects, I have transitioned from web development to specialize in artificial intelligence and machine learning. While I initially built a strong foundation with technologies like React, Node.js, MySQL, and PHP, my passion has evolved toward building intelligent systems that solve real-world problems.

I enjoy working on AI projects involving deep learning, computer vision, and natural language processing, using tools such as PyTorch, OpenCV, and MediaPipe. I thrive in collaborative environments where I can tackle complex challenges and continuously improve my models and algorithms. My goal is to develop innovative, user-centered AI applications that enhance lives and drive impactful change.

I am committed to ongoing learning and enjoy contributing to open-source AI projects, exploring cutting-edge research, and applying theory to practical, real time systems`;

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
    technologies: ["React.js", "Laravel", "Tailwind Css", "MySQL"],
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
    title: "Online Drawing Application",
    image: project4,
    description:
      "An interactive web application that allows users to create and download their own drawings.",
    technologies: ["HTML", "CSS", "Java Script"],
  },
  {
    title: "Sign Language Interpreter",
    image: project8,
    description:
      "An intelligent real-time system that translates sign language into both Arabic and English text and speech. Built upon a custom-trained SwinV2-Large Transformer model enhanced with multimodal landmarks analysis to enable seamless communication between sign language users and non-signers.",
    technologies: ["Python", "PyTorch","Transformers", "OpenCV", "MediaPipe", "Multimodal Learning"],
  },
  {
    title: "Gesture Mouse Control",
    image: project6,
    description:
      "A deep learning model trained on mediapipe landmarks of specific hand signs which then will be used to control the mouse of the machine. ",
    technologies: ["Python", "MediaPipe", "OpenCv"],
  },
  {
    title: "Tomato Grade Classifier",
    image: project7,
    description:
      "A research project that studies how multiple deep learning models -like CNN (EfficientNet v2), Transformer (ViT Base 16) and YOLOv8- perform on a locally collected dataset for grading Tomatoes based on their characteristics.",
    technologies: ["Python","YOLOv8", "OpenCv", "Neural Networks", "Transformers"],
  },
  {
    title: "H.M.C: Hand Machine Control",
    image: project5,
    description:
      "An intelligent system that enables users to control machines through hand gestures. Using computer vision to detect hand movements which will be interpreted in real time, then transmitted via serial communication to an ESP32 microcontroller to execute the corresponding commands.",
    technologies: ["Python", "YOLOv8", "OpenCV", "ESP32", "PySerial"],
  },
  
];

export const CONTACT = {
  address: "Home",
  phoneNo: "+216 54 343 337",
  email: "yousfialaa01@gmail.com",
};
