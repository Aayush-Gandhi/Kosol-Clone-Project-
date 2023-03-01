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
          <div className='map'>
               <div className='flex px-[8%] pt-20'>
                    <div className='text-white w-[40%]'>
                         <p className='text-2xl font-semibold text-[#00ACEF] pt-4'>Kasol Energie</p>
                         <p className='text-4xl mt-1 font-semibold'>Lorem Ipsum is simply dummy</p>
                         <p className='text-lg mt-5 mb-5 w-[70%] text-white/[.80]'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
                         
                         <div className='grid grid-cols-3 gap-y-4'>
                         {
                              country.map((data) =>
                              {
                                   return(
                                        <div className='flex items-center space-x-2'>
                                             <IoLocationSharp />
                                             <p className='text-lg text-white/[.80]'>{data.countryname}</p>
                                        </div>
                                   )
                              }) 
                         }
                         </div>

                    </div>
                    <div className='w-[50%]'>
                         <img src="/Images/Map.png" alt=""  />
                    </div>
               </div>
          </div>
     )
}
