import React from "react";

// Components
import Container from "../Container.tsx";
import FourProducts from "../../components/Home/FourProducts.tsx";

const SimilarProductsSection: React.FC = () => {
  return (
    <section className="mt-32">
      <Container>
        <div className="flex flex-col gap-20">
          {/*texts  */}
          <div className="flex flex-col gap-4">
            <h3 className="font-bold text-2xl">You might also like</h3>
            <h4 className="text-xs capitalize text-[#878A92]">
              SIMILAR PRODUCTS
            </h4>
          </div>
          {/* FourProducts */}
          <FourProducts />
        </div>
      </Container>
    </section>
  );
};

export default SimilarProductsSection;
