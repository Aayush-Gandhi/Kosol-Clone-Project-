import React, { useState } from 'react'
import { Footer, Intro, Logo, ManufacturingUnit, Map, Navbar, TeamLeader } from '../components'
import Mission from '../components/Company/Mission'
import Technology from '../components/Company/Technology'

export default function Aboutus() {
  return (
    <div>
      <Navbar />
      <Intro />
      <Technology />
      <Mission />
      <TeamLeader />
      <Map />
      <ManufacturingUnit />
      <Logo />
      <Footer />
    </div>
  )
}
