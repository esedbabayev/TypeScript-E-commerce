import React from 'react'

// Components
import HeroSection from '../components/Home/HeroSection.tsx'
import FeaturesSection from '../components/Home/FeaturesSection.tsx'
import BestSellingSection from '../components/Home/BestSellingSection.tsx'
import BrowseSection from '../components/Home/BrowseSection.tsx'
import FeaturedAndLatestSection from '../components/Home/FeaturedAndLatestSection.tsx'

const HomePage: React.FC = () => {
  return (
    <main className='w-full'>
      <HeroSection />
      <FeaturesSection />
      <BestSellingSection />
      <BrowseSection />
      <FeaturedAndLatestSection />
    </main>
  )
}

export default HomePage
