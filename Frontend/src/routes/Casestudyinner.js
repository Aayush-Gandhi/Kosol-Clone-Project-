import React from 'react'
import { CaseInnerContent, CaseInnerIntro, Footer, KasolCasestudy, Navbar } from '../components'

export default function Casestudyinner() {
  return (
    <div>
        <Navbar />
        <CaseInnerIntro />
        <CaseInnerContent />
        <KasolCasestudy />
        <Footer />      
    </div>
  )
}
