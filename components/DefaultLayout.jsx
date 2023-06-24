'use client'
import React from 'react'
import Navbar from './Nav'
import Footer from './Footer'

const DefaultLayout = ({children}) => {
  return (
    <div>
    <Navbar />
    {children}
    <Footer />
    </div>
  )
}

export default DefaultLayout