import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const personalData = {
  name: "Aniket Shinde",
  email: "shindeaniketa7328@gmail.com",
  phone: "+91-9819394470",
  github: "github.com/aniket162002",
  linkedin: "linkedin.com/in/aniket-shinde-110018231",
  website: "aniketwebsite.netlify.com",
  
  title: "Full Stack Developer",
  subtitle: "Software Engineer",
  
  summary: "Versatile and enthusiastic software engineer with solid experience in full-stack development, API integration, and machine learning. Proven ability to deliver high-quality solutions in banking and insurance sectors. Adept at collaborating in cross-functional teams, maintaining legacy systems like SMART400, and building Flutter apps with AI integration. Passionate about learning new technologies and once again, Progressing.",
  
  skills: {
    programming: ["JavaScript", "Python", "Java", "C++", "SQL"],
    webFrameworks: ["React.js", "Node.js", "Next.js", "Spring Boot", "HTML", "CSS", "TailwindCSS"],
    mobile: ["Flutter"],
    database: ["MongoDB", "MySQL"],
    tools: ["Git", "GitHub", "Apache Kafka"],
    concepts: ["Machine Learning", "RESTful APIs", "Agile Development"]
  },
  
  experience: [
    {
      company: "SUD Life",
      position: "Software Engineer Trainee",
      duration: "Dec 2024 – Present",
      achievements: [
        "Contributing to enterprise API projects for digital insurance solutions.",
        "Maintaining and enhancing legacy systems based on SMART400 architecture.",
        "Providing support and development for system improvements and debugging."
      ]
    },
    {
      company: "Utkarsh Small Finance Bank",
      position: "Software Engineer",
      duration: "Aug 2024 – Dec 2024",
      achievements: [
        "Managed and optimized IT infrastructure to ensure seamless banking system integration.",
        "Collaborated with cross-functional teams to implement secure and efficient banking solutions."
      ]
    },
    {
      company: "TT Infotech (Freelance)",
      position: "Flutter Developer",
      duration: "Jan 2025",
      achievements: [
        "Developed a full-stack Flutter photo album management app integrated with AI features.",
        "Designed backend using PHP/MySQL, implemented secure image uploads, and user authentication."
      ]
    },
    {
      company: "IDBI Intech Ltd",
      position: "Machine Learning Engineer Intern",
      duration: "Dec 2022 – Jul 2023",
      achievements: [
        "Built ML models for real-world use cases to improve operational efficiency.",
        "Preprocessed large datasets and collaborated with teams for solution deployment."
      ]
    }
  ],
  
  education: [
    {
      institution: "Annasaheb Chudaman Patil College of Engineering, India",
      degree: "B.E. in Information Technology",
      duration: "2020 – 2024",
      grade: "CGPA: 8.9"
    },
    {
      institution: "Kirti College, India",
      degree: "MSSHSE (Class XII)",
      duration: "2019 – 2020",
      grade: "Percentage: 61.4%"
    },
    {
      institution: "Raja Shivaji Vidyalaya, India",
      degree: "MSSHSE (Class X)",
      duration: "2017 – 2018",
      grade: "Percentage: 81.2%"
    }
  ],
  
  projects: [
    {
      title: "Real-Time License Plate Recognition",
      date: "Dec 2023",
      description: "Extracted and recognized plate characters using OpenCV and ML models from live video feed.",
      technologies: ["OpenCV", "Machine Learning", "Python"]
    },
    {
      title: "Anime Club (MERN Stack App)",
      date: "Jun 2023",
      description: "Created a CRUD-enabled anime management site with Node.js and MongoDB. Improved API response time by 40% via backend optimizations.",
      technologies: ["MongoDB", "Express.js", "React.js", "Node.js"]
    },
    {
      title: "Code Sync (Collaboration Tool)",
      date: "Dec 2023",
      description: "Built user login system with collaborative project to functionality.",
      technologies: ["React.js", "Node.js", "WebSocket"]
    }
  ],
  
  certificates: [
    {
      title: "Full Stack Development – Codecademy",
      date: "Dec 2023"
    },
    {
      title: "Cyber Warrior – Hackingflix Academy",
      date: "Dec 2022"
    }
  ],
  
  achievements: [
    {
      title: "Ex NSS Volunteer",
      date: "Dec 2023"
    },
    {
      title: "Ex NCC Cadet",
      date: "Jun 2021"
    }
  ]
}
