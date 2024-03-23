// src/App.js
import React, { useState } from 'react';
import RegisterForm from './components/Auth/RegisterForm';
import LoginForm from './components/Auth/Login';


function App() {
    const [route,setRoute] = useState('home')

    return (
        <div className="App">
         {
          route==='home'?<RegisterForm/>:<LoginForm/>
         }
        </div>
    );
}

export default App;
