import React, { forwardRef } from "react";

// Type definitions
type PropsType = {
  label: string;
};

const InputField = forwardRef<HTMLInputElement, PropsType>(({ label }, ref) => {
  return (
    <div>
      <label
        className="capitalize font-medium text-sm text-[#474B57]"
        htmlFor={label}
      >
        {label}
      </label>
      <div className="w-full border rounded-md overflow-hidden">
        <input
          ref={ref}
          className="w-full outline-none px-3 py-2"
          type={label}
          id={label}
        />
      </div>
    </div>
  );
});

export default InputField;
