import React from "react";

// Components
import Color from "./Color.tsx";
import NameOfFilter from "./NameOfFilter.tsx";

const Colors: React.FC = () => {
  return (
    <div className="flex flex-col gap-4">
      <NameOfFilter name="Colors" />
      <div className="grid grid-cols-5 gap-2 max-h-16 overflow-y-scroll">
        <Color />
        <Color />
        <Color />
        <Color />
        <Color />
      </div>
    </div>
  );
};

export default Colors;
