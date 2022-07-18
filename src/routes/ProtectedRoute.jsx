import React from "react";
import { Navigate, useLocation } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const location = useLocation();

  const token = localStorage.getItem("imask-token");

  if (!token)
    return (
      <Navigate
        to="/login"
        replace
        state={{ redirectPath: location.pathname }}
      />
    );

  return <>{children}</>;
};

export default ProtectedRoute;
