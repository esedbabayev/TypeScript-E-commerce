import React from "react";

// Hooks
import { useState } from "react";
import { useDispatch } from "react-redux";

// Actions
import { selectSizes } from "../../Slices/sizes.slice";

interface SizeProps {
  size: string;
}

const Size: React.FC<SizeProps> = ({ size }) => {
  const [selected, setSelected] = useState(false);

  const dispatch = useDispatch();

  const select = () => {
    setSelected(!selected);

    dispatch(selectSizes(size));
  };

  return (
    <>
      <div
        onClick={select}
        className={`flex justify-center items-center p-4 py-2 border rounded ${
          selected ? "border-[#0E1422]" : "border-[#E6E7E8]"
        } cursor-pointer`}
      >
        <p className="font-medium text-xs text-[#0E1422]">{size}</p>
      </div>
    </>
  );
};

export default Size;
