import React from 'react'
import TopCarousel from '../components/Home/Crousel'
import Tagline from '@/components/Home/Tagline'
import ShootingSites from '@/components/Home/ShootingSites'
import About from '@/components/Home/About'
import HomeReviewers from '@/components/Home/HomeReviewers'
import reviewCardDetails from '@/components/Home/ReviewCardDetails'
import Testimonial from '@/components/Reviews/Testimonal'
import Speciality from '@/components/Home/Speciality'

const Home = () => {
  return (
    <>
    <TopCarousel />
    <Tagline />
    <ShootingSites />
    <Speciality/>
    <About />
    <HomeReviewers />
    <Testimonial number={3} testimonialDetails={reviewCardDetails} />
    </>
  )
}

export default Home