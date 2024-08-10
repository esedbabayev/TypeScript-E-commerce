import React from 'react'

const ProductsGridSection:React.FC = () => {
  return (
    <div className='flex flex-col gap-10'>
      {/* applied filters */}
      <div className='flex flex-col gap-3'>
        <p className='font-medium'>Applied Filters:</p>
        {/* filter div */}
        <div className='flex gap-4'>
          <div className='px-4 py-3 border rounded-3xl'>
            <span className='flex gap-4'>Perfume<span className='cursor-pointer'>&#10005;</span></span>
          </div>
          <div className='px-4 py-3 border rounded-3xl'>
            <span className='flex gap-4'>Size: M<span className='cursor-pointer'>&#10005;</span></span>
          </div>
        </div>
      </div>
      {/* showing results */}
      <div>

      </div>
      {/* proucts */}
      <div>

      </div>
      {/* pagination */}
      <div>

      </div>
    </div>
  )
}

export default ProductsGridSection
