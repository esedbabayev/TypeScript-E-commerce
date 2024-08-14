import React, { useRef } from "react";

// Link
import { Link } from "react-router-dom";

// Components
import Container from "../Container.tsx";
import Google from "../Google.tsx";
import Form from "../Form.tsx";
import InputField from "../InputField.tsx";

const SignInSection: React.FC = () => {
  const userNameRef = useRef<HTMLInputElement>(null)
  const passwordRef = useRef<HTMLInputElement>(null)

  return (
    <section className="mt-20 mb-40">
      <Container>
        <div className="w-full justify-center items-center flex flex-col gap-10">
          <Google />
          <div className="w-full flex flex-col items-center justify-center gap-6">
            <Form
              inputElementEmail={<InputField label="username" ref={userNameRef} />}
              inputElementPassword={<InputField label="password" ref={passwordRef} />}
            />
            <div className="flex justify-end w-1/5">
              <span className="text-xs font-medium text-[#474B57] cursor-pointer hover:underline">
                Forgot Password?
              </span>
            </div>
            <div className="w-1/5">
              <button className="w-full flex gap-3 items-center justify-center px-6 py-2 bg-black text-white rounded-md border-2 border-transparent transition-all duration-200 hover:bg-[#F6F6F6] hover:text-black hover:border-black">
                Login
              </button>
            </div>
            <div>
              <span className="text-xs font-medium text-[#474B57]">
                Don't have an account?{" "}
                <Link className="hover:underline" to="/sign-up">
                  {" "}
                  Sign up
                </Link>
              </span>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default SignInSection;
