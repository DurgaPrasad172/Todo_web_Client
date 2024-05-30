import React, { useEffect, useState, useContext } from 'react';
import { fetchTodos, addTodo, updateTodo, deleteTodo } from '../../api/todo';
import { AuthContext } from '../../context/AuthContext';
import TodoItem from './TodoItem';
import AddTodo from './AddTodo';
import './TodoList.css';

const TodoList = () => {
    const [todos, setTodos] = useState([]);
    const { auth } = useContext(AuthContext);

    useEffect(() => {
        const getTodos = async () => {
            const data = await fetchTodos(auth);
            setTodos(data);
        };

        if (auth) {
            getTodos();
        }
    }, [auth]);

    const handleAddTodo = async ({ title, body }) => {
        const newTodo = await addTodo({ title, body }, auth);
        setTodos([...todos, newTodo]);
    };

    const handleUpdateTodo = async (id, updatedTodo) => {
        const updatedTodoItem = await updateTodo(id, updatedTodo, auth);
        setTodos(todos.map(todo => (todo._id === id ? updatedTodoItem : todo)));
    };

    const handleDeleteTodo = async (id) => {
        await deleteTodo(id, auth);
        setTodos(todos.filter(todo => todo._id !== id));
    };

    return (
        <div className="todo-list-container">
            <h2>Your Todos</h2>
            <AddTodo onAddTodo={handleAddTodo} />
            {todos.length === 0 ? (
                <p>No Task Found</p>
            ) : (
                todos.map(todo => (
                    <TodoItem
                        key={todo._id}
                        todo={todo}
                        onUpdateTodo={handleUpdateTodo}
                        onDeleteTodo={handleDeleteTodo}
                    />
                ))
            )}
        </div>
    );
};

export default TodoList;
