import React from 'react';
import DonationForm from '../DonationForm/DonationForm.js';

const ProfilePage = () => {
    return (
        <div className="container mt-5">
            <div className="row justify-content-center">
                <div className="col-md-8">
                    <h2 className="text-center mb-4">User Profile</h2>
                    {/* Display user information here */}
                    {/* Example: <p>Username: John Doe</p> */}

                    {/* Donation form */}
                    <h3 className="text-center mb-4">Add Donation Information</h3>
                    <DonationForm />
                </div>
            </div>
        </div>
    );
}

export default ProfilePage;
