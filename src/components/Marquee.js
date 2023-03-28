import React from 'react'
import SystemDate from './SysDate'

export default function Marquee() {
    return (
        <div>
            <div className='bg-[#252525] px-[10%]'>
                <div className="bg-[#252525] flex justify-center gap-10 text-white scrolling-text-container">
                    <div className='scrolling-text inline '>
                        <p className='flex gap-5'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's. <SystemDate /> </p>
                    </div>
                </div>
            </div>
        </div>
    )
}
