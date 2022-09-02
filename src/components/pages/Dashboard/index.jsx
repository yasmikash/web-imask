import React from "react";
import AdminDashboardContainer from "../../../containers/AdminDashboardContainer";
import DashboardContainer from "../../../containers/DashboardContainer";
import { useApp } from "../../../context/AppContext";
import { ADMIN_MODE, USER_MODE } from "../../../utils/constants";

const Dashboard = () => {
  const { authMode } = useApp();

  return (
    <div className="px-32 bg-slate-50 pt-3">
      {authMode === USER_MODE && <DashboardContainer />}
      {authMode === ADMIN_MODE && <AdminDashboardContainer />}
    </div>
  );
};

export default Dashboard;
