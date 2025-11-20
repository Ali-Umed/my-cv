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
  about: "Software Developer",
  summary:
    "As a Software Developer, I build fast, intuitive applications using React.js, React Native, Flutter, and Next.js, turning ideas into polished digital products.",
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
    // {
    //   company: "Moneta Gift",
    //   badges: [],
    //   title: "Full Stack Developer",
    //   start: "Aug-2024",
    //   link: "https://portal-moneta-gitft.vercel.app/",
    //   description:
    //     "Started my journey as a Full Stack Developer, contributing to the growth of an innovative card-selling platform.\n" +
    //     "Specialize in building dynamic and user-friendly interfaces using React.js.\n" +
    //     "Utilize Firebase for efficient database management, authentication, and real-time features to enhance platform reliability.\n" +
    //     "Leverage Next.js for server-side rendering and optimized performance.\n",
    //   end: "Jan-2025",
    // },
    {
      company: "Self-Taught Developer",
      badges: [],
      title: "Starter → Full Stack Developer",
      start: "2020",
      link: "",
      description:
        "Embarked on a journey as a Self-Taught Developer in 2020,\nAdept at mobile development with Flutter.\nExcel in front-end development using React.js and JavaScript.\nevolving from a Starter to a proficient Full Stack Developer.",
      end: "now",
    },
    {
      company: "Gateway",
      link: "https://the-gw.com/",
      badges: ["internship"],
      title: "Frontend Developer",
      start: "July-2023",
      end: "September 2023",
      description:
        "Completed a summer internship at Gateway, where I collaborated with experienced developers and designers on real client projects. During this internship, I strengthened my skills in React.js, TypeScript, Git, GitHub, and Agile practices such as Scrum.",
    },
    // {
    //   company: "Noon_1968",
    //   badges: [],
    //   title: "Data Entry and WordPress Project Developer",
    //   start: "Nov-2024",
    //   link: "https://www.noon1968.com/",
    //   description:
    //     "Embarked on a professional journey in 2024 as a Data Entry Specialist and WordPress Project Developer.",
    //   end: "Jan-2025",
    // },

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
    "Laravel",
    "JavaScript",
    "TypeScript",
    "Git/GitHub",
    "Java",
    "Linux",
    // "PostgreSQL",
    "MySql",
    // "MongoDb",
    "Redux/ Redux Kit",
    "Teamwork",
    "Tailwind",
    "Sass",
    "Vite",
    "Scrum",
    "Trello",
    // "Shadcn",
    "Node.js",
    "Supabase",
    "Firebase",
    // "c++",
    // "Co-Founder",
  ],
  projects: [
    {
      title: "SawdaPro",
      techStack: [
        "Application Developer",
        "Flutter",
        "Laravel",
        "Server Management",
        "Git/Github",
        "UI/UX",
      ],
      description: "Co-Founder and App Developer",
      link: {
        label: "SawdaPro",
        href: "https://apps.apple.com/us/app/sawda-pro/id6753111992",
      },
    },
    {
      title: "SpectraMindGPT",
      techStack: [
        "Application Developer",
        "Flutter",
        "TeamWork",
        "State-Managment",
        "Git/Github",
      ],
      description: "",
      link: {
        label: "SpectraMindGPT",
        href: "https://apps.apple.com/us/app/spectramindgpt/id6752674301",
      },
    },
    {
      title: "مانگ",
      techStack: [
        "Application Developer",
        "Flutter",
        "Firebase",
        "Git/Github",
        "State-Managment",
        "UI/UX",
        "Figma",
      ],
      description: "Co-Founder and App Developer",
      link: {
        label: "مانگ",
        href: "https://play.google.com/store/apps/details?id=com.moon_project.moon_project",
        // hrefios:
        //   "https://apps.apple.com/us/app/%D9%85%D8%A7%D9%86%DA%AF/id6502869446",
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
      title: "SawdaPro Landing Page",
      techStack: ["React js", "Tailwind", "UI/UX", "Git/Github"],
      description: "Co-Founder and Web Developer",
      link: {
        label: "SawdaPro Landing Page",
        href: "https://sawdapro.netlify.app/",
      },
    },
    {
      title: "Panel Line",
      techStack: ["React js", "Tailwind", "UI/UX", "Git/Github"],
      description: "Under construction.",
      link: {
        label: "Panel Line",
        href: "https://panel-line.netlify.app/",
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
      title: "Weather web application",
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
    // {
    //   title:
    //     "Moneta Gift (Full Stack Developer) (You need access from admin to join)",
    //   techStack: [
    //     "React js",
    //     "Next Js",
    //     "Firebase",
    //     "Server Side",
    //     "Tailwind",
    //     "State-Managment",
    //     "Git/Github",
    //   ],
    //   description: "",
    //   link: {
    //     label: "Moneta Gift",
    //     href: "https://portal-moneta-gitft.vercel.app/",
    //   },
    // },
    // {
    //   title: "KurdWanderer (under construction)",
    //   techStack: [
    //     "React",
    //     "java-Script",
    //     "Git/Github",
    //     "State-Managment",
    //     "Vite",
    //     "UI/UX",
    //     "vercel",
    //   ],
    //   description: "under construction.",
    //   link: {
    //     label: "kurdwanderer.netlify.app",
    //     href: "https://kurdwanderer.netlify.app/",
    //   },
    // },
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
    // {
    //   title: "Moon Backend (You need access to login )",
    //   techStack: [
    //     "React",
    //     "Type-Script",
    //     "Tailwind",
    //     "Git/Github",
    //     "Vite",
    //     "FireBase",
    //   ],
    //   description: "",
    //   link: {
    //     label: "moon-backend.vercel.app",
    //     href: "https://moon-backend.vercel.app/",
    //   },
    // },
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
