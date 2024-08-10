import React from "react";

// Components
import Container from "../Container.tsx";
import ProductImage from "./ProductImage.tsx";
import ProductInfo from "./ProductInfo.tsx";

const ProductSection: React.FC = () => {
  return (
    <section className="mt-4">
      <Container>
        <div className="w-full flex gap-8">
          <ProductImage />
          <ProductInfo />
        </div>
      </Container>
    </section>
  );
};

export default ProductSection;
