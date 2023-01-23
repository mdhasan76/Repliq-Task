import React, { useContext } from 'react';
import { AuthContext } from '../shared/AuthProvider';
import useAdmin from "../../customHooks/useAdmin"
import { Navigate, useLocation } from 'react-router-dom';
import Spinner from '../shared/Spinner';


const AdminRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const [isAdmin, adminLoading] = useAdmin(user?.email);
    const location = useLocation();
    if (loading || adminLoading) {
        return <Spinner />
    }

    if (user && isAdmin) {
        return children
    }
    return <Navigate to='/' state={{ from: location }} replace />
};

export default AdminRoute;