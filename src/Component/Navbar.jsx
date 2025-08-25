import React from 'react'
import { NavLink } from 'react-router-dom'
import './Navbar.css'
import { useAuth } from '../store/auth'
const Navbar = () => {
    const {isLoggedIn,user} = useAuth();
    return (
        <>
            <header>
                <div className="container">
                    <div className="logo">
                        <NavLink to='/' style={{ fontSize: "50px" }}>All About F1 Race</NavLink>
                    </div>
                    <nav>
                        <ul>
                            <li>
                                <NavLink to='/' style={{ fontSize: "20px" }}>Home</NavLink>
                            </li>
                            <li>
                                <NavLink to='/about' style={{ fontSize: "20px" }}>About</NavLink>
                            </li>
                            <li>
                                <NavLink to='/contact' style={{ fontSize: "20px" }}>Contact</NavLink>
                            </li>
                            <li>
                                <NavLink to='/service' style={{ fontSize: "20px" }}>Service</NavLink>
                            </li>
                            {isLoggedIn ? (
                                 <li>
                                    <NavLink to='/logout' style={{ fontSize: "20px" }}>Logout</NavLink>
                                </li>
                                
                            ) : (
                               <>
                                    <li>
                                        <NavLink to='/register' style={{ fontSize: "20px" }}>Register</NavLink>
                                    </li>
                                    <li>
                                        <NavLink to='/login' style={{ fontSize: "20px" }}>Login</NavLink>
                                    </li>
                                </>
                            )
                            }
                            {user?.isAdmin &&(
                                 <li>
                                        <NavLink to='/admin/users' style={{ fontSize: "20px" }}>Admin Panel</NavLink>
                                    </li>
                            )}
                        </ul>
                    </nav>
                </div>
            </header>
        </>
    )
}

export default Navbar