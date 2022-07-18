import React from "react";

const Button = ({ onClick, title, disabled }) => {
  return (
    <button
      onClick={onClick}
      type="submit"
      className="text-gray-800 bg-slate-100 focus:outline-none 
      focus:ring-2 focus:ring-slate-300 rounded-md 
      text-sm px-5 py-2.5 text-center"
      disabled={disabled}
    >
      {title}
    </button>
  );
};

export default Button;
