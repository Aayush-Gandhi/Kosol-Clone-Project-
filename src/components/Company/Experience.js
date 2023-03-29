import React from 'react'
import Scale from '../Scale';
import { useState } from 'react';


export default function Experience() {
    const yearbtn = [
        {
            year: '1960',
            title: 'Market Hit',
            info: 'Solar Water Heater (SWH) under the brand name kasolRay, our first product, hit the market with support of CREDA and later with MNRE in 80s and 90s.'
        },
        {
            year: '1970',
            title: 'Market Hit',
            info: 'Solar Water Heater (SWH) under the brand name kasolRay, our first product, hit the market with support of CREDA and later with MNRE in 80s and 90s.'
        },
        {
            year: '1980',
            title: 'Market Hit',
            info: 'Solar Water Heater (SWH) under the brand name kasolRay, our first product, hit the market with support of CREDA and later with MNRE in 80s and 90s.'
        },
        {
            year: '1990',
            title: 'Market Hit',
            info: 'Solar Water Heater (SWH) under the brand name kasolRay, our first product, hit the market with support of CREDA and later with MNRE in 80s and 90s.'
        },
        {
            year: '2000',
            title: 'Market Hit',
            info: 'Solar Water Heater (SWH) under the brand name kasolRay, our first product, hit the market with support of CREDA and later with MNRE in 80s and 90s.'
        },
        {
            year: '2010',
            title: 'Market Hit',
            info: 'Solar Water Heater (SWH) under the brand name kasolRay, our first product, hit the market with support of CREDA and later with MNRE in 80s and 90s.'
        },
        {
            year: '2020',
            title: 'Market Hit',
            info: 'Solar Water Heater (SWH) under the brand name kasolRay, our first product, hit the market with support of CREDA and later with MNRE in 80s and 90s.'
        },
        {
            year: '2021',
            title: 'Market Hit',
            info: 'Solar Water Heater (SWH) under the brand name kasolRay, our first product, hit the market with support of CREDA and later with MNRE in 80s and 90s.'
        }

    ]

    return (
        <div className='bg-black/[.90] pb-48'>
            <div className='py-20 relative'>
                <div className='border absolute w-full z-1 border-slate-200 top-[90px] lg:top-[100px] '>
                </div>
                <div className='flex text-white justify-evenly z-10 relative text-2xl '>
                    {
                        yearbtn.map((data, idx) => {
                            return (

                                <Scale data={data} idx={idx} lastIdx={yearbtn.length - 1} />

                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}
