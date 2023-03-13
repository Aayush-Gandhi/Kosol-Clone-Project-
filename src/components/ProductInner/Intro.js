import React from 'react'
import { SysDate } from '..'

export default function ProductIntro() {
    return (
        <div className='Intro'>
            <div>
                <p className=' px-[8%] py-32 text-white text-4xl font-semibold'>Contact us</p>
            </div>
            <div className="bg-[#252525] flex justify-center gap-10 text-white">
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's.</p>
                <SysDate />
            </div>
        </div>
    )
}
