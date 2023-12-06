import React from 'react';
import { Link } from 'react-router-dom';
import './header.css';

const Header: React.FC = () => {
  return (
    <div className="header-container">
      <Link to="/findevents" className="header-link">
        FindEvents
      </Link>
      <Link to="/contactus" className="header-link">
        Contact us
      </Link>
    </div>
  );
};

export default Header;
