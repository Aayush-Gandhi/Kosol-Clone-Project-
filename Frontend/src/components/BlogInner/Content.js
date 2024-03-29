import React, { useEffect, useState } from 'react'
import { FiUser } from 'react-icons/fi'
import { SlCalender } from 'react-icons/sl'
import { useParams } from 'react-router-dom';
import {  comment } from './ContentData';
import InnerPost from './InnerPost';
import Data1 from '../Blogs/Data1'

export default function Content({data}) {
    const user = data    
    const cdata = comment;


    return (

        <div>
            <div className='pt-20 py-10'>
                <div className=' lg:flex'>
                    <div className='relative border m-5 lg:w-[100%]'>
                        <div className="absolute flex items-center gap-3 bg-[#00ACEF] -translate-y-8 translate-x-11 p-5">
                            <SlCalender className='text-xl text-white ' />
                            <p className='text-white text-lg lg:text-xl'>{user?.date}</p>
                        </div>
                        <div className='p-10 mt-10'>
                            <img src={user?.img} className=' mb-5' alt="" />
                        </div>
                        <div className='p-5'>
                            <div className='flex gap-5 items-center text-white text-sm lg:text-lg'>
                                <FiUser />
                                <p className='border-r pr-5'>{user?.author}</p>
                                <p className='opacity-60'>{user?.product}</p>
                            </div>
                            <div className=''>
                                <p className='text-lg lg:text-2xl text-white font-semibold pt-4'>{user?.title}</p>
                                <p className='text-sm lg:text-lg text-white/[.70] py-5'>{user?.info}</p>
                                <p className='text-sm lg:text-lg text-white/[.70] pb-5'>{user?.info1}</p>
                            </div>
                            <div className='flex gap-5'>
                                <img src={user?.limg} alt="" className='w-[45%]' />
                                <img src={user?.rimg} alt="" className='w-[45%]' />
                            </div>
                            <div className=' divide-y-2 pl-5 pt-5'>
                                <ul className='list-disc text-sm lg:text-lg text-white/[.70] space-y-5 '>
                                    <li>{user?.p1}</li>
                                    <li>{user?.p2}</li>
                                    <li>{user?.p3}</li>
                                </ul>
                            </div>
                            <div className='flex border-t gap-5 mt-10 text-white pb-10'>
                                <img src={user?.pimg} alt="" className='w-[50px] h-1/4 lg:w-[100px] pt-10' />
                                <div className='pt-10'>
                                    <p className='text-lg lg:text-2xl'> Written by <br /> <span> {user?.person} </span></p>
                                    <p className='text-sm lg:text-lg mt-2'>{user?.cmt}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <div className='lg:w-[35%]'>
                        <InnerPost />
                    </div> */}
                </div>

                <div className='border  m-5 p-5'>
                    <div>
                        <p className='text-white'>Peoples Comment</p>
                    </div>
                    <div className='text-white mt-5 space-y-5'>
                        <div className='flex gap-5'>
                            <img src={cdata[0].cimg} alt="" className='w-[20%] lg:w-[15%]  xl:w-[10%] h-[60px] lg:h-[90px] xl:h-[100px]' />
                            <div>
                                <p className='text-sm lg:text-lg font-semibold'>{cdata[0].name}</p>
                                <p className='text-sm lg:text-lg'>{cdata[0].cinfo}</p>
                            </div>
                        </div>
                        <div className='flex gap-5 divide-y-2'>
                            <img src={cdata[1].cimg} alt="" className='w-[20%] lg:w-[15%]  xl:w-[10%] h-[80px] lg:h-[90px] xl:h-[120px] pt-5' />
                            <div className='pt-5'>
                                <p className='text-sm lg:text-lg font-semibold'>{cdata[1].name}</p>
                                <p className='text-sm lg:text-lg'>{cdata[1].cinfo}</p>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <div className='m-5 space-y-3 mt-20'>
                    <p className='text-white'>Leave A Comment</p>
                    <div className='flex lg:w-[60%] gap-5'>
                        <input type="text" placeholder='Name' className='w-1/2 bg-[#252525] p-2' />
                        <input type="email" placeholder='Email' className='w-1/2 bg-[#252525] p-2' />
                    </div>
                    <div className='lg:w-[60%]'>
                        <input type="text" placeholder='Comment' className='w-full bg-[#252525] pb-20 p-2' />
                    </div>
                </div> */}
                {/* <div className='grid grid-cols-1 lg:grid-cols-2'>
                    <Data1 date={data[0]?.date} author={data[0]?.author} product={data[0]?.product} info={data[0]?.title} img={data[0]?.img} idpage={1} />
                    <Data1 date={data[1]?.date} author={data[1]?.author} product={data[1]?.product} info={data[1]?.title} img={data[1]?.img} idpage={2} />
                </div> */}
            </div>
        </div>
    )
}
