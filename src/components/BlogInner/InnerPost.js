import React, { useState } from 'react'
import { contentData } from './ContentData';
import { BiSearch } from 'react-icons/bi'
import { useNavigate } from 'react-router-dom';
import { pr } from '../Products/productData'

export default function InnerPost() {

    const productdata = pr 

    const data = contentData;
    const [searchValue, setsearchValue] = useState("")
    const navigate = useNavigate()


    const handleOnchange = (e) => {
        const val = e.target.value
        setsearchValue(val)
       
    }


    let productList = []
    const allProduct = () => {
        for(let i=0;i<productdata.length;i++){
            productList[i] = data[i].product.toLowerCase().replace(" ","") //Solar Pannel => solarpanel
        }
        console.log(productList)
    }

    const matchSearch = (val) => {
        if(productList.includes(val)){
            return true
        }
        return false
    }
    const handleSearch = () => {
        const val = (searchValue.charAt(0).toUpperCase()) + (searchValue.slice(1).replace(" ", "").toLowerCase()) //Solar Pannel => Solarpanel
        allProduct()
        const val2 = val
        setsearchValue(val)
        const path1 = "../../Products/Products/"+val
        matchSearch(val2.toLowerCase()) ? navigate(path1):alert("Product not available")
    }



    const categories = [
        {
            product: "A"
        },
        {
            product: "B"
        },
        {
            product: "C"
        },
        {
            product: "D"
        },
    ]


    return (
        <div className='border p-5 m-5'>
            <div className='relative'>
                <div className='flex items-center'>
                    <input type="text" onChange={(e) => handleOnchange(e)} placeholder='Search' className='text-white w-full bg-[#252525] p-2' /><BiSearch onClick={handleSearch} className='cursor-pointer absolute right-1  text-white' />
                </div>
            </div>
            <p className='text-white text-2xl mt-5'>Categories</p>
            <div >
                {
                    categories.map((data) => {
                        return (
                            <div className='bg-[#252525] text-white'>
                                <p className='text-lg m-2'>{data.product}</p>
                            </div>
                        )
                    })
                }
            </div>

            <div className='text-white mt-5'>
                <div className='my-2'>
                    <p>Latest Post</p>
                </div>
                <div className='text-lg'>

                    <p className='border-t pt-4 font-semibold'>{data[contentData.length - 1].date}</p>
                    <p className='border-b pb-4'>{data[contentData.length - 1].title}</p>

                    <p className='border-t pt-4 font-semibold'>{data[contentData.length - 2].date}</p>
                    <p className='border-b pb-4'>{data[contentData.length - 2].title}</p>

                    <p className='border-t pt-4 font-semibold'>{data[2].date}</p>
                    <p className='border-b pb-4'>{data[2].title}</p>

                    <p className='border-t pt-4 font-semibold'>{data[3].date}</p>
                    <p className='border-b pb-4'>{data[3].title}</p>
                </div>
                <div>
                    <p className='font-semibold text-2xl mt-10 lg:mt-5'>Download</p>
                    <div className="flex gap-5 mt-5">
                        <div className='w-1/2'>
                            <img src="/Images/Footerimg1.png" className='w-full' alt="" />
                            <p className='mt-3 ml-12'>Brochure</p>
                        </div>
                        <div className='w-1/2'>
                            {/* h-24 lg:h-20 w-24 lg:w-20 */}
                            <img src="/Images/Footerimg2.png" className='w-full' alt="" />
                            <p className='mt-3 ml-12'>Catalogue</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
