import React from 'react'
import Carousel from '@/components/Tours/Carousel'

const ToursDynamicPage = ({params}) => {
  return (
    <div>
      <Carousel heading={params.images.toUpperCase()} />
    </div>
  )
}

export default ToursDynamicPage