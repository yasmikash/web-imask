import React from "react";

const Button = ({ onClick, title, disabled, type, variant = "white" }) => {
  let styling =
    "text-gray-800 bg-slate-100 focus:ring-slate-300 text-sm px-5 py-2.5 ";

  if (variant === "green")
    styling =
      "bg-green-100 focus:ring-green-300 text-sm px-5 py-2.5 text-gray-800";
  if (variant === "secondary")
    styling = "bg-green-600 focus:ring-green-400 text-white text-xs p-2 px-4";

  return (
    <button
      onClick={onClick}
      type={type}
      className={`focus:outline-none 
      focus:ring-2 rounded-md 
      text-center ${styling}`}
      disabled={disabled}
    >
      {title}
    </button>
  );
};

export default Button;
