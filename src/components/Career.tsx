import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Software Engineer</h4>
                <h5>Ähdus Technology GmbH</h5>
                <p className="career-meta">
                  Nov 2025 – Present · Backend Developer · CRM Project ·
                  Full-time · Rawalpindi, Pakistan · On-site
                </p>
              </div>
              <h3 className="career-dates">2025 – Present</h3>
            </div>
            <div className="career-description">
              <ul className="career-list">
                <li>
                  Building and maintaining CRM backend modules using Node.js and
                  TypeScript for scalable business workflows.
                </li>
                <li>
                  Developing RESTful APIs for lead, customer, and activity
                  management with clean and secure server-side architecture.
                </li>
                <li>
                  Designing optimized MySQL queries and database structures to
                  improve CRM performance and response time.
                </li>
              </ul>
              <p className="career-skills">
                Node.js, TypeScript, MySQL, CRM APIs, and backend architecture.
              </p>
            </div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Intern</h4>
                <h5>Corvit Systems Rawalpindi</h5>
                <p className="career-meta">
                  2025  · Internship · Rawalpindi, Punjab, Pakistan
                  · On-site
                </p>
              </div>
              <h3 className="career-dates">2025 – Present</h3>
            </div>
            <div className="career-description">
              <p>
                Hands-on internship strengthening fundamentals in Python
                programming and data analysis, working through structured
                learning paths and practical exercises aligned with industry
                workflows.
              </p>
              <p className="career-skills">
                Python (Programming Language), Data Analysis.
              </p>
            </div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Web Developer Intern</h4>
                <h5>Appium Logics Solutions</h5>
                <p className="career-meta">
                  Jul 2024 – Sep 2024 · Full-time internship · Rawalpindi, Punjab,
                  Pakistan · On-site
                </p>
              </div>
              <h3 className="career-dates">2024</h3>
            </div>
            <div className="career-description">
              <p>
                As a Full Stack Developer Intern, I contributed to real-world
                projects including a Company Dashboard, Company Website, and a
                Tourism Website. Responsibilities covered front-end implementation,
                API integration, and collaborating on features end-to-end from
                design handoff to deployment.
              </p>
              <p className="career-skills">
                Web Development, Project Management, and related full-stack
                tooling.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
