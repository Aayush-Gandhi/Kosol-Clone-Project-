import React from 'react'
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


export default function ProductRange() {

     const settings = {
          infinite: true,
          speed: 500,
          slidesToShow: 4,
          slidesToScroll: 1,
          arrows: false,
          responsive: [
               {
                    breakpoint: 767,
                    settings: {
                         slidesToShow: 1,
                         arrows: true,
                    }
               },
               {
                    breakpoint: 1024,
                    settings: {
                         slidesToShow: 2,
                         arrows: true,
                    }
               }
          ]
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
               primg: '/Images/Project4.png',
               title: 'Is Industry.',
               info: 'Lorem Ipsum is simply dummy typesetting industry. '
          },
          {
               primg: '/Images/Project2.png',
               title: 'Solar Water Heater ETC Domestic',
               info: 'Lorem Ipsum is simply dummy typesetting industry. '
          }
     ]
     return (
          <div className='bg-black/[.90] px-[8%] pt-32 pb-20' >
               <div className='flex flex-col lg:flex-row justify-between'>
                    <div className='lg:w-2/3'>
                         <p className='text-sm lg:text-xl xl:text-3xl font-semibold text-[#00ACEF]'> Improving The performance of Solar Energy </p>
                         <p className='text-base lg:text-2xl xl:text-4xl font-semibold text-white'> Latest Projects, Solutions and Energy Supplies</p>
                    </div>
                    <div className=''>
                         <p className='text-sm lg:text-base xl:text-xl font-normal mt-5 lg:mt-0 text-white/[.80]'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever
                         since the 1500s, </p>
                    </div>
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
                                                       <img src={data.primg} alt="" className='rounded-t-xl object-cover h-72 w-[90%]' />
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




               {/* <div className='grid grid-col-1 md:grid-cols-2 lg:grid-cols-4 mt-10'>
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

                                                  <a className='text-[#00ACEF] font-semibold'> Read More  </a>
                                             </div>
                                        </div>
                                   </div>

                              )
                         })
                    }
               </div> */}


               <div className='flex flex-col lg:flex-row mt-[6rem]'>
                    <div className=' lg:w-1/2'>
                         <p className='text-sm lg:text-xl text-[#00ACEF] font-semibold'>Making Tomorrow a different Today</p>
                         <p className='text-base lg:text-3xl  text-white font-semibold lg:w-[75%]'>Energize Society With Sustainable And Reliable Energy Systems!</p>
                         <p className='text-sm lg:text-base text-justify text-white/[.80]  font-normal lg:w-[80%] mt-5'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry's standard dummy text ever
                              since the 1500s, </p>
                         <p className='text-sm lg:text-lg text-justify text-white/[.80] font-normal lg:w-[70%] mt-5'>Lorem Ipsum is simply dummy text of the printing and typesetting industry</p>
                    </div>


                    <div className='lg:flex flex-col space-y-10 mt-10 lg:mt-0 lg:w-2/3'>
                         <div className='lg:flex lg:space-x-16 space-y-10 md:space-y-0'>

                         <div className='bg-[#252525] rounded-lg flex items-center w-[100%] space-x-2 py-5'>
                                   <img src="/Images/Energy3.png" className='w-[20%] ml-4' alt="" />
                                   <p className='text-sm lg:text-xl text-white font-semibold'>5 Star Customer Service</p>
                              </div>
                              <div className='bg-[#252525] rounded-lg flex items-center w-[100%] space-x-2 py-5'>
                                   <img src="/Images/Energy3.png" className='w-[20%] ml-4' alt="" />
                                   <p className='text-sm lg:text-xl text-white font-semibold'>5 Star Customer Service</p>
                              </div>
                         </div>

                         <div className='lg:flex lg:space-x-16 space-y-10 md:space-y-0'>
                              <div className='bg-[#252525] rounded-lg flex items-center w-[100%] space-x-2  py-5'>
                                   <img src="/Images/Energy2.png" className='w-[20%] ml-4' alt="" />
                                   <p className='text-sm lg:text-xl text-white font-semibold'>Your Home is Energy</p>
                              </div>
                              <div className='bg-[#252525] rounded-lg flex items-center w-[100%] space-x-2  py-5'>
                                   <img src="/Images/Energy4.png" className='w-[20%] ml-4' alt="" />
                                   <p className='text-sm lg:text-xl text-white font-semibold'>Consultation & Planning</p>
                              </div>
                         </div>
                         
                    </div>
               </div>
          </div >
     )
}
