import React from 'react';

const UserAcceptance = () => {
    return (
        <div className="container my-5">
            <div className="row">
                <div className="col-md-8 offset-md-2">
                    <h2 className="fs-5">User Acceptance Agreement</h2>
                    <p className="fs-6">
                        Please read the following terms and conditions carefully. By signing up for the Blood Bank System, you agree to comply with the following rules and regulations:
                    </p>
                    <ol className="fs-6">
                        <li>Users must provide accurate and truthful information during registration.</li>
                        <li>Users are responsible for maintaining the security of their account credentials.</li>
                        <li>Users must not engage in any illegal or unethical activities on the platform.</li>
                        <li>The Blood Bank System reserves the right to suspend or terminate user accounts that violate the terms of service.</li>
                        <li>Users consent to the collection and processing of their personal data as outlined in the privacy policy.</li>
                    </ol>
                    <p className="fs-6">
                        By clicking "Login" or "Register", you acknowledge that you have read and agree to abide by the terms and conditions outlined above.
                    </p>
                   
                </div>
            </div>
        </div>
    );
}

export default UserAcceptance;
