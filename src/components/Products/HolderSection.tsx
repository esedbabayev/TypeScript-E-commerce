import React from "react";

// Components
import Container from "../Container.tsx";
import LeftSidebarSection from "./LeftSidebarSection.tsx";
import ProductsGridSection from "./ProductsGridSection.tsx";

const HolderSection: React.FC = () => {
  return (
    <section className="mt-14">
      <Container>
        <div className="flex gap-7">
          <LeftSidebarSection />
          <ProductsGridSection />
        </div>
      </Container>
    </section>
  );
};

export default HolderSection;
