import React from 'react'

export default function Form({ data, selectedIndex }) {

    return (
        selectedIndex === data.id && <div className='absolute mt-10 flex w-[100%]'>
            <div className='w-[50%]'>
                <form action="">
                    <p className='text-white font-semibold text-2xl'>{data.tname}</p>
                    <p className='text-white text-lg font-medium'>Trust of our customersis our first priority.</p>

                    <div className="grid grid-cols-2 ">
                       
                            <input type="text" placeholder='Your Name' className='bg-transparent  underline' />
                            <input type="email" placeholder='Your Email Address'  className='bg-transparent' />
                        
                            <input type="text" placeholder='Your Phone Number'  className='bg-transparent' />
                            <input type="text" placeholder='Company'  className='bg-transparent' />
                       
                            <input type="text" placeholder='Comment'  className='bg-transparent' />
                       
                            <input type="button" value="Submit"  className='bg-transparent' />
                       
                    </div>
                </form>
            </div>
            <div>
                <div className='bg-[#272727] text-white'>
                    <p>Survey No 415, Opp. Super Gas, Village: Bhayla. Tal: Bavla Gujarat, INDIA.</p>
                    <p>Plot No. 127, Jamwadi, G.I.D.C-II,NH 8-B, Gondal,Dist: Rajkot Gujarat INDIA.</p>
                    <p>+91 79268 61339</p>
                    <p>info@sunray.co.in</p>
                    <p>info@kosol.solar</p>
                </div>
            </div>
        </div>
    )
}



