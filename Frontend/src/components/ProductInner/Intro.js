import React from 'react'
import { Marquee, SysDate } from '..'

export default function ProductIntro() {
    return (
        <div className='Intro'>
            <div>
                <p className=' px-[8%] py-24 text-white text-4xl font-semibold'>Products</p>
            </div>
            <Marquee />
        </div>
    )
}
