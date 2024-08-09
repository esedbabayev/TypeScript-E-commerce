import React from 'react'

// Components
import Container from "../Container.tsx"

const NewsLetterSection: React.FC = () => {
  return (
    <section className='bg-[#F6F6F6]'>
      <Container>
        <div className='flex justify-between'>
          {/* left */}
          <div className="flex flex-col gap-3">
            <h2 className="text-3xl font-semibold">Fresh Arrivals Online</h2>
            <p className="text-[14px] font-normal text-[#5C5F6A]">Discover Our Newest Collection Today.</p>
          </div>
        </div>
      </Container>
    </section>
  )
}

export default NewsLetterSection
