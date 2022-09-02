import React from "react";

const Button = ({ onClick, title, disabled, type, variant = "white" }) => {
  let styling = "bg-slate-100 focus:ring-slate-300";

  if (variant === "green") styling = "bg-green-100 focus:ring-green-300";

  return (
    <button
      onClick={onClick}
      type={type}
      className={`text-gray-800  focus:outline-none 
      focus:ring-2 rounded-md 
      text-sm px-5 py-2.5 text-center ${styling}`}
      disabled={disabled}
    >
      {title}
    </button>
  );
};

export default Button;
