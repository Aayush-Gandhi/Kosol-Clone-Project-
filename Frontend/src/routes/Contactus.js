import React from 'react'
import { ContactForm, ContactIntro, Footer, LocationMap, Navbar } from '../components'

export default function Contactus() {
  return (
    <div>
        <Navbar />
        <ContactIntro />
        <ContactForm />
        <LocationMap />
        <Footer />
    </div>
  )
}
