import React from 'react'
import Image from 'next/image'
import headerPic from './assets/shivam2.jpg';
import shivamPic from './assets/shivam3-edit.jpg'

const Content = () => {
  return (
    <div className=''>
    <div className='absolute inset-0 top-20 bg-black opacity-50 z-8 h-screen flex items-center justify-center' ></div>
    <Image className="h-screen object-cover"  src={headerPic} alt="" />
    <br />
    <div className="text-center w-11/12 ml-8 lg:ml-16 mb-16  flex flex-col items-center">
      <div>
        <h1 className=' text-center flex flex-col items-center'><span className="font-sang relative text-5xl font-bold text-black leading-relaxed">ABOUT</span>
          <div className='abosulte w-8 border border-gray-300 mt-2'></div>
        </h1>
        <br /><br /><br />
        <div  className='font-ste relative text-3xl fit-content pr-12  flex flex-col text-center  items-center '>

          <p className='text-center tracking-wide  md:w-3/5 xl:w-2/5 '>
            "It is one thing to photograph people. It is
            another to make others care about them by
            revealing the core of their</p>
          <p className="tracking-widest ">HUMANESS."</p>

          <br></br>
          <span className=" ml-64 lg:ml-96"><em> - Paul Strand</em></span>
          <div className='abosulte w-12 border border-gray-300 mt-2'></div>

        </div>
        <br />
      </div>
      <br /><br />
      <div id="initial-desc" className='font-ste tracking-wide leading-relaxed flex sm:flex-row flex-col text-left text-xl flexnowrap justify-center '>
        <div className="sm:w-3/4 lg:w-1/3">
          <p>
            My name is Shivam Pandey and I’m a photographer, presently residing in Kolkata,
            one of the most beautiful cities in India which itself being one of the most colourful countries in the world.
          </p>
          <p>
            A young blood with some serious interest in exploration, navigating through place to place,
            embracing the native culture and cherishing the originality of some special lives.
          </p>
        </div>
        <div className="w-8 m-2"></div>
        <div className="font-ste sm:w-3/4  lg:w-1/3">
          <p>
            My whole life has been, doing what my heart told me to do, choosing what suited best for my amusement.
            I was raised in an orthodox society where following your heart was not considered a good option for a healthy
            future.
          </p>
          <p>
            But I always allowed my heart and intuitions to guide me and choosing a life out of photography was one of it.
            I never had any professional training in photography but was pretty fortunate to work under some real
            professionals.
          </p>
        </div>
      </div>
      <div id="second-header">
        <Image className="second-image mt-8" src={shivamPic} alt="" />
      </div>
      <div className=' text-center sm:text-xl mt-8 leading-relaxed font-ste tracking-wide'>
        My goal with photography is to show the beauty, grace, strength, and enthusiasm of people.
        I focus on non-models and place regular people in exaggerated situations that highlight an aspect of who they are.
        I look for a sense of defiance and fortitude in my work. I provide assistance and tours of this lovely city to
        people interested in visiting Kolkata and where to hear it best rather than from one of its biggest lovers.
        So hoping to see you soon.
      </div>
    </div>
    </div>
  )
}

export default Content