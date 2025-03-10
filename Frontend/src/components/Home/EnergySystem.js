import React from 'react'

export default function EnergySystem() {
     return (
          <div className='solarbg px-[8%] pt-20 pb-20 text-white'>
               <p className='text-sm lg:text-2xl font-semibold'>Making Tomorrow Differtent Today</p>
               <p className='text-base lg:text-4xl font-semibold lg:w-[40%] mt-2'>Energize Society With Sustainable And Reliable Energy Systems!</p>
               <p className='text-white/[.80] pb-20 lg:w-[35%] mt-5'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry's standard dummy text ever
                    since the 1500s,    </p>

               <div className='flex flex-col gap-5 lg:gap-0 lg:flex-row'>

                    <div className='flex flex-row lg:flex-col items-center gap-10 lg:gap-0'>
                         <button className='border-2 rounded-full  w-[15%] lg:w-[30%] p-2 md:p-4'> <img src="/Images/rating.png" alt="" className='w-[100%] h-full lg:w-[200px] lg:g-[40px]' /> </button>
                         <p className='lg:mt-8'>2085+</p>
                         <p>Happy Customers</p>
                    </div>

                    <div className='flex flex-row lg:flex-col items-center gap-10 lg:gap-0'>
                         <button className='border-2 rounded-full  w-[15%] lg:w-[30%] p-2 md:p-4'> <img src="/Images/save-water.png" alt="" className='w-[100%] h-full  lg:w-[200px] lg:g-[40px]' /> </button>
                         <p className='lg:mt-8'>526+</p>
                         <p>Liter Water Saved</p>
                    </div>
                    
                    <div className='flex flex-row lg:flex-col items-center gap-10 lg:gap-0'>
                         <button className='border-2 rounded-full  w-[15%] lg:w-[30%] p-2 md:p-4'> <img src="/Images/co2.png" alt="" className='w-[100%] h-full  lg:w-[200px] lg:g-[40px]' /> </button>
                         <p className='lg:mt-8'>35000+</p>
                         <p>Kg drop of CO2 Emission</p>
                    </div>

               </div>

          </div>
     )
}
