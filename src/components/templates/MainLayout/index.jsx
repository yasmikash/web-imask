import React, { useEffect } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useApp } from "../../../context/AppContext";
import { ADMIN_MODE } from "../../../utils/constants";
import { Header } from "../../organisms";

const MainLayout = () => {
  const { authMode } = useApp();
  if (authMode === ADMIN_MODE) return <Navigate to="/admin" replace />;

  const { fetchUserProfile, fecthAnalyzedAll } = useApp();

  useEffect(() => {
    fetchUserProfile();
    fecthAnalyzedAll();
  }, []);

  return (
    <div className="flex flex-col">
      <Header />
      <Outlet />
    </div>
  );
};

export default MainLayout;
