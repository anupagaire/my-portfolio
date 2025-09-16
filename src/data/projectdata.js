import resume from "../assets/resume.png";
import dsms from "../assets/dsms.jpg";
import jew from "../assets/jew.jpg";
import ecommerce from "../assets/ecommerce.jpg";
import interfac from "../assets/interface.png";

export const projects = [
  {
    id: 1,
    title: "Resume-Ranking-System-Using-Spacy-model",
    description: "Machine learning-based application built with Python that ranks resumes using NLP techniques with SpaCy and MediaWiki for semantic matching.",
    image: resume,
    technologies: ["Python", "SpaCy", "NLP", "Machine Learning", "MediaWiki"],
    status: "Completed",
    slug: "resume-ranking-system",
    projectUrl: "https://github.com/anupagaire/Resume-Ranking-System-Using-Spacy-model", 
  },
   {
    id: 2,
    title: "Handwritten Polynomial Solver Using Cnn Upto Degree-3",
    description: "A user-friendly PyQt5 graphical interface allows users to interactively upload equations and view solutions.",
    image: interfac,
    technologies: ["Python", "CNN", "PyQt5", "Machine Learning","SymPy","OpenCV","TensorFlow"],
    status: "Completed",
    slug: "handwritten-polynomial-solver",
    projectUrl: "https://github.com/anupagaire/handwritten-polynomial-solver-using-cnn-upto-degree-3", 
  },
 {
    id: 3,
    title: "Ecommerce-Cosmetic-Website-Php-Mysql",
    description: "Cosmetic shopping system where user can buy products after login into the system.visualization, scheduling, and performance tracking.",
    image: ecommerce,
    technologies: ["PHP", "MySQL", "HTML", "CSS"],
    status: "Planning",
    slug: "ecommerce-cosmetic-website",
    projectUrl: "https://github.com/anupagaire/Ecommerce-Cosmetic-Website-Php-Mysq", 
  },
  {
    id: 4,
    title: "Jewellery Shopping system-WORDPRESS",
    description: "A wordpress based e-commerce website,with all other features needed for e-commerce shopping",
    image: jew,
    technologies: ["Wordpress", "PHP", "HTML", "CSS"], 
    status: "Completed",
    slug: "jewellery-shopping-system",
    projectUrl: "https://github.com/anupagaire/Jewellery-Shopping-system-wordpress-website-", 
  },
   {
    id: 5,
    title: "Department Store Management System",
    description: "A menu-driven inventory management system built in C++ for Turbo C++, using graphics and file handling.",
    image: dsms,
    technologies: ["C++", "C"],
    status: "Completed",
    slug: "dsms",
    projectUrl: "https://github.com/anupagaire/Department-Store-Management-store-in-C-C-", 
  },
  

];