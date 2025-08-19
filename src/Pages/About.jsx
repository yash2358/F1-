import React from 'react';
import { useAuth } from '../store/auth';

const About = () => {
  const {isLoggedIn,user}=useAuth()
  
  return (
    <section style={{ minHeight: '80vh', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#f5f6fa' }}>
      <div style={{ background: '#fff', padding: '2.5rem 2rem', borderRadius: '16px', boxShadow: '0 4px 24px rgba(0,0,0,0.08)', maxWidth: '600px', width: '100%' }}>
        <h1 style={{ color: '#273c75', marginBottom: '1rem', fontSize: '2.2rem' }}>About This Project</h1>
        <h2>HI {isLoggedIn ? user.username : `Guest`}</h2>
        <p style={{ color: '#555', fontSize: '1.1rem', marginBottom: '1.5rem' }}>
          <strong>MERN 2025</strong> is a modern web application built using the MERN stack: <b>MongoDB</b>, <b>Express.js</b>, <b>React.js</b>, and <b>Node.js</b>.
        </p>
        <ul style={{ color: '#444', fontSize: '1.05rem', marginBottom: '1.5rem', paddingLeft: '1.2rem' }}>
          <li>🔒 <b>Authentication</b> with JWT and secure password hashing</li>
          <li>📝 <b>Contact & Registration</b> forms with robust validation</li>
          <li>📦 <b>RESTful API</b> backend with Express and MongoDB</li>
          <li>⚡ <b>Modern UI</b> built with React and responsive CSS</li>
        </ul>
        <p style={{ color: '#555', fontSize: '1.1rem' }}>
          This project demonstrates best practices in full-stack development, including modular code structure, error handling, and user experience. <br /><br />
          <b>Created by:</b> <span style={{ color: '#e84118' }}>Your Name</span> <br />
          <b>Year:</b> 2025
        </p>
      </div>
    </section>
  );
};

export default About;