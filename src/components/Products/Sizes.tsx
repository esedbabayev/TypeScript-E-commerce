import React from "react";

// Components
import NameOfFilter from "./NameOfFilter.tsx";
import Size from "./Size.tsx";

const Sizes: React.FC = () => {
  return (
    <div className="flex flex-col gap-4">
      <NameOfFilter name="Sizes" />
      <div className="grid grid-cols-4 gap-3">
        <Size />
        <Size />
        <Size />
        <Size />
        <Size />
      </div>
    </div>
  );
};

export default Sizes;
