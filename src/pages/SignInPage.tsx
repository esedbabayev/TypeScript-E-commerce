import React from "react";

// Components
import TopEcommerceSection from "../components/TopEcommerceSection.tsx";
import SignInSection from "../components/SignIn/SignInSection.tsx";

const SignInPage: React.FC = () => {
  return (
    <main>
      <TopEcommerceSection nameOfPage="Cart" search="Cart" />
      <SignInSection />
    </main>
  );
};

export default SignInPage;
