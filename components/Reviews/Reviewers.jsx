import React from 'react'


function Reviewers() {
    return (
        <div className='-mt-32 flex flex-col items-center  '>
            <h1 className='text-center xl sm:text-3xl lg:text-4xl font-sang '>Meet The Reviewers</h1>

            <div className='grid grid-cols-1 mt-4 shadow-2xl lg:grid-cols-2 w-fit gap-8 lg:gap-4 border- 2 rounded-lg  p-8'> 

                <div className=''>
                    <iframe className="h-56 w-96 shadow-2xl " src={"https://www.youtube.com/embed/5jiSX-V0Kek"} allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                </div>

                <div >
                    <iframe className="h-56 w-96 " src={"https://www.youtube.com/embed/if66Fk1MaMk"} allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                </div>
                <div >
                    <iframe class="h-56 w-96 " src="https://www.youtube.com/embed/B-4ih0v0hEU" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
                <div >
                    <iframe class="h-56 w-96 " src="https://www.youtube.com/embed/ikGJ5Q4QpBM" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>

            </div>
        </div>
    )
}

export default Reviewers