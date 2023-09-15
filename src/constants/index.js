import {
    mobile,
    backend,
    creator,
    github,
    web,
    linkedin,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    java,
    python,
    docker,
    meta,
    ntu,
    micron,
    shopify,
    carrent,
    jobit,
    tripguide,
    threejs,
    githubblack,
    bootstrap,
    flask,
    ecoventure,
    tindog,
    moblima,
    dsproject,
    aiproject,
    portfolio
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },    

    {
      id: "work",
      title: "Experience",
    },    
    {
      id: "projects",
      title: "Projects"
    },
    {
      id: "contact",
      title: "Contact",
    }
  ];
  
  const socials = [
    {
      title: "github",
      link: "https://github.com/bernicekjy",
      icon: github,
      color: "#000000"
    },
    {
      title: "linkedin",
      link: "https://www.linkedin.com/in/bernicekjy/",
      icon: linkedin,
      color: "#0072b1"
    },
  ]
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "React Native Developer",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "Content Creator",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "BootStrap",
      icon: bootstrap
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Flask",
      icon: flask
    },
    {
      name:"Python",
      icon: python
    },
    {
      name:"Java",
      icon: java
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "github",
      icon: githubblack
    },

  ];
  
  const experiences = [
    {
      title: "Student",
      company_name: "Nanyang Technological University",
      icon: ntu,
      iconBg: "#fff7cc",
      date: "August 2021 - Present",
      points: [
        "Pursuing a Bachelors of Engineering in Computer Science with a minor in Business.",
        "Developing multiple projects and participating in numerous hackathons/workshops.",
        "Graduating in May 2025 with an expected classification of First Class Honours.",
      ],
    },
    {
      title: "Intern",
      company_name: "Micron",
      icon: micron,
      iconBg: "#b4d5ff",
      date: "May 2023 - Aug 2023",
      points: [
        "Implementing Python solutions using SQL, pandas and numpy to automate data manipulation processes.",
        "Developing and maintaining Robotic Process Automation programs on UiPath.",
        "Creating interactive dashboards on Tableau.",
      ],
    },
    {
      title: "Web Designer",
      company_name: "Nanyang Techonological University",
      icon: ntu,
      iconBg: "#fff7cc",
      date: "May 2023 - May 2023",
      points: [
        "Collaborated with NTU Student Affairs Office to design a new Inclusion & Integration webpage.",
        "Designed visually appealing, intuitive and user-friendly UI designs using Canva.",
        "Conducted surveys to gain an understanding of general requirements from international students."
      ],
    }
  ];
  
  const projects = [
    {
      name: "EcoVenture",
      description:
        "An interactive web application catering to users in Singapore, enabling them to effortlessly explore outdoor Fitness Areas, discover optimal routes based on real-time distance and weather conditions, and earn points by visiting these destinations.",
      tags: [
        {
          name: "html",
          color: "green-text-gradient",
        },
        {
          name: "bootstrapcss",
          color: "pink-text-gradient",
        },
        {
          name: "flask",
          color: "blue-text-gradient",
        },
      ],
      image: ecoventure,
      source_code_link: "https://github.com/claraheng/SC2006-EcoVenture-Web-App",
    },
    {
      name: "Personal Portfolio",
      description:
        "An interactive web application to showcase my past projects and work experience. You're looking at it right now!",
      tags: [
        {
          name: "html",
          color: "green-text-gradient",
        },
        {
          name: "react.js",
          color: "blue-text-gradient",
        },
        {
          name: "tailwindcss",
          color: "green-text-gradient",
        },
        {
          name: "three.js",
          color: "pink-text-gradient",
        },
      ],
      image: portfolio,
      source_code_link: "https://github.com/claraheng/SC2006-EcoVenture-Web-App",
    },
    {
      name: "TinDog",
      description:
        "A promotional webpage for 'TinDog,' a fictional dating app tailored exclusively for dogs, fostering connections and playful interactions within the canine community.",
      tags: [
        {
          name: "html",
          color: "green-text-gradient",
        },
        {
          name: "bootstrap",
          color: "pink-text-gradient",
        }
      ],
      image: tindog,
      source_code_link: "https://github.com/bernicekjy/tindog-website",
    },
    {
      name: "MOBLIMA",
      description:
        "A console cinema manageent application to be used by both cinema staff and movie go-ers. Features include management of tickets, seating, movie and showtimes.",
      tags: [
        {
          name: "java",
          color: "pink-text-gradient",
        }
      ],
      image: moblima,
      source_code_link: "https://github.com/bernicekjy/SC2002-Assignment1",
    },
    {
      name: "Cartpole with Deep Q Learning",
      description:
        "An artificial intelligence project using Deep Reinforcement Learning for Keras to solve the cartpole problem.",
      tags: [
        {
          name: "python",
          color: "blue-text-gradient",
        }
      ],
      image: aiproject,
      source_code_link: "https://github.com/bernicekjy/sc3000-cartpole",
    },
    {
      name: "Does Being Unconventional Determine Success?",
      description:
        "A data science project exploring the relationship of career success based on the 'unconventionality' of individuals.",
      tags: [
        {
          name: "python",
          color: "blue-text-gradient",
        }
      ],
      image: dsproject,
      source_code_link: "https://github.com/ardnep/ntu-sc1015-mini-project",
    },
    
  ];
  
  export { socials, services, technologies, experiences,projects };