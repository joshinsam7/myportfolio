import React, { useEffect, useState } from 'react';
import Timeline from './Timeline';
import styles from './Resume.module.css';
import data from '../data/data.json';

function Resume() {
  const [workExperience, setWorkExperience] = useState([]);
  const [education, setEducation] = useState([]);

  useEffect(() => {
    setWorkExperience(data.workExperience);
    setEducation(data.education);
  }, []);

  return (
    <div>
      <section id="resume" className={`full-page ${styles.sectionIntro}`}>
        <div className="row">
          <div className={styles.colTwelve}>
            <h5>Resume</h5>
            <p className="lead">Here are my work experiences and education.</p>
            <h4>Work Experience</h4>
            <Timeline events={workExperience} />
          </div>
        </div>

        <div className="row">
          <div className={styles.colTwelve}>
            <h4>Background Education</h4>
            <Timeline events={education} />
          </div>
        </div>
      </section>
    </div>
  );
}

export default Resume;
