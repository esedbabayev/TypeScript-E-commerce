import React from "react";

// Components
import TopEcommerceSection from "../components/TopEcommerceSection.tsx";
import SignInSection from "../components/SignIn/SignInSection.tsx";

const SignInPage: React.FC = () => {
  return (
    <main>
      <TopEcommerceSection nameOfPage="Login" search="Login" />
      <SignInSection />
    </main>
  );
};

export default SignInPage;
