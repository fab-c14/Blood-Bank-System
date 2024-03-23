// src/App.js
import React from 'react';
import RegisterForm from './components/Auth/RegisterForm';
import LoginForm from './components/Auth/Login';

function App() {
    return (
        <div className="App">
            <RegisterForm />
            <LoginForm />
        </div>
    );
}

export default App;
