import React from 'react'
import { contentData } from './ContentData';
import { BiSearch } from 'react-icons/bi'

export default function InnerPost() {

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

    const data = contentData;

    return (
        <div className='border p-5 m-5'>
            <div className='relative'>
                <div className='flex items-center'>
                    <input type="text" placeholder='Search' className='w-full bg-[#252525] p-2'/><BiSearch className='absolute right-1  text-white' />
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

                    <p className='border-t pt-4'>{data[0].date}</p>
                    <p className='border-b pb-4'>{data[0].title}</p>

                    <p className='border-t pt-4'>{data[1].date}</p>
                    <p className='border-b pb-4'>{data[1].title}</p>

                    <p className='border-t pt-4'>{data[2].date}</p>
                    <p className='border-b pb-4'>{data[2].title}</p>

                    <p className='border-t pt-4'>{data[3].date}</p>
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
