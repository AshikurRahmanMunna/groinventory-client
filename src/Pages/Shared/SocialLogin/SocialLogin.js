import { faFacebookF, faGoogle } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import axios from 'axios';
import React from 'react';
import { useAuthState, useSignInWithFacebook, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { Navigate, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import './SocialLogin.css';

const SocialLogin = () => {
    const [signInWithGoogle, userGoogle, loadingGoogle, errorGoogle] = useSignInWithGoogle(auth);
    const [signInWithFacebook, userFacebook, loadingFacebook, errorFacebook] = useSignInWithFacebook(auth);
    const location = useLocation();
    const from = location?.state?.from?.pathname || '/';
    const navigate = useNavigate();
    const [user, loading, error] = useAuthState(auth);
    if(user) {
        const {email} = user;
        axios
      .post("https://secret-wildwood-43092.herokuapp.com/user", {email})
      .then((res) =>
        {
          localStorage.setItem("accessToken", res?.data?.accessToken);
          navigate(from, {replace: true});
        }
      );
    }
    // if(userGoogle || userFacebook) {
    //     navigate(from, {replace: true});
    // }
    if(errorFacebook) {
        console.log(errorFacebook);
    }
    return (
        <div className='social-login'>
            {/* social login */}
            <p className="text-center mt-2">Or Continue With</p>
            {/* facebook */}
            <button onClick={() => signInWithFacebook()} className='me-3'><FontAwesomeIcon icon={faFacebookF} /></button>
            {/* google */}
            <button onClick={() => signInWithGoogle()}><FontAwesomeIcon icon={faGoogle} /></button>
        </div>
    );
};

export default SocialLogin;