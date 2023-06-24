import React from 'react'
import ReviewsContent from '../../components/Reviews/Content'
import Testimonal from '@/components/Reviews/Testimonal'
import Video from '@/components/Reviews/Video'
import Reviewers from '@/components/Reviews/Reviewers'
import DefaultLayout from '@/components/DefaultLayout'
const Reviews = () => {
  return (
    <DefaultLayout>
      <ReviewsContent/>
      <Video/>
      <Testimonal/>
      <Reviewers/>
    </DefaultLayout>
  )
}

export default Reviews