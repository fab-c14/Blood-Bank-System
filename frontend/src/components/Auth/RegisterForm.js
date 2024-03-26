import React, { useState } from 'react';
 // Import CSS file for custom styling

const RegisterForm = () => {
    // Define state variables for form fields
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    // Handle form submission
    const handleSubmit = (event) => {
        event.preventDefault();
        // TODO: Implement form submission logic (e.g., send data to backend)
        console.log('Form submitted:', { username, email, password });
    };

    return (
        <div className="container mt-5">
            <div className="row justify-content-center"> {/* Center the form */}
                <div className="col-md-6 shadow-2 br4"> {/* Take up 6 grid columns on medium screens */}
                    <h2 className='text-center'>Register</h2>
                    <form onSubmit={handleSubmit}  className='ma3'>
                        <div className="mb-3">
                            <label htmlFor="username" className="form-label ">Username</label>
                            <input
                                type="text"
                                className="form-control"
                                id="username"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                                required
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="email" className="form-label">Email</label>
                            <input
                                type="email"
                                className="form-control"
                                id="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="password" className="form-label">Password</label>
                            <input
                                type="password"
                                className="form-control"
                                id="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />
                        </div>
                        <button type="submit" className="btn btn-primary btn-sm b grow">Register</button>&nbsp;
                        <button type="button" className="btn btn-info btn-sm b grow"> Hospital Register </button>&nbsp;
                        <button type='button' className='btn btn-default btn-sm b b--light-red grow hover-bg-red' >Login</button>

                    </form>
                </div>
            </div>
        </div>
    );
};

export default RegisterForm;
