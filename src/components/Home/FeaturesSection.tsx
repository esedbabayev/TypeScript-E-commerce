import React from 'react'

// Components
import Container from '../Container.tsx'

// Images
import Features from '../../images/Features.tsx'

const FeaturesSection: React.FC = () => {
  return (
    <section className='mt-24 pl-24'>
      <Container>
        <div className='flex justify-center'>
          <Features />
        </div>
      </Container>
    </section>
  )
}

export default FeaturesSection
