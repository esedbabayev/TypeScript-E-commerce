import React from 'react'

// Components
import NameOfFilter from './NameOfFilter.tsx'
import PriceRange from './PriceRange.tsx'

const Price:React.FC = () => {
  return (
    <div className="flex flex-col gap-4">
      <NameOfFilter name="Price"/>
      <PriceRange />
    </div>
  )
}

export default Price
