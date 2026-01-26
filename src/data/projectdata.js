import resume from "../assets/resume.png";
import dsms from "../assets/dsms.jpg";
import jew from "../assets/jew.jpg";
import ecommerce from "../assets/ecommerce.jpg";
import interfac from "../assets/interface.png";
import explore from "../assets/explore.png";
import moviehub from "../assets/moviehub.png";
import solver from "../assets/screenshots/solver.png";
import resume1 from "../assets/screenshots/resume1.png";
import resume2 from "../assets/screenshots/resume2.png";
import ecommerce1 from "../assets/screenshots/ecommerce1.png";
import ecommerce2 from "../assets/screenshots/ecommerce2.png";
import ecommerce3 from "../assets/screenshots/ecommerce3.png";
import resume3 from "../assets/screenshots/resume3.png";
import resume4 from "../assets/screenshots/resume4.png";
import dsms1 from "../assets/screenshots/dsms1.png";
import dsms2 from "../assets/screenshots/dsms2.png";
import dsms3 from "../assets/screenshots/dsms3.png";
import dsms4 from "../assets/screenshots/dsms4.png";  
import dsms5 from "../assets/screenshots/dsms5.png";
import cms1 from "../assets/screenshots/cms1.png";
import cms2 from "../assets/screenshots/cms2.png";
import cms3 from "../assets/screenshots/cms3.png";
import cms4 from "../assets/screenshots/cms4.png";
import dp1 from "../assets/screenshots/dp1.png";
import dp3 from "../assets/screenshots/dp3.png";
import dp4 from "../assets/screenshots/dp4.png";
import explore1 from "../assets/screenshots/explore1.png";
import explore2 from "../assets/screenshots/explore2.png";
import movie2 from "../assets/screenshots/movie2.png";
import movie3 from "../assets/screenshots/movie3.png";
import restaurent from "../assets/screenshots/restaurent.png";
import restaurent1 from "../assets/screenshots/restaurent1.png";
import icecream from "../assets/screenshots/icecream.png";
import icecream1 from "../assets/screenshots/icecream1.png";
import icecream2 from "../assets/screenshots/icecream2.png";
import pihu1 from "../assets/screenshots/pihu1.png";
import pihu2 from "../assets/screenshots/pihu2.png";

import pihu3 from "../assets/screenshots/pihu3.png";




