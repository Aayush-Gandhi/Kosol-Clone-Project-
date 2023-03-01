import React from 'react'


export default function ProductRange() {
     const productrange = [
          {
               primg: '/Images/Product1.png',
               title: 'Solar Racking System',
               info: 'Lorem Ipsum is simply dummy typesetting industry. '
          },
          {
               primg: '/Images/Product2.png',
               title: 'Solar LED Street Lights',
               info: 'Lorem Ipsum is simply dummy typesetting industry. '
          },
          {
               primg: '/Images/Product3.png',
               title: 'Solar Water Heater FPC Commercial',
               info: 'Lorem Ipsum is simply dummy typesetting industry. '
          },
          {
               primg: '/Images/Product3.png',
               title: 'Solar Water Heater ETC Domestic',
               info: 'Lorem Ipsum is simply dummy typesetting industry. '
          }
     ]
     return (
          <div className='bg-black/[.90] px-[8%]'>
               <div className='flex flex-col lg:flex-row lg:items-center justify-between'>
                    <div className='w-2/3'>
                         <p className='text-2xl font-semibold text-[#00ACEF] pt-4'> Kasol Energie </p>
                         <p className='text-4xl font-semibold text-white'> Product Range</p>
                    </div>
                    <div className=''>
                         <p className='text-lg font-normal mt-5 lg:mt-0  text-white/[.80]'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever
                              since the 1500s, </p>
                    </div>
               </div>

               <div className='grid grid-col-1 md:grid-cols-2 lg:grid-cols-4 mt-10'>
                    {
                         productrange.map((data) => {
                              return (
                                   <div className='relative w-[80%]'>
                                        <div className=''>
                                             <img src={data.primg} alt="" srcset="" /></div>
                                        <div className='bg-white rounded-b-xl px-5'>
                                             <p className='text-[#00ACEF] font-bold pt-5'>{data.title}</p>
                                             <p className='text-lg font-medium text-black/[.80] mt-5 pb-5'>{data.info}</p>
                                             <div className='flex items-end pb-[5%]'>

                                             <a href='' className='text-[#00ACEF] font-semibold'> Read More  </a>
                                             </div>
                                        </div>
                                   </div>
                                   
                              )
                         })
                    }
                    </div>
                    <div className="flex mt-10 justify-between">
                         <div className=''>
                              <p className='text-lg font-normal text-white/[.80]'>We drive the transition to more sustainable, reliable & affordable energy systems <span className='text-blue-600'> <a href=""> Find Your Solution </a> </span></p>
                         </div>
                         <div>
                         <button className='border-2 rounded-md px-8 py-2 border-[#00ACEF] text-[#00ACEF] hover:bg-[#00ACEF] hover:text-white'> View all Products </button>
                         </div>
                    </div>

          </div>
     )
}
