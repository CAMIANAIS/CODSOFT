// FindEventsContainer.tsx
import React from 'react';
import Filters from '../Filters/Filters.tsx';
import './FindEvents.css'; 
import portada from '../../assets/img/portada.png';
import Header from '../Header/header.tsx';

const FindEvents: React.FC = () => {
  return (
    <>
      <Header />
      <div className="find-events-container">
        <div className="right-side">
          <Filters />
        </div>
        <div className="left-side">
          <div className='imgContainer'>
            <img
              src={portada}
              alt="portada de mi sitio web"
              className="portada"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default FindEvents;

