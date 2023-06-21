import React from 'react'
import bg from '../../../components/Reviews/assets/bg.jpg'
import Pic from '../../../components/Reviews/assets/alice1.jpg'
import Gpic from '../../../components/Reviews/assets/i4.jpeg'
import Image from 'next/image'
import testimonialDetails from '@/components/Reviews/Details'
import Link from 'next/link'


const Peoples = ({ params }) => {
    const id = params.id;
    return (
        <div className='flex flex-col lg:flex-row'>
            <div className=' flex flex-col  lg:w-11/12 lg:h-screen' style={{ height: "300px" }} >

                <div className='flex flex-col  h-full  lg:justify-start items-center lg:fixed lg:w-1/3 lg:h-screen' >
                    <Image className='h-full  lg:h-screen w-screen ' src={bg} />
                    <div className=' absolute  lg:h-screen  text-end m-12 lg:-mr-52  flex flex-col items-center  '>
                        <Image className='h-20  w-20 lg:h-28 ml-2 lg:w-28 rounded-full ' src={require(`../../../components/Reviews/assets/${testimonialDetails[id].profilePic}`)} width={200} height={200} />
                        <p className='text-lg lg:text-xl text-white font-semibold font-ste mb-1 mt-2 -mr-4 text-center w-40 '>{testimonialDetails[id].name}</p>
                        <p className='lg:text-lg  text-white  font-ste'>{testimonialDetails[id].place}</p>

                        <div className='absolute lg:relative  mb-40 mt-40 lg:mt-52 text-center  -mr-8  flex justify-center'>
                            {testimonialDetails[id].instagram && (
                                <Link className='text-3xl mr-4' href={testimonialDetails[id].instagram}>
                                    <i className="fab fa-instagram"></i>
                                </Link>
                            )}
                            {testimonialDetails[id].facebook && (
                                <Link className='text-3xl mr-4' href={testimonialDetails[id].facebook}>
                                    <i className="fab fa-facebook"></i>
                                </Link>
                            )}

                        </div>
                    </div>
                </div>



            </div>
            <div className='h-screen    lg:mt-4 lg:ml-52 xl:ml-64 2xl:ml-52'>
                <div className='m-4  w-5/6 xl:w-4/6 p-4 pb-16 border-b-2'>
                    <h1 className='text-3xl font-semibold mb-8'>What does they feels,</h1>
                    <p className='text-xl font-bold font-ste'>{testimonialDetails[id].feeling}</p>
                    <p className='text-end text-lg font-semibold font-ste mt-4'>{testimonialDetails[id].name}</p>
                </div>
                {testimonialDetails[id].pics.size > 0 && (
                        <div className=' flex flex-col pb-8  items-center lg:items-start w-auto  lg:w-max '>
                            <h1 className='text-2xl lg:text-3xl font-sang mt-12 mb-4   lg:ml-8 '>{testimonialDetails[id].nickname} Works in Varanasi </h1>
                            <div className='grid grid-cols-1 md:grid-cols-2 gap-8 w-max lg:w-fit lg:px-8  justify-items-center lg:py-4 text-center'>


                                {testimonialDetails[id].pics.map((url, index) => (
                                    <Image className='h-48 w-64 rounded shadow-xl' src={require(`../../../components/Reviews/assets/${url}`)} key={index} width={200} height={200} />
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