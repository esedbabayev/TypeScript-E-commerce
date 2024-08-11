import React from "react";

type Props = {
  inputElementEmail: React.ReactNode;
  inputElementPassword: React.ReactNode;
  inputElementName?: React.ReactNode;
};

const Form: React.FC<Props> = ({
  inputElementEmail,
  inputElementPassword,
  inputElementName,
}) => {
  return (
    <form
      className="w-1/5 flex flex-col gap-4"
      onSubmit={(e) => e.preventDefault()}
    >
      {inputElementName}
      {inputElementEmail}
      {inputElementPassword}
    </form>
  );
};

export default Form;
