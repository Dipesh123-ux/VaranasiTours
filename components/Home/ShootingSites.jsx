import React from 'react'
import GlassmorphicImage from './ImageComponent'
import pic from './assets/1.jpg'

const ShootingSites = () => {
    return (
        <div>
            <h1 class="text-center text-3xl sm:text-3xl md:text-3xl lg:text-4xl xl:text-4xl font-sang ">Shooting Sites</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                <GlassmorphicImage path={"dhobi"} src={pic} heading="Ganga"/>
                <GlassmorphicImage path={"dhobi"} src={pic} heading="Ganga"/>
                <GlassmorphicImage path={"dhobi"} src={pic} heading="Ganga"/>
                <GlassmorphicImage path={"dhobi"} src={pic} heading="Ganga"/>
            </div>
        </div>
    )
}

export default ShootingSites