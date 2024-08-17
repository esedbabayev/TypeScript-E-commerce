import React from "react";

// Hooks
import { useState } from "react";
import { useDispatch } from "react-redux";

// Actions
import { selectColors } from "../../Slices/colors.slice";

type ColorProps = {
  color: string;
};

const Color: React.FC<ColorProps> = ({ color }) => {
  const dispatch = useDispatch()

  const [selected, setSelected] = useState(false);

  const select = () => {
    setSelected(!selected);
    dispatch(selectColors(color))
  };

  return (
    <>
      {!selected ? (
        <div
          onClick={select}
          style={{ backgroundColor: `#${color}` }}
          className="w-8 h-8 rounded-full cursor-pointer"
        ></div>
      ) : (
        <div className="flex justify-center items-center w-8 h-8 rounded-full bg-white border-2 border-black border-separate cursor-pointer">
          <div
            onClick={select}
            style={{ backgroundColor: `#${color}` }}
            className="w-6 h-6 rounded-full"
          ></div>
        </div>
      )}
    </>
  );
};

export default Color;
