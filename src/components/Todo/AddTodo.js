import React, { useState } from 'react';
import './AddTodo.css';

const AddTodo = ({ onAddTodo }) => {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        onAddTodo({ title, body });
        setTitle('');
        setBody('');
    };

    return (
        <form className="add-todo-form" onSubmit={handleSubmit}>
            <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Title"
                required
                className="add-todo-input"
            />
            <textarea
                value={body}
                onChange={(e) => setBody(e.target.value)}
                placeholder="Description"
                required
                className="add-todo-textarea"
            />
            <button type="submit" className="add-todo-button">Add</button>
        </form>
    );
};

export default AddTodo;
