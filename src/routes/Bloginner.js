import React from 'react'
import { BlogIntro, Footer, Navbar } from '../components'
import Content from '../components/BlogInner/Content'

export default function Productinner() {
  return (
    <div>
        <Navbar />
        <BlogIntro />
        <Content />
        <Footer />
    </div>
  )
}
