import React from "react";

// Components
import Categories from "./Categories.tsx";
import Colors from "./Colors.tsx";
import Sizes from "./Sizes.tsx";
import Price from "./Price.tsx";

const LeftSidebarSection: React.FC = () => {
  return (
    <aside className="w-[248px] h-3/4 flex flex-col gap-10 px-5 py-6 border rounded-md border-[#E6E7E8]">
      <Categories />
      <Colors />
      <Sizes />
      <Price />
    </aside>
  );
};

export default LeftSidebarSection;
