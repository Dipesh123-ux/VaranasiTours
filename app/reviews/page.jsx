import React from 'react'
import ReviewsContent from '../../components/Reviews/Content'
import Testimonal from '@/components/Reviews/Testimonal'
import Video from '@/components/Reviews/Video'
import Reviewers from '@/components/Reviews/Reviewers'
import TestimonialDetails1 from '@/components/Reviews/TestimonialDetail1'
import TestimonialDetails2 from '@/components/Reviews/TestimonialDetails2'
const Reviews = () => {
  return (
    <div>
      <ReviewsContent/>
      <Video/>
      <Testimonal number={0} testimonialDetails={TestimonialDetails1} />
      <Reviewers/>
      <Testimonal number={[1]} testimonialDetails={TestimonialDetails2} />
       
  
    </div>
  )
}

export default Reviews