import React from 'react'
import { IoLocationSharp } from 'react-icons/io5'

export default function Map() {

     const country = [
          {
               countryname: "India"
          },
          {
               countryname: "United States"
          },
          {
               countryname: "Australian"
          },
          {
               countryname: "South America"
          },
          {
               countryname: "United Arab Emirates"
          },
          {
               countryname: "Saudi Arabia"
          },
          {
               countryname: "Canada"
          },
          {
               countryname: "Africa Cambodian"
          },
          {
               countryname: "Oman"
          },
          {
               countryname: "Indonesia"
          },
          {
               countryname: "Qatar"
          }
     ]
     return (
          <div className='map px-[8%]'>
               <div className='lg:flex pt-10 lg:pt-20'>
                    <div className='text-white w-[100%] md:w-[40%]'>
                         <p className='text-sm lg:text-2xl font-semibold text-[#00ACEF] pt-4'>Sun Energie</p>
                         <p className='text-base lg:text-4xl mt-1 font-semibold'>Lorem Ipsum is simply dummy</p>
                         <p className='text-sm lg:text-lg mt-5 mb-5 lg:w-[70%] text-white/[.80]'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
                         
                         <div className='grid grid-cols-2 lg:grid-cols-3 gap-y-4'>
                         {
                              country.map((data,index) =>
                              {
                                   return(
                                        <div className='flex items-center space-x-2' key={index}>
                                             <IoLocationSharp />
                                             <p className='text-xs lg:text-lg text-white/[.80]'>{data.countryname}</p>
                                        </div>
                                   )
                              }) 
                         }
                         </div>

                    </div>
                    <div className='w-[100%] lg:w-[70%] pt-10'>
                         <img src="/Images/Map.png" alt=""  />
                    </div>
               </div>
          </div>
     )
}
