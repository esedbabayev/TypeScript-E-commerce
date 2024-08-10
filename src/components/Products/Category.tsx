import React from "react";

const Category: React.FC = () => {
  return (
    <div className="flex gap-1 items-center border-b py-1 cursor-pointer">
      <div>
        <input
          type="checkbox"
          className="w-3 h-3 text-black border-gray-300 rounded cursor-pointer"
        />
      </div>
      <div>
        <p className="text-[#474B57] text-base font-normal">Category</p>
      </div>
    </div>
  );
};

export default Category;
