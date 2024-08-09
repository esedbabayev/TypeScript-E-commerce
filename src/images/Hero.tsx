import React from 'react';
import HeroImage from "./HeroImage.png"

const Hero: React.FC = () => {
  return (
    <div className='absolute left-[150px] -bottom-2'>
      <img src={HeroImage} alt="" className="w-[340px]" />
    </div>
  );
}

export default Hero;
