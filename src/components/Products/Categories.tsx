import React from "react";

// Components
import Category from "./Category.tsx";
import NameOfFilter from "./NameOfFilter.tsx";

const Categories: React.FC = () => {
  return (
    <div className="flex flex-col gap-4">
      <NameOfFilter name="Categories" />
      <div className="grid grid-cols-1 gap-4 max-h-72 overflow-y-scroll">
        <Category />
        <Category />
        <Category />
        <Category />
        <Category />
        <Category />
      </div>
    </div>
  );
};

export default Categories;
