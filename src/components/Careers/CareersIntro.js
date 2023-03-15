import React from 'react'
import SystemDate from '../SysDate'

export default function CareersIntro() {
    return (
        <div>
            <div className="careers_intro px-[8%] py-[8%]">
                <p className="text-white text-4xl font-semibold">Careers </p>
            </div>
            <div className="bg-[#252525] flex justify-center gap-10 text-white">
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's.</p>
                <SystemDate />
            </div>
        </div>
    )
}
