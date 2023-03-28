import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function TeamLeader() {



     const settings = {
          infinite: true,
          speed: 500,
          slidesToShow: 4,
          slidesToScroll: 1,
          arrows: false
     };

     const productrange = [
          {
               primg: '/Images/Aboutus/TM1.png',
               name: "Chad Wilkins",
               post: 'Owner'
          },
          {
               primg: '/Images/Aboutus/TM2.png',
               name: "Alexa Langley",
               post: 'Sales Manager'
          },
          {
               primg: '/Images/Aboutus/TM3.png',
               name: "Danny Kang",
               post: 'Residential Project Manager'
          },
          {
               primg: '/Images/Aboutus/TM4.png',
               name: "Julie Wallace",
               post: 'Inspections Manager'
          },
          {
               primg: '/Images/Aboutus/TM5.png',
               name: "Nolie Diakoulas",
               post: 'Sales Manager'
          }
     ]




     return (
          <div className='bg-black/[.89] pb-20'>
               <div className="flex pt-20 mb-10 px-[8%]">
                    <div className='w-1/2'>
                         <p className='text-[#00ACEF] text-2xl font-semibold'>Sun Energie</p>
                         <p className='text-white text-4xl font-semibold'>Sun Energie Technology</p>
                    </div>
                    <div className='w-1/2'>
                         <p className='text-white/[.80] text-lg font-normal'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</p>
                    </div>
               </div>

               <div>
                    <div className='relative'>
                         <Slider {...settings}>
                              {
                                   productrange.map((data) => {
                                        return (
                                             <div className='teamleadermt-10 '>
                                                  <div className='relative flex h-auto overflow-hidden '>

                                                       <a href="" className='relative'>

                                                            <img src={data.primg} alt="" className=' object-cover w-[100%] ' />
                                                            <div className="absolute hover:bg-gradient-to-t text-transparent hover:text-white bg-transparent hover:block from-[#088dca] to-[#ffffff38] h-full w-full top-0 overflow-hidden translate-y-96 hover:-translate-y-0 duration-700" >
                                                                 <div className='absolute bottom-5 left-10'>
                                                                      <h1 className='text-2xl font-semibold'>{data.name}</h1>
                                                                      <h1 className='text-lg'>{data.post}</h1>
                                                                 </div>
                                                            </div>
                                                       </a>
                                                  </div>

                                             </div>
                                        )
                                   })
                              }
                         </Slider>
                    </div>
               </div>



          </div>
     )
}
