import React from 'react';

function Activities(){
  return (
    <section id="activities">
      <div className="overlay"></div>

      <div className="row section-intro">
         <div className="col-twelve">
            <h5>Activities</h5>
            <h1>My positions during undergraduate.</h1>
            <p className="lead">Summary of my leadership & extracurricular activities</p>
         </div>         
      </div>

      <div className="row activity">
         <div className="twelve columns main-col">
            <div className="row item">
               <div className="twelve columns">
                  <h3>Founder/Co-President</h3>
                  <p className="info">Stanford Transhumanist Association<span>&bull;</span> <em className="date">March 2018 - Present</em></p>
                  <p>
                    Organized executive board members & meeting. <br />
                    Designed STA discussion event posters. <br />
                    Took record of STA meeting & discussion. <br />
                    Recruited Stanford students into club members. 
                  </p>
               </div>
            </div>

            {/* Repeat the above block for each activity item */}
            
         </div>
      </div> 
    </section> 
  );
};

export default Activities;
