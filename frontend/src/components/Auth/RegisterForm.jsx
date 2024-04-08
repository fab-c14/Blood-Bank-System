import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import UserAcceptance from '../../Pages/UserAcceptance/UserAcceptance';
import HospitalAcceptance from '../../Pages/HospitalAcceptance/HospitalAcceptance';
const RegisterForm = ({ isLoggedIn}) => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showModal, setShowModal] = useState(false);
    const [showModal1,setShowModal1] = useState(false);
    const navigate = useNavigate();
    const[isHospital,setIsHospital] = useState(false);
    

     useEffect(() => {
        if (isLoggedIn) {
            navigate('/profile');
        }
    }, [isLoggedIn, navigate]);

  
    // handle the hospital regs click
    const handleHospitalLogin = (e) => {
        e.preventDefault();
        if(!isHospital){
            setIsHospital(true);
        }else{
            setIsHospital(false);
        }
    }

    const handleLoginClick = (e) => {
        e.preventDefault();
        navigate('/signin');
    };

    const handleModalShow = () => {
       
        if (isHospital){
            setShowModal1(true);
            setShowModal(false);
        }
        setShowModal(true);
    };

    const handleModalClose = () => {
        setShowModal(false);
        setShowModal1(false);
    };
    
    // handle submit
    const handleSubmit = (e)=>{
        // keep it empty for now
    }

    return (
        <div className="container mt-5">
            <div className="row justify-content-center">
                <div className="col-md-6 shadow-2 br4">
                <hr className=''/>
                    <h2 className="text-center">{isHospital ? 'Hospital Registration' : 'Register'}</h2>
                    <form onSubmit={handleSubmit} className="ma3">
                        <div className="mb-3">
                            <label htmlFor="username" className="form-label">{isHospital ? 'Hospital Name' : 'Username'}</label>
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
                            <label htmlFor="email" className="form-label">{isHospital ? 'Hospital Email' : 'Email'}</label>
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
                        <hr className='purple'/>

                        <button type="submit" className="btn btn-primary btn-sm b grow">Register</button>&nbsp;
                        <button type="button" className="btn btn-info btn-sm b grow" onClick={handleHospitalLogin}>{isHospital ? 'Donor Register' : 'Hospital Register'}</button>&nbsp;
                        {!isHospital && (
                            <>
                                <button type="button" className="btn btn-default btn-sm b b--light-red grow hover-bg-washed-green" onClick={handleLoginClick}>Login</button>&nbsp;
                            </>
                        )}
                        <button type="button" className="btn btn-sm link underline hover-orange hover-bg-washed-yellow" onClick={handleModalShow}>Terms</button>
                   
                    </form>
                    <hr className='purple'/>
                </div>
            </div>
            {!isHospital && <UserAcceptance showModal={showModal} handleModalClose={handleModalClose} />}
            {isHospital && <HospitalAcceptance showModal={showModal1} handleModalClose={handleModalClose}/>}
        </div>
    );
};

export default RegisterForm;
