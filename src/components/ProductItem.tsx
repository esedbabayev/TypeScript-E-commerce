import React from "react";

// Link
import { Link } from "react-router-dom";

// Images
import BlackTshirt from "../images/image.png";

type ProductType = {
  id: string;
  image: string;
  name: string;
  price: number;
};

type PropsType = {
  product: ProductType;
};

const ProductItem: React.FC<PropsType> = ({ product }) => {
  return (
    <div className="flex flex-col gap-3">
      {/* Product Image and Name */}
      <Link to="/product/id">
        <div className="flex flex-col gap-6">
          {/* img */}
          <div>
            <img src={product?.image} alt="Product" />
          </div>
          {/* name */}
          <div>
            <p className="font-medium">{product?.name}</p>
          </div>
        </div>
      </Link>
      {/* Product Price */}
      <div className="flex gap-5 items-center">
        <div className="border-2 rounded-2xl px-4 py-1">
          <p>IN STOCK</p>
        </div>
        <div>
          <p className="font-normal text-[#474B57]">$35.00</p>
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
