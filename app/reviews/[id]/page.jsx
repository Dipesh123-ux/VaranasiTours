import React from 'react'
import bg from '../../../components/Reviews/assets/bg.jpg'
import Image from 'next/image'
import Link from 'next/link'
import TestimonialDetails1 from '@/components/Reviews/TestimonialDetail1'
import TestimonialDetails2 from '@/components/Reviews/TestimonialDetails2'


const Peoples = ({ params }) => {
    const result = params.id;

    const number = parseInt(result.charAt(0), 10);
    const id = parseInt(result.slice(1), 10);
    let testimonialDetails = TestimonialDetails1; // Use let instead of const

    if (number === 1) {
        testimonialDetails = TestimonialDetails2; // Update the existing variable
    }




    return (
        <div className='flex flex-col lg:flex-row  justify-evenly'>
            <div className=' flex flex-col  w-full  lg:w-1/3  lg:h-auto' >
                {/* <div className=' flex flex-col bg-black border-4 w-1/2 lg:h-screen' style={{ height: "300px" }} > */}
                <div className='flex flex-col    lg:justify-start items-center lg:items-start xl:items-center  lg:w-full lg:h-full' >
                    <Image className='h-96 object-cover  lg:h-full w-screen ' src={bg} />
                    <div className=' absolute  lg:h-screen  text-end m-12 lg:-mr-52  flex flex-col items-center'>
                        <Image className='h-20  w-20 lg:h-28 ml-2 lg:w-28 rounded-full ' src={require(`../../../components/Reviews/assets/profile-image/${testimonialDetails[id].profilePic}`)} width={200} height={200} />
                        <p className='text-lg lg:text-xl text-black font-semibold font-sang mb-1 mt-2 -mr-4 text-center w-56 md:w-40 '>{testimonialDetails[id].name}</p>
                        <p className='lg:text-lg font-medium text-black  font-sang'>{testimonialDetails[id].place}</p>

                        <div className='absolute lg:relative  mb-40 mt-40 lg:mt-52 text-center  -mr-8  flex justify-center'>
                            {testimonialDetails[id].instagram && (
                                <Link className='text-3xl mr-4' target='_blank' href={testimonialDetails[id].instagram}>
                                    <i className="fab fa-instagram"></i>
                                </Link>
                            )}
                            {testimonialDetails[id].facebook && (
                                <Link className='text-3xl mr-4' target='_blank' href={testimonialDetails[id].facebook}>
                                    <i className="fab fa-facebook"></i>
                                </Link>
                            )}

                        </div>
                    </div>
                </div>



            </div>
            <div className='lg:w-2/3 lg:mt-4 '>
                <div className='m-4 xl:w-4/6 p-4 pb-16 border-b-2'>
                    <h1 className='text-3xl font-bold mb-8 font-sang'>What does they feels,</h1>
                    <p className='text-xl font-semibold font-ste'>{testimonialDetails[id].feeling}</p>
                    <p className='text-end text-lg font-semibold font-sang mt-4'>{testimonialDetails[id].name}</p>
                </div>
                


                    {testimonialDetails[id].pics[0] && (
                        <div className=' flex flex-col pb-8  items-center lg:items-start w-auto  lg:w-max md:ml-12'>
                            <h1 className='text-2xl lg:text-3xl font-sang mt-12 mb-4   lg:ml-8 '>{testimonialDetails[id].nickname} Works in Varanasi </h1>
                            <div className='grid grid-cols-1   md:grid-cols-2 xl:grid-cols-3  gap-8 w-max lg:w-fit  justify-items-center lg:py-4 text-center'>


                                {testimonialDetails[id].pics.map((url, index) => (
                                    <Image className='h-48 w-72 rounded shadow-xl' src={require(`../../../components/Reviews/assets/${url}`)} key={index} width={200} height={200} />
                                ))}



                            </div>
                        </div>
                    )
                    }

               
            </div>
        </div>
    )
}


export default Peoples