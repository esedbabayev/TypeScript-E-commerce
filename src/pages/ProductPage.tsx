import React from "react";

// Components
import EcommerceTopSection from "../components/Product/EcommerceTopSection.tsx";
import ProductSection from "../components/Product/ProductSection.tsx";
import DetailsAndReviewsSection from "../components/Product/DetailsAndReviewsSection.tsx";

const ProductPage: React.FC = () => {
  return (
    <main>
      <EcommerceTopSection />
      <ProductSection />
      <DetailsAndReviewsSection />
    </main>
  );
};

export default ProductPage;
