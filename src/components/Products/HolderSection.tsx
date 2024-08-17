// React & Hooks
import React, { useState, useEffect } from "react";

// Components
import Container from "../Container.tsx";
import LeftSidebarSection from "./LeftSidebarSection.tsx";
import ProductsGridSection from "./ProductsGridSection.tsx";

type FilterType = {
  category: string[];
  colors: string[];
  sizes: string[];
};

const HolderSection: React.FC = () => {
  const [filters, setFilters] = useState<FilterType | null>(null);

  const getFilters = async () => {
    const response = await fetch("http://localhost:3000/products");
    const data = await response.json();

    const extractedFilters: FilterType = {
      category: [...new Set(data.map((item: any) => item.category))],
      colors: [...new Set(data.map((item: any) => item.color))],
      sizes: [...new Set(data.map((item: any) => item.size))],
    };

    setFilters(extractedFilters);
  };

  useEffect(() => {
    getFilters();
  }, []);

  return (
    <section className="mt-14">
      <Container>
        <div className="flex gap-7">
          {filters && (
            <LeftSidebarSection
              categories={filters.category}
              colors={filters.colors}
              sizes={filters.sizes}
            />
          )}
          <ProductsGridSection />
        </div>
      </Container>
    </section>
  );
};

export default HolderSection;
