import React from "react";

// Images
import BlackTshirt from "../../images/image.png";

// Icons
import Minus from "../../icons/Minus.tsx";
import Plus from "../../icons/Plus.tsx";

const CartItem: React.FC = () => {
  return (
    <div className="flex items-center justify-between">
      {/* left */}
      <div className="flex items-center gap-4">
        {/* image */}
        <div>
          <img src={BlackTshirt} alt="" className="w-20" />
        </div>
        {/* name color size */}
        <div className="flex flex-col gap-3">
          <span className="font-medium text-sm text-[#0E1422]">
            Raw Black T-Shirt Lineup
          </span>
          <div className="flex items-center gap-1">
            <div className="flex items-center gap-1">
              <span>Color:</span>
              <div className="w-3 h-3 rounded-full bg-[#98BE9E]"></div>
            </div>
            <span>—</span>
            <span>Size: M</span>
          </div>
        </div>
      </div>
      {/* right */}
      <div className="flex gap-5 items-center">
        <span className="font-medium text-sm text-[#0E1422]">$75.00</span>
        {/* counter */}
        <div className="px-4 py-3 border rounded flex gap-14 justify-center items-center">
          <div className="cursor-pointer">
            <Minus />
          </div>
          <span>1</span>
          <div className="cursor-pointer">
            <Plus />
          </div>
        </div>
        <div className="cursor-pointer p-3 rounded bg-[#F6F6F6]">
          <span>&#10005;</span>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
