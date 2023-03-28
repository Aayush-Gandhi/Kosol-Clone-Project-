import React from 'react'
import ClientLogo from './ClientLogo'

export default function Clients() {

     const client = [
          {
               img: "/Images/LIC.png"
          },
          {
               img: "/Images/HP.png"
          },
          {
               img: "/Images/BSNL.png"
          },
          {
               img: "/Images/indianoil.jpg"
          },
          {
               img: "/Images/IFFCO.jpg"
          },
          {
               img: "/Images/Taj.png"
          },
          {
               img: "/Images/Ambuja.png"
          },
          {
               img: "/Images/Geda.png"
          },
          {
               img: "/Images/Novartis.png"
          },
          {
               img: "/Images/LNMIIT.png"
          }
     ]

     return (
          <div className='bg-black/[.90] px-[8%] pt-20'>
               <div className='flex justify-between'>
                    <div className='text-white'>
                         <p className='text-sm lg:text-2xl text-[#00ACEF]'>Solar Customers</p>
                         <p className='text-base lg:text-4xl'>Meet Our Clients</p>
                    </div>
                    <div>
                         <button className='border-2 rounded-md lg:px-8 lg:py-2 text-sm p-2 border-[#00ACEF] text-[#00ACEF] hover:bg-[#00ACEF] hover:text-white'> View all Clients </button>
                    </div>
               </div>
               
               <div className="grid grid-cols-2 md:grid-cols-4 xl:grid-cols-5 gap-[50px] mt-5 pb-20">

                    {
                         // client.map((data) => {
                         //      return (
                         //           <div>
                         //                <button className='bg-white p-2 grayscale hover:grayscale-0 border-4 border-transparent hover:scale-110 hover:border-4 hover:border-[#00ACEF] lg:px-10 rounded-md'>
                         //                     <div>
                         //                     <img src={data.img} className='h-24 w-36' alt="" /> 
                         //                     <img src="" alt="" />
                         //                     </div>
                         //                </button>
                         //           </div>
                         //      )
                         // }
                         // )
                         client.map(({img}, idx) => <ClientLogo key={idx} img={img} /> )
                    }
               </div>    
          </div>
     )
}
