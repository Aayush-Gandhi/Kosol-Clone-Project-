import React from 'react'
import Marquee from '../Marquee'

export default function MediaIntro() {
  return (
    <div className='media_intro'>
      <div className='px-[8%]'>
        <p className='py-24 text-white text-4xl font-semibold'>Media</p>
      </div>
      <Marquee /> 
    </div>
  )
}
