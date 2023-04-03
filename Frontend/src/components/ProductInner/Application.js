import { data } from 'autoprefixer'
import React from 'react'

export default function Application() {
    const apparea = [
        {
            items: 'Onion Dryer'
        },
        {
            items: 'Vegetable Dryer'
        },
        {
            items: 'Solid Waste Dryer'
        },
        {
            items: 'Fruit Dryer'
        },
        {
            items: 'Ayurved Dryer'
        },
        {
            items: 'Mushroom Dryer'
        },
        {
            items: 'Fish Dryer'
        }
    ]

    const etc = [
        {
            info: 'Faster & controlled drying with stable air temperature'
        },
        {
            info: 'Saving of fuel / electricity, time & labour'
        },
        {
            info: 'Hygienic product with natural colour, nutrients, aroma & taste'
        },
        {
            info: 'Faster & conProtection from flies, pests, rain, dust & UV rays'
        },
        {
            info: 'Less risk of spoilage in-case of low kasollight & low ambient temperature'
        }
    ]
    return (
        <div className='bg-black/[.90] px-[8%] py-20'>
            <div>
                <p className='text-[#00ACEF] text-2xl lg:text-4xl font-semibold'>Application Area</p>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-y-10 text-white mt-5">
                    {
                        apparea.map((data) => {
                            return (
                                <div className='bg-[#2b2b2b] w-[90%] lg:w-[60%]  py-2 pl-8'>
                                    <ul className='list-disc'>
                                        <li className='text-sm lg:text-base'>{data.items}</li>
                                    </ul>
                                </div>
                            )
                        })
                    }
                </div>
            </div>


            <div className='mt-10'>
                <p className='text-[#00ACEF] font-semibold text-2xl lg:text-4xl'> Advantages of ETC</p>
                <div className="grid md:grid-cols-2 gap-10 text-white mt-5">
                    {
                        etc.map((data) => {
                            return (
                                <div className='bg-[#2b2b2b]  py-2 pl-8'>
                                    <ul className='list-disc'>
                                        <li className='w-[90%] lg:w-[50%] text-sm  font-medium'>{data.info}</li>
                                    </ul>
                                </div>
                            )
                        })
                    }
                </div>
            </div >
        </div>
    )
}
