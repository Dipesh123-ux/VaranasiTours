"use client"
import React from 'react'
import Carousel from '../../components/Tours/Carousel'
import ToursAndWorkShops from '@/components/Home/ToursAndWorkShops'
import DefaultLayout from '@/components/DefaultLayout'


const Tours = () => {
  return (
    <DefaultLayout>
      <Carousel />
      <br />
      <br />
      <ToursAndWorkShops />
    </DefaultLayout>
  );
}

export default Tours