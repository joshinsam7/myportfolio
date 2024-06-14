import React from 'react';
import './Timeline.css';

const Timeline = ({ events }) => {
  return (
    <div className="timeline">
      {events.map((event, index) => (
        <div className="timeline-item" key={index}>
          <div className="timeline-content">
            <div className="timeline-left">
              <div className="timeline-dot"></div>
              <div className="timeline-separator"></div>
              <h3>{event.title}</h3>
              <div className="timeline-date">{event.date}</div>
            </div>
            <div className="timeline-right">
              <div className="timeline-company">
                <span>{event.Company}</span>
              </div>
              <p>{event.description}</p>
            </div>
          </div>
          {index !== events.length - 1 && <div className="timeline-connector"></div>}
        </div>
      ))}
    </div>
  );
};

export default Timeline;
