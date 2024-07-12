import React from 'react';
import './Header.css';
import { FaBell, FaUserCircle } from 'react-icons/fa';

const Header = ({ title }) => {
  return (
    <div className="topbar">
      <div className="topbar-left">
        <nav>
          <ul className="breadcrumb">
            <li>Home</li>
            <li>{title}</li>
          </ul>
        </nav>
      </div>
      <div className="topbar-right">
        <FaBell className="topbar-icon" />
        <FaUserCircle className="topbar-icon" />
      </div>
    </div>
  );
};

export default Header;
