import React from "react";

type Props = {
    name: string,
}

const NameOfFilter: React.FC<Props> = ({name}) => {
  return (
    <div className="flex">
      <h3 className="font-semibold">{name}</h3>
    </div>
  );
};

export default NameOfFilter;
