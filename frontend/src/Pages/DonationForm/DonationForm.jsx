import React, { useState } from 'react';

const DonationForm = () => {
    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const [gender, setGender] = useState('');
    const [bloodType, setBloodType] = useState('');
    const [addressLine1, setAddressLine1] = useState('');
    const [addressLine2, setAddressLine2] = useState('');
    const [city, setCity] = useState('');
    const [country, setCountry] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [email, setEmail] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Add logic to handle donation form submission
        console.log('Name:', name);
        console.log('Age:', age);
        console.log('Gender:', gender);
        console.log('Blood Type:', bloodType);
        console.log('Address Line 1:', addressLine1);
        console.log('Address Line 2:', addressLine2);
        console.log('City:', city);
        console.log('Country:', country);
        console.log('Phone Number:', phoneNumber);
        console.log('Email:', email);
    };

    return (
        <div className="container my-5">
            <h2 className="text-center">Donation Form</h2>
            <p className="text-center mb-4">Please fill out the form to add your information for donation.</p>
            <form onSubmit={handleSubmit} className="row justify-content-center">
                <div className="col-md-6">
                    <div className="mb-3">
                        <label htmlFor="name" className="form-label">Name:</label>
                        <input type="text" id="name" value={name} onChange={(e) => setName(e.target.value)} className="form-control" required />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="age" className="form-label">Age:</label>
                        <input type="number" id="age" value={age} onChange={(e) => setAge(e.target.value)} className="form-control" required />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="gender" className="form-label">Gender:</label>
                        <select id="gender" value={gender} onChange={(e) => setGender(e.target.value)} className="form-select" required>
                            <option value="">Select</option>
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                            <option value="other">Other</option>
                        </select>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="bloodType" className="form-label">Blood Type:</label>
                        <select id="bloodType" value={bloodType} onChange={(e) => setBloodType(e.target.value)} className="form-select" required>
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
                    <div className="mb-3">
                        <label htmlFor="addressLine1" className="form-label">Address Line 1:</label>
                        <input type="text" id="addressLine1" value={addressLine1} onChange={(e) => setAddressLine1(e.target.value)} className="form-control" required />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="addressLine2" className="form-label">Address Line 2:</label>
                        <input type="text" id="addressLine2" value={addressLine2} onChange={(e) => setAddressLine2(e.target.value)} className="form-control" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="city" className="form-label">City:</label>
                        <input type="text" id="city" value={city} onChange={(e) => setCity(e.target.value)} className="form-control" required />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="country" className="form-label">Country:</label>
                        <input type="text" id="country" value={country} onChange={(e) => setCountry(e.target.value)} className="form-control" required />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="phoneNumber" className="form-label">Phone Number:</label>
                        <input type="tel" id="phoneNumber" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} className="form-control" required />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="email" className="form-label">Email:</label>
                        <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} className="form-control" required />
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </div>
            </form>
        </div>
    );
};

export default DonationForm;
