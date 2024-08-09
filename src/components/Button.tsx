import React from "react";

type ButtonProps = {
  children: React.ReactNode;
};

const Button: React.FC<ButtonProps> = ({ children }) => {
  return (
    <div>
      <button className="flex gap-3 px-6 py-4 bg-black text-white rounded-md border-2 border-transparent transition-all duration-200 hover:bg-[#F6F6F6] hover:text-black hover:border-black">
        {children}
      </button>
    </div>
  );
};

export default Button;