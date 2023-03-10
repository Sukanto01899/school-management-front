import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import { auth } from '../firebase.init';
import PageLoading from './PageLoading';

const RequireAuth = ({children}) => {
    const [user, loading, error] = useAuthState(auth);
    const location = useLocation()

    if(loading){
        return <PageLoading/>
    }

    if(!user){
       return <Navigate to='/login' state={{form: location}} replace></Navigate>
    }

    return children
};

export default RequireAuth;