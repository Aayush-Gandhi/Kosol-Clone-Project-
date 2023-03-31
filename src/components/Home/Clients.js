import React from 'react'
import ClientLogo from './ClientLogo'
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Clients() {


     const settings = {
          infinite: true,
          speed: 500,
          slidesToShow: 4,
          slidesToScroll: 1,
          arrows: false,
          autoplay: true,
          autoplaySpeed: 2000,
          responsive: [
               {
                    breakpoint: 767,
                    settings: {
                         slidesToShow: 2,
                         arrows: true,
                    }
               },
               {
                    breakpoint: 1024,
                    settings: {
                         slidesToShow: 3,
                         arrows: true,
                    }
               },
               {
                    breakpoint: 1280,
                    settings: {
                         slidesToShow: 4,
                         arrows: true,
                    }
               }]
     };
     const settings2 = {
          infinite: true,
          speed: 500,
          slidesToShow: 4,
          slidesToScroll: 1,
          arrows: false,
          autoplay: true,
          autoplaySpeed: 2000,
          rtl: true,
          responsive: [
               {
                    breakpoint: 767,
                    settings: {
                         slidesToShow: 2,
                         arrows: true,
                    }
               },
               {
                    breakpoint: 1024,
                    settings: {
                         slidesToShow: 3,
                         arrows: true,
                    }
               },
               {
                    breakpoint: 1280,
                    settings: {
                         slidesToShow: 4,
                         arrows: true,
                    }
               }]
     };



     const client1 = [
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
          }
     ]

     const client2 = [
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
                         <p className='text-lg lg:text-2xl text-[#00ACEF]'>Solar Customers</p>
                         <p className='text-2xl lg:text-4xl'>Meet Our Clients</p>
                    </div>
                    <div>
                         <button className='border-2 rounded-md lg:px-8 lg:py-2 text-sm p-2 border-[#00ACEF] text-[#00ACEF] hover:bg-[#00ACEF] hover:text-white'> View all Clients </button>
                    </div>
               </div>

               {/* <div className="grid grid-cols-2 md:grid-cols-4 xl:grid-cols-5 gap-[50px] mt-5 pb-20"> */}


               <div className="space-y-10 py-10 ">
{/* */}

                    {
                         <div className='relative'>
                              <Slider {...settings}>
                                   {
                                        client1.map(({ img }, idx) => <ClientLogo key={idx} img={img} />
                                        )
                                   }

                              </Slider>
                         </div>
                    }



                    {
                         <div className='relative '>
                              <Slider {...settings2}>
                                   {
                                        client2.map(({ img }, idx) => <ClientLogo key={idx} img={img} />
                                        )
                                   }

                              </Slider>
                         </div>
                    }
                    {/* client.map(({img}, idx) =><ClientLogo key={idx} img={img} /> ) */}

               </div>
          </div>

     )
}
