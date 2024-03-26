import React, { useState } from 'react';


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
                <label className="label label-primary">Hello World</label>
                    <form onSubmit={handleSubmit}>
                        <div className="mb-3">
                            <label htmlFor="username" className="form-label text-center">Username</label>
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
                        <button type="submit" className="btn btn-primary ml-1">Register</button>
                        
                        <button type="button" className="btn btn-info mr-2"> Hospital Login </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default RegisterForm;
