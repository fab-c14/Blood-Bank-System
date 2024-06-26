import React from 'react';

const HospitalAcceptance= ({ showModal, handleModalClose }) => {
    return (
        <div className={`modal ${showModal ? 'd-block' : 'd-none'}`} tabIndex="-1" role="dialog">
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title">Hospital Registration Agreement</h5>
                        <button type="button" className="btn-close" onClick={handleModalClose}></button>
                    </div>
                    <div className="modal-body">
                        <p>
                            Please read the following terms and conditions carefully. By registering your hospital with the Blood Bank System, you agree to comply with the following rules and regulations:
                        </p>
                        <ol>
                            <li>Hospitals must provide accurate and truthful information during registration.</li>
                            <li>Hospitals are responsible for maintaining the security of their account credentials.</li>
                            <li>Hospitals must not engage in any illegal or unethical activities on the platform.</li>
                            <li>The Blood Bank System reserves the right to suspend or terminate hospital accounts that violate the terms of service.</li>
                            <li>Hospitals consent to the collection and processing of their institutional data as outlined in the privacy policy.</li>
                        </ol>
                        <p>
                            By clicking "Register", you acknowledge that you have read and agree to abide by the terms and conditions outlined above.
                        </p>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" onClick={handleModalClose}>Close</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HospitalAcceptance;
