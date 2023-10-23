import React from "react";

const InputIndex = ({
  label = "",
  name = "",
  type = "text",
  className = "",
  placeholder = "",
  isRequired = "false",
}) => {
  return (
    <div className="w-1/2">
      <label
        htmlFor={name}
        className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
      >
        {label}
      </label>
      <input
        type="text"
        className={`bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 text-center ${className}`}
        placeholder={placeholder}
        required={isRequired}
      />
    </div>
  );
};

export default InputIndex;
