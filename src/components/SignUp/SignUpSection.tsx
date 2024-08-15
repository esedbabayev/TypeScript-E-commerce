import React from "react";

// Hooks
import { useRef } from "react";

// Link and useNavigate
import { Link, useNavigate } from "react-router-dom";

// UUID
import { v4 as uuidv4 } from "uuid";

// Components
import Container from "../Container.tsx";
import Google from "../Google.tsx";
import Form from "../Form.tsx";
import InputField from "../InputField.tsx";

const SignUpSection: React.FC = () => {
  const navigate = useNavigate();

  const nameRef = useRef<HTMLInputElement>(null);
  const userNameRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  const signUpHandler = async () => {
    const name = nameRef.current?.value.trim();
    const userName = userNameRef.current?.value.trim();
    const password = passwordRef.current?.value.trim();

    if (!name || !userName || !password) {
      alert("Please fill all the fields");
      return;
    }

    const existingUserResponse = await fetch(
      `http://localhost:3000/users?userName=${userName}`
    );
    const existingUserData = await existingUserResponse.json();

    const existingUser = existingUserData[0];

    if (existingUser?.userName) {
      alert("This username is already in use");
      return;
    }

    const newUser = {
      id: uuidv4(),
      name,
      userName,
      password,
    };

    await fetch("http://localhost:3000/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newUser),
    });

    nameRef.current!.value = "";
    userNameRef.current!.value = "";
    passwordRef.current!.value = "";

    localStorage.setItem("userId", JSON.stringify(newUser?.id));

    navigate("/");
  };

  return (
    <section className="mt-20 mb-40">
      <Container>
        <div className="w-full justify-center items-center flex flex-col gap-10">
          <Google />
          <div className="w-full flex flex-col items-center justify-center gap-6">
            <Form
              inputElementName={<InputField label="name" ref={nameRef} />}
              inputElementEmail={
                <InputField label="username" ref={userNameRef} />
              }
              inputElementPassword={
                <InputField label="password" ref={passwordRef} />
              }
            />
            <div className="flex justify-end w-1/5">
              <span className="text-xs font-medium text-[#474B57] cursor-pointer hover:underline">
                By creating an account you agree with our Terms of Service,
                Privacy Policy.
              </span>
            </div>
            <div className="w-1/5">
              <button
                onClick={signUpHandler}
                className="w-full flex gap-3 items-center justify-center px-6 py-2 bg-black text-white rounded-md border-2 border-transparent transition-all duration-200 hover:bg-[#F6F6F6] hover:text-black hover:border-black"
              >
                Create account
              </button>
            </div>
            <div>
              <span className="text-xs font-medium text-[#474B57]">
                Already have an account?{" "}
                <Link className="hover:underline" to="/sign-in">
                  {" "}
                  Log in
                </Link>
              </span>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default SignUpSection;
