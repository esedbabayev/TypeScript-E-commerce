import React from "react";

// Icons
import ChevronDown from "../../icons/ChevronDown.tsx";

const DetailsAndReviews: React.FC = () => {
  return (
    // <div className="flex flex-col gap-4">
    //   <div>
    //     <h4 className="font-semibold">Details</h4>
    //   </div>
    //   <div className="w-3/4">
    //     <span className="font-normal">
    //       Elevate your everyday style with our Men's Black T-Shirts, the
    //       ultimate wardrobe essential for modern men. Crafted with meticulous
    //       attention to detail and designed for comfort, these versatile black
    //       tees are a must-have addition to your collection. <br /> The classic
    //       black color never goes out of style. Whether you're dressing up for a
    //       special occasion or keeping it casual, these black t-shirts are the
    //       perfect choice, effortlessly complementing any outfit.
    //     </span>
    //   </div>
    //   <div className="px-4 mt-6">
    //     <ol className="list-disc">
    //       <li>Premium Quality</li>
    //       <li>Versatile Wardrobe Staple</li>
    //       <li>Available in Various Sizes</li>
    //       <li>Tailored Fit</li>
    //     </ol>
    //   </div>
    // </div>

    <div className="w-7/12   flex flex-col gap-4">
      <div>
        <h4 className="font-semibold">Reviews</h4>
      </div>
      <div className="w-3/4 flex gap-4 items-center">
        <span className="font-bold text-4xl text-[#0E1422]">4.2</span>
        <span className="font-normal text-sm text-[#71747E]">— 54 Reviews</span>
      </div>
      <div className="">
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
    </div>
  );
};

export default DetailsAndReviews;
