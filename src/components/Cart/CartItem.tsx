import React from "react";

// Hooks
import { useState } from "react";
import { useDispatch } from "react-redux";

// Actions
import { removeFromCart, changeAmount } from "../../Slices/cart.slice.js";

// Icons
import Minus from "../../icons/Minus.tsx";
import Plus from "../../icons/Plus.tsx";

const CartItem: React.FC = ({ cartItem }) => {
  const [quantity, setQuantity] = useState<number>(cartItem?.quantity);

  const increaseQuantity = () => {
    if (quantity < 10) {
      setQuantity(+quantity + 1);
      dispatch(changeAmount({ cartItem, quantity: +quantity }));
    }
  };

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(+quantity - 1);
      dispatch(changeAmount({ cartItem, quantity: +quantity }));
    }
  };

  const dispatch = useDispatch();

  const removeFromCartHandler = () => {
    dispatch(removeFromCart(cartItem));
  };

  return (
    <div className="flex items-center justify-between">
      {/* left */}
      <div className="flex items-center gap-4">
        {/* image */}
        <div>
          <img src={cartItem?.product.image} alt="" className="w-20" />
        </div>
        {/* name color size */}
        <div className="flex flex-col gap-3">
          <span className="font-medium text-sm text-[#0E1422]">
            {cartItem?.product.name}
          </span>
          <div className="flex items-center gap-1">
            <div className="flex items-center gap-1">
              <span>Color:</span>
              <div
                style={{ backgroundColor: `#${cartItem?.product.color}` }}
                className="w-3 h-3 rounded-full"
              ></div>
            </div>
            <span>—</span>
            <span>Size: {cartItem?.size}</span>
          </div>
        </div>
      </div>
      {/* right */}
      <div className="flex gap-5 items-center">
        <span className="font-medium text-sm text-[#0E1422]">
          ${cartItem?.product.price.toFixed(2) * quantity}
        </span>
        {/* counter */}
        <div className="px-4 py-3 border rounded flex gap-14 justify-center items-center">
          <div onClick={decreaseQuantity} className="cursor-pointer">
            <Minus />
          </div>
          <span>{quantity}</span>
          <div onClick={increaseQuantity} className="cursor-pointer">
            <Plus />
          </div>
        </div>
        <div
          onClick={removeFromCartHandler}
          className="cursor-pointer p-3 rounded bg-[#F6F6F6]"
        >
          <span>&#10005;</span>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
