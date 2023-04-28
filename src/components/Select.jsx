import React from "react";

const Input = ({ label, options, icon: Icon, placeholder , onChange}) => {
  return (
    <div className="flex flex-col">
      <div className="flex items-center mb-2">
        {Icon && (
          <i className="mr-2 text-orange-600">
            <Icon />
          </i>
        )}
        <label className="text-sm font-semibold text-gray-700">{label}</label>
      </div>
      <select className="border border-gray-300 w-full rounded px-3 py-2 text-gray-600 focus:outline-none focus:ring-1 focus:ring-orange-600" onChange={(e) => onChange(e.target.value)}>
        <option>Select {placeholder}</option>
        {options.map((option, idx) => (
          <option key={idx} className="py-1">
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Input;
