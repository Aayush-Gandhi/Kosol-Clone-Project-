import React from 'react'

export default function EnergizeSociety() {
    return (
        <div className='bg-black/[.90]'>
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
        </div>
    )
}
