import React from 'react'
import GlassmorphicImage from './ToursImageComponent'
import pic from './assets/2.jpg'

const ToursAndWorkShops = () => {
    return (
        <div>
            <h1 class="text-center text-3xl sm:text-3xl md:text-3xl lg:text-4xl xl:text-4xl font-sang ">Tours and Workshops</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 mx-10 md:mx-20">
                <GlassmorphicImage src={pic}  heading="PHOTO TOURS" text="If you are planning to visit" path="photo-tours"/>
                <GlassmorphicImage src={pic} heading={"WORKSHOPS"} text={"After doing two years of constant"} path="workshops"/>
                <GlassmorphicImage src={pic} heading={"PHOTOWALKS"} text={"Visiting a new location for photo"} path="photowalks"/>
                <GlassmorphicImage src={pic} heading={"FIXER"} text={"If you're in Varanasi for your"} path="fixer"/>
            </div>
        </div>
    )
}

export default ToursAndWorkShops