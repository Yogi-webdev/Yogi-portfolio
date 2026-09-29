import { useEffect, useRef, useState } from "react";
import project1Image from "../image/1.png";
import project2Image from "../image/2.png";
import project3Image from "../image/3.png";
import project4Image from "../image/4.png";
import project5Image from "../image/5.png";
import profileImage from "../image/yogi.png";

const projects = {
  "project-5-multi-agent-chatbot": {
    title: "1. E-Commerce Multi-Agent Chatbot Using MCPs",
    githubUrl: "https://github.com/Yogi-webdev/Ecommerce-multiagent-chatbot",
    image: project1Image,
    overview:
      "This AI-powered e-commerce chatbot uses a multi-agent system where specialized agents handle different tasks, such as product recommendation, order support, and conversational assistance. The project explores MCP (Model Context Protocol) for connecting AI agents to external tools and services, creating a more flexible and scalable intelligent system.",
    features: [
      "Multi-agent architecture with task-specific responsibilities",
      "MCP-based integration with external tools and services",
      "Context-aware shopping assistance and guidance",
      "Prompt engineering for better conversational behavior",
      "Tool use for dynamic product and service interactions",
      "Scalable intelligent assistant design for commerce workflows",
    ],
    technologies: [
      ["fa-brands fa-react", "React"],
      ["fa-solid fa-bolt", "Vite"],
      ["fa-brands fa-node-js", "Node.js"],
      ["fa-solid fa-server", "Express"],
      ["fa-solid fa-network-wired", "FastAPI"],
      ["fa-solid fa-diagram-project", "LangGraph"],
      ["fa-solid fa-plug", "MCP / FastMCP"],
      ["fa-solid fa-cloud", "OpenAI / Gemini / OpenRouter APIs"],
      ["fa-solid fa-database", "MySQL"],
    ],
    learned:
      "This project introduced me to the power of multi-agent AI systems and the importance of structured tool integration for real-world applications. I learned how specialized agents can work together to improve customer experience, system reliability, and task completion in conversational interfaces.",
  },
  "project-4-mail-classification": {
    title: "2. Mail Classification AI Agent",
    githubUrl: "https://github.com/Yogi-webdev/ai-agent-mail",
    image: project2Image,
    overview:
      "This AI-powered mail classification application uses React and Python to process incoming emails and classify them based on content. The system was designed to support smarter email organization and improve productivity by routing messages into meaningful categories.",
    features: [
      "Email content analysis using AI and ML techniques",
      "Classification based on message patterns and keywords",
      "Interactive frontend built with React",
      "Backend processing for prediction and message handling",
      "Text preprocessing and model-based categorization",
      "Seamless frontend-backend integration",
    ],
    technologies: [
      ["fa-brands fa-react", "React"],
      ["fa-brands fa-js", "TypeScript"],
      ["fa-solid fa-bolt", "Vite"],
      ["fa-brands fa-python", "FastAPI (Python)"],
      ["fa-brands fa-google", "Gmail API"],
      ["fa-solid fa-link", "LangChain / LangGraph"],
      ["fa-solid fa-brain", "Gemini"],
      ["fa-solid fa-microchip", "Groq"],
    ],
    learned:
      "This project helped me understand how machine learning can be applied to real-world information systems such as email management. I learned the importance of text preprocessing, feature extraction, model evaluation, and building clean interfaces that communicate with AI services.",
  },
  "project-3-rag-chatbot": {
    title: "3. RAG Chatbot",
    githubUrl: "https://github.com/Yogi-webdev/rag-chatbbot",
    image: project3Image,
    overview:
      "The RAG chatbot is a retrieval-augmented generation system built in Python that fetches relevant information from a knowledge source and responds with context-aware answers. The project focuses on combining information retrieval with language generation to improve answer quality and relevance.",
    features: [
      "Knowledge-base retrieval for relevant context",
      "Context-aware response generation",
      "Text preprocessing and chunking for documents",
      "Conversational AI workflow design",
      "Improved answer relevance based on retrieval results",
      "Python-based pipeline for efficient experimentation",
    ],
    technologies: [
      ["fa-brands fa-react", "React"],
      ["fa-solid fa-bolt", "Vite"],
      ["fa-brands fa-python", "Python"],
      ["fa-brands fa-google", "Google Gemini"],
      ["fa-solid fa-microchip", "Groq"],
      ["fa-solid fa-database", "ChromaDB"],
      ["fa-solid fa-server", "MySQL"],
    ],
    learned:
      "Working on this project gave me a deeper understanding of retrieval methods, prompt design, and how AI systems can be grounded in domain-specific knowledge. It also helped me build confidence in Python-based data processing and conversational AI workflows.",
  },
  "project-2-ecommerce": {
    title: "4. E-Commerce Website",
    githubUrl: "https://github.com/Yogi-webdev/E-commerce-website",
    image: project4Image,
    overview:
      "This full-stack e-commerce application was built using ReactJS, Node.js, and MySQL to create a complete online shopping experience. The project focuses on product discovery, product details, cart management, and seamless database-backed operations that mirror real-world e-commerce flows.",
    features: [
      "Product listing with category-based browsing",
      "Detailed product pages with images and specifications",
      "Shopping cart and quantity updates",
      "CRUD operations for product and cart data",
      "Backend APIs for communication between frontend and database",
      "Database integration using MySQL for persistent storage",
    ],
    technologies: [
      ["fa-brands fa-react", "React"],
      ["fa-solid fa-bolt", "Vite"],
      ["fa-brands fa-js", "JavaScript"],
      ["fa-solid fa-route", "React Router"],
      ["fa-solid fa-right-left", "Axios"],
      ["fa-brands fa-css3-alt", "Custom CSS"],
      ["fa-brands fa-node-js", "Node.js"],
      ["fa-solid fa-server", "Express"],
      ["fa-solid fa-database", "MySQL"],
      ["fa-solid fa-key", "JWT"],
      ["fa-solid fa-lock", "bcrypt"],
      ["fa-solid fa-upload", "Multer"],
      ["fa-solid fa-check", "ESLint"],
    ],
    learned:
      "This project strengthened my understanding of full-stack development, REST API design, database management, and state-driven frontend logic. I gained hands-on experience with API integration, CRUD workflows, and building user-facing workflows that connect cleanly to backend data sources.",
  },
  portfolio: {
    title: "5. Portfolio Website",
    githubUrl: "https://github.com/Yogi-webdev/Yogi-portfolio",
    image: project5Image,
    overview:
      "This personal portfolio website was built using HTML5 and CSS to present my background, skills, projects, and contact information in a clean and professional layout. It was designed to showcase my work in an accessible way while strengthening my understanding of semantic HTML and structured web design.",
    features: [
      "Responsive page layout for desktop and mobile devices",
      "Structured sections for hero, about, skills, projects, and contact",
      "Clear navigation and smooth anchor scrolling",
      "Modern card-based project presentation",
      "Professional visual hierarchy and color palette",
      "Clean footer with social and contact links",
    ],
    technologies: [
      ["fa-brands fa-react", "React"],
      ["fa-brands fa-react", "React DOM"],
      ["fa-brands fa-js", "JavaScript (ES Modules)"],
      ["fa-solid fa-code", "JSX"],
      ["fa-solid fa-bolt", "Vite"],
      ["fa-brands fa-css3-alt", "CSS3"],
      ["fa-regular fa-envelope", "EmailJS"],
      ["fa-solid fa-icons", "Font Awesome 6.6"],
      ["fa-solid fa-font", "Google Fonts (Poppins)"],
      ["fa-brands fa-html5", "HTML5 Entry Pages"],
    ],
    learned:
      "This project was my foundation in frontend development. It helped me understand how to structure a website logically, use semantic tags effectively, and build a visually balanced interface that communicates content clearly.",
  },
};

