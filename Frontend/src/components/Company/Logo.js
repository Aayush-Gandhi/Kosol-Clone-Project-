import React from 'react'
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Logo() {

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
                    slidesToShow: 2,
                    arrows: true,
                }
            }
        ]
    };

    const logos = [
        {
            img: '/Images/Aboutus/IEC.png'
        },
        {
            img: '/Images/Aboutus/CE.png'
        },
        {
            img: '/Images/Aboutus/UL.png'
        },
        {
            img: '/Images/Aboutus/MNRE.png'
        },
        {
            img: '/Images/Aboutus/CE.png'
        },
    ]
    return (
        <div className='bg-black/[0.90] py-20 px-[8%]'>
            <div>
            {/* className="grid grid-cols-2 lg:grid-cols-5 mt-5 gap-[50px] pb-20"  */}

                {
                    <div className='relative h-40 m-auto'>
                        <Slider {...settings}>
                            {
                                logos.map((data, index) => {
                                    return (
                                        <div className='relative box-border h-max' key={index}>
                                            <button className='bg-white  p-2 grayscale hover:grayscale-0 hover:scale-90 hover:border-4 border-[#00ACEF] px-10 rounded-md '>
                                                <img src={data.img} className='h-24 w-20 lg:h-32' alt="" />
                                            </button>
                                        </div>
                                    )
                                })
                            }
                        </Slider>
                    </div>




                    // logos.map((data,index) => {
                    //     return (
                    //         <div className='relative' key={index}>
                    //             <button className='bg-white p-2 lg:absolute grayscale hover:grayscale-0 hover:scale-75 hover:border-4 border-[#00ACEF] px-10 rounded-md'>
                    //                 <img src={data.img} className='h-24 w-36' alt="" />
                    //             </button>
                    //         </div>
                    //     )
                    // }
                    // )
                }
            </div>
        </div>
    )
}
