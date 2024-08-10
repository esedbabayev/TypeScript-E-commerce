import React from "react";

// Components
import EcommerceTopSection from "../components/Product/EcommerceTopSection.tsx";
import ProductSection from "../components/Product/ProductSection.tsx";
import DetailsAndReviewsSection from "../components/Product/DetailsAndReviewsSection.tsx";
import SimilarProductsSection from "../components/Product/SimilarProductsSection.tsx";
import NewsLetterSection from "../components/NewsLetterSection.tsx";

const ProductPage: React.FC = () => {
  return (
    <main>
      <EcommerceTopSection />
      <ProductSection />
      <DetailsAndReviewsSection />
      <SimilarProductsSection />
      <NewsLetterSection />
    </main>
  );
};

export default ProductPage;
