import React from "react";
import { HomeIcon } from "@heroicons/react/solid";
import { CircleButton, ProfilePhoto, ProfilePhotoSkeleton } from "../../atoms";
import { useApp } from "../../../context/AppContext";
import { REQUEST_STATUS } from "../../../utils/constants";
import { Menu } from "@headlessui/react";
const Header = () => {
  const { logout, requestStatus, analyzedAll, userProfile } = useApp();

  let avgCovidStatusProbability = 0;

  if (REQUEST_STATUS.FULFILLED === requestStatus.fecthAnalyzedAll) {
    avgCovidStatusProbability = analyzedAll.avgCovidStatusProbability * 100;
  }

  return (
    <div
      className="px-32 py-[25px] flex justify-between items-center drop-shadow-sm h-12
     bg-slate-100 text-primary"
    >
      <div className="w-[95px] h-[46px] bg-[url('/src/assets/images/imask.png')] bg-contain bg-no-repeat"></div>
      <div className="flex justify-center items-center gap-2">
        <CircleButton active icon={HomeIcon} />
        {REQUEST_STATUS.IDLE === requestStatus.fecthAnalyzedAll ||
        REQUEST_STATUS.PENDING === requestStatus.fecthAnalyzedAll ? (
          <div className="w-24 h-5 bg-slate-200 animate-pulse"></div>
        ) : (
          <div
            className={`rounded-xl px-2 text-white text-[10px] p-1 ${
              avgCovidStatusProbability > 80 ? "bg-red-500" : "bg-primary-green"
            }`}
          >
            COVID-19 STATUS: {avgCovidStatusProbability} %
          </div>
        )}
      </div>
      {REQUEST_STATUS.IDLE === requestStatus.fetchUserProfile ||
      REQUEST_STATUS.PENDING === requestStatus.fetchUserProfile ? (
        <ProfilePhotoSkeleton />
      ) : (
        <Menu as="div" className="relative inline-block text-left">
          <div>
            <Menu.Button>
              <ProfilePhoto photo={userProfile.photo} />
            </Menu.Button>
          </div>
          <Menu.Items
            className="text-xs absolute right-0 w-40 mt-1 origin-top-right
           bg-white divide-y divide-gray-100 rounded-md shadow-md
           ring-opacity-5 focus:outline-none"
          >
            <div className="px-1 py-1 ">
              <Menu.Item>
                <button
                  type="button"
                  className="group flex rounded-md items-center w-full px-2 py-2"
                  onClick={logout}
                >
                  Log Out
                </button>
              </Menu.Item>
            </div>
          </Menu.Items>
        </Menu>
      )}
    </div>
  );
};

export default Header;
