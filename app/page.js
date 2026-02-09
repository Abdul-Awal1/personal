"use client"; // This directive is necessary for using hooks like useState and useEffect

import React, { useState, useEffect, useRef } from "react";
import {
  Home,
  User,
  Briefcase,
  Mail,
  Linkedin,
  Github,
  ExternalLink,
  Menu,
  X,
  Eye,
  Sun,
  Moon,
  ArrowUpCircle,
  Award,
  Calendar,
  BookOpen,
  Cpu,
  Copy,
  CheckCircle,
  ChevronDown,
  ShieldCheck,
  Star,
  FileText,
  GraduationCap,
} from "lucide-react";

// --- Data from Rumana Khatun's CV ---
const workExperienceData = [
  {
    id: 1,
    title: "Software Quality Assurance",
    company: "OVAL AD",
    period: "Dec 2024 - Apr 2025",
    description:
      "Contributed to ensuring product stability and quality through meticulous testing and collaboration with the development team.",
    logoUrl: "/oval.jpg",
    tags: ["Bug Reporting", "Test Cases", "Product Quality", "Collaboration"],
    details: [
      "Identified and documented critical bugs, ensuring product stability.",
      "Improved test coverage through comprehensive test cases.",
      "Enhanced product quality via thorough testing and collaboration.",
      "Worked closely with developers to resolve issues.",
      "Maintained clear test reports and documentation.",
    ],
  },
  {
    id: 2,
    title: "Research Assistant (Data Analyst)",
    company: "American International University",
    period: "Jul 2024 - Oct 2024",
    description:
      "Assisted in data-related tasks, gaining hands-on experience in data analysis and research methodologies.",
    logoUrl: "/aiub.jpeg",
    tags: ["Data Annotation", "Data Analysis", "Excel", "Research"],
    details: [
      "Contributed to data annotation, leveling, and analysis using Excel and other tools.",
      "Organized and interpreted research findings efficiently.",
      "Gained hands-on experience, enhancing academic and professional growth.",
      "Developed insights into the research process and practical applications.",
    ],
  },
  {
    id: 3,
    title: "Software Quality Assurance (Intern)",
    company: "Acote Group",
    period: "Jan 2024 - Jun 2024",
    description:
      "Gained foundational experience in software testing, including writing test cases and collaborating with developers.",
    logoUrl: "/acote-logo.png",
    tags: ["Internship", "Software Testing", "Bug Reporting", "Test Execution"],
    details: [
      "Gained hands-on experience in software testing during my internship.",
      "Wrote and executed test cases, identifying and reporting bugs.",
      "Collaborated with the development team to ensure product quality.",
    ],
  },
];
const projectsData = [
  {
    id: 1,
    title: "Hospital Management System",
    description:
      "A system to streamline patient data management, appointment scheduling, and record-keeping.",
    imageUrl:
      "https://images.unsplash.com/photo-1586773860418-d37222d8fce3?q=80&w=2073&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    tags: ["HTML", "CSS", "SQL", "Python", "JIRA"],
    liveLink: "#",
    githubLink: "#",
  },
  {
    id: 2,
    title: "Titanic Survival Prediction",
    description:
      "A machine learning model to predict the survival of individuals on the Titanic, using data preprocessing, model training, and evaluation.",
    imageUrl: "/TitanicSurvivalPrediction.jpg", // use relative path from public folder
    tags: ["Machine Learning", "Python", "Data Science", "Kaggle"],
    liveLink: "#",
    githubLink: "#",
  },
];

const educationData = {
  degree: "Bachelor of Computer Science Engineering",
  university: "American International University-Bangladesh",
  period: "2020 - 2024",
  logoUrl: "/aiub.jpeg",
  others: [
    {
      degree: "Higher Secondary Certificate in Science",
      institution: "Govt. M.R.W. College, Bagura",
      period: "2015",
    },
    {
      degree: "Secondary School Certificate in Science",
      institution: "M.G. High School, Gaibandha",
      period: "2013",
    },
  ],
  courses: [
    "Data Structures & Algorithms",
    "Object-Oriented Programming",
    "Database Management Systems",
    "Software Engineering",
    "Computer Networks",
    "Web Technologies",
    "Artificial Intelligence",
    "Machine Learning",
  ],
};

const certificationsData = [
  {
    id: 1,
    title: "Manual Testing Course",
    issuer: "Udemy Academy",
    icon: <Star className="text-yellow-500" />,
    details:
      "Completed a comprehensive course on manual software testing, covering fundamental principles, test case design, execution, and bug reporting.",
    certificateUrl:
      "https://placehold.co/800x600/eeeeee/222222?text=Certificate+of+Completion",
  },
  {
    id: 2,
    title: "SQA and Cyber Security",
    issuer: "IT Training BD",
    description:
      "Ongoing training covering test case writing, API & performance testing, project management tools, SQL, version control, and automation techniques.",
    icon: <ShieldCheck className="text-blue-500" />,
    details:
      "Currently enrolled in an intensive training program focused on Software Quality Assurance and Cyber Security. Key areas of study include advanced testing methodologies, security protocols, and industry-standard tools.",
    certificateUrl:
      "https://placehold.co/800x600/eeeeee/222222?text=Proof+of+Enrollment",
  },
];