const pageTitles = {
  home: "Yogesh Kumar | Portfolio",
  ...Object.fromEntries(
    Object.entries(projects).map(([key, project]) => [
      key,
      `${project.title.replace(/^\d+\. /, "")} | Project Details`,
    ]),
  ),
};

function Navigation({ home = false }) {
  const [menuOpen, setMenuOpen] = useState(false);

  if (!home) {
    return (
      <nav>
        <a href="index.html" className="logo">
          Portfolio
        </a>
        <ul>
          <li>
            <a href="index.html">Home</a>
          </li>
          <li>
            <a href="index.html#projects">Projects</a>
          </li>
          <li>
            <a href="index.html#contact">Contact</a>
          </li>
        </ul>
      </nav>
    );
  }

  const closeMenu = () => setMenuOpen(false);

  return (
    <nav>
      <div
        className="menu-toggle"
        id="menu-toggle"
        role="button"
        tabIndex={0}
        aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
        aria-expanded={menuOpen}
        onClick={() => setMenuOpen((open) => !open)}
        onKeyDown={(event) => {
          if (event.key === "Enter" || event.key === " ") {
            event.preventDefault();
            setMenuOpen((open) => !open);
          }
        }}
      >
        <i className={`fa-solid ${menuOpen ? "fa-xmark" : "fa-bars"}`}></i>
      </div>
      <a href="#" className="logo">
        Portfolio
      </a>
      <ul id="nav-links" className={menuOpen ? "active" : ""}>
        <li>
          <a href="#hero" onClick={closeMenu}>
            Home
          </a>
        </li>
        <li>
          <a href="#about" onClick={closeMenu}>
            About
          </a>
        </li>
        <li>
          <a href="#skills" onClick={closeMenu}>
            Skills
          </a>
        </li>
        <li>
          <a href="#projects" onClick={closeMenu}>
            Projects
          </a>
        </li>
        <li>
          <a href="#contact" onClick={closeMenu}>
            Contact
          </a>
        </li>
      </ul>
    </nav>
  );
}

