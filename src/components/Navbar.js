import React, { useState, useEffect } from "react";
import { Link as ScrollLink, Events, scrollSpy } from "react-scroll";
import './Navbar.css';

function Navbar({ isNavbarActive, setIsNavbarActive }) {
  const [menuActive, setMenuActive] = useState(false);
  const [activeComponent, setActiveComponent] = useState("home"); // State to track active component

  useEffect(() => {
    Events.scrollEvent.register("begin", function() {
      console.log("begin", arguments);
    });

    Events.scrollEvent.register("end", function() {
      console.log("end", arguments);
    });

    scrollSpy.update();

    return () => {
      Events.scrollEvent.remove("begin");
      Events.scrollEvent.remove("end");
    };
  }, []);

  const toggleMenu = () => {
    setMenuActive(!menuActive);
  };

  const handleSetActive = (to) => {
    const navWrap = document.getElementById("nav-wrap");
    if (navWrap) {
      navWrap.className = `nav-wrap ${to}`;
    }
    setActiveComponent(to);
  };

  return (
    <header id="home" className={`full-page ${isNavbarActive ? 'opaque' : ''}`}>
      <nav id="nav-wrap">
        <a className="mobile-btn" href="#nav-wrap" onClick={toggleMenu} title="Show navigation">
          Show navigation
        </a>
        <a className="mobile-btn" href="#home" onClick={toggleMenu} title="Hide navigation">
          Hide navigation
        </a>

        <ul id="nav" className={`nav ${menuActive ? 'active' : ''}`}>
          <li>
            <ScrollLink to="home" className="smoothscroll" smooth={true} duration={500} spy={true} onSetActive={() => handleSetActive("home")}>
              HOME
            </ScrollLink>
          </li>
          <li>
            <ScrollLink to="about" className="smoothscroll" smooth={true} duration={500} spy={true} onSetActive={() => handleSetActive("about")}>
              ABOUT
            </ScrollLink>
          </li>
          <li>
            <ScrollLink to="resume" className="smoothscroll" smooth={true} duration={500} spy={true} onSetActive={() => handleSetActive("resume")}>
              RESUME
            </ScrollLink>
          </li>
          <li>
            <ScrollLink to="portfolio" className="smoothscroll" smooth={true} duration={500} spy={true} onSetActive={() => handleSetActive("portfolio")}>
              PROJECTS
            </ScrollLink>
          </li>
          <li>
            <ScrollLink to="activities" className="smoothscroll" smooth={true} duration={500} spy={true} onSetActive={() => handleSetActive("activities")}>
              ACTIVITIES
            </ScrollLink>
          </li>
          <li>
            <ScrollLink to="contact" className="smoothscroll" smooth={true} duration={500} spy={true} onSetActive={() => handleSetActive("contact")}>
              CONTACT
            </ScrollLink>
          </li>
        </ul>
        <hr />

        <div className="head_banner">
          <div className="banner__content">
            <div className="banner__text">
              Hi there, thanks for visiting my website! I'd love to{" "}
              <a href="https://www.linkedin.com/in/joshinsam" target="_blank" rel="noopener noreferrer">
                connect
              </a>{" "}
              with you :)
            </div>
            <button className="banner__close">
              <span className="material-icons">x</span>
            </button>
          </div>
        </div>
      </nav>

      <div className="row banner">
        <div className="banner-text">
          <h1 className="responsive-headline">Joshin Sam</h1>
          <h3>
            <span>Software Engineer</span> | <span>Tutor</span>
          </h3>
          <hr />
          <ul className="social">
            <li><a href="https://github.com/joshinsam"><i className="fa fa-github"></i></a></li>
            <li><a href="https://www.linkedin.com/in/joshinsam/"><i className="fa fa-linkedin"></i></a></li>
            <li><a href="mailto:joshinsam6@gmail.com"><i className="fa fa-envelope"></i></a></li>
          </ul>
        </div>
      </div>

      <p className="scrolldown">
        <ScrollLink className="smoothscroll" to="about" smooth={true} duration={500}>
          <i className="icon-down-circle"></i>
        </ScrollLink>
      </p>
    </header>
  );
}

export default Navbar;
