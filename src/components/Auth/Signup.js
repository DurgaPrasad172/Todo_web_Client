import React, { useState, useContext } from 'react';
import { signup } from '../../api/auth';
import { AuthContext } from '../../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import './Signup.css'; // Import the CSS file

const Signup = () => {
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const { login: authLogin } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const { token } = await signup(email, username, password);
            authLogin(token);
            navigate('/todos');
        } catch (error) {
            console.error('Signup failed', error);
            if (error.response && error.response.data && error.response.data.message) {
                alert(`Signup failed: ${error.response.data.message}`);
            } else {
                alert('Signup failed: Unknown error');
            }
        }
    };

    return (
        <div className="signup-container">
            <form className="signup-form" onSubmit={handleSubmit}>
                <h2>Signup</h2>
                <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Email"
                    required
                />
                <input
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    placeholder="Username"
                    required
                />
                <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Password"
                    required
                />
                <button type="submit">Signup</button>
            </form>
        </div>
    );
};

export default Signup;
