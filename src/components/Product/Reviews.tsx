import React from "react";

// Components
import Review from "./Review.tsx";

// Icons
import ChevronDown from "../../icons/ChevronDown.tsx";

const Reviews: React.FC = () => {
  return (
    <div className="w-7/12 flex flex-col gap-4">
      <div>
        <h4 className="font-semibold">Reviews</h4>
      </div>
      <div className="w-3/4 flex gap-4 items-center">
        <span className="font-bold text-4xl text-[#0E1422]">4.2</span>
        <span className="font-normal text-sm text-[#71747E]">— 54 Reviews</span>
      </div>
      <div>
        <button className="font-medium text-[#0E1422] px-6 py-3 border border-[#0E1422] rounded-lg">
          Write a review
        </button>
      </div>
      <div className="pb-4 border-b flex justify-end gap-3 items-center cursor-pointer">
        <span className="uppercase">Sort by</span>
        <div>
          <ChevronDown />
        </div>
      </div>
      {/* review */}
      <Review />
      <Review />
      {/* load more */}
      <div className="w-full flex justify-center mt-16">
        <button className="text-[#5C5F6A] font-medium  px-6 py-3 border rounded-lg">
          Load more reviews
        </button>
      </div>
    </div>
  );
};

export default Reviews;
