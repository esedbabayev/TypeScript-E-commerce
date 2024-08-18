import React from "react";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import Container from "../Container.tsx";
import ProductImage from "./ProductImage.tsx";
import ProductInfo from "./ProductInfo.tsx";

export type ProductType = {
  id: string;
  image: string;
  name: string;
  price: number;
  size: string;
  category: string;
  color: string;
};

const ProductSection: React.FC = () => {
  const { id } = useParams<{ id: string }>();

  const [productData, setProductData] = useState<ProductType | null>(null);

  const getProductById = async () => {
    const response = await fetch(`http://localhost:3000/products/${id}`);
    const data = await response.json();
    setProductData(data);
  };

  useEffect(() => {
    getProductById();
  }, [id]);

  return (
    <section className="mt-4">
      <Container>
        {productData ? (
          <div className="w-full flex gap-8">
            <ProductImage image={productData.image} />
            <ProductInfo product={productData} />
          </div>
        ) : (
          <p>Loading product data...</p>
        )}
      </Container>
    </section>
  );
};

export default ProductSection;
