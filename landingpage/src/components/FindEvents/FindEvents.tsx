// FindEventsContainer.tsx
import React from 'react';
import Filters from '../Filters/filters.tsx';
import './FindEvents.css'; 

const FindEvents: React.FC = () => {
  return (
    <div className="find-events-container">
      <div className="right-side">
        <Filters />
      </div>
      <div className="left-side">
        <div className='imgContainer'>

          </div>
      </div>
    </div>

  );
};

export default FindEvents;
