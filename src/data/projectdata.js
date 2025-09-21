import resume from "../assets/resume.png";
import dsms from "../assets/dsms.jpg";
import jew from "../assets/jew.jpg";
import ecommerce from "../assets/ecommerce.jpg";
import interfac from "../assets/interface.png";
import explore from "../assets/explore.png";

export const projects = [
    {
    id: 1,
    title: "Handwritten Polynomial Solver Using Cnn Upto Degree-3",
    description: "A user-friendly PyQt5 graphical interface allows users to interactively upload equations and view solutions.",
    image: interfac,
    technologies: ["Python", "CNN", "PyQt5", "Machine Learning", "SymPy", "OpenCV", "TensorFlow"],
    category: "Python/AI/ML",
    status: "Completed",
    slug: "handwritten-polynomial-solver",
    projectUrl: "https://github.com/anupagaire/handwritten-polynomial-solver-using-cnn-upto-degree-3",
    about: "An innovative computer vision application that combines deep learning with practical mathematical problem-solving. This CNN-based system can recognize handwritten polynomial equations up to degree 3 and provide solutions. The PyQt5 interface offers an intuitive user experience where users can draw equations directly or upload images.",
    contribution: "I led the complete development of this computer vision project, handling the data preprocessing steps and training them using custon CNN. My contributions encompassed: designing and training the CNN model using TensorFlow for handwritten equation recognition, implementing image preprocessing techniques with OpenCV for better recognition accuracy, developing the mathematical solver using SymPy for polynomial equations up to degree 3, creating an intuitive PyQt5 desktop interface with drawing capabilities, integrating real-time equation processing and solution display, and conducting extensive testing with various handwriting styles to improve model robustness.",
    features: [
      "Handwritten equation recognition using CNN",
      "Support for polynomials up to degree 3",
      "Interactive PyQt5 graphical interface",
      "Multiple input methods (draw/upload)"
    ]
  },
  {
    id: 2,
    title: "Resume-Ranking-System-Using-Spacy-model",
    description: "Machine learning-based application built with Python that ranks resumes by comparing with job description using NLP techniques with SpaCy and MediaWiki for semantic matching.",
    image: resume,
    technologies: ["Python", "SpaCy", "NLP", "Machine Learning", "MediaWiki"],
    category: "Python/AI/ML",
    status: "Completed",
    slug: "resume-ranking-system",
    projectUrl: "https://github.com/anupagaire/Resume-Ranking-System-Using-Spacy-model",
    about: "This machine learning-based application revolutionizes the resume screening process by implementing advanced Natural Language Processing techniques. Built with Python and leveraging the powerful SpaCy library, the system performs semantic analysis on resumes to match them against job requirements. The application uses MediaWiki for enhanced semantic understanding and ranking algorithms that go beyond simple keyword matching.",
    contribution: "As the sole developer, I architected and implemented the complete system from concept to deployment. My key contributions include: designing the NLP pipeline using SpaCy for resume parsing, implementing semantic matching algorithms for accurate job-resume compatibility scoring, integrating MediaWiki API for enhanced semantic understanding, developing the ranking system with customizable criteria, creating automated batch processing capabilities for handling multiple resumes, and optimizing the system for performance and accuracy through extensive testing and refinement.",
    features: [
      "Advanced NLP processing using SpaCy model",
      "Semantic matching for accurate ranking",
      "MediaWiki integration for enhanced understanding",
    ]
  },

  {
    id: 3,
    title: "Ecommerce-Cosmetic-Website-Php-Mysql",
    description: "Cosmetic shopping system where user can buy products after login into the system with visualization, scheduling, and performance tracking.",
    image: ecommerce,
    technologies: ["PHP", "MySQL", "HTML", "CSS", "JavaScript"],
    category: "Web Development",
    status: "Planning",
    slug: "ecommerce-cosmetic-website",
    projectUrl: "https://github.com/anupagaire/Ecommerce-Cosmetic-Website-Php-Mysq",
    about: "A comprehensive e-commerce platform specifically designed for cosmetic products, featuring a complete shopping cart system, user authentication, and product management. Built with PHP and MySQL, the system provides a robust foundation for online cosmetic retail with features tailored for beauty product sales.",
    contribution: "I developed this full-stack e-commerce platform as an group project during my fifth semester, managing aspects of development. My key contributions include: creating responsive frontend interfaces using HTML, CSS, and JavaScript, developing the shopping cart functionality with real-time updates, building an admin panel for product and order management, and ensuring mobile responsiveness for optimal user experience across devices.",
    features: [
      "Complete user authentication system",
      "Shopping cart and checkout process",
      "Order management system",
      "Admin panel for product management",
      "Responsive design for mobile shopping"
    ]
  },
  {
    id: 4,
    title: "Jewellery Shopping system-WORDPRESS",
    description: "A wordpress based e-commerce website, with all other features needed for e-commerce shopping including payment integration and inventory management.",
    image: jew,
    technologies: ["WordPress", "PHP", "HTML", "CSS", "MySQL"],
    category: "Web Development",
    status: "Completed",
    slug: "jewellery-shopping-system",
    projectUrl: "https://github.com/anupagaire/Jewellery-Shopping-system-wordpress-website-",
    about: "A sophisticated WordPress-based e-commerce solution for jewelry sales, incorporating all essential features needed for luxury product marketing. The system leverages WordPress's flexibility while adding specialized functionality for jewelry showcase and sales.",
    contribution: "I designed and developed this WordPress-based jewelry e-commerce platform, customizing it specifically for luxury product sales. My contributions involved: setting up and configuring WordPress with appropriate e-commerce plugins, customizing themes and templates for jewelry-specific product displays, implementing high-quality image galleries optimized for jewelry showcase, developing custom PHP functions for specialized jewelry features, integrating payment gateways and inventory management systems, and ensuring responsive design for seamless shopping experience across all devices.",
    features: [
      "WordPress-based content management",
      "Custom jewelry product displays",
      "High-quality image galleries",
      "Inventory tracking",
    ]
  },
  {
    id: 5,
    title: "Explore Nepal",
    description: "A wordpress based website, with all other features needed for tourism promotion including news section and blog integration.",
    image: explore,
    technologies: ["WordPress", "PHP", "HTML", "CSS", "MySQL", "Elementor"],
    category: "Web Development",
    status: "Completed",
    slug: "explore-nepal",
    projectUrl: "https://explorenepal.com.np/",
    about: "A WordPress project completed during my internship, centered on creating a tourism-oriented website. The site includes a dedicated news and blog section for travel updates and uses multiple WordPress plugins and Elementor for custom layouts and interactive design.",
    contribution: "During my internship, I was responsible for the complete development and design of this tourism website. My specific contributions included: designing custom layouts using Elementor page builder for visually appealing tourism content, developing a dynamic news and blog management system for travel updates, integrating essential WordPress plugins for SEO, performance optimization, and booking features, creating responsive designs optimized for desktop, tablet, and mobile viewing, implementing user-friendly navigation with custom menus and category filters, setting up content management workflows for easy updates by the client, and ensuring fast loading times and optimal performance for better user experience.",
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
    id: 6,
    title: "Content Management System",
    description: "A system developed so that admin can add any type of content like (blog,contact) and manage it easily and no need of developing backend apis again and again.",
    image: interfac,
    technologies: ["Mern", "NodeJs", "tailwindCSS", "MongoDb", "React", "OpenCV", "TensorFlow"],
    category: "MERN Stack",
    status: "In Progress",
    slug: "cms",
    projectUrl: "https://github.com/anupagaire/content_management",
    about: "A comprehensive content management system (CMS) designed to streamline the process of creating, managing, and publishing various types of content. Built with a modern MERN stack (MongoDB, Express.js, React, Node.js) and styled using TailwindCSS, this CMS offers a user-friendly interface for administrators to efficiently handle content without the need for repetitive backend API development.",
    contribution: "I am developing this complete content management system as a solo project, handling all aspects of system design and implementation. My key contributions encompass: designing the overall system architecture with frontend and backend separation, implementing RESTful APIs for content management operations, developing a dynamic frontend interface with React and TailwindCSS for user-friendly content creation and editing, integrating MongoDB for flexible data storage and retrieval, creating user authentication .",
    features: [
      "Admin can add any type of content",
      "No need of developing backend apis again and again",
      "Easily manage the content",
      "User-friendly interface",
      "Responsive design for all device",
      
    ]
  },
  {
    id: 7,
    title: "Department Store Management System",
    description: "A menu-driven inventory management system built in C++ for Turbo C++, using graphics and file handling for comprehensive store management.",
    image: dsms,
    technologies: ["C++", "C", "Graphics Programming"],
    category: "System Programming",
    status: "Completed",
    slug: "dsms",
    projectUrl: "https://github.com/anupagaire/Department-Store-Management-store-in-C-C-",
    about: "A comprehensive inventory management system developed in C++ for Turbo C++ environment, featuring graphics interface and file handling capabilities. This menu-driven system provides efficient store management with real-time inventory tracking and reporting features.",
    contribution: "I developed this complete inventory management system as a solo project, handling all aspects of system design and implementation. My key contributions encompassed: designing the overall system architecture with menu-driven interface structure, implementing graphics programming in Turbo C++ for enhanced user interface, developing file handling mechanisms for persistent data storage and retrieval, creating inventory tracking algorithms for real-time stock management, building sales reporting system with data analysis capabilities, implementing user-friendly navigation and error handling mechanisms, and optimizing the system for performance within the constraints of the Turbo C++ environment.",
    features: [
      "Menu-driven interface with graphics",
      "Complete inventory management",
      "File handling for data persistence",
      "Real-time stock tracking",
      "Sales reporting system",
      "User-friendly navigation"
    ]
  }
];