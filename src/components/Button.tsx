import React from "react";

type String = {
  children: string;
};

const Button: React.FC<String> = ({ children }) => {
  return (
    <div>
      <button className="flex gap-2 px-6 py-4 bg-black text-white">{children}</button>
    </div>
  );
};

export default Button;
