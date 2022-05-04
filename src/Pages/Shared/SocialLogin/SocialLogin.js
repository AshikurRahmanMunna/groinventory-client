import { faFacebookF, faGoogle } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { useSignInWithFacebook, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { Navigate, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import './SocialLogin.css';

const SocialLogin = () => {
    const [signInWithGoogle, userGoogle, loadingGoogle, errorGoogle] = useSignInWithGoogle(auth);
    const [signInWithFacebook, userFacebook, loadingFacebook, errorFacebook] = useSignInWithFacebook(auth);
    const location = useLocation();
    const from = location?.state?.from?.pathname || '/';
    const navigate = useNavigate();
    if(userGoogle || userFacebook) {
        navigate(from, {replace: true});
    }
    if(errorFacebook) {
        console.log(errorFacebook);
    }
    return (
        <div className='social-login'>
            <p className="text-center mt-2">Or Continue With</p>
            <button onClick={() => signInWithFacebook()} className='me-3'><FontAwesomeIcon icon={faFacebookF} /></button>
            <button onClick={() => signInWithGoogle()}><FontAwesomeIcon icon={faGoogle} /></button>
        </div>
    );
};

export default SocialLogin;