import React from 'react'

// Components
import Container from "../Container.tsx"
import FourProducts from './FourProducts.tsx'

const FeaturedAndLatestSection: React.FC = () => {
  return (
    <section className='mt-36'>
      <Container>
        <div className='flex flex-col gap-7'>
          {/* buttons */}
          <div className='flex gap-3 justify-center'>
            <button className='text-base border border-gray-500 rounded-xl py-1 px-3 font-medium'>Featured</button>
            <button className='text-base font-normal'>Latest</button>
          </div>
          <FourProducts />
        </div>
      </Container>
    </section>
  )
}

export default FeaturedAndLatestSection
