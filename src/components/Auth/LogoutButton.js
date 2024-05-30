import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate instead of useHistory
import { AuthContext } from '../../context/AuthContext';

const LogoutButton = () => {
    const navigate = useNavigate(); // Use useNavigate hook instead of useHistory
    const { logout } = useContext(AuthContext);

    const handleLogout = () => {
        logout();
        navigate('/login'); // Use navigate instead of history.push
    };

    return (
        <button onClick={handleLogout}>Logout</button>
    );
};

export default LogoutButton;
