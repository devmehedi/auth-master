import React, { useContext } from 'react';
import { AuthContext } from '../providers/AuthProvider';
import { Navigate } from 'react-router-dom';

const PrivateRoutes = ({children}) => {
    const {user,isLoading} = useContext(AuthContext)
    if(isLoading){
        return <progress className="progress w-56"></progress>
    }
    if(user){
        return children
    }
    return <Navigate to="/login" replace={true}></Navigate>;
};

export default PrivateRoutes;