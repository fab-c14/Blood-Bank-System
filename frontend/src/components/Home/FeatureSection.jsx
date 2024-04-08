import React from 'react';
import bloodDonor from './blood-donor.png';

const FeaturesSection = () => {
    return (
        <section className="bg-light py-5">
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <img src={bloodDonor} alt="Blood Donor" className="img-fluid rounded" />
                    </div>
                    <div className="col-md-6 d-flex align-items-center">
                        <div>
                            <h2 className="text-primary mb-4">Why Donate Blood?</h2>
                            <p className="lead">Blood donation is a noble act that saves lives. Here are some reasons why you should consider donating blood:</p>
                            <ul className="list-unstyled">
                                <li><i className="bi bi-check-circle-fill text-success me-2"></i>It saves lives in emergencies and medical treatments.</li>
                                <li><i className="bi bi-check-circle-fill text-success me-2"></i>It helps patients suffering from chronic illnesses.</li>
                                <li><i className="bi bi-check-circle-fill text-success me-2"></i>It supports individuals undergoing surgeries and medical procedures.</li>
                            </ul>
                            <button className="btn btn-primary">Learn More</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default FeaturesSection;
