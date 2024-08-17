import React from "react";

// Link
import { Link } from "react-router-dom";

interface ProductItemProps {
  product: {
    id: number;
    name: string;
    price: number;
    image: string;
  };
}

const ProductItem: React.FC<ProductItemProps> = ({ product }) => {
  return (
    <div className="flex flex-col gap-3">
      {/* Product Image and Name */}
      <Link to={`/products/${product?.id}`}>
        <div className="flex flex-col gap-6">
          {/* img */}
          <div className="bg-[#F6F6F6]">
            <img src={product?.image} alt="Product" className="w-full aspect-square"/>
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
          <p className="font-normal text-[#474B57]">${product?.price.toFixed(2)}</p>
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
