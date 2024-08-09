import React from 'react';

interface AuxProps {
  children: JSX.Element;
}
const Container: React.FC<AuxProps> = ({ children }) => {
  return <div className="w-full max-w-[1440px] mx-auto">
    {children}
  </div>;
};

export default Container;
