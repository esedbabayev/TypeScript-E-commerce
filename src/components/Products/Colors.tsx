import React from "react";

// Components
import Color from "./Color.tsx";
import NameOfFilter from "./NameOfFilter.tsx";

interface ColorsProps {
  colors: string[];
}

const Colors: React.FC<ColorsProps> = ({ colors }) => {
  console.log();
  
  return (
    <div className="flex flex-col gap-4">
      <NameOfFilter name="Colors" />
      <div className="grid grid-cols-5 gap-2 max-h-16 overflow-y-scroll">
        {colors?.map((color) => {
          return <Color key={color} color={color} />;
        })}
      </div>
    </div>
  );
};

export default Colors;
