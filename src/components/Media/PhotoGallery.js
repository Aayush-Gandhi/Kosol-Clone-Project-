import React from 'react'

export default function PhotoGallery() {
    return (
        <div className='bg-black/[.90] pt-20'>
            <div className='text-center'>
                <p className='text-xl font-semibold text-[#00ACEF]'>Kasol Energie</p>
                <p className='text-4xl font-semibold text-white mt-2'>Photo Gallery</p>
                <p className='text-lg text-white/[.80] px-[35%] mt-3 mb-10'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s </p>
            </div>

            <div className="grid h-[900px] m-auto grid-rows-2 grid-flow-col gap-5 w-[100%] px-[8%]">

                <div className='row-span-2 relative'>
                    <img src="/Images/Media/img1.png" className='h-[100%] w-[100%] ' alt="" />
                    <div className="absolute hover:bg-gradient-to-t from-[#088dca] to-[#ffffff38] h-[100%] w-[100%] top-0" >
                    </div>
                    <div className='absolute hover:opacity-100'>
                        <p className='text-white'> Hello</p>
                    </div>
                </div>
                <div className='relative'>
                    <img src="/Images/Media/img2.png" className='h-[100%] w-[100%] ' alt="" />
                    <div className="absolute hover:bg-gradient-to-t from-[#088dca] to-[#ffffff38] h-[100%] w-[100%] top-0" ></div>
                </div>
                <div className='relative'>
                    <img src="/Images/Media/img4.png" className='h-[100%] w-[100%]' alt="" />
                    <div className="absolute hover:bg-gradient-to-t from-[#088dca] to-[#ffffff38] h-[100%] w-[100%] top-0" ></div>
                </div>
                <div className='relative'>
                    <img src="/Images/Media/img3.png" className='h-[100%] w-[100%]' alt="" />
                    <div className="absolute hover:bg-gradient-to-t from-[#088dca] to-[#ffffff38] h-[100%] w-[100%] top-0" ></div>
                </div>
                <div className='col-span-2 relative'>
                    <img src="/Images/Media/img5.png" className='h-[100%] w-[100%]' alt="" />
                    <div className="absolute hover:bg-gradient-to-t from-[#088dca] to-[#ffffff38] h-[100%] w-[100%] top-0" ></div>
                </div>
                <div className='relative'>
                    <img src="/Images/Media/img6.png" className='h-[100%] w-[100%]' alt="" />
                    <div className="absolute hover:bg-gradient-to-t from-[#088dca] to-[#ffffff38] h-[100%] w-[100%] top-0" ></div>
                </div>

            </div>
        </div>
    )
}
