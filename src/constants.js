// Skills Section Logo's
import htmlLogo from './assets/tech_logo/html.png';
import cssLogo from './assets/tech_logo/css.png';
import javascriptLogo from './assets/tech_logo/javascript.png';
import reactjsLogo from './assets/tech_logo/reactjs.png';
import tailwindcssLogo from './assets/tech_logo/tailwindcss.png';
import nodejsLogo from './assets/tech_logo/nodejs.png';
import expressjsLogo from './assets/tech_logo/express.png';
import mysqlLogo from './assets/tech_logo/mysql.png';
import mongodbLogo from './assets/tech_logo/mongodb.png';
import firebaseLogo from './assets/tech_logo/firebase.png';
import cLogo from './assets/tech_logo/c.png';
import cppLogo from './assets/tech_logo/cpp.png';
import javaLogo from './assets/tech_logo/java.png';
import gitLogo from './assets/tech_logo/git.png';
import githubLogo from './assets/tech_logo/github.png';
import vscodeLogo from './assets/tech_logo/vscode.png';
import postmanLogo from './assets/tech_logo/postman.png';
import figmaLogo from './assets/tech_logo/figma.png';
import vercelLogo from './assets/tech_logo/vercel.png';



// Education Section Logo's
import cuLogo from './assets/education_logo/cu-logo.png';
import apsLogo from './assets/education_logo/aps.jpeg';

// Project Section Logo's
import githubdetLogo from './assets/work_logo/github_det.png';
import csprepLogo from './assets/work_logo/cs_prep.png';
import movierecLogo from './assets/work_logo/movie_rec.png';

export const SkillsInfo = [
  {
    title: 'Frontend',
    skills: [
      { name: 'HTML', logo: htmlLogo },
      { name: 'CSS', logo: cssLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'React JS', logo: reactjsLogo },
      { name: 'Tailwind CSS', logo: tailwindcssLogo },
    ],
  },
  {
    title: 'Backend',
    skills: [
      { name: 'Node JS', logo: nodejsLogo },
      { name: 'Express JS', logo: expressjsLogo },
      { name: 'MySQL', logo: mysqlLogo },
      { name: 'MongoDB', logo: mongodbLogo },
      { name: 'Firebase', logo: firebaseLogo },
    ],
  },
  {
    title: 'Languages',
    skills: [
      { name: 'C', logo: cLogo },
      { name: 'C++', logo: cppLogo },
      { name: 'Java', logo: javaLogo },
      { name: 'JavaScript', logo: javascriptLogo },
    ],
  },
  {
    title: 'Tools',
    skills: [
      { name: 'Git', logo: gitLogo },
      { name: 'GitHub', logo: githubLogo },
      { name: 'VS Code', logo: vscodeLogo },
      { name: 'Postman', logo: postmanLogo },
      { name: 'Vercel', logo: vercelLogo },
      { name: 'Figma', logo: figmaLogo },
    ],
  },
];
   export const education = [
    {
      id: 0,
      img: cuLogo,
      University: "Chandigarh University",
      date: "Aug 2022 - June 2026",
      grade: "7.78 CGPA",
      desc: "I have completed my Bachelors of Engineering in Computer Science from Chandigarh University. During my time at CU, I gained a strong foundation in programming, software development, and computer science principles. I have studied courses such as Data Structures, Algorithms, Object-Oriented Programming, Database Management Systems, Web Development, and Software Engineering. I actively participated in various workshops and technical events, which enhanced my skills and knowledge. My experience at GLA University has been instrumental in shaping my technical abilities and professional growth.",
      degree: "Bachelors of Engineering - BE",
    },
    {
      id: 1,
      img: apsLogo,
      school: "Arden Progressive School,Haldwani",
      date: "Apr 2021 - March 2022",
      grade: "92.4%",
      desc: "I completed my class 12 education from Arden Progressive School, Haldwani, under the CBSE board, where I studied Physics, Chemistry, and Mathematics (PCM) with Physical Education.",
      degree: "CBSE(XII) - PCM with Physical Education",
    },
    {
      id: 2,
      img: apsLogo,
      school: "DPS Haldwani",
      date: "Apr 2020 - March 2021",
      grade: "94.8%",
      desc: "I completed my class 10 education from DPS, Haldwani, under the CBSE board, where I studied Science with Computer.",
      degree: "CBSE(X), Science with Computer Application",
    },
  ];
  
  export const projects = [
    {
      id: 0,
      title: "Full Stack E-Commerce Website",
      description:
        "A powerful and user-friendly React.js application designed to uncover and showcase E-commerce Website. Simply search a item , add it to the cart , go to checkout and check details , complete the payment and finally your order gets placed.",
      image: githubdetLogo,
      tags: ["HTML", "CSS", "JavaScript", "API","MERN STACK"],
      github: "https://github.com/Ketan2612/Ecommerce-Website",
      webapp: "https://githubprofiledetective.netlify.app/",
    },
    {
      id: 1,
      title: "Portfolio Website",
      description:
        "A React JS based portfolio website designed to showcase my education, projects and About me . It is designed as a responsive website which showcase an individuals portfolio .",
      image: csprepLogo,
      tags: ["React JS", "HTML", "TAILWIND CSS", "JavaScript"],
      github: "https://github.com/Ketan2612/Portfolio_Website",
      webapp: "https://csprep.netlify.app/",
    },
    {
      id: 2,
      title: "Amazon Clone",
      description:
      "A basic and my first self made project which incresed my web development skills and made me realise what a html code along with the designing in CSS and some JAVASCRIPT functions can make a website .", 
      image: movierecLogo,
      tags: ["HTML", "CSS", "JavaScript"],
      github: "https://github.com/Ketan2612/Amazon-Clone",
      webapp: "https://movie-recommendation-app-jet.vercel.app/",
    },
  ];  