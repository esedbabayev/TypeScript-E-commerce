import React from "react";

// Hooks
import { useState } from "react";
import { useDispatch } from "react-redux";

// Actions
import { selectCategories } from "../../Slices/categories.slice";

type PropsType = {
  category: string;
};

const Category: React.FC<PropsType> = ({ category }) => {
  const dispatch = useDispatch();

  const [selected, setSelected] = useState(false);

  const select = () => {
    setSelected(!selected);

    dispatch(selectCategories(category));
  };

  return (
    <div
      onClick={select}
      className="flex gap-1 items-center border-b py-1 cursor-pointer"
    >
      <div>
        <input
          type="checkbox"
          className="w-3 h-3 text-black border-gray-300 rounded cursor-pointer"
          checked={selected}
          onChange={select}
        />
      </div>
      <div>
        <p className="text-[#474B57] text-base font-normal">{category}</p>
      </div>
    </div>
  );
};

export default Category;
