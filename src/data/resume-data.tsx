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
    "Software Developer Focused on building intuitive and engaging user interfaces.",
  summary:
    "As a Software Developer, I specialize in bringing ideas to life, With extensive experience spanning over 5 years, I have crafted robust and intuitive user interfaces using React.js, React Native, Flutter and Next Js for server side rendering.",
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
        "Graduated from Erbil Polytechnic University with a Bachelor's Degree in (ISE)Information Systems Engineering (2020-2024).",
      start: "2020",
      end: "2024",
    },
  ],
  work: [
    {
      company: "Moneta Gift",
      badges: [],
      title: "Full Stack Developer",
      start: "Aug-2024",
      link: "https://portal-moneta-gitft.vercel.app/",
      description:
        "Started my journey as a Full Stack Developer, contributing to the growth of an innovative card-selling platform.\n" +
        "Specialize in building dynamic and user-friendly interfaces using React.js.\n" +
        "Utilize Firebase for efficient database management, authentication, and real-time features to enhance platform reliability.\n" +
        "Leverage Next.js for server-side rendering and optimized performance.\n",
      end: "Jan-2025",
    },
    {
      company: "Gateway",
      link: "https://the-gw.com/",
      badges: ["internship"],
      title: "Frontend Developer",
      start: "July-2023",
      end: "September 2023",
      description:
        "Completed a summer internship at Gateway, a prestigious web development firm.\nCollaborated closely with seasoned developers and designers to deliver top-tier projects.\nUtilized advanced technologies including React.js, TypeScript, Git, GitHub, and Agile methodologies such as Scrum.",
    },
    {
      company: "Noon_1968",
      badges: [],
      title: "Data Entry",
      start: "Nov-2024",
      link: "",
      // link: "https://www.noon1968.com/",
      description:
        "Embarked on a professional journey as a Data Entry Specialist in 2024.",
      end: "Jan-2025",
    },
    {
      company: "Self-Taught Developer",
      badges: [],
      title: "Starter → Full Stack Developer",
      start: "2020",
      link: "",
      description:
        "Embarked on a journey as a Self-Taught Developer in 2020,\nevolving from a Starter to a proficient Full Stack Developer.\nMastered the principles of object-oriented programming with C++ and Java.\nExcel in front-end development using React.js and JavaScript.\nAdept at mobile development with Flutter.",
      end: "now",
    },
    // {
    //   company: "freelancer",
    //   badges: [],
    //   title: "Frontend Developer,Mobile Seveloper",
    //   start: "2023",
    //   link: "",
    //   description:
    //     "Established a successful career as a freelance Frontend Developer since 2023, specializing in Next js, React.js and JavaScript,Flutter.\n" +
    //     "Known for delivering high-quality web solutions with precision and creativity.\n" +
    //     "Committed to staying at the forefront of industry trends and technologies.\n",
    //   end: "now",
    // },
  ],
  skills: [
    "Next Js",
    "React",
    "react native",
    "Flutter",
    "JavaScript",
    "TypeScript",
    "Git/GitHub",
    "Java",
    "Linux",
    "PostgreSQL",
    "MySql",
    "MongoDb",
    "Redux/ Redux Kit",
    "Teamwork",
    "Tailwind",
    "Sass",
    "Vite",
    "Scrum",
    "Trello",
    "Shadcn",
    "Node.js",
    "Supabase",
    "Firebase",
    "c++",
    "Co-Founder",
  ],
  projects: [
    {
      title: "Moon App(مانگ) (Co-Founder)",
      techStack: [
        "App Developer",
        "Flutter",
        "Firebase",
        "Git/Github",
        "State-Managment",
        "UI/UX",
        "Figma",
      ],
      description: "",
      link: {
        label: "مانگ",
        href: "https://play.google.com/store/apps/details?id=com.moon_project.moon_project",
      },
    },
    {
      title: "Nilnuts",
      techStack: ["React js", "Tailwind", "Saas", "Git/Github"],
      description: "",
      link: {
        label: "Nilnuts",
        href: "https://nilnuts.com/",
      },
    },

    {
      title: "Flutter Quote Generator App",
      techStack: [
        "App Developer",
        "Flutter",
        "State-Managment",
        "UI/UX",
        "Git/Github",
      ],
      description: "",
      link: {
        label: "Quote",
        href: "https://ali-umed.netlify.app/posts/quote/",
      },
    },

    {
      title: "Change life travel",
      techStack: ["Html", "css", "javaScript", "git-github"],
      description: "",
      link: {
        label: "Change life travel",
        href: "https://cl-travels.com/",
      },
    },

    {
      title: "Noon-1938",
      techStack: [
        "Data Entry",
        "Wordpress",
        "Woocommerce",
        "Elementor",
        "WooCommerce Payment Gateways",
      ],
      description: "",
      link: {
        label: "weather-app-tawny-zeta-38.vercel.app",
        href: "https://www.noon1968.com/",
      },
    },
    {
      title: "Weather app",
      techStack: [
        "React",
        "TypeScript",
        "Git/Github",
        "State-Managment",
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
      title: "React quiz app",
      techStack: ["React", "Git/Github", "State-Managment", "UI/UX"],
      description: "",
      link: {
        label: "Quiz App",
        href: "https://quiz-app-self-mu.vercel.app/",
      },
    },

    {
      title: "Fast Order",
      techStack: [
        "React",
        "JavaScript",
        "redux",
        "react-router",
        "Git/Github",
        "Vite",
        "UI/UX",
        "vercel",
      ],
      description: "",
      link: {
        label: "https://main--fast-order1.netlify.app/",
        href: "https://main--fast-order1.netlify.app/",
      },
    },
    {
      title:
        "Moneta Gift (Full Stack Developer) (You need access from admin to join)",
      techStack: [
        "React js",
        "Next Js",
        "Firebase",
        "Server Side",
        "Tailwind",
        "State-Managment",
        "Git/Github",
      ],
      description: "",
      link: {
        label: "Moneta Gift",
        href: "https://portal-moneta-gitft.vercel.app/",
      },
    },
    {
      title: "KurdWanderer (under construction)",
      techStack: [
        "React",
        "java-Script",
        "Git/Github",
        "State-Managment",
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
      title: "Calculator app",
      techStack: [
        "React",
        "Type-Script",
        "Tailwind",
        "Git/Github",
        "State-Managment",
        "Vite",
      ],
      description: "",
      link: {
        label: "calculator-phi-black.vercel.app",
        href: "https://calculator-phi-black.vercel.app/",
      },
    },
    // {
    //   title: "React Quiz app (game)",
    //   techStack: [
    //     "React",
    //     "Type-Script",
    //     "State-Managment",
    //     "Tailwind",
    //     "Git/Github",
    //     "Vite",
    //   ],
    //   description: "under construction.",
    //   link: {
    //     label: "quiz-app-self-mu.vercel.app",
    //     href: "https://quiz-app-self-mu.vercel.app/",
    //   },
    // },
    {
      title: "Moon Backend (You need access to login )",
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
    // {
    //   title: "Erbil Center",
    //   techStack: [
    //     "Frontend Developer",
    //     "React",
    //     "Tailwind",
    //     "Git/Github",
    //     "State-Managment",
    //     "Firebase",
    //     "Figma",
    //   ],
    //   description: "",
    //   link: {
    //     label: "/",
    //     href: "/",
    //   },
    // },
    // {
    //   title: "Shopping-list",
    //   techStack: [
    //     "React",
    //     "java-Script",
    //     "Tailwind",
    //     "Git/Github",
    //     "State-Managment",
    //   ],
    //   description: "",
    //   link: {
    //     label: "shoping-list-snowy.vercel.app",
    //     href: "https://shoping-list-snowy.vercel.app/",
    //   },
    // },
  ],
} as const;
