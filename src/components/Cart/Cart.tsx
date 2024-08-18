import React from "react";

// Components
import CartItem from "./CartItem.tsx";

const Cart: React.FC = ({ cartItems }) => {
  return (
    <div className="w-3/5 flex flex-col gap-12">
      <div className="py-5 border-b">
        <h3 className="font-semibold">Your cart</h3>
      </div>
      {/* cart item */}
      <div className="flex flex-col gap-10">
        {cartItems?.map((cartItem) => (
          <CartItem cartItem={cartItem} />
        ))}
      </div>
    </div>
  );
};

export default Cart;
