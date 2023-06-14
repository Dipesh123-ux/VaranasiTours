
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import profile from './assets/no_profile.jpg';

// Define an array of testimonial objects
const testimonials = [
  {
    name: 'Jake Thomas Pandermann',
    username: '@jakethomasphotography',
    text: 'Shivam is nothing short of brilliant when it came to assisting me around Kolkata. He knows the area very well. He had great...',
    link: '/',
    feeling:'I have been on a few tours with Shivam in the last couple of years. Every time I go out shooting in a group with him, I’m struck by a mixture of ...his knowledge, vision and perspective taking photos, personable relaxed friendly nature, and effortless patience towards amateurs like me. Each time I leave challenged by what I’ve learnt and delighted by the culture we and I have the privilege of connecting with through the lens.',
    instaId:'fwger',
    facebookId:"gerwgerg",
    pics:[]

  },
  {
    name: 'Jake Thomas Pandermann',
    username: '@jakethomasphotography',
    text: 'Shivam is nothing short of brilliant when it came to assisting me around Kolkata. He knows the area very well. He had great...',
    link: '/',
    feeling:'I have been on a few tours with Shivam in the last couple of years. Every time I go out shooting in a group with him, I’m struck by a mixture of ...his knowledge, vision and perspective taking photos, personable relaxed friendly nature, and effortless patience towards amateurs like me. Each time I leave challenged by what I’ve learnt and delighted by the culture we and I have the privilege of connecting with through the lens.',
    instaId:'fwger',
    facebookId:"gerwgerg",
    pics:[]

  },
  {
    name: 'Jake Thomas Pandermann',
    username: '@jakethomasphotography',
    text: 'Shivam is nothing short of brilliant when it came to assisting me around Kolkata. He knows the area very well. He had great...',
    link: '/',
    feeling:'I have been on a few tours with Shivam in the last couple of years. Every time I go out shooting in a group with him, I’m struck by a mixture of ...his knowledge, vision and perspective taking photos, personable relaxed friendly nature, and effortless patience towards amateurs like me. Each time I leave challenged by what I’ve learnt and delighted by the culture we and I have the privilege of connecting with through the lens.',
    instaId:'fwger',
    facebookId:"gerwgerg",
    pics:[]

  },
 
 
];

function Testimonial() {
  return (
    <div className='flex h-fit justify-center'>
      <div className='flex flex-col items-center bg-gray-400 text-center rounded-2xl shadow-2xl my-16'>
        <div className='p-8 lg:p-4 grid lg:grid-cols-3 items-center -mt-4 justify-items-center'>
          {/* Map over the testimonials array */}
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className='flex flex-col text-center items-center rounded-3xl w-72 p-4 bg-white shadow-2xl m-8 lg:m-4 xl:m-8'
            >
              <Image src={profile} alt='pic' className='h-16 w-16 rounded-full' />
              <h2 className='font-sang font-semibold text-base md:text-lg'>{testimonial.name}</h2>
              <Link href={testimonial.link} className='text-lg mb-4 text-sky-700 font-medium tracking-wide font-ste'>
                {testimonial.username}
              </Link>
              <div className='h-0.5 w-full mb-2 bg-black opacity-5'></div>
              <p className='font-medium font-ste text-base md:text-lg'>{testimonial.text} (<Link href={testimonial.link} className='text-sky-700'>Read More</Link>)</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Testimonial;
