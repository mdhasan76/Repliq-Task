import React, { useContext } from 'react';
import { AuthContext } from '../shared/AuthProvider';

const PrivateRoute = ({children}) => {
    const {user,loading} = useContext(AuthContext);
    if(loading){}
    return 
};

export default PrivateRoute;