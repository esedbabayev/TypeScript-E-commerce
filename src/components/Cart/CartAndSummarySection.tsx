import React from "react";

// Components
import Container from "../Container.tsx";
import Cart from "./Cart.tsx";

const CartAndSummarySection: React.FC = () => {
  return (
    <section className="mt-20">
      <Container>
        <div>
          <Cart />
        </div>
      </Container>
    </section>
  );
};

export default CartAndSummarySection;
