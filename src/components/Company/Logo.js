import React from 'react'

export default function Logo() {
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
            <div className="grid grid-cols-2 lg:grid-cols-5 mt-5 gap-[50px] pb-20">

                {
                    logos.map((data) => {
                        return (
                            <div className='relative'>
                                <button className='bg-white p-2 absolute grayscale hover:grayscale-0 hover:scale-75 hover:border-4 border-[#00ACEF] px-10 rounded-md'>
                                    <img src={data.img} className='h-24 w-36' alt="" />
                                </button>
                            </div>
                        )
                    }
                    )
                }
            </div>
        </div>
    )
}
