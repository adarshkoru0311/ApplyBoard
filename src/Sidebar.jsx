import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import './Sidebar.css';
import { FaHome, FaSearch, FaUser, FaFolder, FaDollarSign, FaBars } from 'react-icons/fa';
import alogo from './assets/alogo.png';
import afulllogo from './assets/afulllogo.png';

const Sidebar = ({ isOpen, toggleSidebar }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleNavigation = (path) => {
    navigate(path);
    if (isOpen) {
      toggleSidebar();
    }
  };

  const isActive = (path) => location.pathname === path;

  return (
    <div className={`sidebar ${isOpen ? 'open' : ''}`}>
      <div className="sidebar-toggle" onClick={toggleSidebar}>
        <FaBars />
      </div>
      <div className="sidebar-logo">
        <img src={alogo} alt="Logo" className="sidebar-logo-normal" />
        <img src={afulllogo} alt="Hovered Logo" className="sidebar-logo-hover" />
      </div>
      <ul className="sidebar-menu">
        <li
          className={`sidebar-item ${isActive('/') ? 'active' : ''}`}
          onClick={() => handleNavigation('/')}
        >
          <FaHome className="sidebar-icon" />
          <span className="sidebar-text">Home</span>
        </li>
        <li
          className={`sidebar-item ${isActive('/profile') ? 'active' : ''}`} 
          onClick={() => handleNavigation('/profile')}
        >
          <FaUser className="sidebar-icon" />
          <span className="sidebar-text">Profile</span>
        </li>
        <li className="sidebar-item">
          <FaSearch className="sidebar-icon" />
          <span className="sidebar-text">Programs & Schools</span>
        </li>
        <li className="sidebar-item">
          <FaFolder className="sidebar-icon" />
          <span className="sidebar-text">My Applications</span>
        </li>
        <li className="sidebar-item">
          <FaDollarSign className="sidebar-icon" />
          <span className="sidebar-text">Payments</span>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
