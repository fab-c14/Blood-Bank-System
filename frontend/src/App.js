
import  { useState } from 'react';
import RegisterForm from './components/Auth/RegisterForm';
import LoginForm from './components/Auth/Login';

import LandingPage from './components/Home/LandingPage';

function App() {
    const [route,setRoute] = useState('home')

    return (
        <div className="App">
         {
          route==='home'?<LandingPage/>:<LoginForm/>
         }


        </div>
    );
}

export default App;
