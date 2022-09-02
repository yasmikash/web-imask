import React, { useEffect } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useApp } from "../../../context/AppContext";
import { USER_MODE } from "../../../utils/constants";
import { Header } from "../../organisms";

const AdminLayout = () => {
  const { authMode } = useApp();
  if (authMode === USER_MODE) return <Navigate to="/" replace />;

  const { fetchUserProfile } = useApp();

  useEffect(() => {
    fetchUserProfile();
  }, []);

  return (
    <div className="flex flex-col">
      <Header />
      <Outlet />
    </div>
  );
};

export default AdminLayout;
