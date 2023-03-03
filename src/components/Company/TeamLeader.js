import React from 'react'
import Slider from "react-slick";
import { useState } from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Scale from '../Scale';

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
               primg: '/Images/Aboutus/TM1.png'
          },
          {
               primg: '/Images/Aboutus/TM2.png'
          },
          {
               primg: '/Images/Aboutus/TM3.png'
          },
          {
               primg: '/Images/Aboutus/TM4.png'
          },
          {
               primg: '/Images/Aboutus/TM5.png'
          }
     ]

     const yearbtn = [
          {
               year: '1960',
               title: 'Market Hit',
               info: 'Solar Water Heater (SWH) under the brand name SunRay, our first product, hit the market with support of CREDA and later with MNRE in 80s and 90s.'
          },
          {
               year: '1970',
               title: 'Market Hit',
               info: 'Solar Water Heater (SWH) under the brand name SunRay, our first product, hit the market with support of CREDA and later with MNRE in 80s and 90s.'
          },
          {
               year: '1980',
               title: 'Market Hit',
               info: 'Solar Water Heater (SWH) under the brand name SunRay, our first product, hit the market with support of CREDA and later with MNRE in 80s and 90s.'
          },
          {
               year: '1990',
               title: 'Market Hit',
               info: 'Solar Water Heater (SWH) under the brand name SunRay, our first product, hit the market with support of CREDA and later with MNRE in 80s and 90s.'
          },
          {
               year: '2000',
               title: 'Market Hit',
               info: 'Solar Water Heater (SWH) under the brand name SunRay, our first product, hit the market with support of CREDA and later with MNRE in 80s and 90s.'
          },
          {
               year: '2010',
               title: 'Market Hit',
               info: 'Solar Water Heater (SWH) under the brand name SunRay, our first product, hit the market with support of CREDA and later with MNRE in 80s and 90s.'
          },
          {
               year: '2020',
               title: 'Market Hit',
               info: 'Solar Water Heater (SWH) under the brand name SunRay, our first product, hit the market with support of CREDA and later with MNRE in 80s and 90s.'
          },
          {
               year: '2021',
               title: 'Market Hit',
               info: 'Solar Water Heater (SWH) under the brand name SunRay, our first product, hit the market with support of CREDA and later with MNRE in 80s and 90s.'
          }

     ]



     return (
          <div className='bg-black/[.89] pb-48'>
               <div className="flex pt-20 mb-10 px-[8%]">
                    <div className='w-1/2'>
                         <p className='text-[#00ACEF] text-2xl font-semibold'>Kasol Energie</p>
                         <p className='text-white text-4xl font-semibold'>Kasol Energie Technology</p>
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

                                                       <a href="">

                                                            <img src={data.primg} alt="" className=' object-cover w-[100%] ' />
                                                            <div className="absolute hover:bg-gradient-to-t from-[#088dca] to-[#ffffff38] h-full w-full top-0" >

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

               <div className='py-20 relative'>
                    <div className='border absolute w-full z-1 border-slate-200 top-[43%]'>
                    </div>
                    <div className='flex text-white justify-evenly z-10 relative text-2xl '>
                         {
                              yearbtn.map((data, idx) => {
                                   return (

                                       <Scale data={data} idx={idx} lastIdx={yearbtn.length-1}/>

                                   )
                              })
                         }
                    </div>
               </div>

          </div>
     )
}
