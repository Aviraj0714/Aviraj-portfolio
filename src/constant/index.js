import { meta, shopify, starbucks, tesla } from "../assets/images";
import {
    car,
    contact,
    css,
    estate,
    express,
    git,
    github,
    html,
    javascript,
    linkedin,
    mongodb,
    motion,
    mui,
    nextjs,
    nodejs,
    pricewise,
    react,
    redux,
    sass,
    snapgram,
    summiz,
    tailwindcss,
    threads,
    typescript,
    
} from "../assets/icons";

export const skills = [
    {
        imageUrl:css ,
        name: "CSS",
        type: "Frontend",
    },
    
    {
        imageUrl: github,
        name: "GitHub",
        type: "Version Control",
    },
    {
        imageUrl: html,
        name: "HTML",
        type: "Frontend",
    },
    {
        imageUrl: javascript,
        name: "JavaScript",
        type: "Frontend",
    },
    {
        imageUrl: mongodb,
        name: "MongoDB",
        type: "Database",
    },
    
    {
        imageUrl: nodejs,
        name: "Node.js",
        type: "Backend",
    },
    {
        imageUrl: react,
        name: "React",
        type: "Frontend",
    },
    {
        imageUrl: redux,
        name: "Redux",
        type: "State Management",
    },
    
    {
        imageUrl: tailwindcss,
        name: "Tailwind CSS",
        type: "Frontend",
    },
    {
        imageUrl: typescript,
        name: "TypeScript",
        type: "Frontend",
    }
    ,
    {
        imageUrl: mui,
        name: "Figma",
        type: "ui",
    },
    {
        imageUrl: motion,
        name: "python",
        type: "backend",
    },
    {
        imageUrl: nextjs,
        name: "vite",
        type: "frontend",
    },
    {
        imageUrl: sass,
        name: "c++",
        type: "programming",
    },
    {
        imageUrl: estate,
        name: "three.js",
        type: "frontend",
    },
    {
        imageUrl: threads,
        name: "linux",
        type: "os",
    },
    {
        imageUrl: express,
        name: "aws",
        type: "cloud",
    },
];

export const experiences = [
    {
        title: "Cloud enginner",
        company_name: "AICTE-Eduskills",
        icon: tesla,
        iconBg: "#fbc3bc",
        date: "Sep 2023 - Nov 2023",
        points: [
            "Developing and maintaining diffrent projects using aws",
            "Deplyoing responsive websites and ensuring cross-browser compatibility.",
        
        ],
    },
    {
        title: "Frontend Developer",
        company_name: " CodeClause",
        icon: starbucks,
        iconBg: "#accbe1",
        date: "Aug 2023 - Sep 2023",
        points: [
            "Developing and maintaining web applications using javascript and other related technologies.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
            "Participating in code reviews and providing constructive feedback to other developers.",
        ],
    },
    {
        title: "Web Developer",
        company_name: "Bharat Intern",
        icon: shopify,
        iconBg: "#b7e4c7",
        date: "July 2023 - Aug 2023",
        points: [
            "Developing and maintaining web applications using html and other related technologies.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
            "Participating in code reviews and providing constructive feedback to other developers.",
        ],
    },
    {
        title: "web development and designing",
        company_name: "oasis infobyte",
        icon: meta,
        iconBg: "#a2d2ff",
        date: "July 2023 - Aug 2023",
        points: [
            "Developing and maintaining web applications using React.js and other related technologies.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
            "Participating in code reviews and providing constructive feedback to other developers.",
        ],
    },
];

export const socialLinks = [
    {
        name: 'Contact',
        iconUrl: contact,
        link: '/contact',
    },
    {
        name: 'GitHub',
        iconUrl: github,
        link: 'https://github.com/Aviraj0714',
    },
    {
        name: 'LinkedIn',
        iconUrl: linkedin,
        link: 'www.linkedin.com/in/aviraj-bhaliya-4483a7236',
    }
];

export const project = [
    {
        iconUrl: pricewise,
        theme: 'btn-back-red',
        name: 'E-commerce Shopping website',
        description: 'Developed a web application of shopping site using html, CSS and javascript as a minor project of my colloge.',
        link: 'https://github.com/Aviraj0714/E-commerce-shopping-website.git',
    },
    {
        iconUrl: git,
        theme: 'btn-back-green',
        name: 'Product web page ',
        description: 'Created a webpage for hradphones promotion on my virtual internship using html, javascript, CSS.',
        link: 'https://github.com/Aviraj0714/oibsip_taskno.1.git',
    },
    {
        iconUrl: car,
        theme: 'btn-back-blue',
        name: 'Portfolio',
        description: 'Designed and built a personal porfolio as a virtual internship task.',
        link: 'https://aviraj-bhaliya-portfolio.s3.ap-south-1.amazonaws.com/avirajportfolio.html',
    },
    {
        iconUrl: snapgram,
        theme: 'btn-back-pink',
        name: 'Registration Form',
        description: 'Designed a Registration form for student course registration',
        link: 'https://github.com/Aviraj0714/registration-form.git',
    },
    {
        iconUrl: estate,
        theme: 'btn-back-black',
        name: 'Go trip',
        description: 'Developed a web page for planning a holiday trip using html, CSSS.',
        link: 'https://github.com/Aviraj0714/CodeClauseInternship_product-landing-page.git',
    },
    {
        iconUrl: summiz,
        theme: 'btn-back-yellow',
        name: 'Temprature Converetr',
        description: 'Web Application that convert temprature in diffrent units.',
        link: 'https://github.com/Aviraj0714/tempreture-converter.git',
    }
];