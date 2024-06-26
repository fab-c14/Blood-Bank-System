import { useNavigate } from 'react-router-dom';
import transfusion from './bloodtransfusion.png';
import React from 'react';
const LandingPage = () => {
    const navigate = useNavigate();

    return (
        <div className="container my-5" id="home">
            <div className="row">
                <div className="col-md-6">
                    <h1 className="text-primary">Welcome to the Blood Bank System</h1>
                    <p className="lead mb-4">
                        At the Blood Bank System, we are dedicated to saving lives through the power of blood donation. Our mission is to ensure a stable and reliable supply of blood for those in need, providing hope and support to patients and their families.
                    </p>
                  
                    <h2 className="mt-5 text-primary">About Blood Donation</h2>
                    <p className="mb-4">
                        Blood donation is a selfless act that saves lives. By donating blood, you can make a significant difference in the lives of those in need. Every donation matters and has the potential to save multiple lives.
                    </p>
                    <p>
                        Whether it's for emergency medical procedures, treating chronic illnesses, or supporting patients undergoing surgeries, donated blood plays a crucial role in healthcare.
                    </p>
                    <button className="btn btn-primary mt-4" onClick={() => navigate("/register")}>Sign Up To Donate</button>
                </div>
                <div className="col-md-6">
                    <img src={transfusion} alt="Blood Bank" className="img-fluid rounded" />
                </div>
            </div>
        </div>
    );
}

export default LandingPage;
