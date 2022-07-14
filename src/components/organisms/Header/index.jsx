import React from "react";
import { HomeIcon, UserCircleIcon } from "@heroicons/react/solid";
import { CircleButton } from "../../atoms";

const Header = () => {
  return (
    <div
      className="px-32 py-[25px] flex justify-between items-center drop-shadow-sm h-12
     bg-slate-100 text-primary"
    >
      <div className="w-[95px] h-[46px] bg-[url('/src/assets/images/imask.png')] bg-contain bg-no-repeat"></div>
      <div className="flex justify-center items-center gap-2">
        <CircleButton active icon={HomeIcon} />
        <div className="absolute rounded-xl px-2 text-white text-[10px] p-1 bg-red-500 opacity-20">
          COVID-19 STATUS: 51%
        </div>
        <div className="rounded-xl px-2 text-white text-[10px] p-1 bg-red-500">
          COVID-19 STATUS: 51%
        </div>
      </div>
      <CircleButton icon={UserCircleIcon} />
    </div>
  );
};

export default Header;
