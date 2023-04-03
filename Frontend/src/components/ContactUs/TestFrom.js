import React, { useState } from 'react'
import Form from './Form'


export default function TestFrom({ contactbtn }) {

    const [selectedIndex, setSelectedIndex] = useState(contactbtn[0].id);

    const handleClickBtn = (id) => {
        setSelectedIndex(id)
    }


    return (
        <div>
            <div className='grid grid-cols-2 gap-y-3 lg:space-y-0 md:flex text-white lg:justify-between justify-items-center text-sm lg:text-xl'>
                {
                    contactbtn.map((data, index) => {
                        return (
                            <div key={index}>
                                <button key={index} className='bg-[#2b2b2b] py-3 w-[150px] lg:w-[220PX]' onClick={() => handleClickBtn(data.id)}>{data.btnname}</button>
                            </div>
                        )
                    })
                }
            </div>
            <div className=''>
                {
                    contactbtn.map((data) => {
                        return (
                            <Form key={data.id} data={data} selectedIndex={selectedIndex} />
                        )
                    })
                }
            </div>
        </div>
    )
}
