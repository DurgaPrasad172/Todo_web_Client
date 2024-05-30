import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css'; // Import the CSS file

const Home = () => {
    return (
        <div className="home-container">
            <div className="home-content">
                <h1>@DP Welcomes You to the Todo App </h1>
                {/* <div className="home-buttons">
                    <Link to="/login" className="home-button">Login</Link>
                    <Link to="/signup" className="home-button">Signup</Link>
                </div> */}
            </div>
        </div>
    );
};

export default Home;
