import React from 'react'

export default function Technology() {
     return (
          <div className='bg-black/[.89] px-[8%] py-20'>
               <div className='text-center'>
                    <p className='text-[#00ACEF] text-2xl font-semibold'>Lorem Ipsum is simply dummy text</p>
                    <p className='px-[22%] text-4xl text-white font-semibold'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. since the 1500s</p>
                    <p className='px-[22%] text-white mt-5 text-lg font-normal'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</p>
               </div>
               <div className="flex w-[100%] justify-center gap-5">
                    <img src="/Images/Aboutus/Technology1.png" alt="" className='w-[30%]' />
                    <img src="/Images/Aboutus/Technology2.png" alt="" className='w-[30%]' />
               </div>
               <div className="flex mt-20 mb-10">
                    <div className='w-1/2'>
                         <p className='text-[#00ACEF] text-2xl font-semibold'>kasol Energie</p>
                         <p className='text-white text-4xl font-semibold'>kasol Energie Technology</p>
                    </div>
                    <div className='w-1/2'>
                         <p className='text-white/[.80] text-lg font-normal'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</p>
                    </div>
               </div>
               <div>
                    <iframe
                         width="100%"
                         height="415"
                         src="https://www.youtube.com/embed/"
                         frameborder="0"
                         allow="autoplay; encrypted-media"
                         allowfullscreen
                    />
               </div>
          </div>
     )
}
