import React, { useEffect, useState } from "react";
import './ThankYouScreen.css'; // Import the CSS file

const ThankYouScreen = () => {
  const [seconds, setSeconds] = useState(5);

  useEffect(() => {
    const timer = setInterval(() => {
      setSeconds(prev => prev - 1);
    }, 1000);

    const redirectTimer = setTimeout(() => {
      window.location.reload(); // Redirect to welcome screen after 5 seconds
    }, 5000);

    return () => {
      clearInterval(timer);
      clearTimeout(redirectTimer);
    };
  }, []);

  return (
    <div className="thank-you-card">
      <h1>Thank you for your time!</h1>
      <p className="redirect-message">
        You will be redirected to the welcome screen in <span className="countdown">{seconds}</span> seconds...
      </p>
    </div>
  );
};

export default ThankYouScreen;
