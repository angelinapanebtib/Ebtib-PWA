// src/pages/HomePage.js
import React from 'react';
import './src/HomePage.css';

const HomePage = () => {
  return (
    <div className="home-container">
      <h1 className="title">Ebtib</h1>
      <p className="subtitle">Discover Personalized Care</p>
      <div className="support-options">
        <button className="support-btn">Receive support</button>
        <button className="support-btn">Offer support</button>
      </div>
      <button className="next-btn">Next</button>
    </div>
  );
};

export default HomePage;
