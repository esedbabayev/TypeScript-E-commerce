import React from "react";
import Categories from "./Categories.tsx";
import Colors from "./Colors.tsx";
import Sizes from "./Sizes.tsx";
import Price from "./Price.tsx";

type PropsType = {
  categories: string[];
  colors: string[];
  sizes: string[];
};

const LeftSidebarSection: React.FC<PropsType> = ({
  categories,
  colors,
  sizes,
}) => {
  return (
    <aside className="w-1/4 h-3/4 flex flex-col gap-10 px-5 py-6 border rounded-md border-[#E6E7E8]">
      <Categories category={categories} />
      <Colors colors={colors} />
      <Sizes sizes={sizes} />
      <Price />
    </aside>
  );
};

export default LeftSidebarSection;
