import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import React from 'react';
import 'tachyons';
import Navbar from './components/Navbar/Navbar';
import LandingPage from './components/Home/LandingPage';
import FeaturesSection from './components/Home/FeatureSection';
import About from './components/Home/About';
import Footer from './components/Footer/Footer';
import LoginForm from './components/Auth/Login';
import RegisterForm from './components/Auth/RegisterForm';
import Profile from './Pages/Profile/Profile.js';
import DonationForm from './Pages/DonationForm/DonationForm.js';

const App = () => {
  return (
    <Router>
      <Navbar />
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
        <Route path="/signin" element={<LoginForm />} />
        <Route path="/register" element={<RegisterForm />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/donation" element={<DonationForm />} />
      </Routes>
    </Router>
  );
}

export default App;
