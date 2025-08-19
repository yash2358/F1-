import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';

const navStyle = {
    display: 'flex',
    gap: '2rem',
    justifyContent: 'center',
    alignItems: 'center',
    background: '#f5f6fa',
    padding: '1.2rem 0',
    borderRadius: '10px',
    margin: '2rem auto 1.5rem auto',
    maxWidth: '600px',
    boxShadow: '0 2px 12px rgba(0,0,0,0.06)'
};

const linkStyle = ({ isActive }) => ({
    color: isActive ? '#fff' : '#273c75',
    background: isActive ? '#273c75' : 'transparent',
    padding: '0.6rem 2.2rem',
    borderRadius: '8px',
    fontWeight: 600,
    fontSize: '1.1rem',
    textDecoration: 'none',
    transition: 'background 0.2s, color 0.2s',
    boxShadow: isActive ? '0 2px 8px rgba(39,60,117,0.10)' : 'none',
});

const Admin = () => {
    return (
        <>
            <nav style={navStyle}>
                <NavLink to="/admin/users" style={linkStyle}>Users</NavLink>
                <NavLink to="/admin/contact" style={linkStyle}>Contact</NavLink>
            </nav>
            <Outlet />
        </>
    );
};

export default Admin;