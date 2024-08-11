import React from "react";

// Components
import InputField from "./InputField.tsx";

const Form: React.FC = () => {
  return (
    <form
      className="w-1/5 flex flex-col gap-4"
      onSubmit={(e) => e.preventDefault()}
    >
      <InputField label="email" />
      <InputField label="password" />
    </form>
  );
};

export default Form;
