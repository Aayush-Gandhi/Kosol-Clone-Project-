import React from 'react'
import { IoCalculatorOutline, IoCallSharp, IoLogoWhatsapp } from 'react-icons/io5'
import { Marquee, SysDate } from '..'
import Breadcrumbs from '../Breadcrumbs'

export default function HomeMain() {
     return (
          <div>
               <div className='home py-[15%]'>
                    <div className='flex justify-between'>
                         <div className='pl-[8%] text-white'>
                              <p className='text-sm md:text-xl xl:text-2xl font-semibold'>Welcome to Sun Energie</p>
                              <p className='text-lg md:text-4xl xl:text-7xl font-bold w-full'>We investe in <br /> the future of planet !</p>
                              <p className='text-sm md:text-base xl:text-lg font-medium mt-5'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.  dummy text ever since the 1500s, </p>
                              {/* <Breadcrumbs /> */}
                         </div>
                         <div className='hidden lg:flex flex-col items-end text-white space-y-2 overflow-hidden'>
                              <button className='bg-black px-2 py-2 gap-2 items-center rounded text-xs xl:text-xl flex hover:-translate-x-0 duration-700 translate-x-[80%] '><IoCalculatorOutline /> SolarCalculator </button>
                              <button className='bg-black px-3 py-2 gap-2 rounded flex w-fit hover:-translate-x-0 duration-700 translate-x-[80%] text-xs xl:text-base'> <IoLogoWhatsapp /> +91 9988776655 </button>
                              <button className='bg-black px-3 py-2 gap-2 rounded flex w-fit hover:-translate-x-0 duration-700 translate-x-[80%] text-xs xl:text-base'> <IoCallSharp /> +91 9988776655 </button>
                         </div>
                    </div>
               </div>
               <Marquee />
          </div>
     )
}
