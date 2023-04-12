import React from 'react'
import { BlogIntro, Footer, InnerPost, Navbar } from '../components'
import Content from '../components/BlogInner/Content'

export default function Productinner() {
  return (
    <div>
        <Navbar />
        <BlogIntro />
        <InnerPost />
        {/* <Content /> */}
        <Footer />
    </div>
  )
}
