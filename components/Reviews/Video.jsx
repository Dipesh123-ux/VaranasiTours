import React from 'react'

function Video() {
    return (

        <div className="flex  justify-center h-screen">
            <iframe
                className="w-11/12 h-full rounded-lg"
                src="https://www.youtube.com/embed/lCX9fgo5y-I"
                title="YouTube Video"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
            ></iframe>

           
        </div>

    )
}

export default Video

