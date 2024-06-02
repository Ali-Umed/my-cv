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
  personalWebsiteUrl: "/",
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
        "Completed a summer internship at Gateway, a prestigious web development firm.\nCollaborated closely with seasoned developers and designers to deliver top-tier projects.\nUtilized advanced technologies including React.js, TypeScript, Git, GitHub, and Agile methodologies such as Scrum.\nEnsured the successful execution of high-quality web solutions.\nGained practical experience in developing responsive and user-friendly web interfaces.\nEnhanced problem-solving skills by working on real-world projects and receiving mentorship from industry experts.",
    },
    {
      company: "Self-Taught Developer",
      badges: [],
      title: "Starter → Full Stack Developer",
      start: "2020",
      link: "",
      description:
        "Embarked on a journey as a Self-Taught Developer in 2020,\nevolving from a Starter to a proficient Full Stack Developer.\nMastered the principles of object-oriented programming with C++ and Java.\nExcel in front-end development using React.js and TypeScript.\nProficient in backend development with Node.js.\nSkilled in database management using PostgreSQL.\nAdept at mobile development with Flutter.\nShowcase a diverse skill set and a relentless drive for continuous learning and growth.",
      end: "",
    },
    {
      company: "freelancer",
      badges: [],
      title: "Frontend Developer",
      start: "2023",
      link: "",
      description:
        "Established a successful career as a freelance Frontend Developer since 2023, specializing in React.js and TypeScript.\n" +
        "Known for delivering high-quality web solutions with precision and creativity.\n" +
        "bring a wealth of experience and a proven track record of exceeding client expectations.\n" +
        "Committed to staying at the forefront of industry trends and technologies.\n" +
        "Continuously strive to elevate  skills and deliver exceptional results.",
      end: "",
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
      title: "Moon App(مانگ) (Co-Founder)",
      techStack: [
        "App Developer",
        "Flutter",
        "Firebase",
        "Git/Github",
        "UI/UX",
        "Figma",
        "UI/UX Designer",
      ],
      description: "",
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
      description: "",
      link: {
        label: "weather-app-tawny-zeta-38.vercel.app",
        href: "https://weather-app-tawny-zeta-38.vercel.app/",
      },
    },
    {
      title: "Blog-Posts",
      techStack: [
        "React",
        "JavaScript",
        "State-Managment",
        "Git/Github",
        "UI/UX",
        "Vercel",
        "Sss",
      ],
      description: "",
      link: {
        label: "post-blogs.netlify.app",
        href: "https://post-blogs.netlify.app/",
      },
    },
    {
      title: "KurdWanderer (Founder)",
      techStack: [
        "React",
        "java-Script",
        "Git/Github",
        "Vite",
        "UI/UX",
        "vercel",
      ],
      description: "under construction.",
      link: {
        label: "kurdwanderer.netlify.app",
        href: "https://kurdwanderer.netlify.app/",
      },
    },
    {
      title: "Calculator app",
      techStack: ["React", "Type-Script", "Tailwind", "Git/Github", "Vite"],
      description: "",
      link: {
        label: "calculator-phi-black.vercel.app",
        href: "https://calculator-phi-black.vercel.app/",
      },
    },

    {
      title: "React Quiz app (game)",
      techStack: ["React", "Type-Script", "Tailwind", "Git/Github", "Vite"],
      description: "under construction.",
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
      description: "",
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
      description: "",
      link: {
        label: "/",
        href: "/",
      },
    },
    {
      title: "Shopping-list",
      techStack: ["React", "java-Script", "Tailwind", "Git/Github"],
      description: "",
      link: {
        label: "shoping-list-snowy.vercel.app",
        href: "https://shoping-list-snowy.vercel.app/",
      },
    },
  ],
} as const;
