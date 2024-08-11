import React from "react";

type LabelType = {
  label: string;
};

const InputField: React.FC<LabelType> = ({ label }) => {
  return (
    <div>
      <label className="capitalize font-medium text-sm text-[#474B57]" htmlFor="">
        {label}
      </label>
      <div className="w-full border rounded-md overflow-hidden">
        <input className="w-full outline-none px-3 py-2" type={label} />
      </div>
    </div>
  );
};

export default InputField;
