import React from "react";

import GoogleIcon from "../icons/Google.tsx";

const Google: React.FC = () => {
  return (
    <div className="w-1/5 flex flex-col gap-10 justify-center">
      <button className="w-full cursor-pointer flex justify-center gap-2 py-2 rounded-md border">
        <GoogleIcon />
        <span>Continue with Google</span>
      </button>
      <div className="flex gap-3 justify-center items-center">
        <div className="h-px w-full bg-[#E6E7E8]"></div>
        <span>OR</span>
        <div className="h-px w-full bg-[#E6E7E8]"></div>
      </div>
    </div>
  );
};

export default Google;
