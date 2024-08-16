import React from "react";

// Hooks
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

// Components
import Container from "../Container.tsx";
import ProductImage from "./ProductImage.tsx";
import ProductInfo from "./ProductInfo.tsx";
import ProductsGridSection from "../Products/ProductsGridSection";

type ProductType = {
  id: string;
  image: string;
  name: string;
  price: number;
};

const ProductSection: React.FC = () => {
  const { id } = useParams<{ id: string }>();

  const [productData, setProductData] = useState<ProductType | null>(null);

  const getProductById = async () => {
    const response = await fetch(`http://localhost:3000/products/${id}`);
    const data = await response.json();
    setProductData(data);
    console.log(data);
  };

  useEffect(() => {
    getProductById();
  }, [id]);

  return (
    <section className="mt-4">
      <Container>
        <div className="w-full flex gap-8">
            <ProductImage image={productData?.image} />

          <ProductInfo name={productData?.name} price={productData?.price}/>
        </div>
      </Container>
    </section>
  );
};

export default ProductSection;
