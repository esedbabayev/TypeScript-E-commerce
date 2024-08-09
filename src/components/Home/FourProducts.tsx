import React from 'react'

// Components
import ProductItem from './ProductItem.tsx'

const FourProducts: React.FC = () => {
  return (
    <div className='grid grid-cols-4 gap-7'>
      {/* Product */}
      <ProductItem />
      <ProductItem />
      <ProductItem />
      <ProductItem />
    </div>
  )
}

export default FourProducts
