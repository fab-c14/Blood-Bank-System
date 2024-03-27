import { useState } from 'react';
import RegisterForm from './components/Auth/RegisterForm';
import LoginForm from './components/Auth/Login';
import Navbar from './components/Navbar/Navbar';
import LandingPage from './components/Home/LandingPage';
import Footer from './components/Footer/Footer';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import React from 'react';
import 'tachyons';
import FeaturesSection from './components/Home/FeatureSection';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={
        <React.Fragment>
          <LandingPage />
          <FeaturesSection/>
          <Footer />
        </React.Fragment>} />
        <Route path="/signin" element={
        <React.Fragment>
          <LoginForm />
         
        </React.Fragment>} />
        <Route path="/register" element={
        <React.Fragment>
          <RegisterForm />
          
        </React.Fragment>} />
      </Routes>
    </Router>
  );
}

export default App;