// Framer Motion-like component (simplified for this environment)
const MotionDiv = ({
  children,
  initial,
  animate,
  transition,
  className,
  ...props
}) => {
  const ref = useRef(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 },
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        // eslint-disable-next-line react-hooks/exhaustive-deps
        observer.unobserve(ref.current);
      }
    };
  }, []);

  const combinedStyle = {
    ...initial,
    ...(isInView ? animate : {}),
    transition: `all ${transition?.duration || 500}ms ${
      transition?.ease || "ease-out"
    } ${transition?.delay || 0}ms`,
  };

  return (
    <div ref={ref} style={combinedStyle} className={className} {...props}>
      {children}
    </div>
  );
};

// Helper component for section titles
const SectionTitle = ({ title, subtitle }) => (
  <MotionDiv
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 500 }}
    className="mb-16 text-center"
  >
    <h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-sky-500 to-blue-600 dark:from-sky-400 dark:to-blue-500 mb-4">
      {title}
    </h2>
    <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
      {subtitle}
    </p>
  </MotionDiv>
);

// Navbar Component
const Navbar = ({ onNavigate, darkMode, toggleDarkMode }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeLink, setActiveLink] = useState("home");

  const navLinks = [
    { href: "home", label: "Home", icon: <Home size={18} /> },
    { href: "about", label: "About", icon: <User size={18} /> },
    { href: "experience", label: "Experience", icon: <Briefcase size={18} /> },
    { href: "projects", label: "Projects", icon: <Cpu size={18} /> },
    {
      href: "education",
      label: "Education",
      icon: <GraduationCap size={18} />,
    },
    { href: "contact", label: "Contact", icon: <Mail size={18} /> },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setIsScrolled(scrollY > 50);

      const navbarHeight = document.querySelector("nav")?.offsetHeight || 80;
      const scrollPosition = scrollY + navbarHeight + 100;

      let currentSectionId = "home";

      if (window.innerHeight + scrollY >= document.body.offsetHeight - 50) {
        currentSectionId = "contact";
      } else {
        for (let i = navLinks.length - 1; i >= 0; i--) {
          const link = navLinks[i];
          const section = document.getElementById(link.href);
          if (section && section.offsetTop <= scrollPosition) {
            currentSectionId = link.href;
            break;
          }
        }
      }
      setActiveLink(currentSectionId);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // Initial check
    return () => window.removeEventListener("scroll", handleScroll);
  }, []); // Removed navLinks dependency as it's static

  const handleNavClick = (href) => {
    onNavigate(href);
    setActiveLink(href);
    setIsOpen(false);
  };

  return (
    <nav
      className={`fixed w-full top-0 z-50 transition-all duration-300 ease-in-out ${
        isScrolled
          ? "bg-white/80 dark:bg-slate-900/80 backdrop-blur-md shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <MotionDiv
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 500, delay: 0.2 }}
          >
            <a
              href="#home"
              onClick={() => handleNavClick("home")}
              className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-sky-500 to-blue-600 dark:from-sky-400 dark:to-blue-500 hover:opacity-80 transition-opacity"
            >
              RUMANA KHATUN
            </a>
          </MotionDiv>
          <div className="hidden md:flex items-center space-x-1">
            {navLinks.map((link, index) => (
              <MotionDiv
                key={link.href}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 300, delay: 0.1 * index + 0.3 }}
              >
                <a
                  href={`#${link.href}`}
                  onClick={() => handleNavClick(link.href)}
                  className={`flex items-center px-4 py-2 rounded-md text-md font-medium transition-all duration-300 ease-in-out ${
                    activeLink === link.href
                      ? "bg-sky-500 text-white shadow-md dark:bg-sky-600"
                      : "text-slate-700 dark:text-slate-300 hover:bg-sky-100 dark:hover:bg-slate-800 hover:text-sky-600 dark:hover:text-sky-400"
                  }`}
                >
                  {link.icon}
                  <span className="ml-2">{link.label}</span>
                </a>
              </MotionDiv>
            ))}
            <MotionDiv
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 300, delay: 0.8 }}
            >
              <button
                onClick={toggleDarkMode}
                className="ml-4 p-2 rounded-full text-slate-500 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
                aria-label="Toggle dark mode"
              >
                {darkMode ? (
                  <Sun size={20} className="text-yellow-400" />
                ) : (
                  <Moon size={20} />
                )}
              </button>
            </MotionDiv>
          </div>
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleDarkMode}
              className="mr-2 p-2 rounded-full text-slate-500 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
              aria-label="Toggle dark mode"
            >
              {darkMode ? (
                <Sun size={22} className="text-yellow-400" />
              ) : (
                <Moon size={22} />
              )}
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-slate-500 dark:text-slate-400 hover:text-sky-600 dark:hover:text-sky-400 hover:bg-sky-100 dark:hover:bg-slate-800 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-sky-500"
            >
              <span className="sr-only">Open main menu</span>
              {!isOpen ? <Menu size={24} /> : <X size={24} />}
            </button>
          </div>
        </div>
      </div>
      {isOpen && (
        <MotionDiv
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          transition={{ duration: 300, ease: "easeInOut" }}
          className="md:hidden bg-white dark:bg-slate-900 shadow-lg origin-top"
          id="mobile-menu"
        >
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={`#${link.href}`}
                onClick={() => handleNavClick(link.href)}
                className={`flex items-center px-3 py-3 rounded-md text-base font-medium transition-colors duration-300 ${
                  activeLink === link.href
                    ? "bg-sky-500 text-white dark:bg-sky-600"
                    : "text-slate-700 dark:text-slate-300 hover:bg-sky-100 dark:hover:bg-slate-800 hover:text-sky-600 dark:hover:text-sky-400"
                }`}
              >
                {link.icon}
                <span className="ml-3">{link.label}</span>
              </a>
            ))}
          </div>
        </MotionDiv>
      )}
    </nav>
  );
};

