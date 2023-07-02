import React from 'react'
import TopCarousel from '../components/Home/Crousel'
import Tagline from '@/components/Home/Tagline'
import ShootingSites from '@/components/Home/ShootingSites'
import About from '@/components/Home/About'
import Reviewers from '@/components/Home/Reviewers'
import reviewCardDetails from '@/components/Home/ReviewCardDetails'
import Testimonial from '@/components/Reviews/Testimonal'

const Home = () => {
  return (
    <>
    <TopCarousel />
    <Tagline />
    <ShootingSites />
    <About />
    <Reviewers />
    <Testimonial testimonialDetails={reviewCardDetails} />
    </>
  )
}

export default Home