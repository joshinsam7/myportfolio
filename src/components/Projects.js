import React from 'react';

function Projects (){
  return (
    <section id="portfolio">
      <div className="row section-intro">
         <div className="col-twelve">
            <h5>Projects</h5>
            <h1>Check out my creations.</h1>
         </div>  
      </div>

      <div className="row">
         <div className="twelve columns collapsed">
            <div id="portfolio-wrapper" className="bgrid-quarters s-bgrid-thirds cf">
               {/* Portfolio items */}
               {/* Each portfolio item is represented by a portfolio-item div */}
            </div> {/* portfolio-wrapper end */}
         </div> {/* twelve columns end */}
      </div> {/* row end */}
    </section>
  );
};

export default Projects;
