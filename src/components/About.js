import React from 'react';
import './About.css';

function About({ isNavbarActive }) {
  return (
    <section id="about" className={`nav-full-page ${isNavbarActive ? 'section-active' : ''}`} style={{ paddingTop: '80px', overflowX: 'hidden' }}>
      <div className="row section-intro">
        <div className="Acol-twelve">
          <h5>About</h5>
          <h1>Let me introduce myself.</h1>
          <div className="intro-Info">
            <img src="/public/images/mypic.jpeg" alt="" />
            <p className="para">
              I'm a Computer Science student minoring in Business studying at Arizona State University. My primary interest is Software Development, and currently pursuing to achieve AWS Cloud Practitioner Certification.
            </p>
          </div>
        </div>
      </div>

      <div className="row about-content">
        <div className="col-md-6 col-sm-12 profile-section">
          <div className="col-six tab-full">
            <div className="about-section">
              <h3>Profile</h3>
              <p>
                Currently, I have a job, but am open to new software engineering/startup opportunities. If you think I'm a good fit, please contact me via <a href="mailto:joshinsam6@gmail.com">joshinsam6@gmail.com</a>.
              </p>
              <ul className="info-list">
                <li>
                  <strong>Fullname:</strong>
                  <span>Joshin Sam</span>
                </li>
                <li>
                  <strong>Birth Date:</strong>
                  <span>July 24, 2003</span>
                </li>
                <li>
                  <strong>Email:</strong>
                  <span>joshinsam6@gmail.com</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="col-md-6 col-sm-12 skills-section">
          <div className="col-six tab-full">
            <div className="about-section">
              <h3>Skills</h3>
              <p>
                I'm a cell-like independent team worker, strong in research and coding. My areas of expertise are computer science, bioinformatics, and genetics. Below are highlights of my technical skills:
              </p>
              <ul className="skill-bars">
                <li>
                  <strong>Java</strong>
                  <div className="progress">
                    <div className="progress-bar" style={{ width: '90%' }}><span>90%</span></div>
                  </div>
                </li>
                <li>
                  <strong>C/C++</strong>
                  <div className="progress">
                    <div className="progress-bar" style={{ width: '80%' }}><span>80%</span></div>
                  </div>
                </li>
                <li>
                  <strong>JS/React/CSS</strong>
                  <div className="progress">
                    <div className="progress-bar" style={{ width: '70%' }}><span>70%</span></div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

    </section>
  );
}

export default About;
