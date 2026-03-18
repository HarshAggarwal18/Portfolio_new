import { useState, useCallback } from "react";
import "./styles/Work.css";
import WorkImage from "./WorkImage";
import { MdArrowBack, MdArrowForward } from "react-icons/md";
import { MdArrowOutward } from "react-icons/md";

const projects = [
  {
    title: "JobHook",
    category: "Secure Job & Recruitment Workflow Platform",
    tools:
      "Spring Boot, Spring Security, JWT, RBAC, MongoDB Indexing, Spring Mail, OTP, React, TypeScript, Redux, Mantine UI, Tailwind CSS",
    live: "https://joobhook-frontend.onrender.com/",
    frontendRepo: "https://github.com/HarshAggarwal18/JoobHook-FrontEnd",
    backendRepo: "https://github.com/HarshAggarwal18/JoobHook",
    image: "/images/Solidx.png",
  },
  {
    title: "HireSense",
    category: "AI-Driven Resume Insight Engine",
    tools:
      "Spring Boot, Spring AI, Ollama, PDFBox, REST APIs, React, Prompt Engineering",
    live: "https://ai-resume-analyzer-frontend-3efd.onrender.com",
    frontendRepo:
      "https://github.com/HarshAggarwal18/AI-Resume-Analyzer-Frontend",
    backendRepo: "https://github.com/HarshAggarwal18/AI-RESUME-ANALYSER-",
    image: "/images/radix.png",
  },
  {
    title: "KeySprint",
    category: "Real-Time Typing & Speed Analytics Engine",
    tools:
      "C, Hash Tables (100 Buckets), Linked Lists, BST, File-Based Storage, Multi-Mode CLI",
    live: "https://replit.com/@harshgrwl18/Typing-Tutor",
    frontendRepo: "https://github.com/HarshAggarwal18/Typing-Tutor",
    backendRepo: "https://github.com/HarshAggarwal18/Typing-Tutor",
    image: "/images/bond.png",
  },
];

const Work = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const goToSlide = useCallback(
    (index: number) => {
      if (isAnimating) return;
      setIsAnimating(true);
      setCurrentIndex(index);
      setTimeout(() => setIsAnimating(false), 500);
    },
    [isAnimating]
  );

  const goToPrev = useCallback(() => {
    const newIndex =
      currentIndex === 0 ? projects.length - 1 : currentIndex - 1;
    goToSlide(newIndex);
  }, [currentIndex, goToSlide]);

  const goToNext = useCallback(() => {
    const newIndex =
      currentIndex === projects.length - 1 ? 0 : currentIndex + 1;
    goToSlide(newIndex);
  }, [currentIndex, goToSlide]);

  return (
    <div className="work-section" id="work">
      <div className="work-container section-container">
        <h2>
          My <span>Work</span>
        </h2>

        <div className="carousel-wrapper">
          {/* Navigation Arrows */}
          <button
            className="carousel-arrow carousel-arrow-left"
            onClick={goToPrev}
            aria-label="Previous project"
            data-cursor="disable"
          >
            <MdArrowBack />
          </button>
          <button
            className="carousel-arrow carousel-arrow-right"
            onClick={goToNext}
            aria-label="Next project"
            data-cursor="disable"
          >
            <MdArrowForward />
          </button>

          {/* Slides */}
          <div className="carousel-track-container">
            <div
              className="carousel-track"
              style={{
                transform: `translateX(-${currentIndex * 100}%)`,
              }}
            >
              {projects.map((project, index) => (
                <div className="carousel-slide" key={index}>
                  <div className="carousel-content">
                    <div className="carousel-info">
                      <div className="carousel-number">
                        <h3>0{index + 1}</h3>
                      </div>
                      <div className="carousel-details">
                        <h4>{project.title}</h4>
                        <p className="carousel-category">
                          {project.category}
                        </p>
                        <div className="carousel-tools">
                          <span className="tools-label">Tools & Features</span>
                          <p>{project.tools}</p>
                          <p>
                            <a
                              href={project.live}
                              target="_blank"
                              rel="noopener noreferrer"
                              data-cursor="disable"
                            >
                              Live <MdArrowOutward />
                            </a>
                          </p>
                          <p>
                            <a
                              href={project.frontendRepo}
                              target="_blank"
                              rel="noopener noreferrer"
                              data-cursor="disable"
                            >
                              Frontend Repo <MdArrowOutward />
                            </a>
                          </p>
                          <p>
                            <a
                              href={project.backendRepo}
                              target="_blank"
                              rel="noopener noreferrer"
                              data-cursor="disable"
                            >
                              Backend Repo <MdArrowOutward />
                            </a>
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="carousel-image-wrapper">
                      <WorkImage image={project.image} alt={project.title} />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Dot Indicators */}
          <div className="carousel-dots">
            {projects.map((_, index) => (
              <button
                key={index}
                className={`carousel-dot ${index === currentIndex ? "carousel-dot-active" : ""
                  }`}
                onClick={() => goToSlide(index)}
                aria-label={`Go to project ${index + 1}`}
                data-cursor="disable"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
