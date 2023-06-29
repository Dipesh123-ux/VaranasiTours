import React from 'react'

function Video() {
    return (

        <div className=" h-screen">
            <iframe
                class="w-full h-full"
                src="https://www.youtube.com/embed/lCX9fgo5y-I"
                title="YouTube Video"
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
            ></iframe>

            {/* <video controls autoPlay className='h-auto w-screen ' >
                <source src={'https://video.wixstatic.com/video/7dae14_8600e275e4b44bcf80670393cd0634b7/720p/mp4/file.mp4'} type="video/mp4" />
            </video> */}
        </div>

    )
}

export default Video

