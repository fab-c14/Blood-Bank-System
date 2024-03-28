import './Nav.css';
import { Link } from 'react-router-dom';
import blooddonationlogo from './blooddonation.png';
import React from 'react';

const Navbar = ({ isLoggedIn, onLogout }) => {
    const handleLogout = () => {
        // Call the logout function provided by the parent component
        onLogout();
    };

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container">
                <Link className="navbar-brand" to="/">
                    <img src={blooddonationlogo} alt="logo" width={"50px"} className='my-2 pa2'/>
                    Blood Bank System
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item">
                            <Link className="nav-link" to="/">Home</Link>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Donate
                            </a>
                            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                {isLoggedIn ? (
                                    <React.Fragment>
                                        <li><Link className="dropdown-item" to="/profile">Profile</Link></li>
                                        <li><Link className="dropdown-item" to="/donation">Donate</Link></li>
                                        <li><button className="dropdown-item" onClick={handleLogout}>Logout</button></li>
                                    </React.Fragment>
                                ) : (
                                    <React.Fragment>
                                        <li><Link className="dropdown-item" to="/signin">Login</Link></li>
                                        <li><Link className="dropdown-item" to="/register">Sign Up</Link></li>
                                    </React.Fragment>
                                )}
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
