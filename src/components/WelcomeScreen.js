import React from "react";
import './WelcomeScreen.css';

const WelcomeScreen = ({ startSurvey }) => {
  return (
    <div className="welcome-screen">
      <div className="card">
        <h1 className="welcome-text">Welcome to the Customer Survey!</h1>
        <button className="start-button" onClick={startSurvey}>
          Start Survey
        </button>
      </div>
    </div>
  );
};

export default WelcomeScreen;
