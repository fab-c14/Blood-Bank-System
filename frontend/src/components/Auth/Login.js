import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import UserAcceptance from './UserAcceptance';

const LoginForm = () => {
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });
    const [showModal, setShowModal] = useState(false);
    const navigate = useNavigate();

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // TODO: Implement form submission logic (send data to backend)
        console.log(formData);
    };

    // handling the login click
    const handleLoginClick = (e) => {
        e.preventDefault();
        setShowModal(true);
    }

    // handling hospital login
    const handleHospitalLogin = (e) => {
        e.preventDefault();
        navigate('/signin');
    }

    // handle accept agreement
    const handleAccept = () => {
        setShowModal(false);
        // Proceed with login or registration logic here
    };

    return (
        <div className="container mt-5">
            <div className="row justify-content-center">
                <div className="col-md-6 shadow-2 br4">
                    <h2 className="text-center">Donor Login</h2>
                    <form onSubmit={handleSubmit} className="ma3">
                        <div className="mb-3">
                            <label htmlFor="email" className="form-label">Email</label>
                            <input type="email" className="form-control" id="email" name="email" value={formData.email} onChange={handleChange} required />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="password" className="form-label">Password</label>
                            <input type="password" className="form-control" id="password" name="password" value={formData.password} onChange={handleChange} required />
                        </div>
                        <button type="button" className="btn btn-link btn-sm" onClick={handleLoginClick}>View User Agreement</button>
                        <button type="submit" className="btn btn-primary btn-sm">Login</button> &nbsp;
                        <button type="button" className="btn btn-warning btn-sm" onClick={handleHospitalLogin}> Hospital Login </button> &nbsp;
                        <button type='button' className='btn btn-default btn-sm rounded' onClick={() => navigate('/register')}>Register</button>
                    </form>
                </div>
            </div>
            {showModal && (
                <div className="modal fade show" tabIndex="-1" role="dialog">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title">User Acceptance Agreement</h5>
                                <button type="button" className="close" onClick={() => setShowModal(false)}>
                                    <span>&times;</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                <UserAcceptance />
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" onClick={() => setShowModal(false)}>Close</button>
                                <button type="button" className="btn btn-primary" onClick={handleAccept}>Accept</button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default LoginForm;