// --- Custom Hooks ---
const useTypewriter = (text, speed = 40) => {
  const [displayText, setDisplayText] = useState("");
  const indexRef = useRef(0);

  useEffect(() => {
    setDisplayText(""); // Reset before starting
    indexRef.current = 0;

    const typingInterval = setInterval(() => {
      if (indexRef.current < text.length) {
        setDisplayText((prev) => prev + text.charAt(indexRef.current));
        indexRef.current++;
      } else {
        clearInterval(typingInterval);
      }
    }, speed);

    return () => clearInterval(typingInterval);
  }, [text, speed]);

  return displayText;
};

// --- Interactive Background Component ---
const ParticleBackground = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    let animationFrameId;

    let particles = [];
    const particleCount = 70;

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    class Particle {
      constructor(x, y, directionX, directionY, size, color) {
        this.x = x;
        this.y = y;
        this.directionX = directionX;
        this.directionY = directionY;
        this.size = size;
        this.color = color;
      }
      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2, false);
        ctx.fillStyle = this.color;
        ctx.fill();
      }
      update() {
        if (this.x > canvas.width || this.x < 0)
          this.directionX = -this.directionX;
        if (this.y > canvas.height || this.y < 0)
          this.directionY = -this.directionY;

        this.x += this.directionX;
        this.y += this.directionY;
        this.draw();
      }
    }

    const init = () => {
      handleResize();
      particles = [];
      for (let i = 0; i < particleCount; i++) {
        let size = Math.random() * 2 + 1;
        let x = Math.random() * (innerWidth - size * 2 - size * 2) + size * 2;
        let y = Math.random() * (innerHeight - size * 2 - size * 2) + size * 2;
        let directionX = Math.random() * 0.4 - 0.2;
        let directionY = Math.random() * 0.4 - 0.2;
        let color = document.documentElement.classList.contains("dark")
          ? "rgba(255, 255, 255, 0.5)"
          : "rgba(0, 0, 0, 0.5)";
        particles.push(new Particle(x, y, directionX, directionY, size, color));
      }
    };

    const connect = () => {
      let opacityValue = 1;
      for (let a = 0; a < particles.length; a++) {
        for (let b = a; b < particles.length; b++) {
          let distance =
            (particles[a].x - particles[b].x) *
              (particles[a].x - particles[b].x) +
            (particles[a].y - particles[b].y) *
              (particles[a].y - particles[b].y);
          if (distance < (canvas.width / 7) * (canvas.height / 7)) {
            opacityValue = 1 - distance / 20000;
            let color = document.documentElement.classList.contains("dark")
              ? `rgba(14, 165, 233, ${opacityValue})`
              : `rgba(56, 189, 248, ${opacityValue})`;
            ctx.strokeStyle = color;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(particles[a].x, particles[a].y);
            ctx.lineTo(particles[b].x, particles[b].y);
            ctx.stroke();
          }
        }
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, innerWidth, innerHeight);
      for (let i = 0; i < particles.length; i++) {
        particles[i].update();
      }
      connect();
      animationFrameId = requestAnimationFrame(animate);
    };

    init();
    animate();

    window.addEventListener("resize", handleResize);

    // Re-init on theme change
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.attributeName === "class") {
          init();
        }
      });
    });
    observer.observe(document.documentElement, { attributes: true });

    return () => {
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationFrameId);
      observer.disconnect();
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute top-0 left-0 w-full h-full z-0"
    ></canvas>
  );
};

