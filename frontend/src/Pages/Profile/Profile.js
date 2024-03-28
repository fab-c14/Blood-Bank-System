import React, { useState } from 'react';
import DonationForm from '../DonationForm/DonationForm.js';
import { Navigate, useNavigate } from 'react-router-dom';

const ProfilePage = () => {
    
    const navigate = useNavigate();
    // Temporary user information
    const user = {
        username: 'John Doe',
        email: 'john@example.com',
        // Add more user information as needed
    };

   const handleDonate = (e)=>{
        e.preventDefault();
        navigate('/donation');
   }

    return (
        <div className="container mt-2">
            <div className="row justify-content-center">
                <div className="col-md-8">
                    <div className="card shadow-sm">
                        <div className="card-body">
                            <h2 className="card-title text-center mb-4">Your Information</h2>
                            
                            <div className="mb-3">
                                <strong>Username: </strong> {user.username}
                            </div>
                            <div className="mb-3">
                                <strong>Email: </strong> {user.email}
                            </div>

                            
                            <div className="text-center mb-4">
                                <button className="btn btn-primary" onClick={handleDonate}>
                                    Donate
                                </button>
                            </div>

                           
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProfilePage;
