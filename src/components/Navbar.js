import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <header id="home">
      <nav id="nav-wrap">
        <a className="mobile-btn" href="#nav-wrap" title="Show navigation">
          {/* Show navigation  */}
        </a>
        <a className="mobile-btn" href="#" title="Hide navigation">
          {/* Hide navigation */}
        </a>

        <ul id="nav" className="nav">
          <li>
            <Link to="/" className="smoothscroll">
              HOME
            </Link>
          </li>
          <li>
            <Link to="/about" className="smoothscroll">
              ABOUT
            </Link>
          </li>
          <li>
            <Link to="/resume" className="smoothscroll">
              RESUME
            </Link>
          </li>
          <li>
            <Link to="/portfolio" className="smoothscroll">
              PROJECTS
            </Link>
          </li>
          <li>
            <Link to="/activities" className="smoothscroll">
              ACTIVITIES
            </Link>
          </li>
          <li>
            <Link to="/contact" className="smoothscroll">
              CONTACT
            </Link>
          </li>
        </ul>
        <hr />

        <div className="head_banner">
          <div className="banner__content">
            <div className="banner__text">
              Hi there, thanks for visiting my website! I'd love to{" "}
              <a href="https://www.linkedin.com/in/joshinsam" target="_blank">
                connect
              </a>{" "}
              with you :)
            </div>
            <button className="banner__close">
              <span className="material-icons">close</span>
            </button>
          </div>
        </div>
      </nav>

      <div className="row banner">
        <div className="banner-text">
          <h1 className="responsive-headline">Joshin Sam</h1>
          <h3>
            {" "}
            <span>Software Engineer</span> | <span>Tutor</span> 
          </h3>
          <hr />
          <ul className="social">
            <li>
              <a href="https://github.com/joshinsam7">
                <i className="fa fa-github"></i>
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/joshinsam  ">
                <i className="fa fa-linkedin"></i>
              </a>
            </li>
            <li>
              <a href="mailto:joshinsam6@gmail.com">
                <i className="fa fa-envelope"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>

      <p className="scrolldown">
        <a className="smoothscroll" href="#about">
          <i className="icon-down-circle"></i>
        </a>
      </p>
    </header>
  );
}

export default Navbar ;