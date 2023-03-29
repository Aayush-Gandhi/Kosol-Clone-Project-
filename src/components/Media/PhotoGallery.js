import React from 'react'

export default function PhotoGallery() {
    return (
        <div className='bg-black/[.90] pt-20 px-[8%]'>
            <div className='text-center'>
                <p className='text-lg lg:text-xl font-semibold text-[#00ACEF]'>Sun Energie</p>
                <p className='text-2xl lg:text-4xl font-semibold text-white mt-2'>Photo Gallery</p>
                <p className='text-sm lg:text-lg text-white/[.80] px-2 lg:px-[35%] mt-3 mb-10'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s </p>
            </div>

            <div className="grid h-[150px] md:h-[450px] lg:h-[900px] m-auto grid-rows-2 grid-flow-col gap-5 w-[100%] px-[8%]">

                <div className='row-span-2 relative overflow-hidden'>
                    <img src="/Images/Media/img1.png" className='h-[100%] w-[100%] ' alt="" />
                    
                    <div className="absolute hover:bg-gradient-to-t text-transparent hover:text-white bg-transparent hover:block from-[#088dca] to-[#ffffff38] h-full w-full top-0 overflow-hidden translate-y-96 hover:-translate-y-0 duration-700" >
                        <div className='absolute bottom-5 left-1 lg:left-10'>
                            <h1 className='text-2xl font-semibold'>A</h1>
                        </div>
                    </div>

                    {/* <div className="absolute hover:bg-gradient-to-t from-[#088dca] to-[#ffffff38] h-[100%] w-[100%] top-0" >
                    </div>
                    <div className='absolute hover:opacity-100'>
                    </div> */}
                </div>

                <div className='relative overflow-hidden'>
                    <img src="/Images/Media/img2.png" className='h-[100%] w-[100%] ' alt="" />
                    <div className="absolute hover:bg-gradient-to-t text-transparent hover:text-white bg-transparent hover:block from-[#088dca] to-[#ffffff38] h-full w-full top-0 overflow-hidden translate-y-20 hover:-translate-y-0 duration-700" >
                        <div className='absolute bottom-5 left-1  lg:left-10'>
                            <h1 className='text-sm lg:text-2xl font-semibold'>B</h1>
                        </div>
                    </div>
                </div>


                <div className='relative overflow-hidden'>
                    <img src="/Images/Media/img4.png" className='h-[100%] w-[100%]' alt="" />
                    <div className="absolute hover:bg-gradient-to-t text-transparent hover:text-white bg-transparent hover:block from-[#088dca] to-[#ffffff38] h-full w-full top-0 overflow-hidden translate-y-20 hover:-translate-y-0 duration-700" >
                        <div className='absolute bottom-5 left-1 lg:left-10'>
                            <h1 className='text-sm lg:text-2xl font-semibold'>C</h1>
                        </div>
                    </div>
                </div>


                <div className='relative overflow-hidden'>
                    <img src="/Images/Media/img3.png" className='h-[100%] w-[100%]' alt="" />
                    <div className="absolute hover:bg-gradient-to-t text-transparent hover:text-white bg-transparent hover:block from-[#088dca] to-[#ffffff38] h-full w-full top-0 overflow-hidden translate-y-20 hover:-translate-y-0 duration-700" >
                        <div className='absolute bottom-5 left-1 lg:left-10'>
                            <h1 className='text-sm lg:text-2xl font-semibold'>D</h1>
                        </div>
                    </div>
                </div>


                <div className='col-span-2 relative overflow-hidden'>
                    <img src="/Images/Media/img5.png" className='h-[100%] w-[100%]' alt="" />
                    <div className="absolute hover:bg-gradient-to-t text-transparent hover:text-white bg-transparent hover:block from-[#088dca] to-[#ffffff38] h-full w-full top-0 overflow-hidden translate-y-20 hover:-translate-y-0 duration-700" >
                        <div className='absolute bottom-5 left-1 lg:left-10'>
                            <h1 className='text-sm lg:text-2xl font-semibold'>E</h1>
                        </div>
                    </div>
                </div>


                <div className='relative overflow-hidden'>
                    <img src="/Images/Media/img6.png" className='h-[100%] w-[100%]' alt="" />
                    <div className="absolute hover:bg-gradient-to-t text-transparent hover:text-white bg-transparent hover:block from-[#088dca] to-[#ffffff38] h-full w-full top-0 overflow-hidden translate-y-20 hover:-translate-y-0 duration-700" >
                        <div className='absolute bottom-5 left-1 lg:left-10'>
                            <h1 className='text-sm lg:text-2xl font-semibold'>F</h1>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}
