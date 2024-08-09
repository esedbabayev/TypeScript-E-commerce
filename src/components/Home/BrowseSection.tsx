import React from 'react'

// Components
import Container from "../Container.tsx"
import Button from "../Button.tsx"

// Images
import CategoryImage from "../../images/CategoryImage.png"

const BrowseSection: React.FC = () => {
  return (
    <section className='bg-[#F6F6F6] mt-[168px]'>
      <Container>
        <div className='flex justify-between items-center pb-4'>
          {/* left */}
          <div className='flex flex-col gap-6'>
            <h3 className='text-3xl font-semibold'>Browse Our Fashion Paradise!</h3>
            <p className='text-[14px] font-normal text-[#5C5F6A]'>Step into a world of style and explore our diverse collection of clothing categories.</p>
            <Button>Start Browsing <span>{"-->"}</span></Button>
          </div>
          {/* right */}
          <div>
            <img src={CategoryImage} alt="CategoryImage" className='w-[300px]' />
          </div>
        </div>
      </Container>
    </section>
  )
}

export default BrowseSection
