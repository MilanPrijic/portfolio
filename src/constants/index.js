import {
  mobile,
  creator,
  web,
  devflow,
  promptopia,
  mockinterview,
  gpt3,
  restaurant,
  JudgmentDay,
  Muhrir,
  ToonTanks,
  AppleLogoBanner,
  divertDesignLogo,
  digitalShareLogo,
  globalItFactoryLogo,
  learnUponLogo,
  htecLogo,
  MilosAntonijevicPhoto,
  ProfileImagePlaceholder,
  BrankoIlicPhoto,
  moneysoft,
  myfortress,
  learnupon,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "testimonials",
    title: "Testimonials",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "iOS Developer",
    icon: mobile,
  },
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Game Developer",
    icon: creator,
  },
];

const experiences = [
  {
    title: "iOS Developer",
    company_name: "Divert Design",
    icon: divertDesignLogo,
    iconBg: "#383E56",
    date: "Dec 2015 - Feb 2016",
    points: [
      "Developing and maintaining ios application using Swift and Objective-C and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing new, and updating old features with coordination with designers.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "iOS Developer",
    company_name: "Digital Share d.o.o.",
    icon: digitalShareLogo,
    iconBg: "#fff",
    date: "Feb 2016 - Apr 2017",
    points: [
      "Developing, maintaining and shipping iOS applications from the ground up using mainly Swift and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, android" +
        " and junior iOS developers to create high-quality products.",
      "Collaborated closely with designers from the early planning and wire-framing stages through to implementation of new features.",
      "Participating in code reviews and providing constructive feedback to other developers.",
      "Frequently engaged in direct communication with clients, discussing product direction, feature prioritization, and implementation timelines.",
    ],
  },
  {
    title: "iOS Developer",
    company_name: "Global IT Factory",
    icon: globalItFactoryLogo,
    iconBg: "#fff",
    date: "Aug 2017 - Aug 2018",
    points: [
      "Developing, maintaining and shipping iOS applications using Swift, Objective-C and other related technologies.",
      "Collaborated with Australian and Serbian companies, delivering tailored mobile applications for different industries.",
      "Collaborating with cross-functional teams including designers, product managers, android" +
        " and junior iOS developers to create high-quality products.",
      "Collaborated closely with designers from the early planning and wire-framing stages through to implementation of new features.",
      "Participating in code reviews and providing constructive feedback to other developers.",
      "Frequently engaged in direct communication with clients, discussing product direction, feature prioritization, and implementation timelines.",
      "Demonstrated flexibility by adjusting to time zone challenges, often meeting with clients early in the morning to ensure smooth communication.",
    ],
  },
  {
    title: "iOS Developer",
    company_name: "LearnUpon",
    icon: learnUponLogo,
    iconBg: "#E6DEDD",
    date: "Oct 2018 - Apr 2022",
    points: [
      "Developing, maintaining and publishing iOS application using Swift and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, android" +
        " and back-end developers to create high-quality product.",
      "Collaborated closely with designers from the early planning and wire-framing stages through to implementation of new features.",
      "Participating in code reviews and providing constructive feedback to other developers.",
      "Frequently engaged in direct communication with clients, discussing product direction, feature prioritization, and implementation timelines.",
      "Gained hands-on experience working in Agile and Scrum environments, quickly adapting to evolving team structures and frequent organizational changes.",
    ],
  },
  {
    title: "iOS Developer",
    company_name: "HTEC",
    icon: htecLogo,
    iconBg: "#E6DEDD",
    date: "Apr 2022 - Present",
    points: [
      "Developing and maintaining macOS, iOS and web applications using Swift, React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Acquired valuable experience collaborating with enterprise clients and contributing to the development of their internal tools and platforms.",
      "Participating in code reviews and providing constructive feedback to other developers.",
      "Engineered custom solutions that extended beyond typical iOS/React scopes, applying non-standard architectures and creative problem-solving.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "Contribution to building our mobile app from the ground up is invaluable and the great job Milan did will serve as a base for any future improvements. Milan, thank you for all the great work you did and being a great colleague!",
    name: "Milos Antonijevic",
    designation: "Engineering & Delivery Manager",
    company: "LearnUpon",
    image: MilosAntonijevicPhoto,
    linkedIn: "https://www.linkedin.com/in/milo%C5%A1-antonijevi%C4%87/",
  },
  {
    testimonial:
      "Working with Milan has been a great experience—he’s reliable, collaborative, and adds value wherever he contributes. I’m confident he’ll continue to excel and would be glad to work with him again in the future.",
    name: "Dusan Savic",
    designation: "Lead Frontend Developer",
    company: "Digital Share d.o.o.",
    image: ProfileImagePlaceholder,
    linkedIn: "https://www.linkedin.com/in/dusan-savic-658ab263/",
  },
  {
    testimonial:
      "I've had the pleasure of working with Milan on several projects over the years, and he’s consistently delivered high-quality frontend and mobile solutions. His technical skills, attention to detail, and strong sense for user experience make him a standout developer. ",
    name: "Branko Ilic",
    designation: "Director of Back End Engineering",
    company: "Digital Share d.o.o.",
    image: BrankoIlicPhoto,
    linkedIn: "https://www.linkedin.com/in/branko-ilic-01a87b112/",
  },
];

const technologies = [
  {
    name: "all",
    correspondingValues: [],
  },
  {
    name: "mobile",
    correspondingValues: ["reactnative", "swift", "objectivec", "swiftui"],
  },
  {
    name: "swift",
    correspondingValues: ["swift", "swiftui"],
  },
  {
    name: "Swift UI",
    correspondingValues: ["swiftui"],
  },
  {
    name: "Objective-C",
    correspondingValues: ["objectivec"],
  },
  {
    name: "React Native",
    correspondingValues: ["reactnative"],
  },
  {
    name: "Expo Go",
    correspondingValues: ["expogo"],
  },
  {
    name: "maps",
    correspondingValues: ["googlemaps", "applemaps"],
  },
  {
    name: "payments",
    correspondingValues: ["stripe"],
  },
  {
    name: "web",
    correspondingValues: [
      "react",
      "node",
      "mongodb",
      "css",
      "html",
      "tailwind",
      "javascript",
      "typescript",
      "nextjs",
      "postgresql",
    ],
  },
  {
    name: "react",
    correspondingValues: ["react", "reactjs", "reactnative"],
  },
  {
    name: "nextJS",
    correspondingValues: ["nextjs"],
  },
  {
    name: "node",
    correspondingValues: ["node", "nodejs"],
  },
  {
    name: "html",
    correspondingValues: ["html"],
  },
  {
    name: "css",
    correspondingValues: ["css", "scss", "tailwind", "bootstrap"],
  },
  {
    name: "tailwind",
    correspondingValues: ["tailwind"],
  },
  {
    name: "javascript",
    correspondingValues: ["javascript"],
  },
  {
    name: "typescript",
    correspondingValues: ["typescript"],
  },
  {
    name: "mongoDB",
    correspondingValues: ["mongodb", "mongoose"],
  },
  {
    name: "postgreSQL",
    correspondingValues: ["postgresql"],
  },
  {
    name: "firebase",
    correspondingValues: ["firebase", "firestore", "firebase authentication"],
  },
  {
    name: "game",
    correspondingValues: [
      "unrealengine5",
      "c++",
      "lumen",
      "nanite",
      "pcg",
      "multiplayer",
    ],
  },
  {
    name: "Unreal Engine 5",
    correspondingValues: ["unrealengine5"],
  },
  {
    name: "C++",
    correspondingValues: ["c++"],
  },
  {
    name: "lumen",
    correspondingValues: ["lumen"],
  },
  {
    name: "nanite",
    correspondingValues: ["nanite"],
  },
  {
    name: "AI",
    correspondingValues: ["ai"],
  },
  {
    name: "PCG",
    correspondingValues: ["pcg"],
  },
  {
    name: "multiplayer",
    correspondingValues: ["multiplayer"],
  },
];

const projects = [
  {
    name: "DevFlow",
    description:
      "DevFlow is a web-based platform similar to StackOverflow that allows users to ask questions, provide answers, and engage in discussions related to software development (or any other subject).",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "nextjs",
        color: "green-text-gradient",
      },
      {
        name: "typescript",
        color: "pink-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
      {
        name: "ai",
        color: "green-text-gradient",
      },
      {
        name: "html",
        color: "green-text-gradient",
      },
    ],
    image: devflow,
    source_code_link: "https://github.com/MilanPrijic/devflow",
    deployed_link: "https://devflow-snowy.vercel.app/",
  },
  {
    name: "Ryde",
    description:
      "Ryde is a React Native mobile application that enables users to book rides, track drivers in real-time, and make secure payments, providing a seamless and convenient transportation experience.",
    tags: [
      {
        name: "reactnative",
        color: "blue-text-gradient",
      },
      {
        name: "expogo",
        color: "green-text-gradient",
      },
      {
        name: "nativewind",
        color: "pink-text-gradient",
      },
      {
        name: "googlemaps",
        color: "green-text-gradient",
      },
      {
        name: "stripe",
        color: "pink-text-gradient",
      },
      {
        name: "postgresql",
        color: "green-text-gradient",
      },
    ],
    image: AppleLogoBanner,
    source_code_link: "https://github.com/MilanPrijic/ryde",
  },
  {
    name: "JudgmentDay",
    description:
      "Judgment Day is a 3D game developed using Unreal Engine 5 and C++ where players navigate through a remote planet military base, battling enemies and completing missions to survive and thrive in a hostile environment.",
    tags: [
      {
        name: "unrealengine5",
        color: "blue-text-gradient",
      },
      {
        name: "c++",
        color: "green-text-gradient",
      },
      {
        name: "lumen",
        color: "pink-text-gradient",
      },
      {
        name: "nanite",
        color: "pink-text-gradient",
      },
      {
        name: "ai",
        color: "green-text-gradient",
      },
    ],
    image: JudgmentDay,
    source_code_link: "https://github.com/MilanPrijic/JudgmentDay",
  },
  {
    name: "LearnUpon",
    description:
      "Native iOS application built in Swift. LearnUpon is an e-learning platform that enables users to access a wide range of courses, track their progress, and enhance their skills through interactive learning experiences. It is available for LearnUpon clients only!",
    tags: [
      {
        name: "swift",
        color: "blue-text-gradient",
      },
      {
        name: "firebase",
        color: "green-text-gradient",
      },
    ],
    image: learnupon,
    source_code_link:
      "https://apps.apple.com/us/app/learnupon/id947445473?platform=iphone",
  },
  {
    name: "Moneysoft",
    description:
      "Native iOS application built in Swift and Objective-C. Moneysoft is secure, safe and practical financial management app. ",
    tags: [
      {
        name: "swift",
        color: "blue-text-gradient",
      },
      {
        name: "objectivec",
        color: "green-text-gradient",
      },
      {
        name: "firebase",
        color: "green-text-gradient",
      },
      {
        name: "payments",
        color: "pink-text-gradient",
      },
    ],
    image: moneysoft,
    source_code_link:
      "https://apps.apple.com/au/app/moneysoft/id999070736?platform=iphone",
  },
  {
    name: "My Fortress",
    description:
      "Native iOS application built in Swift and Objective-C. My Fortress is an Australian Financial Services License. This app is available for My Fortress clients only. ",
    tags: [
      {
        name: "swift",
        color: "blue-text-gradient",
      },
      {
        name: "objectivec",
        color: "green-text-gradient",
      },
      {
        name: "payments",
        color: "pink-text-gradient",
      },
    ],
    image: myfortress,
    source_code_link: "https://apps.apple.com/au/app/my-fortress/id1539595386",
  },
  {
    name: "3MD CDL Prep",
    description:
      "Native iOS application built in Swift. 3MD CDL Prep is application used for drivers and their preparation for CDL exams. ",
    tags: [
      {
        name: "swift",
        color: "blue-text-gradient",
      },
    ],
    image: AppleLogoBanner,
    source_code_link: "https://apps.apple.com/au/app/my-fortress/id1539595386",
  },
  {
    name: "Promptopia",
    description:
      "Web-based platform that allows users to save their most useful AI prompts that they use daily.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "nextjs",
        color: "green-text-gradient",
      },
      {
        name: "javascript",
        color: "pink-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
      {
        name: "html",
        color: "green-text-gradient",
      },
    ],
    image: promptopia,
    source_code_link: "https://github.com/MilanPrijic/promptopia",
    deployed_link: "https://promptopia-pi-six.vercel.app/",
  },
  {
    name: "Mock Interview",
    description:
      "Web application that enables users create any interviews by providing AI agent with instructions. They can then take interviews and practice their skills.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "nextjs",
        color: "green-text-gradient",
      },
      {
        name: "typescript",
        color: "pink-text-gradient",
      },
      {
        name: "firebase",
        color: "green-text-gradient",
      },
      {
        name: "firestore",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
      {
        name: "html",
        color: "green-text-gradient",
      },
    ],
    image: mockinterview,
    source_code_link: "https://github.com/MilanPrijic/MockInterview/tree/main",
    deployed_link: "https://mock-interview-e5lj.vercel.app/",
  },
  {
    name: "Restaurant",
    description: "Website presentation template for any restaurant.",
    tags: [
      {
        name: "html",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "green-text-gradient",
      },
    ],
    image: restaurant,
    source_code_link: "https://github.com/MilanPrijic/restaurant",
  },
  {
    name: "GPT-3",
    description: "AI-themed presentation website template.",
    tags: [
      {
        name: "html",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "green-text-gradient",
      },
    ],
    image: gpt3,
    source_code_link: "https://github.com/MilanPrijic/gpt-3",
  },
  {
    name: "World of ToonTanks",
    description:
      "World of ToonTanks is a 3D Unreal Engine 5 game that lets the user play with a tank while avoiding and destroying enemies. Only there's lot more of them then you...",
    tags: [
      {
        name: "unrealengine5",
        color: "blue-text-gradient",
      },
      {
        name: "c++",
        color: "green-text-gradient",
      },
      {
        name: "lumen",
        color: "pink-text-gradient",
      },
      {
        name: "nanite",
        color: "pink-text-gradient",
      },
      {
        name: "ai",
        color: "green-text-gradient",
      },
    ],
    image: ToonTanks,
    source_code_link: "https://github.com/MilanPrijic/WorldOfToonTanks",
  },
  {
    name: "Muhrir",
    description:
      "Muhrir is a 3D Unreal Engine 5 game that lets the player uncover a mysterious dungeon, filled with traps, riches and many other surprises. Are you the next Muhrir?",
    tags: [
      {
        name: "unrealengine5",
        color: "blue-text-gradient",
      },
      {
        name: "c++",
        color: "green-text-gradient",
      },
      {
        name: "lumen",
        color: "pink-text-gradient",
      },
      {
        name: "nanite",
        color: "pink-text-gradient",
      },
    ],
    image: Muhrir,
    source_code_link: "https://github.com/MilanPrijic/Muhrir",
  },
];

export { services, technologies, experiences, testimonials, projects };
