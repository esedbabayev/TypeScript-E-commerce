import React, { useEffect, useState } from "react";

// Link
import { Link } from "react-router-dom";

// Components
import ProductItem from "../ProductItem.tsx";

const FourProducts: React.FC = () => {
  const [products, setProducts] = useState();

  const fetchProducts = async () => {
    const response = await fetch("http://localhost:3000/products");
    const data = await response.json();
    setProducts(data);
  };

  useEffect(() => {
    fetchProducts();
  }, []);
  return (
    <div className="grid grid-cols-4 gap-7">
      {/* Product */}
      {products
        ?.map((product) => {
          return (
            <Link to={`/products/${products?.id}`}>
              <ProductItem product={product} />;
            </Link>
          );
        })
        .splice(0, 4)}
    </div>
  );
};

export default FourProducts;
