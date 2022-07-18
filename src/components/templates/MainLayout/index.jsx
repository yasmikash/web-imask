import React, { useEffect } from "react";
import { Outlet } from "react-router-dom";
import { useApp } from "../../../context/AppContext";
import { REQUEST_STATUS } from "../../../utils/constants";
import { Header } from "../../organisms";

const MainLayout = () => {
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
