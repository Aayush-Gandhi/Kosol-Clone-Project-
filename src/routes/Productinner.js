import React from 'react'
import { Application, Footer, KasolCasestudy, Navbar, ProductIntro, ProductRange, SolarDryer, TechSpeci } from '../components'

export default function Productinner() {
  return (
    <div>
        <Navbar />
        <ProductIntro />
        <SolarDryer />
        <TechSpeci />
        <Application />
        <ProductRange />
        <KasolCasestudy />
        <Footer />
    </div>
  )
}
