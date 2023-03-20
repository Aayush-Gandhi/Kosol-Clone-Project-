import React from 'react'
import Form from './Form'
import { useState } from 'react'
import TestFrom from './TestFrom'
export default function ContactForm() {

    const contactbtn = [
        {
            id: crypto.randomUUID(),
            btnname: 'Get In Touch',
            tname: 'Get In Touch With Us.'
        },
        {
            id: crypto.randomUUID(),
            btnname: 'Customer Support',
            tname: 'Customer Support.'
        },
        {
            id: crypto.randomUUID(),
            btnname: 'Bussiness Inquiry',
            tname: 'Bussiness Inquiry.'
        },
        {
            id: crypto.randomUUID(),
            btnname: 'Feed Back',
            tname: 'Feed Back.'
        }
    ]


    return (
        <div className='px-[8%] py-20 bg-black/[.90]'>
            <div className='text-center'>
                <p className='text-xl font-semibold text-[#00ACEF]'>kasol Energie</p>
                <p className='text-4xl font-semibold text-white mt-5'>Say Hello!</p>
                <p className='text-lg text-white/[.80] px-[25%] mt-5'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s </p>
            </div>

            {/* <div className='flex text-white justify-evenly text-xl mt-10'>
                {
                    contactbtn.filter(i => i.id === selectedIndex).map((data, index) => {
                        return (
                            <Form data={data} key={index} handleClickBtn={handleClickBtn} />
                        )
                    })
                }
            </div> */}

            <div className=' mt-10 pb-[20%]'>
                <TestFrom contactbtn={contactbtn} />

                {/* {
                    contactbtn.map((data, index) => {
                        return (
                            <div>
                                <button className='bg-[#2b2b2b] py-3 w-[220PX]' key={index} onClick={() => handleClickBtn(index)}>{data.btnname}</button>
                                    <Form data={data} selectedIndex={selectedIndex}/>
                            </div>
                        )
                    })
                } */}

            </div>


            {/* <div className=''>
                <div className=' flex w-[60%]'>

                    {
                        contactbtn.map((data) => {
                            return (


                                <div>
                                    {selectedIndex === 0 && <Form data={data} selectedIndex={selectedIndex} />} 
                                </div>

                                <Form data={data} selectedIndex={selectedIndex}/>
                                {selectedIndex === 0 && <form action="">

                                <div>
                                        <p>{data.tname}</p>
                                        <p className='text-white text-lg font-medium'>Trust of our customersis our first priority.</p>
                                        <table>
                                            <tr>
                                                <td>
                                                    <input type="text" placeholder='Your Name' />
                                                    <input type="email" placeholder='Your Email Address' />
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <input type="text" placeholder='Your Phone Number' />
                                                    <input type="text" placeholder='Company' />
                                                </td>
                                            </tr>
                                            <tr>
                                                <input type="text" placeholder='Comment' />
                                            </tr>
                                            <tr>
                                                <input type="button" value="Submit" />
                                            </tr>
                                        </table>
                                    </form>}
                                </div>

                            )
                        })
                    }

                </div>
                <div className='bg-[#272727] text-white'>
                    <p>Survey No 415, Opp. Super Gas, Village: Bhayla. Tal: Bavla Gujarat, INDIA.</p>
                    <p>Plot No. 127, Jamwadi, G.I.D.C-II,NH 8-B, Gondal,Dist: Rajkot Gujarat INDIA.</p>
                    <p>+91 79268 61339</p>
                    <p>info@kasolray.co.in</p>
                    <p>info@kosol.solar</p>
                </div>

            </div> */}
        </div>
    )
}
