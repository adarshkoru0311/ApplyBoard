import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useNavigate } from 'react-router-dom'; // Import useNavigate hook
import Header from './Header';
import './Dashboard.css';
import navig from './assets/navig.png';

const Dashboard = () => {
  const navigate = useNavigate(); // Initialize useNavigate hook

  const handleCompleteProfile = () => {
    navigate('/profile'); // Navigate to the Profile route
  };

  return (
    <div className="dashboard-container">
      <Helmet>
        <title>Dashboard</title>
      </Helmet>
      <Header title="Dashboard" />
      <div className="dashboard-content">
        <div className='progress-details'>
          <img
            src={navig} // Replace with the actual URL of your image
            alt="Progress Image"
            className="progress-image"
          />
          <h1>My Progress</h1>
        </div>
        <h5>BEFORE APPLYING</h5>
        <div className="dashboard-buttons">
          <button className="dashboard-button">➜Check Eligibility</button>
          <button className="dashboard-button" onClick={handleCompleteProfile}>➜Complete Profile</button> {/* Add onClick event */}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
