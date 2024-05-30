import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import LogoutButton from './Auth/LogoutButton';
import './TopHeader.css'; // Import the CSS file

const TopHeader = () => {
    const { auth } = useContext(AuthContext);

    return (
        <header className="top-header">
            <nav className="navbar">
                <div className="navbar-brand">
                    <h1><Link to="/" className="brand-link">TODO APP</Link></h1>
                </div>
                <ul className="navbar-links">
                    {!auth ? (
                        <>
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/signup">Signup</Link></li>
                            <li><Link to="/login">Login</Link></li>
                        </>
                    ) : (
                        <>
                            <li><Link to="/todos">Todo List</Link></li>
                            <li><LogoutButton /></li>
                        </>
                    )}
                </ul>
            </nav>
        </header>
    );
};

export default TopHeader;
