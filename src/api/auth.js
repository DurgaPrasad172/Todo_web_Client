
//src/api/auth.js
import axios from 'axios';

const API_URL = 'http://localhost:3000/api';  // Adjust this URL as needed

export const login = async (email, password) => {
    const response = await axios.post(`${API_URL}/login`, { email, password });
    return response.data;
};

export const signup = async (email, username, password) => {
    console.log('Signup Request:', { email, username, password });
    const response = await axios.post(`${API_URL}/register`, { email, username, password });
    return response.data;
};
