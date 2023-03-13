import React from 'react'
import SystemDate from '../SysDate'

export default function ContactIntro() {
  return (
    <div className='Intro px-[8%]'>
      <div>
        <p className='py-32 text-white text-4xl font-semibold'>Contact us</p>
      </div>
      <div className="bg-[#252525] flex justify-center gap-10 text-white">
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's.</p>
        <SystemDate />
      </div>
    </div>
  )
}
