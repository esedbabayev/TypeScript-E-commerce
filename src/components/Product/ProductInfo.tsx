import React from "react";

// Components
import Color from "../Products/Color.tsx";
import Size from "../Products/Size.tsx";

// Icons
import Share from "../../icons/Share.tsx";
import Star from "../../icons/Star.tsx";
import Minus from "../../icons/Minus.tsx";
import Plus from "../../icons/Plus.tsx";
import Heart from "../../icons/Heart.tsx";

const ProductInfo: React.FC = () => {
  return (
    <div className="w-1/2 flex flex-col gap-6">
      {/* name and share */}
      <div className="w-full">
        <div className="flex justify-between">
          <h3 className="font-bold text-3xl">Raw Black T-Shirt Lineup</h3>
          <div className="cursor-pointer">
            <Share />
          </div>
        </div>
      </div>
      {/* reviews stock */}
      <div>
        <div className="flex gap-3">
          <div className="flex items-center gap-2 px-2 py-1 bg-[#F6F6F6] rounded-[100px]">
            <Star />
            <span>4.2 — 54 Reviews</span>
          </div>
          <div className="border-2 rounded-2xl px-4 py-1">
            <p>IN STOCK</p>
          </div>
        </div>
      </div>
      {/* price */}
      <div>
        <p className="font-bold text-lg">$75.00</p>
      </div>
      {/* colors */}
      <div className="flex flex-col gap-2 w-1/3">
        <p className="uppercase font-medium text-xs text-[#5C5F6A]">
          Available Colors
        </p>
        <div className="grid grid-cols-5 max-h-16">
          <Color />
          <Color />
          <Color />
          <Color />
          <Color />
        </div>
      </div>
      {/* size */}
      <div className="flex flex-col gap-2 w-1/3">
        <p className="uppercase font-medium text-xs text-[#5C5F6A]">
          Select Size
        </p>
        <div className="grid grid-cols-5 gap-3">
          <Size />
          <Size />
          <Size />
          <Size />
          <Size />
        </div>
      </div>
      {/* quantity */}
      <div className="w-1/3 flex flex-col gap-2">
        <p className="uppercase font-medium text-xs text-[#5C5F6A]">quantity</p>
        <div className="px-4 py-3 border rounded flex gap-14 justify-center items-center">
          <div className="cursor-pointer">
            <Minus />
          </div>
          <span>1</span>
          <div className="cursor-pointer">
            <Plus />
          </div>
        </div>
      </div>
      {/* add to cart */}
      <div className="w-8/12">
        <div className="w-full flex gap-3">
          <button className="w-full flex gap-3 justify-center items-center px-6 py-2 bg-black text-white rounded-md border-2 border-transparent transition-all duration-200 hover:bg-[#F6F6F6] hover:text-black hover:border-black">
            <span className="text-center">Add to cart</span>
          </button>
          <div className="cursor-pointer px-6 py-2 rounded-md border-2 flex justify-center items-center">
            <Heart />
          </div>
        </div>
      </div>
      {/* $100 */}
      <div>
        <p className="font-medium text-sm text-[#5C5F6A]">— Free shipping on orders $100+</p>
      </div>
    </div>
  );
};

export default ProductInfo;
