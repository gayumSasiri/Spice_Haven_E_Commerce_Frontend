import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children, allowedRoles = [] }) => {
    const { isAuthenticated, user } = useSelector((state) => state.auth);

    if (!isAuthenticated) {
        // Redirect to login if the user is not authenticated
        return <Navigate to="/login" />;
    }

    if (allowedRoles.length > 0 && !allowedRoles.includes(user?.role)) {
        // If the user doesn't have the required role, redirect to Not Authorized page
        return <Navigate to="/notauthorized" />;
    }

    // If the user is authenticated and has the required role, render the children
    return children;
};

export default ProtectedRoute;

