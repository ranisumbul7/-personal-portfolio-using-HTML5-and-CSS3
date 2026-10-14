
import Header from "./components/Header";
import Footer from "./components/Footer";
import Card from "./components/Card";
import Form from "./components/Form";
import "./App.css";

function App() {
  function handleClick() {
    document.getElementById("contact")?.scrollIntoView({
      behavior: "smooth",
    });
  }

  return (
    <>
      <div className="portfolio-layout">
        {/* LEFT PROFILE SIDEBAR */}
        <aside className="profile-sidebar">
          
          <h2>Sumbul Rani</h2>
          <p className="profile-role">Full Stack Developer</p>

          <div className="profile-details">
            <div className="profile-detail">
              <span className="detail-icon">✉</span>
              <div>
                <small>EMAIL</small>
                <a href="mailto:ranisumbul7@gmail.com">
                  ranisumbul7@gmail.com
                </a>
              </div>
            </div>

            <div className="profile-detail">
              <span className="detail-icon">☎</span>
              <div>
                <small>PHONE</small>
                <a href="tel:+918603250323">+91 8603250323</a>
              </div>
            </div>

            <div className="profile-detail">
              <span className="detail-icon">⌖</span>
              <div>
                <small>LOCATION</small>
                <p>Siwan, Bihar, India</p>
              </div>
            </div>
          </div>

          <div className="social-links">
            <a
              href="https://github.com/ranisumbul7"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn
            </a>
          </div>
        </aside>

        {/* RIGHT MAIN CONTENT */}
        <div className="portfolio-content">
          <Header />

          <main>
            {/* ABOUT */}
            <section id="about" className="section about-section">
              <h1>About Me</h1>

              <p>
                Hello! I'm Sumbul Rani, a B.Tech Computer Science
                Engineering graduate passionate about software
                development and modern technologies.
              </p>

              <p>
                I have skills in Java, Python, JavaScript, React.js,
                Node.js, HTML, CSS and Bootstrap/Tailwind CSS.
                I have hands-on experience in full-stack development,
                REST APIs, Git, Data Structures and Algorithms, and
                AI/ML-integrated projects.
              </p>

              <p>
                I completed hands-on Java training covering OOP,
                Collections, JDBC and project development, achieving
                a 98% grade. I am seeking an entry-level Software
                Development or Full Stack Development opportunity.
              </p>

            </section>

            {/* EDUCATION */}
            <section id="education" className="section">
              <h2>Education</h2>

              <div className="education-grid">
                <div className="education-card">
                  <h3>B.Tech in Computer Science Engineering</h3>
                  <p>Graduate · 2026</p>
                  <p>
                    Government Engineering College, Siwan
                  </p>
                  <p>
                    Approved by AICTE, affiliated with Bihar
                    Engineering University, Patna.
                  </p>
                </div>

                <div className="education-card">
                  <h3>Intermediate in Science (PCM)</h3>
                  <p>2022 · First Division</p>
                  <p>Percentage: 72%</p>
                  <p>Bihar School Examination Board, Patna</p>
                </div>

                <div className="education-card">
                  <h3>Matriculation (10th)</h3>
                  <p>2020 · First Division</p>
                  <p>Percentage: 82.4%</p>
                  <p>Bihar School Examination Board, Patna</p>
                </div>
              </div>
            </section>

            {/* TECHNICAL SKILLS */}
            <section id="skills" className="section">
              <h2>Technical Skills</h2>

              <div className="project-grid">
                <Card
                  title="HTML5 & CSS3"
                  description="Building structured, attractive and responsive web pages."
                  tech="HTML · CSS · Flexbox · Grid"
                />

                <Card
                  title="JavaScript"
                  description="Creating interactive web applications with events and dynamic functionality."
                  tech="JavaScript · ES6+"
                />

                <Card
                  title="Java + DSA"
                  description="Object-oriented programming, problem-solving and data structures."
                  tech="Java · OOP · DSA"
                />

                <Card
                  title="React.js"
                  description="Building reusable components and interactive user interfaces."
                  tech="React · Props · State"
                />

                <Card
                  title="Node.js & Express"
                  description="Developing server-side applications and REST APIs."
                  tech="Node.js · Express.js"
                />

                <Card
                  title="Database & AI/ML"
                  description="Managing application data and developing machine learning projects."
                  tech="MongoDB · SQL · Python · Scikit-learn"
                />
              </div>
            </section>

            {/* PROJECTS */}
            
            <section id="projects" className="section">
              <h2>My Projects</h2>

              <div className="project-grid">
                <Card
                  title="Personalized Healthcare System"
                  description="A Flask-based healthcare application using machine learning for disease prediction, authentication and personalized diet, medication and precaution recommendations. Includes an AI-based virtual doctor feature."
                  tech="Python · Flask · Scikit-learn · HTML · CSS"
                  link="https://github.com/ranisumbul7/Disease-Medicine-Recommendation-System"
                />

                <Card
                  title="Job Portal Web Application"
                  description="A MERN stack job portal with authentication, job search, filtering, job applications, recruiter management and application tracking. Includes JWT authentication, REST APIs and Cloudinary file uploads."
                  tech="React · Node.js · Express · MongoDB"
                  link="https://github.com/ranisumbul7/Job_portal"
                />

                <Card
                  title="Student Performance Analytics"
                  description="A Python application that analyzes student marks and attendance, calculates averages and grades, identifies pass or fail status and highlights top performers."
                  tech="Python · Pandas · NumPy"
                  link="https://github.com/ranisumbul7/student-performance-analytics-system"
                />
              </div>
            </section>

            {/* CONTACT */}
            <section id="contact" className="section">
              <h2>Contact Me</h2>
              <p>
                Have a project or opportunity to discuss?
                I'd love to hear from you.
              </p>

              <Form />
            </section>
          </main>

          <Footer />
        </div>
      </div>
    </>
  );
}

export default App;
