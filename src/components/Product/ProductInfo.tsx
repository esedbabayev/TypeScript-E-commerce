// React & Hooks
import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

// UUID
import { v4 as uuidv4 } from "uuid";

// AXIOS
import axios from "axios";

// Actions
import { addToCart } from "../../Slices/cart.slice.js";

// Components
import Color from "../Products/Color.tsx";
import Size from "../Products/Size.tsx";

// Icons
import Share from "../../icons/Share.tsx";
import Star from "../../icons/Star.tsx";
import Minus from "../../icons/Minus.tsx";
import Plus from "../../icons/Plus.tsx";
import Heart from "../../icons/Heart.tsx";

import { ProductType } from "./ProductSection.tsx";

type PropsType = {
  product: ProductType;
};

const ProductInfo: React.FC<PropsType> = ({ product }) => {
  const dispatch = useDispatch();

  const userId = JSON.parse(localStorage.getItem("userId"));

  const [quantity, setQuantity] = useState<number>(1);

  const increaseQuantity = () => {
    if (quantity < 10) {
      setQuantity(quantity + 1);
      return;
    }
  };

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
      return;
    }
  };

  const selectedColors = useSelector((state) => {
    return state.colors.selectedColors;
  });

  const selectedSizes = useSelector((state) => {
    return state.sizes.selectedSizes;
  });

  const addToCardHandler = async () => {
    if (!selectedColors.length) {
      alert("Please choose color");
      return;
    }

    if (!selectedSizes.length) {
      alert("Please choose size");
      return;
    }

    const selectedProducts = {
      quantity,
      size: selectedSizes[0],
      product,
      id: uuidv4(),
      userId,
    };

    const { data } = await axios.post(
      "http://localhost:3000/carts",
      selectedProducts
    );

    dispatch(addToCart(selectedProducts));
  };

  return (
    <div className="w-1/2 flex flex-col gap-6">
      {/* name and share */}
      <div className="w-full">
        <div className="flex justify-between">
          <h3 className="font-bold text-3xl">{product.name}</h3>
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
        <p className="font-bold text-lg">${product.price.toFixed(2)}</p>
      </div>
      {/* colors */}
      <div className="flex flex-col gap-2 w-1/3">
        <p className="uppercase font-medium text-xs text-[#5C5F6A]">
          Available Colors
        </p>
        <div className="grid grid-cols-5 max-h-16">
          <Color color={product.color} />
          {/* Repeat <Color /> as needed */}
        </div>
      </div>
      {/* size */}
      <div className="flex flex-col gap-2 w-1/3">
        <p className="uppercase font-medium text-xs text-[#5C5F6A]">
          Select Size
        </p>
        <div className="grid grid-cols-5 gap-3">
          <Size size={product.size} />
        </div>
      </div>
      {/* quantity */}
      <div className="w-1/3 flex flex-col gap-2">
        <p className="uppercase font-medium text-xs text-[#5C5F6A]">Quantity</p>
        <div className="px-4 py-3 border rounded flex gap-14 justify-center items-center">
          <div onClick={decreaseQuantity} className="cursor-pointer">
            <Minus />
          </div>
          <span>{quantity}</span>
          <div onClick={increaseQuantity} className="cursor-pointer">
            <Plus />
          </div>
        </div>
      </div>
      {/* add to cart */}
      <div className="w-8/12">
        <div className="w-full flex gap-3">
          <button
            onClick={addToCardHandler}
            className="w-full flex gap-3 justify-center items-center px-6 py-2 bg-black text-white rounded-md border-2 border-transparent transition-all duration-200 hover:bg-[#F6F6F6] hover:text-black hover:border-black"
          >
            <span className="text-center">Add to cart</span>
          </button>
          <div className="cursor-pointer px-6 py-2 rounded-md border-2 flex justify-center items-center">
            <Heart />
          </div>
        </div>
      </div>
      {/* $100 */}
      <div>
        <p className="font-medium text-sm text-[#5C5F6A]">
          — Free shipping on orders $100+
        </p>
      </div>
    </div>
  );
};

export default ProductInfo;
