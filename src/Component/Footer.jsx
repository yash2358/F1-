import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            &copy; {new Date().getFullYear()} F1 World. All rights reserved. |
            <a href="https://www.formula1.com/" target="_blank" rel="noopener noreferrer">Official F1</a>
            |
            Made with <span style={{ color: '#fbbf24', fontWeight: 'bold' }}>React</span>
        </footer>
    );
};

export default Footer;