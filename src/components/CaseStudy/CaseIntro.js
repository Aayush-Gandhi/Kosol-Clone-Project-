import React from 'react'
import Marquee from '../Marquee'
import SystemDate from '../SysDate'
import { CaseStudy } from './CaseStudy'

export default function BlogIntro() {
  return (
    <div>
      <div className="case_intro px-[8%] py-[8%] ">
        <p className="text-white text-4xl font-semibold">Case Study </p>
      </div>
      <Marquee />
      <CaseStudy />
    </div>
  )
}