// Hero Section Component
const HeroSection = ({ onNavigate }) => {
  const typedName = useTypewriter("R.UMANA KHATUN", 90);

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-slate-50 dark:bg-slate-950 pt-20 overflow-hidden relative"
    >
      <ParticleBackground />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <MotionDiv
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 700, ease: "easeOut", delay: 0.2 }}
          className="max-w-3xl mx-auto"
        >
          <MotionDiv
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 500, delay: 0.5 }}
          >
            <img
              src="/rumana.jpeg" // Assuming the image is named rumana.jpg and in the public folder
              alt="Rumana Khatun"
              className="w-36 h-36 md:w-44 md:h-44 rounded-full mx-auto mb-8 shadow-2xl border-4 border-white dark:border-slate-700 transform hover:scale-105 transition-transform duration-300"
            />
          </MotionDiv>
          <MotionDiv
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 500, delay: 0.7 }}
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-slate-800 dark:text-white leading-tight mb-2">
              Hi, I'm{" "}
              <span className="whitespace-pre bg-clip-text text-transparent bg-gradient-to-r from-sky-500 to-blue-600 dark:from-sky-400 dark:to-blue-500 inline-block min-w-[15ch]">
                {typedName}
              </span>
              <span className="animate-cursor-blink">|</span>
            </h1>

            <p className="text-2xl sm:text-3xl font-semibold text-slate-700 dark:text-slate-200 mb-6">
              Software Quality Assurance
            </p>
          </MotionDiv>
          <MotionDiv
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 500, delay: 0.9 }}
          >
            <p className="mt-4 text-lg sm:text-xl text-slate-600 dark:text-slate-300 max-w-xl mx-auto">
              I am a hardworking and ambitious fresh graduate with a passion for
              IT. I have strong communication skills and am eager to develop new
              skills and gain practical experience while contributing to the
              success of my workplace.
            </p>
          </MotionDiv>
          <MotionDiv
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 500, delay: 1.1 }}
            className="mt-10 flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6"
          >
            <a
              href="#experience"
              onClick={() => onNavigate("experience")}
              className="px-8 py-3 bg-sky-600 text-white text-lg font-semibold rounded-lg shadow-lg hover:bg-sky-700 transition-all duration-300 transform hover:scale-105 hover:shadow-xl flex items-center group"
            >
              View My Experience{" "}
              <Briefcase
                size={20}
                className="ml-2 transform group-hover:rotate-6 transition-transform"
              />
            </a>
            <a
              href="#contact"
              onClick={() => onNavigate("contact")}
              className="px-8 py-3 bg-slate-200 text-slate-700 text-lg font-semibold rounded-lg shadow-lg hover:bg-slate-300 dark:bg-slate-700 dark:text-slate-200 dark:hover:bg-slate-600 transition-all duration-300 transform hover:scale-105 hover:shadow-xl flex items-center group"
            >
              Get In Touch{" "}
              <Mail
                size={20}
                className="ml-2 transform group-hover:translate-x-1 transition-transform"
              />
            </a>
          </MotionDiv>
          <MotionDiv
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 500, delay: 1.3 }}
            className="mt-12 flex justify-center space-x-6"
          >
            <a
              href="https://github.com/Ruma-Jaman"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-500 dark:text-slate-400 hover:text-sky-600 dark:hover:text-sky-400 transition-colors transform hover:-translate-y-1"
            >
              <Github size={30} />
            </a>
            <a
              href="https://www.linkedin.com/in/rumana-khatun-02a9471ba/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-500 dark:text-slate-400 hover:text-sky-600 dark:hover:text-sky-400 transition-colors transform hover:-translate-y-1"
            >
              <Linkedin size={30} />
            </a>
          </MotionDiv>
        </MotionDiv>
        <a
          href="#about"
          onClick={() => onNavigate("about")}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20"
        >
          <div className="animate-bounce bg-white dark:bg-slate-800 p-2 w-10 h-10 ring-1 ring-slate-900/5 dark:ring-slate-200/20 shadow-lg rounded-full flex items-center justify-center">
            <ChevronDown className="text-slate-500 dark:text-slate-400" />
          </div>
        </a>
      </div>
    </section>
  );
};

const SkillBadge = ({ skill }) => (
  <div className="flex items-center bg-slate-100 dark:bg-slate-800/80 p-3 rounded-lg shadow-sm transition-all duration-300 hover:scale-105 hover:shadow-md hover:bg-slate-200 dark:hover:bg-slate-700/90 border border-transparent hover:border-sky-500">
    <span className="font-medium text-slate-700 dark:text-slate-200">
      {skill}
    </span>
  </div>
);

