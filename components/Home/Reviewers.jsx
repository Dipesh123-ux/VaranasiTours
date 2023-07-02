import React from 'react'
import ReviewersDetails from './ReviewersDetails'

function Reviewers() {
    return (
        <div className=' flex flex-col items-center mb-8 '>
            <h1 className='text-center text-3xl md:text-4xl font-sang  '>Meet The Reviewers</h1>

            <div className='grid grid-cols-1 mt-4 shadow-2xl lg:grid-cols-1 w-full  md:w-2/3 justify-items-center gap-8 rounded-lg  p-8'>

               
                {ReviewersDetails.map((reviewer, index) => (
                    <div className='w-full' key={index}>
                        <iframe className="w-full h-[500px] rounded-lg" src={`${reviewer.url}`} allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                    </div>
                ))}

            </div>
        </div>
    )
}

export default Reviewers