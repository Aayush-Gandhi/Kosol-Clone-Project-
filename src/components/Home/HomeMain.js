import React from 'react'
import { IoCalculatorOutline, IoCallSharp, IoLogoWhatsapp } from 'react-icons/io5'
import Breadcrumbs from '../Breadcrumbs'

export default function HomeMain() {
     return (
          <div>
               <div className='home py-[15%]'>
                    <div className='flex justify-between'>
                         <div className='pl-[8%] text-white'>
                              <p className='text-2xl font-semibold'>Welcome to Kasol Energie</p>
                              <p className='text-7xl font-bold'>We investe in <br /> the future of planet !</p>
                              <p className='text-lg font-medium mt-5'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.  dummy text ever since the 1500s, </p>
                              <Breadcrumbs />
                         </div>
                         <div className='flex flex-col items-end text-white space-y-2'>
                              <button className='bg-black px-2 py-2 gap-2 items-center rounded  text-xl flex hover:-translate-x-3'><IoCalculatorOutline /> Solar Calculator </button>
                              <button className='bg-black px-3 py-2 rounded w-fit hover:-translate-x-3'> <IoLogoWhatsapp /> </button>
                              <button className='bg-black px-3 py-2 rounded w-fit hover:-translate-x-3'> <IoCallSharp /> </button>
                         </div>
                    </div>
               </div>
               <div className="bg-blue-500 text-center text-white">
                    <p className='text-base font-normal py-1'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's.</p>
               </div>
          </div>
     )
}
