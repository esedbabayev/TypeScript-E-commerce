import React from "react";

const PriceRange: React.FC = () => {
  return (
    <div>
      <input
        className="w-[200px] cursor-grab appearance-none bg-transparent [&::-webkit-slider-runnable-track]:rounded-full [&::-webkit-slider-runnable-track]:bg-gray-500 [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:h-[14px] [&::-webkit-slider-thumb]:w-[14px] [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-black"
        type="range"
      />
    </div>
  );
};

export default PriceRange;
