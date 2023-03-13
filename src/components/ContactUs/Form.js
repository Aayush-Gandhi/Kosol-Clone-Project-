import React from 'react'
import { IoCall, IoLocationSharp, IoMailSharp } from 'react-icons/io5'

export default function Form({ data, selectedIndex }) {

    return (
        selectedIndex === data.id &&
        <div className='absolute mt-20 flex w-[100%]'>
            <div className='w-[50%]'>
                <form action="">
                    <p className='text-white font-semibold text-2xl'>{data.tname}</p>
                    <p className='text-white text-lg font-medium'>Trust of our customersis our first priority.</p>

                    <div className="grid grid-cols-2 w-[95%] gap-5 mt-5">
                        <div>
                            <input type="text" placeholder='Your Name' className='border-b-2 bg-transparent px-1 w-full lg:px-3 py-2 font-medium' />
                        </div>
                        <div>
                            <input type="text" placeholder='Your Email Address' className='border-b-2 bg-transparent px-1 w-full lg:px-3 py-2 font-medium' />
                        </div>
                        <div>
                            <input type="text" placeholder='Your Phone Number' className='border-b-2 bg-transparent px-1 w-full lg:px-3 py-2 font-medium' />
                        </div>
                        <div>
                            <input type="text" placeholder='Company' className='border-b-2 bg-transparent px-1 lg:px-3 py-2 w-full font-medium' />
                        </div>
                        <div className='col-span-2'>
                            <input type="text" placeholder='Comments' className='border-b-2 bg-transparent px-1 w-full lg:px-3 py-2 font-medium' />
                        </div>
                        <div>
                            <input type="button" value="Submit" className='bg-[#00ACEF] rounded text-white px-5 py-1' />
                        </div>
                    </div>
                </form>
            </div>
            <div>
                <div className='bg-[#272727] text-white p-5 h-72'>
                    <div>
                        <div className='flex items-center text-[#00ACEF] gap-5'>
                            <IoLocationSharp /> <p className='text-white w-[60%]'>  Survey No 415, Opp. Super Gas, Village: Bhayla. Tal: Bavla Gujarat, INDIA.</p>
                        </div>
                        <p className='w-[60%] pl-9 mt-3'>Plot No. 127, Jamwadi, G.I.D.C-II,NH 8-B, Gondal,Dist: Rajkot Gujarat INDIA.</p>
                    </div>
                    <div className='flex items-center text-[#00ACEF]'>
                        <IoCall className='mt-10'/><p className='text-white mt-10 pl-5'> +91 79268 61339</p>
                    </div>
                    <div>
                        <div className="flex items-center text-[#00ACEF]">
                            <IoMailSharp className='mt-10'/>  <p className='text-white mt-10 pl-5'>info@sunray.co.in</p>
                        </div>
                        <p className='pl-9'>info@kosol.solar</p>
                    </div>
                </div>
            </div>
        </div>
    )
}



