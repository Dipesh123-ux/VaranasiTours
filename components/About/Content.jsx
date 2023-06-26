"use client"
import React from 'react'
import Image from 'next/image'
import headerPic from './assets/shivam2.jpg';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const Content = () => {
  return (
    <div>
      <div className=' text-center p-2 font-semibold tracking-wide font-ste bg-zinc-100 mt-4 '>
        <p className='p-4'>"It is one thing to photograph people. It is
          another to make others care about them by
          revealing the core of their</p>
        <p className="tracking-widest ">HUMANESS."</p>

        <span className=" md:ml-60 lg:ml-80 mt-8"><em> - Paul Strand</em></span>

      </div>
      <div className='mb-8 lg:h-screen w-full mt-8 '>
        <div className=' relative h-1/2 md:h-5/6 text-center  flex  items-center  justify-center '>
          <img className='h-full w-full  ' src={'https://static.wixstatic.com/media/7dae14_32619720da6948eeb3018308e8dfe98f~mv2.jpg/v1/fill/w_1899,h_879,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/7dae14_32619720da6948eeb3018308e8dfe98f~mv2.jpg'} alt="Your Image" />
          <div className=' absolute  font-sang text-white font-bold text-lg md:text-3xl lg:text-4xl'>
            This is our story
          </div>
        </div>
      </div>


      <div className='mb-8  lg:-mt-28 flex text-center justify-center'>
        <p className='mx-2 md:m-4  p-8 rounded-lg drop-shadow-xl bg-slate-50 font-medium leading-relaxed   md:font-semibold  w-full md:w-2/3 tracking-wide text-sm md:text-lg font-ste'>

          Our early childhood was spent in the holy city of Varanasi, which is also our birthplace. However, we eventually moved to Kolkata, famously known as the "City of Joy", in search of better opportunities. It didn't take long for us to fall in love with the city's vibrant culture. During our teenage years, we developed a keen interest in photography. Shivam pursued photography professionally, while Shubham enjoyed exploring the city and communicating, which helped Shivam in capturing great photos. Eventually, we decided to establish our first photo tour company, Kolkataphototours.com. Over the last five years, we have collaborated with over 150 photographers and filmmakers through Kolkataphototours.com. Furthermore, we have expanded our photography tour services to cover various destinations throughout India. We guarantee a memorable photo tour experience in India with us.
        </p>

      </div>

      <div className=' w-full   flex justify-center my-12  '>
        <div className='grid lg:grid-cols-3 w-screen  my-8  lg:w-11/12 gap-0  shadow-2xl rounded-lg	 lg:rounded' >
          <div className='h-80 lg:h-full w-max lg:w-11/12  ' >
            <Image className='h-80 lg:h-full w-screen object-cover ' src={headerPic} alt='pic' />
          </div>
          <div className='col-span-2 m-2 lg:m-8  tracking-wide '>
            <h1 className='text-center text-3xl font-semibold mt-4 font-sang'>Meet Shivam Pandey </h1>
            <p className='m-3 text-left md:p-4 font-sang text-base md:text-xl'>Introducing Shivam Pandey, a devoted photographer currently residing in Kolkata, a lively and vibrant city in India. Shivam is an inquisitive and daring individual who takes pleasure in discovering novel locations, immersing himself in diverse cultures, and seizing the essence of people's existence through his camera.

              Despite being brought up in a traditional society that discouraged pursuing one's passion as a viable option for a flourishing future, Shivam chose to follow his instincts and pursue his ardor for photography. Although he didn't have any formal education in photography, he was fortunate to work with some of the industry's finest professionals, which honed his abilities and refined his artistic perspective.
              <br />
              <br />
              With a natural talent for narration and a profound affection for capturing genuine moments, Shivam's photography reflects his adventurous spirit and his capacity to connect with people from all walks of life. As a photography tour leader, he relishes sharing his knowledge and techniques with other aspiring photographers, urging them to embrace their creativity and pursue their dreams, just like he did.</p>
          </div>
        </div>
      </div>
      <div className=' w-full   flex  justify-center lg:mb-8 '>
        <div className='flex flex-col-reverse lg:grid  lg:grid-cols-3 w-screen   lg:w-11/12 gap-0  shadow-2xl 	 lg:rounded' >

          <div className='col-span-2 m-2 lg:m-8  tracking-wide '>
            <h1 className='text-center text-3xl font-semibold mt-4 font-sang '>Meet Shubham Pandey </h1>
            <p className='m-3 text-left md:p-4 font-sang text-base md:text-xl'>Introducing Shivam Pandey, a devoted photographer currently residing in Kolkata, a lively and vibrant city in India. Shivam is an inquisitive and daring individual who takes pleasure in discovering novel locations, immersing himself in diverse cultures, and seizing the essence of people's existence through his camera.

              Despite being brought up in a traditional society that discouraged pursuing one's passion as a viable option for a flourishing future, Shivam chose to follow his instincts and pursue his ardor for photography. Although he didn't have any formal education in photography, he was fortunate to work with some of the industry's finest professionals, which honed his abilities and refined his artistic perspective.
              <br />
              <br />
              With a natural talent for narration and a profound affection for capturing genuine moments, Shivam's photography reflects his adventurous spirit and his capacity to connect with people from all walks of life. As a photography tour leader, he relishes sharing his knowledge and techniques with other aspiring photographers, urging them to embrace their creativity and pursue their dreams, just like he did.</p>
          </div>
          <div className='h-80 lg:h-full w-max lg:w-11/12' >
            <Image className='h-80 lg:h-full lg:w-screen w-screen object-cover' src={headerPic} alt='pic' />
          </div>
        </div>
      </div>
     
      <div className=' flex flex-col items-center my-8 '>


            <div className='grid grid-cols-1 mt-4 shadow-2xl lg:grid-cols-2   w-11/12 justify-items-center gap-8 rounded-lg  md:p-8'>

               
                    <div className='w-11/12'>
                        <iframe className="w-full h-56 md:h-72" src={"https://www.youtube.com/embed/5jiSX-V0Kek"} allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                    </div>
                    <div className='w-11/12'>
                        <iframe className="w-full h-56 md:h-72" src={"https://www.youtube.com/embed/5jiSX-V0Kek"} allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                    </div>
               

            </div>
        </div>

    </div>


  )
}

export default Content