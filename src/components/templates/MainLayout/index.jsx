import React from "react";
import { Outlet } from "react-router-dom";
import { Header } from "../../organisms";

const MainLayout = () => {
  return (
    <div className="flex flex-col">
      <Header />
      <Outlet />
    </div>
  );
};

export default MainLayout;
