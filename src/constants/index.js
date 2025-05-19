import project1 from "../assets/projects/project-1.webp";
import project2 from "../assets/projects/project-2.webp";
import project3 from "../assets/projects/project-3.webp";

export const HERO_CONTENT = `I am a passionate front end developer with a knack for crafting professional and scalable web applications. With 2 years of hands-on experience, I have honed my skills in front-end technologies like React and Next.js, as well as back-end technologies like Node.js, MySQL, PostgreSQL, and MongoDB. My goal is to leverage my expertise to create innovative solutions that drive business growth and deliver exceptional user experiences.`;

export const ABOUT_TEXT = `I am a dedicated and versatile full stack developer with a passion for creating efficient and user-friendly web applications. With 5 years of professional experience, I have worked with a variety of technologies, including React, Next.js, Node.js, MySQL, PostgreSQL, and MongoDB. My journey in web development began with a deep curiosity for how things work, and it has evolved into a career where I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I enjoy staying active, exploring new technologies, and contributing to open-source projects.`;

export const EXPERIENCES = [
  {
    year: "2023 - Present",
    role: "Frontend Developer (Trainee)",
    company: "Personal Projects",
    description: `Worked on several personal projects to build and strengthen frontend development skills. Focused on creating responsive web interfaces using JavaScript and React.js. Practiced implementing components, routing with Next.js, and connecting simple apps to MongoDB. Gained hands-on experience with version control, UI design, and basic RESTful API integration.`,
    technologies: ["JavaScript", "React.js", "Next.js", "MongoDB"],
  },
];

export const PROJECTS = [
  {
    title: "Shopping Cart Website",
    image: project1,
    description:
      "A functional shopping cart basic website, with basic CRUD, with features like product listing, shopping cart, user authentication.",
    technologies: ["HTML", "CSS", "React", "JavaScript", "firebase", "TypeScript"],
    github: "https://github.com/fafrgZ/shopping-cart",
  },
  {
    title: "Task Management App",
    image: project2,
    description:
      "An application for managing tasks and projects, with features such as task creation, assignment, and progress tracking.",
    technologies: ["HTML", "CSS", "React", "JavaScript"],
    github: "https://github.com/fafrgZ/Todo-list-app",
  },
  {
    title: "Portfolio Website",
    image: project3,
    description:
      "A personal portfolio website showcasing projects, skills, and contact information.",
    technologies: ["HTML", "CSS", "React", "Tailwind"],
    github: "https://github.com/fafrgZ/portfolio-react",
  },
];

export const CONTACT = {
  email: "faridfragozo@gmail.com",
};
