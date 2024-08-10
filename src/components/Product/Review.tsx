import React from "react";

// Icons
import Star from "../../icons/Star.tsx";

const Review: React.FC = () => {
  return (
    <div className="mt-10 flex gap-3">
      <div className="flex justify-center items-center h-14 w-14 rounded-full bg-[#F0F1FF]">
        <span className="text-[#4078FF] font-medium text-sm">ED</span>
      </div>
      <div className="w-full flex flex-col gap-3">
        <div className="flex justify-between items-baseline">
          <span className="text-sm font-medium text-[#0E1422]">
            Emily Davis
          </span>
          <div className="flex gap-2">
            <Star />
            <Star />
            <Star />
            <Star />
            <Star />
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <span className="font-medium uppercase text-[#5C5F6A] text-xs">
            2 Months ago
          </span>
          <span className="font-normal text-[#5C5F6A] text-sm">
            This company always goes above and beyond to satisfy their
            customers.
          </span>
        </div>
      </div>
    </div>
  );
};

export default Review;
