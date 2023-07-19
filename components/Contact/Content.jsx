import React from 'react'
import poster from '../../public/images/contact/poster.jpg'
import Image from 'next/image'

const Content = () => {
  return (
    <div >
      <Image alt='photo' src={poster}></Image>
      <div className='mt-8 drop-shadow-xl text-center flex justify-center'>
        <p className='w-11/12 md:w-1/2 text-xl font-ste font-medium text-center'>Get in touch with us for any questions. We are always happy to have you and work with you.</p>
      </div>
    </div>
  )
}

export default Content