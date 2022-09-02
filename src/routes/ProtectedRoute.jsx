import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import { useApp } from "../context/AppContext";
import { ADMIN_MODE } from "../utils/constants";

const ProtectedRoute = ({ children }) => {
  const location = useLocation();
  const { token, authMode } = useApp();

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
