import React, { useEffect } from 'react';
import { useAuth } from '../store/auth';
import { useNavigate } from 'react-router-dom';

const Logout = () => {
  const { logoutUser } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    logoutUser();
    // Optionally redirect after a delay
    setTimeout(() => navigate('/login'), 2000);
  }, [logoutUser]);

  const handleLogin = () => {
    navigate('/login');
  };

  return (
    <section style={{ minHeight: '80vh', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#f5f6fa' }}>
      <div style={{ background: '#fff', padding: '2.5rem 2rem', borderRadius: '16px', boxShadow: '0 4px 24px rgba(0,0,0,0.08)', textAlign: 'center', maxWidth: '350px' }}>
        <div style={{ fontSize: '3rem', color: '#e84118', marginBottom: '1rem' }}>
          <span role="img" aria-label="logout">🚪</span>
        </div>
        <h2 style={{ marginBottom: '0.5rem', color: '#222' }}>You have been logged out</h2>
        <p style={{ color: '#555', marginBottom: '1.5rem' }}>Thank you for visiting. We hope to see you again soon!</p>
        <button onClick={handleLogin} style={{ padding: '0.6rem 1.5rem', background: '#273c75', color: '#fff', border: 'none', borderRadius: '8px', cursor: 'pointer', fontWeight: 'bold', fontSize: '1rem' }}>
          Go to Login
        </button>
      </div>
    </section>
  );
};

export default Logout;