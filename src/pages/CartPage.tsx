import React from "react";

// Components
import TopEcommerceSection from "../components/TopEcommerceSection.tsx";
import CartAndSummarySection from "../components/Cart/CartAndSummarySection.tsx"

const CartPage: React.FC = () => {
  return (
    <main>
      <TopEcommerceSection nameOfPage="Cart" search="Cart" />
      <CartAndSummarySection />
    </main>
  );
};

export default CartPage;
