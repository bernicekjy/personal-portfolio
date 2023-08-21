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
    flask
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
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Car Rent",
      description:
        "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: carrent,
      source_code_link: "https://github.com/",
    },
    {
      name: "Job IT",
      description:
        "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "restapi",
          color: "green-text-gradient",
        },
        {
          name: "scss",
          color: "pink-text-gradient",
        },
      ],
      image: jobit,
      source_code_link: "https://github.com/",
    },
    {
      name: "Trip Guide",
      description:
        "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
      tags: [
        {
          name: "nextjs",
          color: "blue-text-gradient",
        },
        {
          name: "supabase",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://github.com/",
    },
  ];
  
  export { socials, services, technologies, experiences, testimonials, projects };