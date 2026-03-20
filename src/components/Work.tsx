import {
  useState,
  useCallback,
  useRef,
  type WheelEvent,
  type TouchEvent,
} from "react";
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
    image: "/images/prj1.png",
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
    image: "/images/prj2.png",
  },
  {
    title: "KeySprint",
    category: "Real-Time Typing & Speed Analytics Engine",
    tools:
      "C, Hash Tables (100 Buckets), Linked Lists, BST, File-Based Storage, Multi-Mode CLI",
    live: "https://replit.com/@harshgrwl18/Typing-Tutor",
    frontendRepo: "https://github.com/HarshAggarwal18/Typing-Tutor",
    backendRepo: "https://github.com/HarshAggarwal18/Typing-Tutor",
    image: "/images/prj3.png",
  },
];

const Work = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const touchStartXRef = useRef<number | null>(null);
  const lastGestureTimeRef = useRef(0);

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

  const canHandleGesture = useCallback(() => {
    const now = Date.now();
    if (now - lastGestureTimeRef.current < 550 || isAnimating) {
      return false;
    }
    lastGestureTimeRef.current = now;
    return true;
  }, [isAnimating]);

  const handleWheel = useCallback(
    (event: WheelEvent<HTMLDivElement>) => {
      if (Math.abs(event.deltaY) < 20) return;
      if (!canHandleGesture()) return;
      event.preventDefault();

      if (event.deltaY > 0) {
        goToNext();
      } else {
        goToPrev();
      }
    },
    [canHandleGesture, goToNext, goToPrev]
  );

  const handleTouchStart = useCallback(
    (event: TouchEvent<HTMLDivElement>) => {
      touchStartXRef.current = event.touches[0].clientX;
    },
    []
  );

  const handleTouchEnd = useCallback(
    (event: TouchEvent<HTMLDivElement>) => {
      if (touchStartXRef.current === null || !canHandleGesture()) {
        touchStartXRef.current = null;
        return;
      }

      const diff = touchStartXRef.current - event.changedTouches[0].clientX;
      touchStartXRef.current = null;
      if (Math.abs(diff) < 45) return;

      if (diff > 0) {
        goToNext();
      } else {
        goToPrev();
      }
    },
    [canHandleGesture, goToNext, goToPrev]
  );

  return (
    <div className="work-section" id="work">
      <div className="work-container section-container">
        <h2>
          My <span>Work</span>
        </h2>

        <div
          className="carousel-wrapper"
          onWheel={handleWheel}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
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

                          <div className="project-links" role="list">
                            <a
                              href={project.live}
                              target="_blank"
                              rel="noopener noreferrer"
                              data-cursor="disable"
                              className="project-link-btn"
                              role="listitem"
                            >
                              Live Demo <MdArrowOutward />
                            </a>
                            <a
                              href={project.frontendRepo}
                              target="_blank"
                              rel="noopener noreferrer"
                              data-cursor="disable"
                              className="project-link-btn"
                              role="listitem"
                            >
                              Frontend Repo <MdArrowOutward />
                            </a>
                            <a
                              href={project.backendRepo}
                              target="_blank"
                              rel="noopener noreferrer"
                              data-cursor="disable"
                              className="project-link-btn"
                              role="listitem"
                            >
                              Backend Repo <MdArrowOutward />
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="carousel-image-wrapper">
                      <WorkImage
                        image={project.image}
                        alt={project.title}
                        link={project.live}
                      />
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
