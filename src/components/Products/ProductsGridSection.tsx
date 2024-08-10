import React from "react";

// Components
import ProductItem from "../ProductItem.tsx";
import PaginationElement from "./PaginationElement.tsx";

// Icons
import ChevronDown from "../../icons/ChevronDown.tsx";
import ChevronLeft from "../../icons/ChevronLeft.tsx";
import ChevronRight from "../../icons/ChevronRight.tsx";

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
          <span className="text-[#5C5F6A] font-medium">
            Showing 1-9 of 36 results.
          </span>
        </div>
        <div className="flex gap-3 items-center cursor-pointer">
          <span className="uppercase">Sort by</span>
          <div>
            <ChevronDown />
          </div>
        </div>
      </div>
      {/* proucts */}
      <div className="grid grid-cols-3 gap-8">
        <ProductItem />
        <ProductItem />
        <ProductItem />
        <ProductItem />
        <ProductItem />
        <ProductItem />
        <ProductItem />
        <ProductItem />
        <ProductItem />
      </div>
      {/* pagination */}
      <div className="w-full flex justify-center mt-8">
        <div className="w-1/3 flex items-center gap-4 px-6 py-4 border rounded">
          <div className="cursor-pointer">
            <ChevronLeft />
          </div>
          <PaginationElement />
          <PaginationElement />
          <div className="px-4 py-1 rounded-md">
            <span>...</span>
          </div>
          <PaginationElement />
          <PaginationElement />
          <div className="cursor-pointer">
            <ChevronRight />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductsGridSection;
