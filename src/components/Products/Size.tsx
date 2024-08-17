import React from "react";

interface SizeProps {
  size: string;
}

const Size: React.FC<SizeProps> = ({ size }) => {
  return (
    // <div className='flex justify-center items-center p-4 py-2 border rounded border-[#0E1422] cursor-pointer'>
    //   <p className='font-medium text-xs text-[#0E1422]'>{size}</p>
    // </div>

    <div className="flex justify-center items-center p-4 py-2 border rounded border-[#E6E7E8] cursor-pointer">
      <p className="font-medium text-xs text-[#0E1422]">{size}</p>
    </div>
  );
};

export default Size;
