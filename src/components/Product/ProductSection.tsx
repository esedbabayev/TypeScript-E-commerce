import React from "react";

// Hooks
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

// Components
import Container from "../Container.tsx";
import ProductImage from "./ProductImage.tsx";
import ProductInfo from "./ProductInfo.tsx";
import ProductsGridSection from "../Products/ProductsGridSection";

const ProductSection: React.FC = () => {
  const { id } = useParams();

  const [productData, setProductData] = useState();

  const getProductById = async () => {
    const response = await fetch(`http:localhost:3000/users?id=${id}`);
    const data = await response.json();
    setProductData(data);
  };

  useEffect(() => {
    getProductById();
  }, [id]);

  return (
    <section className="mt-4">
      <Container>
        <div className="w-full flex gap-8">
          {
            productData.map(() => (
              <ProductImage image={}/>
            ))
          }
          <ProductInfo />
        </div>
      </Container>
    </section>
  );
};

export default ProductSection;
