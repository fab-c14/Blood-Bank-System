import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const LoginForm = () => {
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });
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
    const handleLoginClick = (e) =>{
        e.preventDefault();
        navigate('/register');
    }

    // handling hospital login
    const handleHospitalLogin = (e) => {
        e.preventDefault();
        navigate('/signin');
    }

    return (
        <div className="container mt-5">
            <div className="row justify-content-center"> {/* Center the form */}
                <div className="col-md-6 shadow-2 br4"> {/* Take up 6 grid columns on medium screens */}
                    <h2 className='text-center'>Donor Login</h2>
                    <form onSubmit={handleSubmit} className='ma3'>
                        <div className="mb-3">
                            <label htmlFor="email" className="form-label">Email</label>
                            <input type="email" className="form-control" id="email" name="email" value={formData.email} onChange={handleChange} required />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="password" className="form-label">Password</label>
                            <input type="password" className="form-control" id="password" name="password" value={formData.password} onChange={handleChange} required />
                        </div>
                        <button type="submit" className="btn btn-primary btn-sm b grow">Login</button> &nbsp;
                        <button type="button" className="btn btn-warning btn-sm b grow" onClick={handleHospitalLogin}> Hospital Login </button> &nbsp;
                        <button type='button' className='btn btn-default btn-sm rounded b--gold b grow hover-bg-green' onClick={handleLoginClick}>Register</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default LoginForm;
