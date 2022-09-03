import React from "react";
import { Link } from "react-router-dom";
import { UsersIcon, CogIcon, MapIcon } from "@heroicons/react/solid";

const AdminDashboardContainer = () => {
  return (
    <div className="h-screen bg-white flex justify-center align-middle">
      <div className="flex flex-wrap gap-14 max-h-14 font-medium mt-24">
        <Link to="#">
          <div className="flex flex-col shadow-lg cursor-pointer justify-center align-middle text-center p-4 w-52 h-52 bg-green-100 rounded-full">
            <UsersIcon className="h-12 mb-1" />
            <div>User Management</div>
          </div>
        </Link>
        <Link to="#">
          <div className="flex flex-col shadow-lg cursor-pointer justify-center align-middle text-center p-4 w-52 h-52 bg-green-100 rounded-full">
            <CogIcon className="h-12 mb-1" />
            <div>Mask Management</div>
          </div>
        </Link>
        <Link to="/admin/map">
          <div className="flex flex-col shadow-lg cursor-pointer justify-center align-middle text-center p-4 w-52 h-52 bg-green-100 rounded-full">
            <MapIcon className="h-12 mb-1" />
            <div>COVID-19 Map</div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default AdminDashboardContainer;
