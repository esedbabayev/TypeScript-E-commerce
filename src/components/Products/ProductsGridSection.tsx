import React from "react";

// Hooks
import { useState, useEffect } from "react";

// Components
import ProductItem from "../ProductItem.tsx";
import PaginationElement from "./PaginationElement.tsx";

// Icons
import ChevronDown from "../../icons/ChevronDown.tsx";
import ChevronLeft from "../../icons/ChevronLeft.tsx";
import ChevronRight from "../../icons/ChevronRight.tsx";

interface ProductType {
  id: number;
  name: string;
  price: number;
  imageUrl: string;
}

const ProductsGridSection: React.FC = () => {
  const [productData, setProductData] = useState<ProductType[]>([]);

  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const getProducts = async (): Promise<void> => {
    try {
      const response = await fetch("http://localhost:3000/products");
      const data = await response.json();

      setProductData(data);
    } catch (err) {
      setError("Failed to fetch products");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className="w-full flex flex-col gap-10">
      {/* applied filters */}
      <div className="flex flex-col gap-3">
        <p className="font-medium">Applied Filters:</p>
        {/* filter div */}
        <div className="flex gap-4">
          <div className="px-4 py-3 border rounded-3xl">
            <span className="flex gap-4">
              Perfume<span className="cursor-pointer">&#10005;</span>
            </span>
          </div>
          <div className="px-4 py-3 border rounded-3xl">
            <span className="flex gap-4">
              Size: M<span className="cursor-pointer">&#10005;</span>
            </span>
          </div>
        </div>
      </div>
      {/* showing results */}
      <div className="w-full flex justify-between">
        <div>
          <span className="text-[#5C5F6A] font-medium">
            Showing 1-9 of {productData.length} results.
          </span>
        </div>
        <div className="flex gap-3 items-center cursor-pointer">
          <span className="uppercase">Sort by</span>
          <div>
            <ChevronDown />
          </div>
        </div>
      </div>
      {/* proucts */}
      <div className="grid grid-cols-3 gap-8">
        {productData
          .map((product) => <ProductItem key={product.id} {...product} />)
          .slice(0, 9)}
      </div>
      {/* pagination */}
      <div className="w-full flex justify-center mt-8">
        <div className="w-1/3 flex items-center gap-4 px-6 py-4 border rounded">
          <div className="cursor-pointer">
            <ChevronLeft />
          </div>
          <PaginationElement />
          <PaginationElement />
          <div className="px-4 py-1 rounded-md">
            <span>...</span>
          </div>
          <PaginationElement />
          <PaginationElement />
          <div className="cursor-pointer">
            <ChevronRight />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductsGridSection;
