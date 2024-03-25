
import  { useState } from 'react';
import RegisterForm from './components/Auth/RegisterForm';
import LoginForm from './components/Auth/Login';
import Navbar from './components/Navbar/Navbar';
import LandingPage from './components/Home/LandingPage';
import Footer from './components/Footer/Footer';

function App() {
    const [route,setRoute] = useState('home')

    return (
        <div className="App">
         {
          route==='home'?
          <>
            <Navbar/>
            <LandingPage/>
            <Footer/>
          </>
          :
          
          <LoginForm/>
         }


        </div>
    );
}

export default App;
