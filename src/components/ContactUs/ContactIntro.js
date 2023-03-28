import React from 'react'
import Marquee from '../Marquee'
import SystemDate from '../SysDate'

export default function ContactIntro() {
  return (
    <div className='Intro '>
      <div className='px-[8%]'>
        <p className='py-32 text-white text-4xl font-semibold'>Contact us</p>
      </div>
      <Marquee />
    </div>
  )
}
