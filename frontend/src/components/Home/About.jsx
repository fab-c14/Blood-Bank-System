import React from 'react';
import aboutImage from './bloodtesttube.png';

const About = () => {
    return (
        <section className="py-5 bg-light" id="about">
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <h2 className="text-primary mb-4">About Us</h2>
                        <p className="lead">At Blood Bank System, we are committed to ensuring a safe and reliable blood supply for patients in need. Our mission is to promote blood donation and raise awareness about its importance in saving lives.</p>
                        <p className="mb-4">We work tirelessly to connect blood donors with recipients and provide support to blood banks and hospitals across the country. With your help, we can continue to make a difference in the lives of countless individuals.</p>
                    </div>
                    <div className="col-md-6 d-flex align-items-center justify-content-center">
                        <img src={aboutImage} alt="About Us" className="img-fluid" style={{ maxWidth: '100%', maxHeight: '300px' }} />
                    </div>
                </div>
            </div>
        </section>
    );
}

export default About;
