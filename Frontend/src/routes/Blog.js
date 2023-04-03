import React from 'react'
import { BlogIntro, Clients, Footer, Navbar, News_Blogs, Pagination } from '../components'

export default function Productinner() {
  return (
    <div>
        <Navbar />
        <BlogIntro />
        <Pagination/>
        <Clients />
        <Footer />
    </div>
  )
}
