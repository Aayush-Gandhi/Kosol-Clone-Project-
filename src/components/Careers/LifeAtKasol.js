import React from 'react'

export default function LifeAtKasol() {

    return (
        <div className='bg-black/[.90] px-[8%]'>
            <div className='flex justify-between pt-20'>
                <div>
                    <p className='text-xl font-semibold text-[#00ACEF]'>Sun Energie</p>
                    <p className='text-4xl font-semibold text-white mt-2'>Photo Gallery</p>
                </div>
                <div>
                    <p className='text-lg text-white/[.80] pl-[35%] mt-3 mb-10'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s </p>
                </div>
            </div>

            <div className="grid  grid-rows-2 grid-flow-col h-[700px] w-[100%] gap-5">

                <div className='row-span-2 overflow-hidden'>
                    <img src="/Images/Careers/1.png" className='h-[100%] w-[100%] transition duration-700 ease-in-out hover:scale-110' alt="" />
                </div>
                <div className='overflow-hidden'>
                    <img src="/Images/Careers/2.png" className='h-[100%] w-[100%] transition duration-700 ease-in-out hover:scale-110' alt="" />
                </div>
                <div className='overflow-hidden'>
                    <img src="/Images/Careers/3.png" className='h-[100%] w-[100%] transition duration-700 ease-in-out hover:scale-110' alt="" />
                </div>
                <div className='row-span-2 overflow-hidden'>
                    <img src="/Images/Careers/1.png" className='h-[100%] w-[100%] transition duration-700 ease-in-out hover:scale-110' alt="" />
                </div>
                <div className='overflow-hidden'>
                    <img src="/Images/Careers/5.png" className='h-[100%] w-[100%] transition duration-700 ease-in-out hover:scale-110' alt="" />
                </div>
                <div className='overflow-hidden'>
                    <img src="/Images/Careers/6.png" className='h-[100%] w-[100%] transition duration-700 ease-in-out hover:scale-110' alt="" />
                </div>
            </div>
            <div className='text-white'>
                <p className='text-2xl font-semibold mt-3'> Working With Sun Energie</p>
                <p className='text-lg w-[70%] mt-3 pb-10'> Sun Energie motivates its employees to think like they own the organization. This ownership mindset supports the company’s corporate vision and mission statements by encouraging employees to take responsibility and accountability in their jobs and in the overall performance, and helps grow and strengthen the integrity. </p>
            </div>
        </div>
    )
}
