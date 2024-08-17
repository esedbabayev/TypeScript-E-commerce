import React from "react";

// Components
import NameOfFilter from "./NameOfFilter.tsx";
import Size from "./Size.tsx";

interface SizesProps {
  sizes: string[];
}

const Sizes: React.FC<SizesProps> = ({ sizes }) => {
  const sizeOrder = ["XS", "S", "M", "L", "XL"];
  const sortedSizes = sizes.sort((a, b) => sizeOrder.indexOf(a) - sizeOrder.indexOf(b));

  return (
    <div className="flex flex-col gap-4">
      <NameOfFilter name="Sizes" />
      <div className="grid grid-cols-4 gap-3">
        {sortedSizes?.map((size) => {
          return <Size key={size} size={size}/>;
        })}
      </div>
    </div>
  );
};

export default Sizes;
