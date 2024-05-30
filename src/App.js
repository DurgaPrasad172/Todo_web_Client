// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import TopHeader from './components/TopHeader';
import Home from './pages/Home';
import Login from './components/Auth/Login';
import Signup from './components/Auth/Signup';
import Todos from './pages/Todo';

const App = () => {
    return (
        <Router>
            <AuthProvider>
                <TopHeader />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/signup" element={<Signup />} />
                    <Route path="/todos" element={<Todos />} />
                </Routes>
            </AuthProvider>
        </Router>
    );
};

export default App;
