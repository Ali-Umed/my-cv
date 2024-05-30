import {
  AmbitLogo,
  BarepapersLogo,
  BimLogo,
  CDGOLogo,
  ClevertechLogo,
  ConsultlyLogo,
  EvercastLogo,
  Howdy,
  JarockiMeLogo,
  JojoMobileLogo,
  Minimal,
  MobileVikingsLogo,
  MonitoLogo,
  NSNLogo,
  ParabolLogo,
  TastyCloudLogo,
  YearProgressLogo,
} from "@/images/logos";
import { GitHubIcon, LinkedInIcon, XIcon } from "@/components/icons";
import { FacebookIcon } from "lucide-react";

export const RESUME_DATA = {
  name: "Ali Umed",
  initials: "AH",
  location: "Shawaes, Erbil, iraq",
  locationLink:
    "https://www.google.com/maps/place/36%C2%B015'20.2%22N+44%C2%B006'51.4%22E/@36.2556099,44.1142652,17z/data=!3m1!4b1!4m4!3m3!8m2!3d36.2556099!4d44.1142652?entry=ttu",
  about:
    "Software Developer Focused on building intuitive and engaging user interfaces with meticulous attention to detail. Committed to delivering seamless user experiences through clean, efficient, and maintainable code.",
  summary:
    "As a Software Developer, I specialize in bringing ideas to life, leveraging my expertise in a variety of technologies to drive product development from inception to launch. With extensive experience spanning over 4 years, I have crafted robust and intuitive user interfaces using React.js, React Native, and Flutter. Additionally, my proficiency extends to backend technologies such as Node.js, enabling me to build scalable and efficient server-side solutions.",
  avatarUrl: "https://avatars.githubusercontent.com/u/138879096?v=4",
  // personalWebsiteUrl: "https://jarocki.me",
  contact: {
    email: "aliumed844@gmail.com",
    tel: "+9647506911671",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/Ali-Umed",
        icon: GitHubIcon,
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/ali-umed-076854286/",
        icon: LinkedInIcon,
      },
      {
        name: "facebook",
        url: "https://www.facebook.com/ali.umed.376?mibextid=ZbWKwL",
        icon: FacebookIcon,
      },
    ],
  },
  education: [
    {
      school: "Erbil Polytechnic University",
      degree:
        "Graduated from Erbil Polytechnic University with a Bachelor's Degree in Information Systems Engineering (2020-2024), equipped with comprehensive knowledge and practical skills for tackling complex technological challenges.",
      start: "2020",
      end: "2024",
    },
  ],
  work: [
    {
      company: "Gateway",
      link: "https://the-gw.com/",
      badges: ["internship"],
      title: "Frontend Developer",
      start: "July 2023",
      end: "September 2023",
      description:
        "During my tenure as a Frontend Developer at Gateway from July to September 2023, I completed a summer internship at this prestigious web development firm. Collaborating closely with seasoned developers and designers, I contributed to the delivery of top-tier projects. Leveraging advanced technologies such as React.js, TypeScript, Git, GitHub, and Agile methodologies like Scrum, I ensured the successful execution of high-quality web solutions. Explore more about Gateway.",
    },
    {
      company: "Self-Taught Developer",
      badges: [],
      title: "Starter → Full Stack Developer",
      start: "2020",
      link: "",
      description:
        "Embarked on a journey as a Self-Taught Developer in 2020, evolving from a Starter to a proficient Full Stack Developer. Starting with C++ and Java, I mastered the principles of object-oriented programming. Today, I excel in front-end development with React.js and TypeScript, backend development with Node.js, and database management using PostgreSQL. Additionally, I am adept at mobile development with Flutter, showcasing a diverse skill set and a relentless drive for continuous learning and growth.",
    },
    {
      company: "freelancer",
      badges: [],
      title: "frontend Developer",
      start: "2023",
      link: "",
      description:
        "Established a successful career as a freelance Frontend Developer since 2023, specializing in React.js and TypeScript. Known for delivering high-quality web solutions with precision and creativity, I bring a wealth of experience and a proven track record of exceeding client expectations. Committed to staying at the forefront of industry trends and technologies, I continuously strive to elevate my skills and deliver exceptional results.",
    },
  ],
  skills: [
    "Co-Founder",
    "JavaScript",
    "TypeScript",
    "React",
    "React Router",
    "Redux/ Redux Kit",
    "react native",
    "Flutter",
    "Tailwind",
    "Git/GitHub",
    "Teamwork",
    "Sass",
    "Vite",
    "Scrum",
    "Trello",
    "Shadcn",
    "Node.js",
    "Supabase",
    "Firebase",
    "PostgreSQL",
    "mySql",
    "Java",
    "c++",
  ],
  projects: [
    {
      title: "Moon App (مانگ) (Co-Founder)",
      techStack: [
        "App Developer",
        "Flutter",
        "Firebase",
        "Git/Github",
        "UI/UX",
        "Figma",
        "UI/UX Designer",
      ],
      description:
        "The premier Kurdish trivia app featuring Islamic questions and answers, now available on the Google Play Store and coming soon to the App Store.",
      link: {
        label: "مانگ",
        href: "https://play.google.com/store/apps/details?id=com.moon_project.moon_project",
      },
    },
    {
      title: "Weather app",
      techStack: [
        "React",
        "TypeScript",
        "Git/Github",
        "Vite",
        "UI/UX",
        "vercel",
      ],
      description:
        "A fully-featured Weather App developed with React, TypeScript, Supabase, delivering accurate forecasts and sreaching,store data, intuitive user experience.",
      link: {
        label: "weather-app-tawny-zeta-38.vercel.app",
        href: "https://weather-app-tawny-zeta-38.vercel.app/",
      },
    },
    {
      title: "KurdWanderer (Founder)",
      techStack: [
        "React",
        "javaScript",
        "Git/Github",
        "Vite",
        "UI/UX",
        "vercel",
      ],
      description:
        "Developed KurdWanderer, a travel companion app that records your global adventures on an interactive map, ensuring you never forget your memorable journeys and enabling you to share your wanderlust experiences with friends (under construction).",
      link: {
        label: "kurdwanderer.netlify.app",
        href: "https://kurdwanderer.netlify.app/",
      },
    },
    {
      title: "Calculator app",
      techStack: ["React", "Type-Script", "Tailwind", "Git/Github", "Vite"],
      description:
        "A calculator web application It features a responsive design and a customizable theme switcher for light and dark modes and 3 theme for darkMode and 3 theme for light mode.",
      link: {
        label: "calculator-phi-black.vercel.app",
        href: "https://calculator-phi-black.vercel.app/",
      },
    },

    {
      title: "React Quiz game app",
      techStack: ["React", "Type-Script", "Tailwind", "Git/Github", "Vite"],
      description:
        "Now Working a local game, a dynamic React Quiz App designed for interactive learning experiences, featuring engaging quizzes and seamless navigation (under construction).",
      link: {
        label: "quiz-app-self-mu.vercel.app",
        href: "https://quiz-app-self-mu.vercel.app/",
      },
    },
    {
      title: "Moon Backend",
      techStack: [
        "React",
        "Type-Script",
        "Tailwind",
        "Git/Github",
        "Vite",
        "FireBase",
      ],
      description:
        "Developed backend functionality for a website facilitating the addition of books, tests, and questions to the application, alongside implementing user permissions for enhanced security and control.",
      link: {
        label: "moon-backend.vercel.app",
        href: "https://moon-backend.vercel.app/",
      },
    },
    {
      title: "Erbil Center",
      techStack: [
        "Frontend Developer",
        "React",
        "Tailwind",
        "Git/Github",
        "Firebase",
        "Figma",
      ],
      description:
        "The official website for the Erbil Center for Reading and Memorizing the Holy Quran. (under construction)",
    },
    {
      title: "Shopping-list",
      techStack: ["React", "java-Script", "Tailwind", "Git/Github"],
      description:
        "Streamline your shopping experience with an intuitive interface, allowing you to easily add, remove, and organize items—just like managing tasks in a to-do list.",
      link: {
        label: "shoping-list-snowy.vercel.app",
        href: "https://shoping-list-snowy.vercel.app/",
      },
    },
  ],
} as const;
