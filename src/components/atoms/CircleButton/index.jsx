import React from "react";

const CircleButton = ({ icon: Icon, active = false, onClick = () => {} }) => {
  return (
    <div
      onClick={onClick}
      className={`cursor-pointer rounded-full bg-slate-50 h-11 w-11 flex justify-center items-center ${
        active && "bg-dark-green"
      }`}
    >
      <Icon className={`h-8 text-dark-green ${active && "text-white"}`} />
    </div>
  );
};

export default CircleButton;
