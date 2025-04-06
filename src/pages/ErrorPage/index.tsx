import React from 'react';
import './styles.scss';

const ErrorPage: React.FC = () => {


  return (
    <div className="error-container">
      <div className="error-content">
        <h1 className="error-title">404</h1>
        <h2 className="error-subtitle">Page Not Found</h2>
        <p className="error-message">
          Oops! The page you're looking for doesn't exist or has been moved.
        </p>
        <button className="error-button">
          Return to Home
        </button>
      </div>
    </div>
  );
};

export default ErrorPage;