const AboutSection = () => {
  const manualTestingSkills = [
    "Requirement Analysis",
    "Test Planning",
    "Test Case Design",
    "Test Execution",
    "Bug Reporting",
    "Root Cause Analysis",
  ];
  const toolsAndTech = ["Postman", "Jira", "Git", "JAVA", "Python", "MySQL"];
  const concepts = ["SDLC", "STLC", "OOP"];

  return (
    <section
      id="about"
      className="py-20 md:py-28 bg-white dark:bg-slate-900 overflow-hidden"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          title="About Me"
          subtitle="My skills, passion for quality, and professional background."
        />
        <div className="grid lg:grid-cols-2 gap-12 md:gap-20 items-center">
          <MotionDiv
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 600 }}
            className="prose prose-lg dark:prose-invert max-w-none text-slate-700 dark:text-slate-300"
          >
            <p>
              I am a hardworking and ambitious fresh graduate with a strong
              passion for Information Technology, specializing in Software
              Quality Assurance. My goal is to leverage my skills to ensure the
              highest quality for software products.
            </p>
            <p>
              I possess strong communication skills and am always eager to learn
              new technologies, develop new skills, and gain practical
              experience. I am committed to contributing positively to the
              success of any workplace I am a part of.
            </p>
          </MotionDiv>
          <MotionDiv
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 600, delay: 0.2 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-semibold text-slate-800 dark:text-white mb-4 flex items-center">
                <CheckCircle size={24} className="mr-3 text-sky-500" />
                Manual Testing
              </h3>
              <div className="flex flex-wrap gap-3">
                {manualTestingSkills.map((skill) => (
                  <SkillBadge key={skill} skill={skill} />
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-semibold text-slate-800 dark:text-white mb-4 flex items-center">
                <Cpu size={24} className="mr-3 text-sky-500" />
                Tools & Technologies
              </h3>
              <div className="flex flex-wrap gap-3">
                {toolsAndTech.map((skill) => (
                  <SkillBadge key={skill} skill={skill} />
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-semibold text-slate-800 dark:text-white mb-4 flex items-center">
                <BookOpen size={24} className="mr-3 text-sky-500" />
                Concepts
              </h3>
              <div className="flex flex-wrap gap-3">
                {concepts.map((skill) => (
                  <SkillBadge key={skill} skill={skill} />
                ))}
              </div>
            </div>
          </MotionDiv>
        </div>
      </div>
    </section>
  );
};

const ExperienceSection = ({ onOpenModal }) => {
  return (
    <section
      id="experience"
      className="py-20 md:py-28 bg-slate-50 dark:bg-slate-950 overflow-hidden"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          title="Work Experience"
          subtitle="My professional journey and contributions"
        />
        <div className="relative max-w-2xl mx-auto">
          <div
            className="absolute left-9 top-0 h-full w-0.5 bg-slate-200 dark:bg-slate-700"
            aria-hidden="true"
          ></div>
          <div className="space-y-12">
            {workExperienceData.map((exp, index) => (
              <MotionDiv
                key={exp.id}
                className="relative pl-20"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 500, delay: index * 0.2 }}
              >
                <div className="absolute left-[29px] top-1 h-5 w-5 bg-white dark:bg-slate-950 rounded-full border-4 border-sky-500"></div>
                <div className="bg-white dark:bg-slate-800/50 backdrop-blur-sm border border-slate-200 dark:border-slate-700/50 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 group">
                  <div className="flex items-start justify-between">
                    <div>
                      <p className="text-sm font-medium text-sky-600 dark:text-sky-400 mb-1">
                        {exp.period}
                      </p>
                      <h3 className="text-2xl font-semibold text-slate-800 dark:text-white mb-1 group-hover:text-sky-600 dark:group-hover:text-sky-400 transition-colors">
                        {exp.title}
                      </h3>
                      <p className="text-md font-semibold text-slate-500 dark:text-slate-400 mb-3">
                        {exp.company}
                      </p>
                    </div>
                    <div className="bg-white p-2 rounded-md shadow-sm ml-4 flex-shrink-0 max-w-[100px] w-full sm:max-w-[120px]">
                      <img
                        src={exp.logoUrl}
                        alt={`${exp.company} logo`}
                        className="w-full h-auto object-contain"
                        onError={(e) => {
                          e.target.onerror = null;
                          e.target.src =
                            "https://placehold.co/150x50/a7a7a7/ffffff?text=Logo";
                        }}
                      />
                    </div>
                  </div>
                  <p className="text-slate-600 dark:text-slate-400 text-sm mb-4 sm:mt-2">
                    {exp.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-5">
                    {exp.tags.map((tag) => (
                      <span
                        key={tag}
                        className="inline-block bg-sky-100 dark:bg-sky-900/50 text-sky-700 dark:text-sky-300 text-xs font-semibold px-3 py-1 rounded-full shadow-sm"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <button
                    onClick={() => onOpenModal(exp)}
                    className="w-full text-center px-4 py-2 bg-sky-600 text-white rounded-lg hover:bg-sky-700 focus:ring-4 focus:ring-sky-300 dark:focus:ring-sky-800 transition-all duration-300 font-medium flex items-center justify-center transform group-hover:scale-105"
                  >
                    View Details <Eye size={18} className="ml-2" />
                  </button>
                </div>
              </MotionDiv>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
const ExperienceCard = ({ exp, onOpenModal }) => (
  <>
    <div className="flex items-start justify-between mb-4">
      <div>
        <p className="text-sm font-medium text-sky-600 dark:text-sky-400 mb-1">
          {exp.period}
        </p>
        <h3 className="text-2xl font-semibold text-slate-800 dark:text-white mb-1 group-hover:text-sky-600 dark:group-hover:text-sky-400 transition-colors">
          {exp.title}
        </h3>
        <p className="text-md font-semibold text-slate-500 dark:text-slate-400">
          {exp.company}
        </p>
      </div>
      <div className="bg-white p-2 rounded-md shadow-sm ml-4 flex-shrink-0">
        <img
          src={exp.logoUrl}
          alt={`${exp.company} logo`}
          className="w-12 h-12 object-contain"
          onError={(e) => {
            e.target.onerror = null;
            e.target.src =
              "https://placehold.co/100x100/a7a7a7/ffffff?text=Logo";
          }}
        />
      </div>
    </div>
    <p className="text-slate-600 dark:text-slate-400 text-sm mb-4">
      {exp.description}
    </p>
    <div className="flex flex-wrap gap-2 mb-5">
      {exp.tags.map((tag) => (
        <span
          key={tag}
          className="inline-block bg-sky-100 dark:bg-sky-900/50 text-sky-700 dark:text-sky-300 text-xs font-semibold px-3 py-1 rounded-full shadow-sm"
        >
          {tag}
        </span>
      ))}
    </div>
    <button
      onClick={() => onOpenModal(exp)}
      className="w-full text-center px-4 py-2 bg-sky-600 text-white rounded-lg hover:bg-sky-700 focus:ring-4 focus:ring-sky-300 dark:focus:ring-sky-800 transition-all duration-300 font-medium flex items-center justify-center transform group-hover:scale-105"
    >
      View Details <Eye size={18} className="ml-2" />
    </button>
  </>
);

// --- NEW Projects Section ---
const ProjectsSection = () => {
  return (
    <section
      id="projects"
      className="py-20 md:py-28 bg-white dark:bg-slate-900 overflow-hidden"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          title="My Projects"
          subtitle="A selection of academic projects I've worked on."
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projectsData.map((project, index) => (
            <MotionDiv
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 500, delay: index * 0.1 }}
              className="group bg-white dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700/50 shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col overflow-hidden"
            >
              <div className="relative overflow-hidden bg-slate-100 dark:bg-slate-800">
                <img
                  src={project.imageUrl}
                  alt={project.title}
                  // UPDATED CLASS:
                  // Changed 'h-56 object-cover' to 'h-auto object-contain'
                  // This ensures the full image is visible without cropping
                  className="w-full h-auto object-contain group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold text-slate-800 dark:text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-slate-600 dark:text-slate-400 text-sm mb-4 flex-grow">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-5">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="inline-block bg-sky-100 dark:bg-sky-900/50 text-sky-700 dark:text-sky-300 text-xs font-semibold px-3 py-1 rounded-full shadow-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="mt-auto">
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-full text-center px-4 py-2 bg-sky-600 text-white rounded-lg hover:bg-sky-700 transition-colors font-medium flex items-center justify-center ${
                      project.liveLink === "#"
                        ? "opacity-50 cursor-not-allowed"
                        : ""
                    }`}
                  >
                    View Project <ExternalLink size={16} className="ml-2" />
                  </a>
                </div>
              </div>
            </MotionDiv>
          ))}
        </div>
      </div>
    </section>
  );
};

const CertificationsSection = ({ onOpenModal }) => {
  return (
    <section
      id="certifications"
      className="py-20 md:py-28 bg-slate-50 dark:bg-slate-950 overflow-hidden"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          title="Certifications & Training"
          subtitle="My commitment to continuous learning and professional development."
        />
        <div className="max-w-3xl mx-auto grid md:grid-cols-2 gap-8">
          {certificationsData.map((cert, index) => (
            <MotionDiv
              key={cert.id}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 500, delay: index * 0.2 }}
              className="bg-white dark:bg-slate-800/50 p-6 rounded-xl shadow-lg border border-slate-200 dark:border-slate-700/50 flex flex-col text-center items-center"
            >
              <div className="flex-shrink-0 bg-sky-100 dark:bg-sky-900/50 p-4 rounded-full mb-4">
                {React.cloneElement(cert.icon, { size: 32 })}
              </div>
              <h3 className="text-xl font-bold text-slate-800 dark:text-white">
                {cert.title}
              </h3>
              <p className="font-semibold text-sky-600 dark:text-sky-400 mb-3">
                {cert.issuer}
              </p>
              <p className="text-sm text-slate-600 dark:text-slate-400 flex-grow mb-4">
                {cert.description
                  ? `${cert.description.substring(0, 70)}...`
                  : "Completed a comprehensive course."}
              </p>
              <button
                onClick={() => onOpenModal(cert)}
                className="w-full mt-auto text-center px-4 py-2 bg-slate-200 text-slate-700 dark:bg-slate-700 dark:text-slate-200 rounded-lg hover:bg-slate-300 dark:hover:bg-slate-600 transition-all duration-300 font-medium flex items-center justify-center"
              >
                View Details <FileText size={16} className="ml-2" />
              </button>
            </MotionDiv>
          ))}
        </div>
      </div>
    </section>
  );
};

const EducationSection = () => {
  return (
    <section
      id="education"
      className="py-20 md:py-28 bg-white dark:bg-slate-900 overflow-hidden"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          title="Education"
          subtitle="My academic background and qualifications"
        />
        <div className="max-w-5xl mx-auto bg-gradient-to-br from-sky-50 to-blue-100 dark:from-slate-800/50 dark:to-sky-900/30 p-8 rounded-2xl shadow-xl border border-slate-200 dark:border-slate-700/50">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            {/* Main Degree Info */}
            <MotionDiv
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 600 }}
            >
              <div className="flex items-center gap-6 mb-4">
                <div className="bg-white p-2 rounded-md shadow-md">
                  <img
                    src={educationData.logoUrl}
                    alt="AIUB Logo"
                    className="h-20 w-20 object-contain"
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src =
                        "https://placehold.co/100x100/a7a7a7/ffffff?text=AIUB";
                    }}
                  />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-slate-800 dark:text-white">
                    {educationData.degree}
                  </h3>
                  <p className="text-lg font-semibold text-sky-600 dark:text-sky-400 mt-1">
                    {educationData.university}
                  </p>
                  <p className="text-slate-600 dark:text-slate-400 flex items-center mt-2 text-md">
                    <Calendar size={16} className="mr-2" />{" "}
                    {educationData.period}
                  </p>
                </div>
              </div>
              <div className="mt-6 space-y-4">
                {educationData.others.map((edu, index) => (
                  <div
                    key={index}
                    className="bg-white/50 dark:bg-slate-700/30 p-4 rounded-lg"
                  >
                    <h4 className="font-semibold text-slate-700 dark:text-slate-200">
                      {edu.degree}
                    </h4>
                    <p className="text-sm text-slate-600 dark:text-slate-400">
                      {edu.institution} - {edu.period}
                    </p>
                  </div>
                ))}
              </div>
            </MotionDiv>
            {/* Coursework */}
            <MotionDiv
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 600, delay: 0.2 }}
            >
              <h3 className="text-xl font-bold text-slate-800 dark:text-white mb-4 flex items-center">
                <BookOpen size={20} className="mr-3 text-sky-500" />
                Key Coursework
              </h3>
              <div className="flex flex-wrap gap-3">
                {educationData.courses.map((course) => (
                  <div
                    key={course}
                    className="bg-white dark:bg-slate-700/50 px-4 py-2 rounded-full shadow-sm"
                  >
                    <p className="font-medium text-slate-700 dark:text-slate-200 text-sm">
                      {course}
                    </p>
                  </div>
                ))}
              </div>
            </MotionDiv>
          </div>
        </div>
      </div>
    </section>
  );
};

const ExperienceModal = ({ experience, onClose }) => {
  if (!experience) return null;
  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-[100] p-4"
      style={{ animation: "fadeIn 0.3s ease-out forwards" }}
      onClick={onClose}
    >
      <MotionDiv
        className="bg-white dark:bg-slate-800 rounded-lg shadow-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto relative"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 300, ease: "easeOut" }}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="p-6 md:p-8">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-slate-500 dark:text-slate-400 hover:text-red-500 dark:hover:text-red-400 transition-colors p-1 rounded-full hover:bg-slate-100 dark:hover:bg-slate-700 z-10"
          >
            <X size={28} />
          </button>
          <div className="pr-8 flex items-start gap-4">
            <div className="bg-white p-2 rounded-md shadow-sm flex-shrink-0">
              <img
                src={experience.logoUrl}
                alt={`${experience.company} logo`}
                className="h-10 w-auto object-contain"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src =
                    "https://placehold.co/150x50/a7a7a7/ffffff?text=Logo";
                }}
              />
            </div>
            <div>
              <p className="text-sm font-medium text-sky-600 dark:text-sky-400">
                {experience.period}
              </p>
              <h2 className="text-3xl font-bold text-slate-800 dark:text-white mt-1">
                {experience.title}
              </h2>
              <p className="text-xl font-semibold text-slate-600 dark:text-slate-300">
                {experience.company}
              </p>
            </div>
          </div>
          <div className="flex flex-wrap gap-2 my-6">
            {experience.tags.map((tag) => (
              <span
                key={tag}
                className="bg-sky-100 dark:bg-sky-900 text-sky-700 dark:text-sky-300 text-xs font-semibold px-3 py-1 rounded-full shadow-sm"
              >
                {tag}
              </span>
            ))}
          </div>
          <h3 className="text-xl font-semibold text-slate-800 dark:text-white mb-3">
            Key Responsibilities
          </h3>
          <ul className="space-y-2 list-disc list-inside text-slate-700 dark:text-slate-300 prose prose-slate dark:prose-invert max-w-none">
            {experience.details.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      </MotionDiv>
    </div>
  );
};

const CertificationModal = ({ certification, onClose }) => {
  if (!certification) return null;
  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-[100] p-4"
      style={{ animation: "fadeIn 0.3s ease-out forwards" }}
      onClick={onClose}
    >
      <MotionDiv
        className="bg-white dark:bg-slate-800 rounded-lg shadow-xl max-w-3xl w-full max-h-[90vh] overflow-y-auto relative"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 300, ease: "easeOut" }}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="p-6 md:p-8">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-slate-500 dark:text-slate-400 hover:text-red-500 dark:hover:text-red-400 transition-colors p-1 rounded-full hover:bg-slate-100 dark:hover:bg-slate-700 z-10"
          >
            <X size={28} />
          </button>
          <div className="pr-8 flex items-start gap-4 mb-6">
            <div className="flex-shrink-0 bg-sky-100 dark:bg-sky-900/50 p-3 rounded-full">
              {React.cloneElement(certification.icon, { size: 24 })}
            </div>
            <div>
              <h2 className="text-3xl font-bold text-slate-800 dark:text-white">
                {certification.title}
              </h2>
              <p className="text-xl font-semibold text-sky-600 dark:text-sky-400">
                {certification.issuer}
              </p>
            </div>
          </div>
          <p className="text-slate-700 dark:text-slate-300 mb-6">
            {certification.details}
          </p>
          <div>
            <img
              src={certification.certificateUrl}
              alt={`${certification.title} Certificate`}
              className="rounded-lg shadow-lg w-full h-auto border border-slate-200 dark:border-slate-700"
            />
          </div>
        </div>
      </MotionDiv>
    </div>
  );
};

// --- Redesigned Contact Section ---
const ContactSection = () => {
  const [copied, setCopied] = useState(false);
  const email = "rumajaman308@gmail.com";

  const handleCopy = () => {
    const textArea = document.createElement("textarea");
    textArea.value = email;
    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();
    try {
      document.execCommand("copy");
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy: ", err);
    }
    document.body.removeChild(textArea);
  };

  const contactLinks = [
    {
      name: "LinkedIn",
      icon: <Linkedin size={24} />,
      href: "https://www.linkedin.com/in/rumana-khatun-02a9471ba/",
    },
    {
      name: "GitHub",
      icon: <Github size={24} />,
      href: "https://github.com/Ruma-Jaman",
    },
  ];

  return (
    <section
      id="contact"
      className="py-20 md:py-28 bg-slate-50 dark:bg-slate-950 overflow-hidden"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle
          title="Let's Connect"
          subtitle="I'm always open to discussing new projects, creative ideas, or opportunities. Feel free to reach out!"
        />
        <MotionDiv
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 600 }}
          className="max-w-4xl mx-auto bg-white dark:bg-slate-800/50 backdrop-blur-sm border border-slate-200 dark:border-slate-700/50 rounded-2xl shadow-xl p-8 grid md:grid-cols-2 gap-10 items-center"
        >
          <div className="text-center md:text-left">
            <div className="inline-block bg-gradient-to-br from-sky-100 to-blue-200 dark:from-sky-900 dark:to-blue-900/50 p-4 rounded-full mb-6">
              <Mail size={32} className="text-sky-600 dark:text-sky-400" />
            </div>
            <h3 className="text-3xl font-bold text-slate-800 dark:text-white">
              Get in Touch
            </h3>
            <p className="text-slate-500 dark:text-slate-400 mt-2">
              The best way to reach me is via email. I'm looking forward to
              hearing from you!
            </p>
          </div>
          <div>
            <div className="relative mb-6">
              <div className="group flex items-center justify-between bg-slate-100 dark:bg-slate-700/50 p-4 rounded-lg border border-slate-200 dark:border-slate-600">
                <span className="text-sky-600 dark:text-sky-400 font-mono text-sm sm:text-base truncate">
                  {email}
                </span>
                <button
                  onClick={handleCopy}
                  className="p-2 rounded-md hover:bg-slate-200 dark:hover:bg-slate-600 transition-colors flex-shrink-0 ml-2"
                >
                  {copied ? (
                    <CheckCircle size={20} className="text-green-500" />
                  ) : (
                    <Copy
                      size={20}
                      className="text-slate-500 dark:text-slate-400"
                    />
                  )}
                </button>
              </div>
              {copied && (
                <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 text-xs bg-green-500 text-white px-2 py-1 rounded-md shadow-lg">
                  Copied!
                </div>
              )}
            </div>
            <div className="flex justify-center md:justify-start space-x-4">
              {contactLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-slate-100 dark:bg-slate-700/50 rounded-full text-slate-600 dark:text-slate-300 hover:bg-sky-100 dark:hover:bg-sky-800/50 hover:text-sky-600 dark:hover:text-sky-400 transition-all duration-300 transform hover:scale-110 shadow-sm hover:shadow-lg"
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>
        </MotionDiv>
      </div>
    </section>
  );
};

const Footer = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => setShowScrollTop(window.scrollY > 300);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer className="bg-slate-100 dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 text-center text-slate-600 dark:text-slate-400">
        <p className="text-sm">
          &copy; {new Date().getFullYear()} Rumana Khatun. All rights reserved.
        </p>
        <p className="text-xs mt-1">Based in Dhaka, Bangladesh.</p>
      </div>
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 right-6 bg-sky-600 hover:bg-sky-700 text-white p-3 rounded-full shadow-lg transition-all duration-300 ease-in-out transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-opacity-50 z-50 animate-bounce-once"
          aria-label="Scroll to top"
        >
          <ArrowUpCircle size={24} />
        </button>
      )}
    </footer>
  );
};

export default function App() {
  const [selectedExperience, setSelectedExperience] = useState(null);
  const [selectedCertification, setSelectedCertification] = useState(null);
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    // Set initial dark mode state from localStorage or system preference
    const isDark =
      localStorage.getItem("theme") === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches);
    setDarkMode(isDark);
    if (isDark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, []);

  const toggleDarkMode = () => {
    setDarkMode((prevMode) => {
      const newMode = !prevMode;
      if (newMode) {
        document.documentElement.classList.add("dark");
        localStorage.setItem("theme", "dark");
      } else {
        document.documentElement.classList.remove("dark");
        localStorage.setItem("theme", "light");
      }
      return newMode;
    });
  };

  const handleNavigate = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const navbarHeight = document.querySelector("nav")?.offsetHeight || 80;
      const elementPosition =
        element.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = elementPosition - navbarHeight;
      window.scrollTo({ top: offsetPosition, behavior: "smooth" });
    }
  };

  const handleOpenExperienceModal = (experience) => {
    setSelectedExperience(experience);
    document.body.style.overflow = "hidden";
  };

  const handleCloseExperienceModal = () => {
    setSelectedExperience(null);
    document.body.style.overflow = "auto";
  };

  const handleOpenCertificationModal = (certification) => {
    setSelectedCertification(certification);
    document.body.style.overflow = "hidden";
  };

  const handleCloseCertificationModal = () => {
    setSelectedCertification(null);
    document.body.style.overflow = "auto";
  };

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        if (selectedExperience) handleCloseExperienceModal();
        if (selectedCertification) handleCloseCertificationModal();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedExperience, selectedCertification]);

  useEffect(() => {
    const style = document.createElement("style");
    style.textContent = `
      @keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
      @keyframes bounce-once { 0%, 20%, 50%, 80%, 100% {transform: translateY(0) scale(1);} 40% {transform: translateY(-10px) scale(1.1);} 60% {transform: translateY(-5px) scale(1.05);} }
      .animate-bounce-once { animation: bounce-once 1.5s ease-out; }
      @keyframes cursor-blink { 0%, 100% { opacity: 1; } 50% { opacity: 0; } }
      .animate-cursor-blink { animation: cursor-blink 0.7s infinite; }
      body { -webkit-font-smoothing: antialiased; -moz-osx-font-smoothing: grayscale; }
    `;
    document.head.appendChild(style);
    return () => document.head.removeChild(style);
  }, []);

  return (
    <div className="font-inter bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 transition-colors duration-300">
      <Navbar
        onNavigate={handleNavigate}
        darkMode={darkMode}
        toggleDarkMode={toggleDarkMode}
      />
      <main>
        <HeroSection onNavigate={handleNavigate} />
        <AboutSection />
        <ExperienceSection onOpenModal={handleOpenExperienceModal} />
        <ProjectsSection />
        <CertificationsSection onOpenModal={handleOpenCertificationModal} />
        <EducationSection />
        <ContactSection />
      </main>
      <Footer />
      {selectedExperience && (
        <ExperienceModal
          experience={selectedExperience}
          onClose={handleCloseExperienceModal}
        />
      )}
      {selectedCertification && (
        <CertificationModal
          certification={selectedCertification}
          onClose={handleCloseCertificationModal}
        />
      )}
    </div>
  );
}