export const projects = [
    {
    id: 1,
    title: "Handwritten Polynomial Solver Using Cnn Upto Degree-3",
    description: "A user-friendly PyQt5 graphical interface allows users to interactively upload equations and view solutions.",
    image: interfac,
     screenshots: [solver],
    technologies: ["Python", "CNN", "PyQt5", "Machine Learning", "SymPy(symbolic mathematics)", "OpenCV", "TensorFlow","Keras"],
    category: "Python/AI/ML",
    status: "Completed",
    slug: "handwritten-polynomial-solver",
    projectUrl: "https://github.com/anupagaire/handwritten-polynomial-solver-using-cnn-upto-degree-3",
    about: "This project implements a system that recognizes and solves handwritten polynomial equations (up to degree 3) using Convolutional Neural Networks (CNN). The system processes images of handwritten equations, segments individual symbols, classifies them with a CNN, reconstructs the polynomial, and solves it symbolically. A user-friendly PyQt5 graphical interface allows users to interactively upload equations and view solutions.",
    contribution: "I led the complete development of this computer vision project, handling the data preprocessing steps and training them using custon CNN. My contributions encompassed: designing and training the CNN model using TensorFlow for handwritten equation recognition, implementing image preprocessing techniques with OpenCV for better recognition accuracy, developing the mathematical solver using SymPy for polynomial equations up to degree 3, creating an intuitive PyQt5 desktop interface with drawing capabilities, integrating real-time equation processing and solution display, and conducting extensive testing with various handwriting styles to improve model robustness.",
    features: [

"Image preprocessing: grayscale conversion, noise removal",
"Symbol segmentation using OpenCV",
"Custom CNN trained on a large augmented dataset (100,000+ samples) for symbol classification",
"Recognition of basic math symbols: digits, plus, minus, multiply, equals, variables (x, y)",
"Solves polynomial equations up to degree 3 symbolically",
"Interactive GUI built with PyQt5 for ease of use",

    ]
  },{
  id: 2,
    title: "Pihu Luxe-Ecommerce Website",
    description: "A user friendly admin and user e commerce website where user can buy products on basis of brands and admin can manage the products,orders and users.",
    image: pihu1,
     screenshots: [pihu2,pihu3],
    technologies: ["Mern", "NodeJs", "ExpressJs", "MongoDb", "NextJs", "Redux", "tailwindCSS"],
    category: "Web Development",
    status: "Completed",
    slug: "pihu-luxe",
    projectUrl: "https://pihuluxe.com/",
    about: "This is a full-featured e-commerce website built with the MERN stack (MongoDB, Express.js, React, Node.js) and Next.js for server-side rendering. The platform offers a seamless shopping experience with features like product browsing, brand-based filtering, user authentication, and an admin panel for managing products, orders, and users.",
    contribution: "I was responsible for developing both the frontend and backend of the Pihu Luxe e-commerce website. My key contributions included: designing and implementing the user interface with Next.js and TailwindCSS for a responsive and visually appealing design, developing RESTful APIs with Node.js and Express.js for product management, order processing, and user authentication, integrating MongoDB for efficient data storage and retrieval, implementing Redux for state management across the application, creating an admin panel for managing products, orders, and users, and ensuring the website was optimized for performance and SEO.",
    features: [

"Brand-based product filtering",
"User authentication and profile management",
"Admin panel for product, order, and user management",
"Responsive design for mobile and desktop",
"Seamless shopping cart and checkout process",

    ]
  },
{
  id: 3,
  title: "Himalayan Restaurant Website",
  description: "A fully functional restaurant website with online reservation and menu display.",
  image: restaurent1, 
  screenshots: [restaurent,restaurent1], 
  technologies: [ "React", "EmailJS", "tailwindCSS"],
  category: "Frontend/Web Development",
  status: "Completed",
  slug: "himalayan-restaurant-website",
  projectUrl: "https://himalayanrestaurent.vercel.app/",
  about: "This project is a production-ready restaurant website featuring a fully functional online reservation system that sends booking details directly to email. The website includes a complete restaurant menu, responsive UI for mobile and desktop, and all essential sections such as home, about, services, menu, and contact.",
  contribution: "I developed the complete frontend for the Himalayan Restaurant Website, designing responsive layouts with React and CSS, implementing the reservation form with email integration using EmailJS, and ensuring cross-device compatibility. I handled the full UI/UX design from scratch, implemented interactive menus, and tested the website for usability and responsiveness.",
  features: [
    "Online reservation system with email submission",
    "Responsive UI for desktop and mobile devices",
    "Full restaurant menu display with categories",
    "Multiple sections: Home, About, Services, Menu, Contact",
    "Interactive UI components with React",
    "Production-ready website design"
  ]
}
,

  {
    id: 4,
    title: "Resume-Ranking-System-Using-Spacy-model",
    description: "Machine learning-based application built with Python that ranks resumes by comparing with job description using NLP techniques with SpaCy and MediaWiki for semantic matching.",
    image: resume,
    screenshots: [resume4,resume3,resume1,resume2],

    technologies: ["Python", "SpaCy", "NLP", "Machine Learning", "MediaWiki"],
    category: "Python/AI/ML",
    status: "Completed",
    slug: "resume-ranking-system",
    projectUrl: "https://github.com/anupagaire/Resume-Ranking-System-Using-Spacy-model",
    about: "A Resume Ranking System built with SpaCy, an advanced NLP library, to rank resumes based on job descriptions by analyzing PDF resumes. This system leverages MongoDB for efficient data storage and retrieval, making it ideal for recruiters and HR professionals to streamline candidate selection. The system processes resumes, extracts relevant information, and ranks them according to their compatibility with specified job criteria.",
    contribution: "As the sole developer, I architected and implemented the complete system from concept to deployment. My key contributions include: designing the NLP pipeline using SpaCy for resume parsing, implementing semantic matching algorithms for accurate job-resume compatibility scoring, integrating MediaWiki API for enhanced semantic understanding, developing the ranking system with customizable criteria, creating automated batch processing capabilities for handling multiple resumes, and optimizing the system for performance and accuracy through extensive testing and refinement.",
    features: [
      "NLP-Powered Resume Parsing: Extracts and analyzes key information from PDF resumes using SpaCy.",
"Job Description Matching: Ranks resumes based on relevance to job descriptions",
"MongoDB Integration: Stores resume data and job descriptions securely",
"Google OAuth Authentication: Secure access to the system via Google credentials.",
    ]
  },

  {
    id: 5,
    title: "Ecommerce-Cosmetic-Website-Php-Mysql",
    description: "Cosmetic shopping system using html,css,js,php and mysql where user can buy products after login into the system.",
    image: ecommerce,
        screenshots: [ecommerce3,ecommerce1,ecommerce2],

    technologies: ["PHP", "MySQL", "HTML", "CSS", "JavaScript"],
    category: "Web Development",
    status: "Planning",
    slug: "ecommerce-cosmetic-website",
    projectUrl: "https://github.com/anupagaire/Ecommerce-Cosmetic-Website-Php-Mysq",
    about: "A comprehensive e-commerce platform specifically designed for cosmetic products, featuring a complete shopping cart system, user authentication, and product management. Built with PHP and MySQL, the system provides a robust foundation for online cosmetic retail with features tailored for beauty product sales.",
    contribution: "I designed this website when i was in fifth sem of my bachelors degree as a group project with three other members.We divided the work among ourselves and i was responsible for designing the ER diagram and database schema using MySQL.I also worked on the frontend design using HTML, CSS, and JavaScript to create a user-friendly interface for customers.",
    features: [
      "Complete user authentication system",
      "Shopping cart and checkout process",
      "Order management system",
      "Admin panel for product management",
      "Responsive design for mobile shopping"
    ]
  },
  
  {
    id: 6,
    title: "Explore Nepal",
    description: "A wordpress based website, with all other features needed for tourism promotion including news section and blog integration.",
    image: explore,
    screenshots: [explore1,explore2],
    technologies: ["WordPress", "PHP", "HTML", "CSS", "MySQL", "Elementor"],
    category: "Web Development",
    status: "Completed",
    slug: "explore-nepal",
    projectUrl: "https://explorenepal.com.np/",
    about: "A WordPress project completed during my internship, centered on creating a tourism-oriented website. The site includes a dedicated news and blog section for travel updates and uses multiple WordPress plugins and Elementor for custom layouts and interactive design.",
    contribution: "During my internship at SquareLabs i was responsible for developing the Explore Nepal website using WordPress. I handled the complete development process, including theme customization, plugin integration, and content management. I also ensured the website was responsive and optimized for performance across various devices.",
    features: [
      "WordPress-based content management tailored for tourism posts and news",
      "Elementor-driven page designs for flexible, visually appealing layouts",
      "Integration of essential plugins for performance, SEO, and booking features",
      "Responsive design optimized for desktop, tablet, and mobile devices",
      "Dynamic blog/news module for regular travel updates and articles",
      "User-friendly navigation with custom menus and category filters"
    ]
  },
  {
    id: 7,
    title: "Content Management System",
    description: "A system developed so that admin can add any type of content like (blog,contact) and manage it easily and no need of developing backend apis again and again.",
    image: cms1,
    screenshots: [cms1,cms2,cms3,cms4],
    technologies: ["Mern", "NodeJs", "tailwindCSS", "MongoDb", "React",],
    category: "Web Development",
    status: "In Progress",
    slug: "cms",
    projectUrl: "https://github.com/anupagaire/content_management",
    about: "A comprehensive content management system (CMS) designed to streamline the process of creating, managing, and publishing various types of content. Built with a modern MERN stack (MongoDB, Express.js, React, Node.js) and styled using TailwindCSS, this CMS offers a user-friendly interface for administrators to efficiently handle content without the need for repetitive backend API development.",
    contribution: "I am developing this complete content management system as a solo project during my internship at SquareLabs,this was developed so that any type of content can be created and managed easily without the need of developing backend apis again and again.I handled all aspects of system design and implementation. My key contributions encompass: designing the overall system architecture with frontend and backend separation, implementing RESTful APIs for content management operations, developing a dynamic frontend interface with React and TailwindCSS for user-friendly content creation and editing, integrating MongoDB for flexible data storage and retrieval, creating user authentication .",
    features: [
      "Admin can add any type of content",
      "No need of developing backend apis again and again",
      "Easily manage the content",
      "User-friendly interface",
      "Responsive design for all device",
      
    ]
  },
  {
    id:8,
    title: " DP Portfolio Website",
    description: "A personal portfolio website of a professor built with React and TailwindCSS to showcase projects, research, and achievement information.",
    image: dp1,
    screenshots: [dp1,dp3,dp4],
    technologies: ["React", "TailwindCSS", "JavaScript", "HTML", "CSS"],
    category: "Web Development",
    status: "Completed",
    slug: "dp-portfolio-website",
    // projectUrl: "https://dp.squarelabs.com.np/",
    projectUrl:"https://github.com/anupagaire/dp_portfolio",
    about: "A personal portfolio website built with React and TailwindCSS to showcase projects, research, and achievement information. The website features a clean and modern design, with components for projects, research publications, and achievement section and used project and research data from the backend api provided by the professor and displayed in slider and separate page format .i also use lenis library for smooth scrolling effect.",
    contribution: "During my internship at SquareLabs, I was responsible for developing the personal portfolio website for a professor. I handled the complete frontend development using React and TailwindCSS, ensuring a responsive and visually appealing design. I also integrated data from the backend API provided by the professor to dynamically display projects and research information.",
    features: [
      "Showcase projects with images and descriptions",
      "Research publications section with links",
      "Achievements section highlighting awards and recognitions",
      "Responsive design for desktop and mobile",
      "Smooth scrolling effect using Lenis library",
    ]
  },
  {
    id: 10,
    title: "Department Store Management System",
    description: "A menu-driven inventory management system built in C++ for Turbo C++, using graphics and file handling.",
    image: dsms,
    screenshots: [dsms1,dsms2,dsms3,dsms4,dsms5],
    technologies: ["C++", "C", "Graphics Programming"],
    category: "System Programming",
    status: "Completed",
    slug: "dsms",
    projectUrl: "https://github.com/anupagaire/Department-Store-Management-store-in-C-C-",
    about: "A comprehensive inventory management system developed in C++ for Turbo C++ environment, featuring graphics interface and file handling capabilities. This menu-driven system provides efficient store management with real-time inventory tracking and reporting features.",
    contribution: "I developed this system as a project from my second sem of bachelors degree as a group project with three other members.We divided the work among ourselves and i was responsible for coding the graphics part using graphics.h library and also worked on file handling part for storing the data in files.",
    features: [
  "Add, delete, view, and edit items",
"Search items by ID or name",
"Issue items to customers",
"Track issued items and remove them",
"Graphical welcome and login screen using graphics.h",
    ]
  },
    {
    id: 9,
    title: "Movie Hub – React Movie Listing App",
    description: "Movie Hub is designed as a user-friendly movie browsing application.",
    image: moviehub,
    screenshots: [movie2,movie3],
    technologies: [ "React", "JavaScript", "HTML", "CSS"],
    category: "Web Development",
    status: "Completed",
    slug: "handwritten-polynomial-solver",
    projectUrl: "https://github.com/anupagaire/handwritten-polynomial-solver-using-cnn-upto-degree-3",
    about: "Movie Hub is a modern and interactive React-based web application that allows users to browse, search, and filter movies with ease. Users can sort by rating, release date, and title, mark favorites, and view detailed information in a responsive modal interface. The app features dark mode and favorite movies management.",
    contribution: "I did this as a practice of React to enhance my skills in React and frontend development.I handled the complete development of this project from designing the UI to implementing all the features using React.I also ensured the app was responsive and worked well on all devices.",


    features: ["Search Movies: Quickly search by title",
"Filter by Rating: Dynamic slider to show movies above a certain rating",
"Sorting: Sort movies by rating, release date, or title",
"Favorites Management: Add/remove movies from favorites and persist them in localStorage",
"Movie Detail Modal: Click on a movie to view detailed info",
"Dark Mode Toggle: Switch between dark and light themes",
"Responsive Layout: Works seamlessly on mobile, tablet, and desktop",
    ]
  },
//   {
//   id: 3,
//   title: "Fresh & More – E-commerce Website",
//   description: "A full-featured e-commerce platform with product listings, categories, cart, and checkout flow.",
//   image: freshMoreInterface, // replace with your main project image variable
//   screenshots: [freshMoreScreenshot], // replace with actual screenshots array
//   technologies: ["React", "JavaScript", "CSS", "HTML", "Responsive Design", "Payment Integration (if any)"],
//   category: "Frontend/Web Development",
//   status: "In Progress / Ready for Deployment",
//   slug: "fresh-and-more-ecommerce-website",
//   projectUrl: "https://github.com/anupagaire/fresh-and-more-ecommerce-website",
//   about: "Fresh & More is a full-featured e-commerce website with product listings, categories, cart management, and checkout functionalities. It features a modern responsive design, interactive UI, and a structure suitable for real-world online shopping platforms.",
//   contribution: "I built the complete frontend of Fresh & More, implementing product listing pages, category filters, cart and checkout UI, and responsive layouts. I designed reusable React components, ensured smooth user interactions, and prepared the website for production deployment.",
//   features: [
//     "Product listing with categories and filters",
//     "Cart management and checkout flow",
//     "Responsive UI for mobile and desktop",
//     "Interactive and reusable React components",
//     "Modern e-commerce website design",
//     "Ready for deployment to production"
//   ]
// }
 {
    id: 11,
    title: "Ice Cream Shop – React Homepage (Figma to Code)",
    description: "A responsive homepage built in React based on a Figma design, showcasing design-to-code workflow.",
    image: icecream,
    screenshots: [icecream,icecream1,icecream2,],
    technologies: ["React", "JavaScript", "CSS", "HTML", "Figma", "Responsive Design"],
    category: "Frontend/Web Development",
    status: "Completed",
    slug: "ice-cream-shop-react-homepage",
    projectUrl: "https://github.com/anupagaire/icecream_shop_using_react",
    about: "This project demonstrates converting a Figma design into a responsive React homepage. It showcases component-based structure, modern styling, and the workflow from UI/UX design to code implementation.",
    contribution: "I implemented the Figma design using React, created reusable components, ensured a responsive layout across devices, and applied modern CSS techniques to maintain design fidelity.",
    features: [
      "Design-to-code workflow from Figma to React",
      "Responsive homepage layout",
      "Reusable React components",
      "Modern styling techniques",
      "Clean and intuitive UI"
    ]
  },
  {
    id: 12,
    title: "Jewellery Shopping system-WORDPRESS",
    description: "A wordpress based e-commerce website,which contain homepage,order,shop page, checkout page, payment method and all other features needed for e-commerce shopping.this deals with jewellery shopping.the website is fully responsive and mobile friendly.",
    image: jew,
    technologies: ["WordPress", "PHP", "HTML", "CSS", "MySQL"],
    category: "Web Development",
    status: "Completed",
    slug: "jewellery-shopping-system",
    projectUrl: "https://github.com/anupagaire/Jewellery-Shopping-system-wordpress-website-",
    about: "This is a wordpress based e-commerce website,which contain homepage,order,shop page, checkout page, payment method and all other features needed for e-commerce shopping.this deals with jewellery shopping.",
    contribution: "I designed this website when i was in fourth sem of my bachelors degree.This was solo project and i did all the work by myself.I designed the complete website using wordpress and woocommerce plugin for e-commerce functionality like cart ,checkout etc.I also customized the theme and use elementor page builder for designing the pages.I also optimized the website for speed and performance.",
    features: [
      "WordPress-based content management",
      "Custom jewelry product displays",
      "High-quality image galleries",
      "Inventory tracking",
    ]
  },
];