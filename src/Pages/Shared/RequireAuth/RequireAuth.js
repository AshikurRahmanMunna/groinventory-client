import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import Loading from '../Loading/Loading';

const RequireAuth = ({children}) => {
    const [user, loading, error] = useAuthState(auth);
    const location = useLocation();
    // wait to get user (prevent redirect to login)
    if(loading) {
        return <Loading></Loading>;
    }
    // if user not available redirect him to login
    if(!user) {
        return <Navigate to="/login" state={{ from: location }} replace />;
    }
    // if user email not verified redirect him to email verify
    if(user?.providerData[0]?.providerId === 'password' && user?.emailVerified === false) {
        return <Navigate to="/emailverify" state={{ from: location }} replace />;
    }
    // return children
    return children;
};

export default RequireAuth;