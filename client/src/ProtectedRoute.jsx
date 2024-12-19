import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';

const ProtectedRoute = () => {
  const { isAuthenticated } = useSelector(state => state.auth);
  console.log("Was just here", isAuthenticated)

  if (!isAuthenticated) {
    // If not authenticated, redirect to the login page (or any other route)
    return <Navigate to="/admin/auth" replace />;
  }

  // If authenticated, render the child routes (via Outlet)
  return <Outlet />;
};

export default ProtectedRoute;
