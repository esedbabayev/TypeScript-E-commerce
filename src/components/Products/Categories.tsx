import React from "react";
import Category from "./Category.tsx";
import NameOfFilter from "./NameOfFilter.tsx";

type PropsType = {
  category: string[];
};

const Categories: React.FC<PropsType> = ({ category }) => {
  return (
    <div className="flex flex-col gap-4">
      <NameOfFilter name="Categories" />
      <div className="grid grid-cols-1 gap-4 max-h-72 overflow-y-scroll">
        {category?.map((categoryItem, index) => (
          <Category key={index} category={categoryItem} />
        ))}
      </div>
    </div>
  );
};

export default Categories;
