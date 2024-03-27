import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-dark text-light py-4">
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <h5 className="text-primary">Contact Us</h5>
                        <p>123 Main Street, Cityville, ABC 12345</p>
                        <p>Email: info@bloodbanksystem.com</p>
                        <p>Phone: 123-456-7890</p>
                    </div>
                    <div className="col-md-6">
                        <h5 className="text-primary">Quick Links</h5>
                        <ul className="list-unstyled">
                            <li><a href="#" className="text-light">Home</a></li>
                            <li><a href="#" className="text-light">About</a></li>
                            <li><a href="#" className="text-light">Contact</a></li>
                        </ul>
                    </div>
                </div>
                <hr className="bg-light mt-4 mb-3" />
                <div className="text-center">
                    <p className="text-muted">&copy; 2024 Blood Bank System. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
