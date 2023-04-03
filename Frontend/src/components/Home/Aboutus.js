import React from 'react'

export default function Aboutus() {
     return (
          <div className='bg-black/[.90]'>
               <div className="flex px-[8%] lg:px-[8%] py-[5%] flex-col lg:flex-row">
                    <div className='flex  lg:w-1/2  space-x-4 flex-row'>
                         <div className='w-[80%]'>
                              <img src="Images/1.png" alt="" className='' />
                         </div>
                         <div className="flex flex-col space-y-5 lg:space-y-14 w-[100%]">
                              <img src="Images/2.png" alt="" className='' />
                              <img src="Images/3.png" alt="" className='' />
                         </div>
                    </div>
                    <div className='text-white text-justify lg:w-1/2 lg:pl-20'>
                         <p className='text-sm lg:text-2xl font-semibold text-[#00ACEF] mt-12'>Who We Are</p>
                         <p className='text-baselg:text-4xl font-semibold text-white'>Sun Energie Pvt Ltd.</p>
                         <p className='text-sm lg:text-lg font-normal mt-5 text-white/[.80]'>Sun Energie Pvt. Ltd. (KOSOL) - an ISO 9001:2015, 14001:2015 & OHSAS 18001:2007 certified company is one of the largest manufacturers of eco-friendly.</p>
                         <p className='text-sm lg:text-lg font-normal mt-4 text-white/[.80]'>Pollution-free products like Solar Water Heater, Solar Lighting System, Photo Voltaic Modules, Solar Water Pumping System, Solar Cooking System, etc.</p>
                         <p className='text-sm lg:text-lg font-normal mt-4 text-white/[.80]'>Kosol is in business since 1984 and is committed to manufacture and supply solar products and quality having optimum reliability and long life to support clean and green environment.</p>
                    </div>
               </div>
          </div>
     )
}
