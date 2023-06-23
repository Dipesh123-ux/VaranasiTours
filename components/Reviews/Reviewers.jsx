import React from 'react'
import ReviewersDetails from './ReviewersDetails'

function Reviewers() {
    return (
        <div className=' flex flex-col items-center mb-8 '>
            <h1 className='text-center xl sm:text-3xl lg:text-4xl font-sang '>Meet The Reviewers</h1>

            <div className='grid grid-cols-1 mt-4 shadow-2xl lg:grid-cols-2 w-fit gap-8 lg:gap-4 border- 2 rounded-lg  p-8'>

               
                {ReviewersDetails.map((reviewer, index) => (
                    <div key={index}>
                        <iframe className="h-56 w-96" src={`${reviewer.url}`} allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                    </div>
                ))}



            </div>
        </div>
    )
}

export default Reviewers