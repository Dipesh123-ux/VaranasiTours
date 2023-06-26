import React from 'react'
import TopCarousel from '../components/Home/Crousel'
import Tagline from '@/components/Home/Tagline'
import ShootingSites from '@/components/Home/ShootingSites'
import About from '@/components/Home/About'
import ToursAndWorkShops from '@/components/Home/ToursAndWorkShops'
import Reviewcard from '@/components/Home/Reviewcard'

const Home = () => {
  return (
    <>
    <TopCarousel />
    <Tagline />
    <ShootingSites />
    <About />
    <ToursAndWorkShops />
    <Reviewcard/>
    </>
  )
}

export default Home