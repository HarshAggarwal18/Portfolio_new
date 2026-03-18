import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          Education <span>&</span>
          <br /> milestones
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Master of Computer Applications (MCA)</h4>
                <h5>Graphic Era Hill University, Dehradun</h5>
              </div>
              <h3>2024 - Present</h3>
            </div>
            <p>
              Pursuing MCA with a CGPA of 9.2/10 while building backend-focused
              full-stack projects using Java, Spring Boot, Spring Security, and
              AI integrations.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Bachelor of Computer Applications (BCA)</h4>
                <h5>SDSUV University, Haridwar</h5>
              </div>
              <h3>2021 - 2024</h3>
            </div>
            <p>
              Completed BCA with a CGPA of 7.6/10 and built a strong computer
              science foundation in DSA, OOP, OS, DBMS, and Computer Networks.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Competitive Coding & Certifications</h4>
                <h5>LeetCode, GeeksforGeeks, AWS, Spring AI</h5>
              </div>
              <h3>2023 - Present</h3>
            </div>
            <p>
              Solved 450+ DSA problems, secured university rank 185 on
              GeeksforGeeks, and completed certifications in Java Spring
              Framework, Spring Boot, Spring AI, and AWS Cloud Quest.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
