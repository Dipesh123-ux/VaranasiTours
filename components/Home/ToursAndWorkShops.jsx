import React from 'react'
import GlassmorphicImage from './ToursImageComponent'
import pic from './assets/2.jpg'

const ToursAndWorkShops = () => {
    return (
        <div>
            <h1 class="text-center text-3xl sm:text-3xl md:text-3xl lg:text-4xl xl:text-4xl font-sang ">Tours and Workshops</h1>
            <div className="grid grid-cols-1 md:grid-cols-2  md:mx-20">
                <GlassmorphicImage src={'/images/Toursworkshops/Phototours/1.jpg'}  heading="PHOTO TOURS" text="If you are planning to visit" path="photo-tours"/>
                <GlassmorphicImage src={'/images/Toursworkshops/Workshop/1.jpg'} heading={"WORKSHOPS"} text={"After doing two years of constant"} path="workshops"/>
                <GlassmorphicImage src={'/images/Toursworkshops/Fixers/7.jpeg'} heading={"FIXERS"} text={"If you're in Varanasi for your"} path="fixers"/>
                <GlassmorphicImage src={'/images/Toursworkshops/Customized/6.jpg'} heading={"Customized Photo Tours"} text={"Visiting a new location for photo"} path="customized-photo-tours"/>
            </div>
        </div>
    )
}

export default ToursAndWorkShops