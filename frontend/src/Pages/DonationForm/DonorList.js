import React, { useState } from 'react';
import LoginForm from './components/LoginForm';
import DonorList from './components/DonorList';

const App = () => {
    const [isLoggedInAsHospital, setIsLoggedInAsHospital] = useState(false);

    const toggleHospitalLogin = () => {
        setIsLoggedInAsHospital(prevState => !prevState);
    };

    return (
        <div className="App">
            <h1>Blood Bank System</h1>
            
            <LoginForm isLoggedInAsHospital={isLoggedInAsHospital} toggleHospitalLogin={toggleHospitalLogin} />

            
            {isLoggedInAsHospital && <DonorList isLoggedInAsHospital={isLoggedInAsHospital} />}
        </div>
    );
};

export default App;
