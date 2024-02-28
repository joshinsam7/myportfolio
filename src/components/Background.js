import React from 'react';

function Background(){
  return (
    <section id="resume">
      <div className="row section-intro">
        <div className="col-twelve">
          <h5>Resume</h5>
          <h1>More of my credentials.</h1>
          <p className="lead">Here are my work experiences and education.</p>
        </div>
      </div>

      <div className="row resume-timeline">
        <div className="col-twelve resume-header">
          <h2>Work Experience</h2>
        </div>

        {/* Work experience timeline blocks */}
        {/* Each timeline-block represents a work experience */}
      </div>

      <div className="row resume-timeline">
        <div className="col-twelve resume-header">
          <h2>Background Education</h2>
        </div>

        {/* Education timeline blocks */}
        {/* Each timeline-block represents an educational background */}
      </div>
    </section>
  );
};

export default Background; 