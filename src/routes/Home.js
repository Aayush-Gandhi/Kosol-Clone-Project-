import React from 'react'
import {Aboutus, Clients, EnergySystem, Footer, HomeMain, KasolCasestudy, LatestProjects, Map, Navbar, ProductRange} from '../components'

export default function Home() {
  return (
    <div>
        <Navbar />
        <HomeMain />
        <Aboutus />
        <ProductRange />
        <LatestProjects />
        <Map />
        <KasolCasestudy />
        <EnergySystem />
        <Clients />
        <Footer />
    </div>
  )
}
