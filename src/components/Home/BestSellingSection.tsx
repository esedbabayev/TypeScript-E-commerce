import React from 'react'

// Components 
import Container from '../Container.tsx'
import FourProducts from './FourProducts.tsx'

const BestSellingSection: React.FC = () => {
  return (
    <section className='mt-16'>
      <Container>
        <div className='flex flex-col gap-20'>
          {/*texts  */}
          <div className='text-center flex flex-col justify-center gap-4'>
            <h4 className='text-xs capitalize text-[#878A92]'>SHOP NOW</h4>
            <h3 className='font-bold text-2xl'>Best Selling</h3>
          </div>
          {/* FourProducts */}
          <FourProducts />
        </div>
      </Container>
    </section>
  )
}

export default BestSellingSection
