import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function OpenPosition() {

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
            },
            {
                breakpoint: 1280,
                settings: {
                    slidesToShow: 3,
                    arrows: true,
                }
            }]
    };

    const position = [
        {
            title: "Lorem Ipsum is simply dummy.",
            info: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
        },
        {
            title: "Lorem Ipsum is simply dummy.",
            info: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
        },
        {
            title: "Lorem Ipsum is simply dummy.",
            info: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
        },
        {
            title: "Lorem Ipsum is simply dummy.",
            info: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
        },
        {
            title: "Lorem Ipsum is simply dummy.",
            info: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
        }
    ]
    return (
        <div className='bg-black/[.90] px-[8%] pb-20'>
            <div className='md:flex justify-between pt-20'>
                <div>
                    <p className='text-lg lg:text-2xl font-semibold text-[#00ACEF]'>Sun Energie</p>
                    <p className='text-2xl lg:text-4xl font-semibold text-white mt-2'>Open Position</p>
                </div>
                <div>
                    <p className='text-lg text-white/[.80] md:pl-[35%] mt-3 mb-10'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s </p>
                </div>
            </div>
            <div className='relative'>
                <Slider {...settings}>
                    {
                        position.map((data) => {
                            return (
                                <div className='mt-10 lg:mx-5'>
                                    <div className=' bg-[#292929] mx-5 p-5 overflow-hidden '>
                                        <p alt="" className=' text-[#00ACEF] text-md md:text-2xl'> {data.title}   </p>
                                        <p className='text-white/[.80] text-sm md:text-xl pt-5 pb-10'>{data.info}</p>
                                        <a href='' className='text-[#00ACEF] font-semibold'> Apply Now  </a>
                                    </div>
                                    <div className='bg-white rounded-b-xl px-5 w-[90%]'>
                                    </div>
                                </div>
                            )
                        })
                    }
                </Slider>
            </div>

        </div>
    )
}
