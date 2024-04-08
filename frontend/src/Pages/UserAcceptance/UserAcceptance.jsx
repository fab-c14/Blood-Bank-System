import React from 'react';

const UserAcceptanceModal = ({ showModal, handleModalClose }) => {
    return (
        <div className={`modal ${showModal ? 'd-block' : 'd-none'}`} tabIndex="-1" role="dialog">
            <div className="modal-dialog modal-dialog-centered" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">User Acceptance Agreement</h5>
                        <button type="button" className="btn-close" aria-label="Close" onClick={handleModalClose}></button>
                    </div>
                    <div className="modal-body">
                        <p>
                            Please read the following terms and conditions carefully. By signing up for the Blood Bank System, you agree to comply with the following rules and regulations:
                        </p>
                        <ol>
                            <li>Users must provide accurate and truthful information during registration.</li>
                            <li>Users are responsible for maintaining the security of their account credentials.</li>
                            <li>Users must not engage in any illegal or unethical activities on the platform.</li>
                            <li>The Blood Bank System reserves the right to suspend or terminate user accounts that violate the terms of service.</li>
                            <li>Users consent to the collection and processing of their personal data as outlined in the privacy policy.</li>
                        </ol>
                        <p>
                            By clicking "Register", you acknowledge that you have read and agree to abide by the terms and conditions outlined above. You also agree that the information provided during registration may be shared with hospitals for the purpose of facilitating blood donation.
                        </p>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" onClick={handleModalClose}>Close</button>
    
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UserAcceptanceModal;
