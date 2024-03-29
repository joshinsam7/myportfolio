import React from 'react';
import './About.css';

function About() {
  return (
    <section id="about" className="full-page" style={{ paddingTop: '80px', overflowX: 'hidden' }}>
      <div className="row section-intro">
        <div className="col-twelve">
          <h5>About</h5>
          <h1>Let me introduce myself.</h1>
          <div className="intro-info">
              <img src="/images/mypic.jpeg" alt="pf" />
            <p className="lead">
              I'm an Computer Science student minoring in Business studying in Arizona State University. My primary interest is frontend development, and currently pursuing to achieve AWS Cloud Practitioner Certification. 
            </p>
          </div>
        </div>
      </div>

      <div className="row about-content">
        <div className="col-six tab-full">
          <h3>Profile </h3>
          <p>
            Currently, I have a job, but am open to new software engineering/product owner/startup opportunities. If you think I'm a good fit, please contact me via <a href="mailto:sunnybd97@gmail.com">sunnybd97@gmail.com</a>.
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

        <div className="col-six tab-full">
          <h3>Skills</h3>
          <p>
            I'm a cell-like independent team worker, strong in research and coding. My areas of expertise are computer science, bioinformatics, and genetics. Below are highlights of my technical skills:
          </p>
          <ul className="skill-bars">
            <li>
              <div className="progress percent90"><span>90%</span></div>
              <strong>MS Suite</strong>
            </li>
            <li>
              <div className="progress percent70"><span>70%</span></div>
              <strong>JS/TS/React</strong>
            </li>
            <li>
              <div className="progress percent60"><span>80%</span></div>
              <strong>C/C++</strong>
            </li>
            <li>
              <div className="progress percent60"><span>90%</span></div>
              <strong>Java</strong>
            </li>
          </ul>
        </div>
      </div>

      <div className="row button-section">
        <div className="col-twelve">
          <a href="#contact" title="Hire Me" className="button stroke smoothscroll">Hire Me</a>
          <a href="files/JoshinSam--II.pdf" title="Download CV" className="button button-primary">Download CV</a>
        </div>
      </div>
    </section>
  );
};

export default About;
