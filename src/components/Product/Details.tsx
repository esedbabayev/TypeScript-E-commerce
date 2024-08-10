import React from "react";

const Details: React.FC = () => {
  return (
    <div className="w-7/12 flex flex-col gap-4">
      <div>
        <h4 className="font-semibold">Details</h4>
      </div>
      <div className="w-3/4">
        <span className="font-normal">
          Elevate your everyday style with our Men's Black T-Shirts, the
          ultimate wardrobe essential for modern men. Crafted with meticulous
          attention to detail and designed for comfort, these versatile black
          tees are a must-have addition to your collection. <br /> The classic
          black color never goes out of style. Whether you're dressing up for a
          special occasion or keeping it casual, these black t-shirts are the
          perfect choice, effortlessly complementing any outfit.
        </span>
      </div>
      <div className="px-4 mt-6">
        <ol className="list-disc">
          <li>Premium Quality</li>
          <li>Versatile Wardrobe Staple</li>
          <li>Available in Various Sizes</li>
          <li>Tailored Fit</li>
        </ol>
      </div>
    </div>
  );
};

export default Details;
