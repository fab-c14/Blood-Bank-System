import React from 'react';
import { useNavigate } from 'react-router-dom';

const Profile = () => {
    const navigate = useNavigate();

    // Temporary user information
    const user = {
        username: 'John Doe',
        email: 'john@example.com',
        contact: 1234567890,
        country: 'Algeria',
        city: 'Albama',
        BloodInfo: {
            type: 'A',
            age: 19,
            gender: 'male',
            
        }
    };

    const handleDonate = (e) => {
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
                                <strong>Gender: </strong> {user.BloodInfo.gender}
                            </div>

                            {user.BloodInfo.type && (
                                <div className="mb-3">
                                    <strong>Blood Type: </strong> {user.BloodInfo.type}
                                </div>
                            )}

                            {user.BloodInfo.age && (
                                <div className="mb-3">
                                    <strong>Age: </strong> {user.BloodInfo.age}
                                </div>
                            )}

                            {user.BloodInfo.country && (
                                <div className="mb-3">
                                    <strong>Country: </strong> {user.country}
                                </div>
                            )}

                            {user.BloodInfo.city && (
                                <div className="mb-3">
                                    <strong>City: </strong> {user.city}
                                </div>
                            )}

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

export default Profile;
