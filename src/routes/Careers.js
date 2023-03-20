import React from 'react'
import { Clients, Footer, LifeAtKasol, Navbar, TeamLeader } from '../components'
import CareersIntro from '../components/Careers/CareersIntro'
import OpenPosition from '../components/Careers/OpenPosition'

export default function Productinner() {
  return (
    <div>
        <Navbar />
        <CareersIntro />
        <LifeAtKasol />
        <OpenPosition />
        <TeamLeader />
        <Clients />
        <Footer />
    </div>
  )
}
