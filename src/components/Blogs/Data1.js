import React from 'react'
import { FiUser } from "react-icons/fi"
import { SlCalender } from 'react-icons/sl'
import { Routes, useNavigate } from 'react-router-dom'

const Data1 = ({ date, author, product, info, img, idpage }) => {
    console.log("data1",idpage)
    const navigate = useNavigate()

    return (
        <div className='pt-20'>
            <div className='relative border m-5 '>
                <div className="absolute flex items-center gap-3 bg-[#00ACEF] -translate-y-8 translate-x-11 p-5">
                    <SlCalender className='text-xl text-white ' />
                    <p className='text-white text-xl'>{date}</p>
                </div>
                <div className='p-10 mt-5'>
                    <div className='flex gap-5 items-center text-white text-lg'>
                        <FiUser />
                        <p className='border-r pr-5'>{author}</p>
                        <p className='opacity-60'>{product}</p>
                    </div>
                    <p className='text-2xl text-white'>{info}</p>
                    <img src={img} className='mt-5 mb-5' alt="" />
                        <a href="#" onClick={() => navigate (`/Blog/BlogInner/${idpage}`)} className='text-[#00ACEF] text-2xl font-semibold'> Read More </a>
                </div>
            </div>
        </div>
    )
}

export default Data1