import React from 'react';
import { Link } from 'react-router-dom';
import './Error.css';

const Error = () => {
    return (
        <div className="error-container">
            <div className="error-code">404</div>
            <div className="error-message">Page Not Found</div>
            <div className="error-description">
                Sorry, the page you are looking for does not exist or has been moved.<br />
                Please check the URL or return to the homepage.
            </div>
            <Link to="/" className="error-home-link">Go Home</Link>
        </div>
    );
};

export default Error;