
import React, { useState } from 'react';
import './TodoItem.css';

const TodoItem = ({ todo, onUpdateTodo, onDeleteTodo }) => {
    const [editing, setEditing] = useState(false);
    const [updatedTitle, setUpdatedTitle] = useState(todo.title);
    const [updatedBody, setUpdatedBody] = useState(todo.body);
    const [isCompleted, setIsCompleted] = useState(todo.completed);

    const handleComplete = () => {
        setIsCompleted(true);
        alert('Task completed!');
    };

    const handleUpdate = () => {
        onUpdateTodo(todo._id, { title: updatedTitle, body: updatedBody });
        setEditing(false);
    };

    return (
        <div className="todo-item">
            {isCompleted ? (
                <>
                    <h3>{todo.title}</h3>
                    <p>{todo.body}</p>
                    <button className="delete-button" onClick={() => onDeleteTodo(todo._id)}>Delete</button>
                </>
            ) : (
                editing ? (
                    <>
                        <input
                            type="text"
                            value={updatedTitle}
                            onChange={(e) => setUpdatedTitle(e.target.value)}
                            className="todo-input"
                        />
                        <textarea
                            value={updatedBody}
                            onChange={(e) => setUpdatedBody(e.target.value)}
                            className="todo-textarea"
                        />
                        <button className="update-button" onClick={handleUpdate}>Update</button>
                    </>
                ) : (
                    <>
                        <h3>{todo.title}</h3>
                        <p>{todo.body}</p>
                        <button className="complete-button" onClick={handleComplete}>Complete</button>
                        <button className="edit-button" onClick={() => setEditing(true)}>Edit</button>
                        <button className="delete-button" onClick={() => onDeleteTodo(todo._id)}>Delete</button>
                    </>
                )
            )}
        </div>
    );
};

export default TodoItem;
