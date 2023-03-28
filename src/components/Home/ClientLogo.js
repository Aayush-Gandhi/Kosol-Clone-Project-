import React from 'react'


const ClientLogo = ({ img }) => {
    return (
        <div className='overflow-hidden h-28 w-36 relative rounded-md'> 
            <div className='flex flex-col gap-[50px] absolute bottom-0 left-0 hover:-bottom-[146px] duration-1000 bg-white p-2'>
                <img src={img} alt=""  className='h-24 w-36'/>
                <img src={img} alt=""  className='h-24 w-36 grayscale'/>
            </div>
        </div>
    )
}

export default ClientLogo
