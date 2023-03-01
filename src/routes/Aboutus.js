import React, { useState } from 'react'
import { Footer, Intro, Navbar } from '../components'
import Technology from '../components/Company/Technology'

export default function Aboutus() {
  return (
    <div>
      <Navbar />
      <Intro />
      <Technology />
      <Footer />
    </div>
  )
}
