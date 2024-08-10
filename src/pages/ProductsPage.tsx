import React from "react";

// Components
import TopEcommerceSection from "../components/TopEcommerceSection.tsx";
import HolderSection from "../components/Products/HolderSection.tsx";
import NewsLetterSection from "../components/NewsLetterSection.tsx";

const ProductsPage: React.FC = () => {
  return (
    <main className="w-full">
      <TopEcommerceSection nameOfPage="Products" search="Search" />
      <HolderSection />
      <NewsLetterSection />
    </main>
  );
};

export default ProductsPage;
