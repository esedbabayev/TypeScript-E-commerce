import React from "react";

// Images
import BlackTshirt from "../../images/image.png";

type PropsType = {
  image: string;
};

const ProductImage: React.FC<PropsType> = ({ image }) => {
  return (
    <div className="w-1/2 flex flex-col">
      <div className="w-[574px] h-[510px] bg-[#F6F6F6] flex flex-col items-center justify-center">
        <img src={image} alt="product image" className="w-[288px]" />
        <div className="flex gap-2">
          <div className="w-2 h-2 rounded-full bg-black"></div>
          <div className="w-2 h-2 rounded-full bg-[#B6B7BC]"></div>
          <div className="w-2 h-2 rounded-full bg-[#B6B7BC]"></div>
          <div className="w-2 h-2 rounded-full bg-[#B6B7BC]"></div>
        </div>
      </div>
    </div>
  );
};

export default ProductImage;
