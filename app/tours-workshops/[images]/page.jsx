"use client"
import React, { useEffect, useState } from 'react'
import Carousel from '@/components/Tours/Carousel'
import { PhotoTours,WorkShops,Customized ,Fixers} from '@/components/Tours/Data'
import Image from 'next/image'
import ImageGallery from '@/components/Gallery/ImageGallery'
import ToursVideos from '@/components/Tours/ToursVideos'

const ToursDynamicPage = ({ params }) => {

  const [data, setData] = useState({});
  const [expanded, setExpanded] = useState(false);

  const handleData = () => {
    if (params.images == 'photo-tours') {
      setData(PhotoTours)
    }
    else if(params.images == 'workshops'){
          setData(WorkShops)
    }
    else if(params.images =='customized'){
      setData(Customized)
    }
    else if(params.images == 'fixers'){
      setData(Fixers)
    }
    
  }

  useEffect(() => {
    handleData();
  }, [params.images])

  const handleReadMore = () => {
    setExpanded(true);
  };

  return (
    <div>
      <Carousel data={data?.carousel} heading={data?.heading} />
      <div className="px-4 py-6">
        <h2 className="text-4xl md:text-5xl font-bold text-center mt-5 font-sang">{data?.heading}</h2>
        <div className={`${expanded ? '' : 'overflow-hidden'} md:w-10/12 mx-auto`}>
          <h3 style={{ whiteSpace: 'pre-line' }} className="text-gray-600 text-base md:text-xl font-ste">
            {expanded ? data?.longContent : `${data?.shortContent}...`}
          </h3>
          {!expanded && (
            <div className="flex justify-end">
              <button
                onClick={handleReadMore}
                className="mt-2 bg-gray-500 hover:bg-gray-600 text-white py-2 px-4 rounded"
              >
                Read More
              </button>
            </div>
          )}
        </div>
        <div className='image-gallery-desktop mt-5'>
        <ImageGallery imageList={data?.Images} />

        </div>
        <div className="card-list">
          {data.Images && data?.Images.map((pic) => <div className="card">
            <Image
              className="card-image mt-5"
              alt={`${pic.id}`}
              src={pic.src}
              width={500}
              height={500}
            ></Image>
          </div>)}
        </div>
      <ToursVideos videos={data?.videos}/>
       
      </div>
    </div>
  )
}

export default ToursDynamicPage