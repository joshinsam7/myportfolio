import { Helmet } from "react-helmet";
import React, { useState } from 'react';
import { BrowserRouter as Router } from "react-router-dom";
import About from "./components/About";
import Activities from "./components/Activities";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Resume from "./components/Resume";
import "./App.css";

function App() {
    
  const [isNavbarActive, setIsNavbarActive] = useState(false);

    return (
      <Router>
        <main>
          <Helmet>
            <meta charset="utf-8"/>
            <title>Joshin's Personal Website</title>
            <meta name="description" content="Welcome to Joshin's website. Learn about my background, projects, and how to get in touch with me."/>
            <meta name="author" content="Joshin Sam"/>
            <meta 
              name="viewport" 
              content="width=device-width, initial-scale=1, maximum-scale=1"
            />
          </Helmet>
          
          <Navbar setIsNavbarActive={setIsNavbarActive} />
          <About  isNavbarActive={isNavbarActive} />
          <Resume /> {/* Only one instance */}
          <Projects />
          <Activities />
          <Contact />
        </main>
      </Router>
    );
}

export default App;
