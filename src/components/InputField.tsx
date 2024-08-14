import React, { LegacyRef } from "react";

// Hooks

type PropsType = {
  label: string;
  ref: LegacyRef<HTMLInputElement>;
};

const InputField: React.FC<PropsType> = ({ label, ref }) => {
  return (
    <div>
      <label
        className="capitalize font-medium text-sm text-[#474B57]"
        htmlFor=""
      >
        {label}
      </label>
      <div className="w-full border rounded-md overflow-hidden">
        <input
          ref={ref}
          className="w-full outline-none px-3 py-2"
          type={label}
        />
      </div>
    </div>
  );
};

export default InputField;
