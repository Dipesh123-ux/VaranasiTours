import React from 'react'
import bg from '../Reviews/assets/bg.jpg'
import Pic from '../Reviews/assets/alice1.jpg'
import Gpic from '../Reviews/assets/i4.jpeg'
import Image from 'next/image'

function Peoples() {
    return (
        <div className='flex flex-col lg:flex-row'>
            <div className=' flex flex-col  lg:w-11/12 lg:h-screen' style={{ height: "300px" }} >

                <div className='flex flex-col  h-full  lg:justify-start items-center lg:fixed lg:w-1/3 lg:h-screen' >
                    <Image className='h-full  lg:h-screen w-screen' src={bg} />
                    <div className=' absolute  lg:h-screen  text-end m-12 lg:-mr-52  flex flex-col items-center  '>
                        <Image className='h-20  w-20 lg:h-28 ml-2 lg:w-28 rounded-full ' src={Pic} />
                        <p className='text-lg lg:text-xl text-white font-semibold font-ste mb-1 mt-2 -mr-2'>Lorenz Lazzati</p>
                        <p className='lg:text-lg  text-white  font-ste'>Italy, Europe</p>

                        <div className='absolute lg:relative  mb-40 mt-40 lg:mt-52 text-center bg-red-50  text-white flex justify-center'>
                            <div className='border-2'>fb i</div>
                            <div className='border-2'> insta </div>
                        </div>
                    </div>
                </div>



            </div>
            <div className='h-screen    lg:mt-4 lg:ml-52 xl:ml-64 2xl:ml-52'>
                <div className='m-4  w-5/6 xl:w-4/6 p-4 pb-16 border-b-2'>
                    <h1 className='text-3xl font-semibold mb-8'>What does she feels,</h1>
                    <p className='text-xl font-bold font-ste'>I have been on a few tours with Shivam in the last couple of years. Every time I go out shooting in a group with him, I’m struck by a mixture of ...his knowledge, vision and perspective taking photos, personable relaxed friendly nature, and effortless patience towards amateurs like me. Each time I leave challenged by what I’ve learnt and delighted by the culture we and I have the privilege of connecting with through the lens.</p>
                    <p className='text-end text-lg font-semibold font-ste'>-Alice</p>
                </div>
                <div className=' flex flex-col pb-8  items-center lg:items-start w-auto  lg:w-max '>
                    <h1 className='text-2xl lg:text-3xl font-sang mt-12 mb-4   lg:ml-8 '>Alice's Works in Kolkata </h1>
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-8 w-max lg:w-fit lg:px-8  justify-items-center lg:py-4 text-center'>
                        <Image className='h-48 w-64  rounded shadow-xl' src={Gpic} />
                        <Image className='h-48 w-64 rounded shadow-xl' src={Gpic} />
                        <Image className='h-48 w-64 rounded shadow-xl' src={Gpic} />
                        <Image className='h-48 w-64 rounded shadow-xl' src={Gpic} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Peoples