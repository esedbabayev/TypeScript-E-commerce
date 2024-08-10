import React from "react";

// Components
import Container from "../Container.tsx";

// Icons
import ChevronRight from "../../icons/ChevronRight.tsx";

const EcommerceTopSection: React.FC = () => {
  return (
    <section className="mt-4">
      <Container>
        <div className="flex border-t py-4">
          <span className="font-medium text-base text-[#5C5F6A]">
            Ecommerce
          </span>
          <ChevronRight />
          <span className="font-medium text-base text-[#0E1422]">
            Black man t-shirt
          </span>
        </div>
      </Container>
    </section>
  );
};

export default EcommerceTopSection;
