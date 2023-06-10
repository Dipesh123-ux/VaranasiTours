"use client"
import React from 'react'
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import Image from 'next/image';
import one from './assets/1.jpg';
import two from './assets/2.jpg'
import three from './assets/3.jpg'
import four from './assets/4.jpg'
import five from './assets/5.jpg'


const Crousel = () => {
    return (
        <div>
            <Carousel
                showThumbs={false}
                showStatus={false}
                autoPlay
                infiniteLoop
                interval={3000}
            >
                <div>
                    <Image src={one} className="d-block h-screen object-cover w-screen" alt={"picture"} />
                </div>
                <div>
                    <Image src={two} className="d-block h-screen object-cover w-screen" alt={"picture"} />
                </div>
                <div>
                    <Image src={three} className="d-block h-screen object-cover w-screen" alt={"picture"} />
                </div>
                <div>
                    <Image src={four} className="d-block h-screen object-cover w-screen" alt={"picture"} />
                </div>
                <div>
                    <Image src={five} className="d-block h-screen object-cover w-screen" alt={"picture"} />
                </div>
            </Carousel>
            <div className="absolute inset-0 top-20 bg-black opacity-50 z-8 h-screen flex items-center justify-center">
                <h1 className="text-3xl md:text-5xl font-bold text-white z-20 font-sang">
                    Varanasi Photo Tours
                </h1>
            </div>
        </div>
    )
}

export default Crousel