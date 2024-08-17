import React from "react";

type ColorProps = {
  color: string;
};

const Color: React.FC<ColorProps> = ({ color }) => {
  return (
    <>
      {/* <div
        style={{ backgroundColor: `#${color}` }}
        className="w-6 h-6 rounded-full cursor-pointer"
      ></div>{" "} */}
      <div className="flex justify-center items-center w-8 h-8 rounded-full bg-white border-2 border-black border-separate cursor-pointer">
        <div style={{backgroundColor: `#${color}`}}  className="w-6 h-6 rounded-full"></div>{" "}
      </div>
    </>
  );
};

export default Color;
