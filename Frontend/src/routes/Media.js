import React from 'react'
import { Downloads, Footer, LatestSolutions, MediaIntro, Navbar, PhotoGallery, Videos } from '../components'

export default function Productinner() {
  return (
    <div>
        <Navbar />
        <MediaIntro />
        <PhotoGallery />
        <LatestSolutions />
        <Videos />
        <Downloads />
        <Footer />
    </div>
  )
}
