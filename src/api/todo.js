import axios from 'axios';

const API_URL = 'http://localhost:3000/api/tasks';

export const fetchTodos = async (token) => {
    const response = await axios.get(`${API_URL}`, {
        headers: { Authorization: `Bearer ${token}` }
    });
    return response.data;
};

export const addTodo = async (todo, token) => {
    const response = await axios.post(`${API_URL}/create`, todo, {
        headers: { Authorization: `Bearer ${token}` }
    });
    return response.data;
};

export const updateTodo = async (id, updatedTodo, token) => {
    const response = await axios.put(`${API_URL}/update/${id}`, updatedTodo, {
        headers: { Authorization: `Bearer ${token}` }
    });
    return response.data;
};

export const deleteTodo = async (id, token) => {
    const response = await axios.delete(`${API_URL}/delete/${id}`, {
        headers: { Authorization: `Bearer ${token}` }
    });
    return response.data;
};
