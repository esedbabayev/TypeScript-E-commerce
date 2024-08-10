import React from "react";

// Components

// Icons
import ChevronDown from "../../icons/ChevronDown.tsx";

const ProductsGridSection: React.FC = () => {
  return (
    <div className="w-full flex flex-col gap-10">
      {/* applied filters */}
      <div className="flex flex-col gap-3">
        <p className="font-medium">Applied Filters:</p>
        {/* filter div */}
        <div className="flex gap-4">
          <div className="px-4 py-3 border rounded-3xl">
            <span className="flex gap-4">
              Perfume<span className="cursor-pointer">&#10005;</span>
            </span>
          </div>
          <div className="px-4 py-3 border rounded-3xl">
            <span className="flex gap-4">
              Size: M<span className="cursor-pointer">&#10005;</span>
            </span>
          </div>
        </div>
      </div>
      {/* showing results */}
      <div className="w-full flex justify-between">
        <div>
          <span className="text-[#5C5F6A] font-medium">Showing 1-9 of 36 results.</span>
        </div>
        <div className="flex gap-3 items-center cursor-pointer">
          <span className="uppercase">Sort by</span>
          <div>
            <ChevronDown />
          </div>
        </div>
      </div>
      {/* proucts */}
      <div></div>
      {/* pagination */}
      <div></div>
    </div>
  );
};

export default ProductsGridSection;
