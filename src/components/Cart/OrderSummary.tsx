import React from "react";

// Hooks
import { useSelector } from "react-redux";

// Link
import { Link } from "react-router-dom";

const OrderSummary: React.FC = () => {
  const cartItems = useSelector((state: any) => state.cart.cartItems);

  const subtotal = cartItems
    .map((item: any) => item.quantity * item.product.price)
    .reduce((sum: number, num: number) => sum + num, 0);

  const shipping = 0;
  const tax = (subtotal * 0.1).toFixed(2);

  return (
    <div className="w-3/12 h-[25rem] px-6 py-8 border border-[#E6E7E8] rounded-lg">
      {/* text */}
      <div>
        <span className="font-semibold text-base text-[#0E1422]">
          Order Summary
        </span>
      </div>
      {/* summary */}
      <div className="py-6 flex flex-col gap-4">
        <div className="flex justify-between">
          <span className="text-sm font-medium text-[#5C5F6A]">Subtotal</span>
          <span className="text-sm font-medium text-[#0E1422]">
            ${+subtotal.toFixed(2)}
          </span>
        </div>
        <div className="flex justify-between">
          <span className="text-sm font-medium text-[#5C5F6A]">Shipping</span>
          <span className="text-sm font-medium text-[#0E1422]">FREE</span>
        </div>
        <div className="flex justify-between">
          <span className="text-sm font-medium text-[#5C5F6A]">Tax</span>
          <span className="text-sm font-medium text-[#0E1422]">${+tax}</span>
        </div>
        <div className="flex justify-between pt-4 border-t border-[#E6E7E8]">
          <span className="text-sm font-medium text-[#5C5F6A]">Total</span>
          <span className="text-sm font-medium text-[#0E1422]">
            ${+(subtotal + parseFloat(tax)).toFixed(2)}
          </span>
        </div>
      </div>
      {/* button */}
      <div className="flex flex-col items-center justify-center gap-10">
        <button className="w-full flex justify-center gap-3 px-6 py-4 bg-black text-white rounded-md border-2 border-transparent transition-all duration-200 hover:bg-[#F6F6F6] hover:text-black hover:border-black">
          Checkout
        </button>
        <Link to="/products">
          <span className="cursor-pointer underline text-xs font-medium text-[#0E1422]">
            Continue Shopping
          </span>
        </Link>
      </div>
    </div>
  );
};

export default OrderSummary;
