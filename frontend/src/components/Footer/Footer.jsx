import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';
import './Footer.css'; // Import CSS file for footer styles

const Footer = () => {
    return (
        <footer className="bg-dark text-light py-4">
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <div className="footer-box">
                            <h5 className="text-primary">Contact Us</h5>
                            <p className="footer-text">Blood Bank System connects donors with hospitals in need of blood. If you have any inquiries or suggestions, feel free to reach out to us via email.</p>
                            <p><a href="mailto:info@bloodbanksystem.com" className="footer-link">info@bloodbanksystem.com</a></p>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="footer-box">
                            <h5 className="text-primary">Stay Connected</h5>
                            <div className="social-icons">
                                <a href="#" className="footer-icon-link"><FaFacebookF /></a>
                                <a href="#" className="footer-icon-link"><FaTwitter /></a>
                                <a href="#" className="footer-icon-link"><FaInstagram /></a>
                            </div>
                        </div>
                    </div>
                </div>
                <hr className="bg-light mt-4 mb-3" />
                <div className="text-center">
                    <p className=" white">&copy; 2024 Blood Bank System. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
