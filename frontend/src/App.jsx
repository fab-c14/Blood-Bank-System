import React,{ useState } from 'react';
import { BrowserRouter as Router, Navigate, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import LandingPage from './components/Home/LandingPage';
import FeaturesSection from './components/Home/FeatureSection';
import About from './components/Home/About';
import Footer from './components/Footer/Footer';
import LoginForm from './components/Auth/Login';
import RegisterForm from './components/Auth/RegisterForm';
import Profile from './Pages/Profile/Profile';
import DonationForm from './Pages/DonationForm/DonationForm';

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  const handleLogin = () => {
    // Implement your login logic here (e.g., set isLoggedIn to true)
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    // Implement your logout logic here (e.g., set isLoggedIn to false)
    setIsLoggedIn(false);
  };

  return (
    <Router>
      <Navbar isLoggedIn={isLoggedIn} onLogout={handleLogout} />
      <Routes>
        <Route
          path="/"
          element={
            <React.Fragment>
              <LandingPage />
              <FeaturesSection />
              <About />
              <Footer />
            </React.Fragment>
          }
        />
        <Route path="/signin" element={<LoginForm onLogin={handleLogin} isLoggedIn={isLoggedIn}/>} />
        <Route path="/register" element={<RegisterForm isLoggedIn={isLoggedIn}/>} />
        <Route
          path="/profile"
          element={
            isLoggedIn ? (
              <Profile />
            ) : (
              <Navigate to="/signin" />
            )
          }
        />
        <Route
          path="/donation"
          element={
            isLoggedIn ? (
              <DonationForm />
            ) : (
              <Navigate to="/signin" />
            )
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
