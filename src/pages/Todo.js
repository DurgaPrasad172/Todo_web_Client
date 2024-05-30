// src/pages/Todo.js
import React, { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import TodoList from '../components/Todo/TodoList';

const Todos = () => {
    const { auth } = useContext(AuthContext);

    if (!auth) {
        return <p>You need to log in to view your todos.</p>;
    }

    return <TodoList />;
};

export default Todos;
