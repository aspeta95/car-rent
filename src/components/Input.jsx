import React from "react";

const Input = ({ label, type, icon: Icon, onChange, children }) => {
  return (
    <div className="flex flex-col">
      <div className="flex items-center mb-2">
        {Icon && (
          <i className="mr-2 text-orange-600">
            <Icon />
          </i>
        )}
        <label>{label}</label>
      </div>
      <input
        type={type}
        className="border border-gray-300 w-full rounded px-3 py-2 text-gray-600 focus:outline-none focus:ring-1 focus:ring-orange-600"
        onChange={(e) => onChange(e.target.value)}
      >
        {children}
      </input>
    </div>
  );
};

export default Input;
