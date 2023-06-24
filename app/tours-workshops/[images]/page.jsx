import React from 'react'
import DefaultLayout from '@/components/DefaultLayout'

const ToursDynamicPage = ({params}) => {
  return (
    <DefaultLayout>{params.images}</DefaultLayout>
  )
}

export default ToursDynamicPage