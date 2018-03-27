import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
  <div className="header-container">
    <div className="header-items-container">
      <Link to="/" className="header-item">Home</Link>
      <Link to="/campaigns" className="header-item">Campaigns</Link>
    </div>
    <div className="header-title">Unnamed Application</div>
  </div>
);

export default Header;