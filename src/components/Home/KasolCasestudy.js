import React from 'react'

export default function KasolCasestudy() {
     const solar = [

          {
               img: '/Images/Solar1.png',
               info: 'Lorem Ipsum is simply dummy text of the and printing and typesetting is industry '
          },
          {
               img: '/Images/Solar2.png',
               info: 'Lorem Ipsum is simply dummy text of the and printing and typesetting is industry '
          },
          {
               img: '/Images/Solar3.png',
               info: 'Lorem Ipsum is simply dummy text of the and printing and typesetting is industry '
          },
     ]
     return (
          <div className='bg-black/[.90] px-[8%] pt-20 pb-20'>
               <div>
                    <p className='text-2xl font-semibold text-[#00ACEF]'>Kasol Enerigie</p>
                    <p className='text-4xl font-semibold text-white'>Case Study</p>
               </div>
               <div className="flex mt-10">
                    {
                         solar.map((data) => {
                              return (
                                   <div>
                                        <img src={data.img} className=" w-[90%]" alt="" />
                                        <p className='w-[80%] text-white mt-5 font-medium text-xl'> {data.info} </p>
                                        <p className='mt-5 font-semibold text-[#00ACEF]'> <a href=""> Read More</a> </p>
                                   </div>
                              )
                         }
                         )
                    }
               </div>
          </div>
     )
}
