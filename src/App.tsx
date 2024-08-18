// React
import React from "react";

// React Router Dom
import { Routes, Route } from "react-router-dom";

// Hooks
import { useEffect } from "react";
import { useDispatch } from "react-redux";

// Actions
import { setCartItems } from "./Slices/cart.slice.js";

// Components
import Layout from "./components/layout/Layout.tsx";

// Pages
import HomePage from "./pages/HomePage.tsx";
import ProductsPage from "./pages/ProductsPage.tsx";
import ProductPage from "./pages/ProductPage.tsx";
import SignInPage from "./pages/SignInPage.tsx";
import SignUpPage from "./pages/SignUpPage.tsx";
import CartPage from "./pages/CartPage.tsx";

const App: React.FC = () => {
  // const dispatch = useDispatch();

  // const userId = JSON.parse(localStorage.getItem("userId"));

  // const getSpecificCart = async () => {
  //   const response = await fetch(
  //     `http://localhost:3000/carts?userId=${userId}`
  //   );
  //   const data = response.json();
  //   console.log(data);
    

  //   dispatch(setCartItems(data));
  // };

  // useEffect(() => {
  //   getSpecificCart();
  // }, [userId]);

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="products" element={<ProductsPage />} />
        <Route path="products/:id" element={<ProductPage />} />
        <Route path="cart" element={<CartPage />} />
        <Route path="sign-in" element={<SignInPage />} />
        <Route path="sign-up" element={<SignUpPage />} />
      </Route>
    </Routes>
  );
};

export default App;
