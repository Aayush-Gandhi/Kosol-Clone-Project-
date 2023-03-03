import React, { useState } from 'react'
import Form from './Form'


export default function TestFrom({contactbtn }) {

    const [selectedIndex, setSelectedIndex] = useState(contactbtn[0].id);

    const handleClickBtn = (id) => {
        setSelectedIndex(id)
    }

    
    return (
        <div>
            <div className='flex text-white justify-evenly text-xl'>
                {
                    contactbtn.map((data, index) => {
                        return (
                            <div>
                                <button key={index} className='bg-[#2b2b2b] py-3 w-[220PX]' onClick={() => handleClickBtn(data.id)}>{data.btnname}</button>
                            </div>
                        )
                    })
                }
            </div>
            <div>
                {
                    contactbtn.map((data) => {
                        return(
                            <Form key={data.id} data={data} selectedIndex={selectedIndex} />
                        )
                    })
                }
            </div>
        </div>
    )
}
