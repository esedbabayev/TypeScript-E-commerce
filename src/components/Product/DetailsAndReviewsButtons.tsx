import React from "react";

// Icons
import ThreeDots from "../../icons/ThreeDots.tsx";
import Star from "../../icons/Star.tsx";

const DetailsAndReviewsButtons: React.FC = () => {
  return (
    <div className="flex flex-col gap-3 w-1/6">
      <div className="cursor-pointer px-8 justify-start w-full py-4 rounded-lg flex items-center gap-3">
        <ThreeDots />
        <span className="font-medium text-[#0E1422]">Details</span>
      </div>
      <div className="cursor-pointer bg-[#F6F6F6] px-8 py-4 rounded-lg flex items-center gap-3">
        <Star />
        <span className="font-medium text-[#0E1422]">Reviews</span>
      </div>
    </div>
  );
};

export default DetailsAndReviewsButtons;
