import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import profile from './assets/no_profile.jpg'


function Testimonal() {
    return (
        <div className=' flex flex-col items-center  mt-16'>
            <h1 className='text-center text-3xl  lg:text-4xl  tracking-widest  font-sang'>Testimonials</h1>
            <div className=' p-4 grid md:grid-cols-2 lg:grid-cols-3 items-center w-fit  -mt-4 justify-items-center '>

               
                <div className='  flex flex-col text-center  items-center rounded-3xl w-72 p-4   shadow-2xl bg-gray-100 m-8'>
                    <Image src={profile} alt='pic' className='h-16 w-16 rounded-full ' ></Image>
                    <h2 className='font-sang font-semibold text-lg'>Jake Thomas Pandermann</h2>
                    <Link href={'/'} className='text-lg  mb-4 text-sky-700 font-medium tracking-wide font-ste ' >@jakethomasphotography</Link>
                    <div className='h-0.5  w-full mb-2 bg-black opacity-5'></div>
                    <p className='font-medium font-ste text-lg '>Shivam is nothing short of brilliant when it came to assisting me around Kolkata. He knows the area very well. He had great...(<Link href={'/'} className='text-sky-700'>Read More</Link>)</p>
                </div>
                <div className='  flex flex-col text-center  items-center rounded-3xl w-72 p-4   shadow-2xl bg-gray-100 m-8'>
                    <Image src={profile} alt='pic' className='h-16 w-16 rounded-full ' ></Image>
                    <h2 className='font-sang font-semibold text-lg'>Jake Thomas Pandermann</h2>
                    <Link href={'/'} className='text-lg  mb-4 text-sky-700 font-medium tracking-wide font-ste ' >@jakethomasphotography</Link>
                    <div className='h-0.5  w-full mb-2 bg-black opacity-5'></div>
                    <p className='font-medium font-ste text-lg '>Shivam is nothing short of brilliant when it came to assisting me around Kolkata. He knows the area very well. He had great...(<Link href={'/'} className='text-sky-700'>Read More</Link>)</p>
                </div>
                <div className='  flex flex-col text-center  items-center rounded-3xl w-72 p-4   shadow-2xl bg-gray-100 m-8'>
                    <Image src={profile} alt='pic' className='h-16 w-16 rounded-full ' ></Image>
                    <h2 className='font-sang font-semibold text-lg'>Jake Thomas Pandermann</h2>
                    <Link href={'/'} className='text-lg  mb-4 text-sky-700 font-medium tracking-wide font-ste ' >@jakethomasphotography</Link>
                    <div className='h-0.5  w-full mb-2 bg-black opacity-5'></div>
                    <p className='font-medium font-ste text-lg '>Shivam is nothing short of brilliant when it came to assisting me around Kolkata. He knows the area very well. He had great...(<Link href={'/'} className='text-sky-700'>Read More</Link>)</p>
                </div>
                <div className='  flex flex-col text-center  items-center rounded-3xl w-72 p-4   shadow-2xl bg-gray-100 m-8'>
                    <Image src={profile} alt='pic' className='h-16 w-16 rounded-full ' ></Image>
                    <h2 className='font-sang font-semibold text-lg'>Jake Thomas Pandermann</h2>
                    <Link href={'/'} className='text-lg  mb-4 text-sky-700 font-medium tracking-wide font-ste ' >@jakethomasphotography</Link>
                    <div className='h-0.5  w-full mb-2 bg-black opacity-5'></div>
                    <p className='font-medium font-ste text-lg '>Shivam is nothing short of brilliant when it came to assisting me around Kolkata. He knows the area very well. He had great...(<Link href={'/'} className='text-sky-700'>Read More</Link>)</p>
                </div>
                <div className='  flex flex-col text-center  items-center rounded-3xl w-72 p-4   shadow-2xl bg-gray-100 m-8'>
                    <Image src={profile} alt='pic' className='h-16 w-16 rounded-full ' ></Image>
                    <h2 className='font-sang font-semibold text-lg'>Jake Thomas Pandermann</h2>
                    <Link href={'/'} className='text-lg  mb-4 text-sky-700 font-medium tracking-wide font-ste ' >@jakethomasphotography</Link>
                    <div className='h-0.5  w-full mb-2 bg-black opacity-5'></div>
                    <p className='font-medium font-ste text-lg '>Shivam is nothing short of brilliant when it came to assisting me around Kolkata. He knows the area very well. He had great...(<Link href={'/'} className='text-sky-700'>Read More</Link>)</p>
                </div>
              
              
                
              
              
               
              
              
                
               
                

            </div>

        </div >
    )
}

export default Testimonal