import React from 'react'
import Image from 'next/image'

import headerPic from './assets/review-edit.jpg'
const ReviewsContent = () => {
  return (
    <div>
      <div className='h-screen '>
        <Image src={headerPic} className="d-block  h-3/4 object-cover w-screen opacity-100" alt={"picture"} />
      </div>
      <div className="absolute inset-0 top-12  -mt-2 2xl:-mt-1   bg-black opacity-50  h-4/5  flex items-center justify-center ">
        <h1 className="text-3xl md:text-5xl tracking-widest font-bold text-white z-20 font-sang">
          REVIEWS
        </h1>
      </div>
      
    </div>
  )
}

export default ReviewsContent