import React from 'react'
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


export default function ProductRange() {

     const settings = {
          infinite: true,
          speed: 500,
          slidesToShow: 3,
          slidesToScroll: 1,
          arrows: false
     };

     const productrange = [
          {
               primg: '/Images/Project1.png',
               title: 'Solar Racking System',
               info: 'Lorem Ipsum is simply dummy typesetting industry. '
          },
          {
               primg: '/Images/Project2.png',
               title: 'Solar LED Street Lights',
               info: 'Lorem Ipsum is simply dummy typesetting industry. '
          },
          {
               primg: '/Images/Project3.png',
               title: 'Is Industry.',
               info: 'Lorem Ipsum is simply dummy typesetting industry. '
          },
          {
               primg: '/Images/Project3.png',
               title: 'Is Industry.',
               info: 'Lorem Ipsum is simply dummy typesetting industry. '
          },
          {
               primg: '/Images/Project4.png',
               title: 'Solar Water Heater ETC Domestic',
               info: 'Lorem Ipsum is simply dummy typesetting industry. '
          }
     ]
     return (
          <div className='bg-black/[.90] px-[8%] pt-32 pb-20' >

               <div className='text-center w-full'>
                    <p className='text-2xl font-semibold text-[#00ACEF]'> Kasol Energy </p>
                    <p className='text-4xl font-semibold text-white px-[38%]'> Latest Projects, Solutions and Energy Supplies</p>
               </div>


               {/* grid grid-col-1 md:grid-cols-2 lg:grid-cols-4 mt-10 */}


               <div>
                    <div className='relative'>
                         <Slider {...settings}>
                              {
                                   productrange.map((data) => {
                                        return (
                                             <div className='mt-10 ml-5'>
                                                  <div className='flex h-[30%] overflow-hidden '>
                                                       <img src={data.primg} alt="" className='rounded-t-xl object-cover h-[500px] w-[90%]' />
                                                  </div>
                                                  <div className='bg-white rounded-b-xl px-5 w-[90%]'>
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
                         </Slider>
                    </div>
               </div>
          </div >
     )
}
