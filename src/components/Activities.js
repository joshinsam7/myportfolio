import React from 'react';

function Activities(){
  return (
    <section id="activities"  className="full-page">
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
                  <p>

                  </p>
               </div>
            </div>

            {
            
            /* Repeat the above block for each activity item */
            
            }
            
         </div>
      </div> 
    </section> 
  );
};

export default Activities;
