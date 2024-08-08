// React
import React from "react";

// React Router Dom
import { Routes, Route, BrowserRouter } from "react-router-dom";

// Components
import Container from "./components/Container.tsx";
import Layout from "./components/layout/Layout.tsx";

// Pages
import HomePage from "./pages/HomePage.tsx";
import ProductsPage from "./pages/ProductsPage.tsx";
import ProductPage from "./pages/ProductPage.tsx";
import SignInPage from "./pages/SignInPage.tsx";
import SignUpPage from "./pages/SignUpPage.tsx"

const App: React.FC = () => {
  return (
    <Container>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="products" element={<ProductsPage />} />
          <Route path="products:id" element={<ProductPage />} />
          <Route path="sign-in" element={<SignInPage />} />
          <Route path="sign-up" element={<SignUpPage />} />
        </Route>
      </Routes>
    </Container>
  );
};

export default App;
