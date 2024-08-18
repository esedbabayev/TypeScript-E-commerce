import React from "react";

// Hooks
import { useSelector } from "react-redux";

// Components
import Container from "../Container.tsx";
import Cart from "./Cart.tsx";
import OrderSummary from "./OrderSummary.tsx";

const CartAndSummarySection: React.FC = () => {
  const cartItems = useSelector((state) => state.cart?.cartItems);

  return (
    <section className="mt-20 mb-52">
      <Container>
        <div className="w-full flex justify-between">
          <Cart cartItems={cartItems} />
          <OrderSummary cartItems={cartItems} />
        </div>
      </Container>
    </section>
  );
};

export default CartAndSummarySection;
