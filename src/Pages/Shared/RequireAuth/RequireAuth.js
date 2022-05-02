import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import Loading from '../Loading/Loading';

const RequireAuth = ({children}) => {
    const [user, loading, error] = useAuthState(auth);
    const location = useLocation();
    console.log(!user);
    if(loading) {
        return <Loading></Loading>;
    }
    if(!user) {
        return <Navigate to="/login" state={{ from: location }} replace />;
    }
    if(user?.providerData[0]?.providerId === 'password' && user?.emailVerified === false) {
        return <Navigate to="/emailverify" state={{ from: location }} replace />;
    }
    return children;
};

export default RequireAuth;