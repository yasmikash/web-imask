import React from "react";
import { MapIcon } from "@heroicons/react/outline";
import { CovidSpreadMap } from "../components/organisms";
import { useApp } from "../context/AppContext";
import { useEffect } from "react";
const AdminMapContainer = () => {
  const { createFlagLocations, fetchFlaggedLocations, flaggedLocations } =
    useApp();

  const handleUpdateLocation = async (locations) => {
    await createFlagLocations(locations);
  };

  const fetchInitLocations = async () => {
    await fetchFlaggedLocations();
  };

  const locations = flaggedLocations
    ? flaggedLocations[0].locations.map((latLng) => ({
        lat: latLng.lat,
        lng: latLng.lng,
      }))
    : [
        { lat: 0, lng: 0 },
        { lat: 0, lng: 0 },
        { lat: 0, lng: 0 },
      ];

  useEffect(() => {
    fetchInitLocations();
  }, []);

  return (
    <div className="flex">
      <div className="flex flex-col gap-2 w-2/12 p-4 mr-4 bg-slate-100">
        <div className="bg-white p-2 px-6 pl-2 border-l-4 border-l-green-600 rounded-md cursor-pointer">
          <div className="flex align-middle text-green-700 font-semibold text-sm ">
            <MapIcon className="h-6" />{" "}
            <div className="ml-4">Local COVID-19 Spread Map</div>
          </div>
        </div>
        <div className="bg-white p-2 px-6 pl-2 rounded-md cursor-pointer">
          <div className="flex align-middle text-green-700 font-semibold text-sm ">
            <MapIcon className="h-6" />{" "}
            <div className="ml-4">User Navigational Map</div>
          </div>
        </div>
      </div>
      <div className="flex-1 h-screen">
        <CovidSpreadMap
          onUpdateLocation={handleUpdateLocation}
          initLocations={locations}
        />
      </div>
    </div>
  );
};

export default AdminMapContainer;
