"use client"
import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import Masonry from 'react-masonry-css';
import Image from 'next/image';
import { Brick, Dhobi, Ganga, Ganges, Nagas, Sadhu, Mud, Streets } from '../../../components/Home/ImageData'
import ImageGallery from '@/components/Gallery/ImageGallery';

const Images = ({ params }) => {


  const [Images, setImages] = useState([]);

  const handleImages = () => {
    if (params.images == 'brick') {
      setImages(Brick)
    }
    else if (params.images == 'dhobi') {
      setImages(Dhobi)
    }
    else if (params.images == 'ganga') {
      setImages(Ganga)
    }
    else if (params.images == 'ganges') {
      setImages(Ganges)
    }
    else if (params.images == 'nagas') {
      setImages(Nagas)
    }
    else if (params.images == 'sadhu') {
      setImages(Sadhu)
    }
    else if (params.images == 'mud') {
      setImages(Mud)
    }
    else if (params.images == 'streets') {
      setImages(Streets)
    }
  }

  useEffect(() => {
    handleImages(params)
  }, [])


  return (
    <>
    <div className="flex justify-center md:mx-64 image-gallery-desktop">
      <ImageGallery className="" imageList={Images} />
    </div>
    <div className="card-list">
      {Images.map((pic) => <div className="card">
        <Image
          className="card-image"
          alt={`${pic.id}`}
          src={pic.src}
          width={500}
          height={500}
        ></Image>
      </div>)}
    </div>
    </>
  )
}

export default Images