function HomePage() {
  const [popupVisible, setPopupVisible] = useState(false);
  const popupTimer = useRef(null);
  const projectsViewportRef = useRef(null);

  const scrollProjects = (direction) => {
    const viewport = projectsViewportRef.current;
    const track = viewport?.querySelector(".project-container");
    const firstCard = track?.querySelector(".card");
    if (!viewport || !track || !firstCard) return;

    const gap = parseFloat(getComputedStyle(track).columnGap) || 0;
    viewport.scrollBy({
      left: direction * (firstCard.getBoundingClientRect().width + gap),
      behavior: "smooth",
    });
  };

  useEffect(() => {
    if (window.emailjs) {
      window.emailjs.init({ publicKey: "XJA-_pfIDhnxTmETl" });
    }
    return () => window.clearTimeout(popupTimer.current);
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }

    if (!window.emailjs) {
      window.alert("Message could not be sent.");
      return;
    }

    window.emailjs
      .sendForm("service_v28ufip", "template_9o0vwbp", form)
      .then(() => {
        setPopupVisible(true);
        form.reset();
        window.clearTimeout(popupTimer.current);
        popupTimer.current = window.setTimeout(
          () => setPopupVisible(false),
          3000,
        );
      })
      .catch((error) => {
        window.alert("Message could not be sent.");
        console.error(error);
      });
  };

  return (
    <>
      <Navigation home />
      <section id="hero" className="hero">
        <div className="hero-text">
          <h1>Hello, I'm Yogesh Kumar</h1>
          <p>
            Frontend Developer passionate about creating beautiful, responsive
            websites.
          </p>
          <a href="#projects" className="btn">
            View Projects
          </a>
        </div>
      </section>

      <section id="about" className="about">
        <h2>About Me</h2>
        <div className="about-container">
          <div className="about-image">
            <img src={profileImage} alt="Yogesh Kumar" />
          </div>
          <div className="about-text">
            <p>
              I'm a B.Tech Information Technology graduate and passionate Web
              Developer focused on building modern, responsive, and
              user-friendly web applications. I enjoy transforming ideas into
              efficient digital solutions through clean, maintainable code and
              continuous learning. With a strong foundation in front-end and
              back-end development, I'm eager to contribute to meaningful
              projects, solve real-world problems, and grow as a full-stack
              developer while delivering exceptional user experiences.
            </p>
          </div>
        </div>
      </section>

      <section id="skills">
        <h2>Skills</h2>
        <div className="skill-box">
          {[
            ["fa-brands fa-html5", "HTML"],
            ["fa-brands fa-css3-alt", "CSS"],
            ["fa-brands fa-react", "ReactJS"],
            ["fa-brands fa-node-js", "Node.js"],
            ["fa-solid fa-database", "MySQL"],
            ["fa-brands fa-python", "Python"],
            ["fa-solid fa-diagram-project", "LangGraph"],
            ["fa-solid fa-link", "LangChain"],
            ["fa-solid fa-robot", "AI Agents"],
            ["fa-solid fa-magnifying-glass", "RAG"],
            ["fa-solid fa-layer-group", "Vector Databases"],
            ["fa-solid fa-server", "Express.js"],
            ["fa-solid fa-code", "REST APIs"],
            ["fa-solid fa-network-wired", "FastAPI"],
            ["fa-brands fa-git-alt", "Git"],
            ["fa-brands fa-github", "GitHub"],
            ["fa-solid fa-brain", "LLMs"],
          ].map(([icon, skill]) => (
            <div key={skill}>
              <i className={icon}></i>
              <h3>{skill}</h3>
            </div>
          ))}
        </div>
      </section>

      <section id="projects">
        <h2 style={{ color: "white" }}>Projects</h2>
        <div className="project-carousel">
          <div className="project-carousel-controls">
            <button
              type="button"
              className="project-carousel-arrow"
              aria-label="Previous project"
              onClick={() => scrollProjects(-1)}
            >
              <i className="fa-solid fa-arrow-left"></i>
            </button>
            <button
              type="button"
              className="project-carousel-arrow"
              aria-label="Next project"
              onClick={() => scrollProjects(1)}
            >
              <i className="fa-solid fa-arrow-right"></i>
            </button>
          </div>
          <div className="project-viewport" ref={projectsViewportRef}>
            <div className="project-container">
              {[
                [
                  "fa-solid fa-robot",
                  project1Image,
                  "E-Commerce Multi-Agent Chatbot Using MCPs",
                  "project-5-multi-agent-chatbot.html",
                  "1",
                ],
                [
                  "fa-solid fa-envelope-open-text",
                  project2Image,
                  "Mail Classification AI Agent",
                  "project-4-mail-classification.html",
                  "2",
                ],
                [
                  "fa-solid fa-comments",
                  project3Image,
                  "RAG Chatbot",
                  "project-3-rag-chatbot.html",
                  "3",
                ],
                [
                  "fa-solid fa-cart-shopping",
                  project4Image,
                  "E-Commerce Website",
                  "project-2-ecommerce.html",
                  "4",
                ],
                [
                  "fa-solid fa-user",
                  project5Image,
                  "Portfolio Website",
                  "portfolio.html",
                  "5",
                ],
              ].map(([icon, image, title, href, number]) => (
                <div className="card" key={href}>
                  <div className="project-icon">
                    <i className={icon}></i>
                  </div>
                  <img src={image} alt={title} />
                  <h3>
                    {number}. {title}
                  </h3>
                  <a href={href}>Read More</a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="contact">
        <h2 style={{ color: "black" }}>Contact Me</h2>
        <form id="contact-form" onSubmit={handleSubmit}>
          <input type="text" name="name" placeholder="Your Name" required />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea name="message" placeholder="Your Message" required />
          <button type="submit">Send Message</button>
        </form>
      </section>

      <footer>
        <div className="footer-container">
          <div className="footer-left">
            <h3>Let's Connect</h3>
            <div className="social-links">
              <a
                href="https://github.com/Yogi-webdev"
                target="_blank"
                rel="noreferrer"
              >
                <i className="fa-brands fa-github"></i>GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/ykyogi"
                target="_blank"
                rel="noreferrer"
              >
                <i className="fa-brands fa-linkedin"></i>LinkedIn
              </a>
              <a href="mailto:yogeshkumaryogi1802@gmail.com">
                <i className="fa-solid fa-envelope"></i>Email
              </a>
              <a
                href="https://wa.me/916380715536"
                target="_blank"
                rel="noreferrer"
              >
                <i className="fa-brands fa-whatsapp"></i>WhatsApp
              </a>
              <a
                href="https://www.instagram.com/yogi_hiphopers?igsh=bGs2ZWc4bGExaHhj"
                target="_blank"
                rel="noreferrer"
              >
                <i className="fa-brands fa-instagram"></i>Instagram
              </a>
            </div>
          </div>
          <div className="footer-right">
            <a href="#" className="footer-logo">
              PORTFOLIO
            </a>
            <a href="#hero">Home</a>
            <a href="#about">About</a>
            <a href="#skills">Skills</a>
            <a href="#projects">Projects</a>
            <a href="#contact">Contact</a>
          </div>
        </div>
        <p className="copyright">© 2026 Yogesh Kumar. All Rights Reserved.</p>
      </footer>

      <div
        id="popup"
        className={`popup${popupVisible ? " show" : ""}`}
        role="status"
        aria-live="polite"
      >
        <i className="fa-solid fa-circle-check"></i>
        <span>Message sent successfully!</span>
      </div>
    </>
  );
}

function ProjectDetails({ project }) {
  const isLegacyDetail = !project.featureHeading;
  return (
    <>
      <Navigation />
      <section className="project-details">
        <h2>{project.title}</h2>
        <img src={project.image} alt={project.title.replace(/^\d+\. /, "")} />
        <h3>{isLegacyDetail ? "Project Overview" : "About this Project"}</h3>
        <p>{project.overview}</p>
        <h3>{project.featureHeading || "Key Features"}</h3>
        <ul>
          {project.features.map((feature) => (
            <li key={feature}>{feature}</li>
          ))}
        </ul>
        <h3>{project.technologyHeading || "Tech Stack"}</h3>
        {isLegacyDetail ? (
          <div className="tech-stack">
            {project.technologies.map(([icon, name]) => (
              <div className="tech-stack-item" key={name}>
                {icon && <i className={icon}></i>}
                <span>{name}</span>
              </div>
            ))}
          </div>
        ) : (
          <ul>
            {project.technologies.map(([, name]) => (
              <li key={name}>{name}</li>
            ))}
          </ul>
        )}
        {project.learned && (
          <>
            <h3>What I Learned</h3>
            <p>{project.learned}</p>
          </>
        )}
        <div className="project-actions">
          <a href="index.html#projects" className="back-btn">
            {project.featureHeading ? "← Back" : "← Back to Projects"}
          </a>
          <a
            href={project.githubUrl}
            className="github-btn"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fa-brands fa-github" aria-hidden="true"></i>
            View on GitHub
          </a>
        </div>
      </section>
    </>
  );
}

export default function App() {
  const page = document.body.dataset.page || "home";

  useEffect(() => {
    document.title = pageTitles[page] || pageTitles.home;
  }, [page]);

  return page === "home" ? (
    <HomePage />
  ) : (
    <ProjectDetails project={projects[page] || projects.portfolio} />
  );
}
