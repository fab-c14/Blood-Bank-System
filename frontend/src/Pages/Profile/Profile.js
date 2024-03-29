import React from 'react';
import {  useNavigate } from 'react-router-dom';

const ProfilePage = () => {
    
    const navigate = useNavigate();
    // Temporary user information
    const user = {
        username: 'John Doe',
        email: 'john@example.com',
        contact:1234567890,
        country:'Algeria',
        city:'Albama',
        BloodInfo:{
            type:'A',
            age:19,
            gender:'male',
        }
        
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
                            <div className="mb-3">
                                <strong>Gender: </strong> {user.gender}
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
