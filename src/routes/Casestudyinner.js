import React from 'react'
import { CaseInnerContent, CaseInnerIntro, Footer, Navbar } from '../components'

export default function Productinner() {
  return (
    <div>
        <Navbar />
        <CaseInnerIntro />
        <CaseInnerContent />
        <Footer />      
    </div>
  )
}
