import React from 'react'
import { useParams } from 'react-router-dom'
import Footer from '../Footer'
import Navbar from '../Navbar'
import { pr } from '../Products/productData'

export default function Products() {

  const { searchPr } = useParams()




  return (
    <div>
      <Navbar />
      {
        pr.filter(i => (i.product.charAt(0).toUpperCase()+i.product.slice(1).replace(" ","")) == searchPr).map(data =>{
          return (
            <h1>{data.product}</h1>
          )
        })
      }
      <Footer />
    </div>
  )
}
