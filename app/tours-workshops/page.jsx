"use client"
import React from 'react'
import Carousel from '../../components/Tours/Carousel'
import ToursAndWorkShops from '@/components/Home/ToursAndWorkShops'



const Tours = () => {
  return (
    <>
      <Carousel heading={"Tours and Workshops"} />
      <br />
      <br />
      <ToursAndWorkShops />
    </>
  );
}

export default Tours