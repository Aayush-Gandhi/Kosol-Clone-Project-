import React from 'react'
import { Clients, Footer, LifeAtKasol, Navbar, TeamLeader } from '../components'
import CareersIntro from '../components/Careers/CareersIntro'

export default function Productinner() {
  return (
    <div>
        <Navbar />
        <CareersIntro />
        <LifeAtKasol />
        <TeamLeader />
        <Clients />
        <Footer />
    </div>
  )
}
