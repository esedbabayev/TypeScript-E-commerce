import React from "react";

// Components
import EcommerceTopSection from "../components/Product/EcommerceTopSection.tsx";
import ProductSection from "../components/Product/ProductSection.tsx";

const ProductPage: React.FC = () => {
  return (
    <main>
      <EcommerceTopSection />
      <ProductSection />
    </main>
  );
};

export default ProductPage;
