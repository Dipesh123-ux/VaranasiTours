"use client"
import React from 'react'
import { useRouter } from 'next/navigation'

const Images = ({params}) => {
   
   console.log(params)
  return (
    <div>{params.images}</div>
  )
}

export default Images