"use client"
import React from 'react'
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import Image from 'next/image';


const Crousel = ({heading}) => {
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
                    <Image src='/images/Toursworkshops/home/1.jpg' height={500} width={500} className="d-block h-screen object-cover w-screen" alt={"picture"} />
                </div>
            </Carousel>
            <div className="absolute inset-0 top-20 bg-black opacity-50 z-8 h-screen flex items-center justify-center">
                <h1 className="text-3xl md:text-5xl font-bold text-white z-20 font-sang">
                    {heading}
                </h1>
            </div>
        </div>
    )
}

export default Crousel