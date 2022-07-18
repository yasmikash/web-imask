import React from "react";

const Input = ({
  label,
  placeholder,
  value,
  name,
  onChange,
  type = "text",
}) => {
  return (
    <div className="flex flex-col text-sm">
      <label htmlFor={name} className="text-xs">
        {label}
      </label>
      <input
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="bg-slate-50 text-gray-900
      block w-full p-2.5 focus:outline-none focus:ring-primary-green"
        required
        name={name}
      />
    </div>
  );
};

export default Input;
