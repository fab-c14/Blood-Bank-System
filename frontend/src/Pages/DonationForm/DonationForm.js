import React, { useState } from 'react';

const DonationForm = () => {
    const [bloodType, setBloodType] = useState('');
    const [donationDate, setDonationDate] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Add logic to handle donation form submission
        console.log('Blood Type:', bloodType);
        console.log('Donation Date:', donationDate);
    };

    return (
        <div>
            <h2>Donation Form</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="bloodType">Blood Type:</label>
                    <select id="bloodType" value={bloodType} onChange={(e) => setBloodType(e.target.value)} required>
                        <option value="">Select</option>
                        <option value="A+">A+</option>
                        <option value="A-">A-</option>
                        <option value="B+">B+</option>
                        <option value="B-">B-</option>
                        <option value="AB+">AB+</option>
                        <option value="AB-">AB-</option>
                        <option value="O+">O+</option>
                        <option value="O-">O-</option>
                    </select>
                </div>
                <div>
                    <label htmlFor="donationDate">Donation Date:</label>
                    <input type="date" id="donationDate" value={donationDate} onChange={(e) => setDonationDate(e.target.value)} required />
                </div>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default DonationForm;
