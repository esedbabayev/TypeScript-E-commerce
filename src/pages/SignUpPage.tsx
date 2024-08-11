import React from "react";

// Components
import TopEcommerceSection from "../components/TopEcommerceSection.tsx";
import SignUpSection from "../components/SignUp/SignUpSection.tsx";

const SignUpPage: React.FC = () => {
  return (
    <main>
      <TopEcommerceSection nameOfPage="Sign up" search="Sign up" />
      <SignUpSection />
    </main>
  );
};

export default SignUpPage;
