import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
  <div className="header-container">
    <div className="header-title">Unnamed Application</div>
    <div className="header-items-container">
      <Link to="/" className="header-item">Home</Link>
      <Link to="/counter" className="header-item">Campaigns</Link>
    </div>
  </div>
);

export default Header;