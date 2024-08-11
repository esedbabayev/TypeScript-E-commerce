import React from "react";

// Components
import Container from "../Container.tsx";
import Cart from "./Cart.tsx";
import OrderSummary from "./OrderSummary.tsx";

const CartAndSummarySection: React.FC = () => {
  return (
    <section className="mt-20">
      <Container>
        <div className="w-full flex justify-between">
          <Cart />
          <OrderSummary />
        </div>
      </Container>
    </section>
  );
};

export default CartAndSummarySection;
