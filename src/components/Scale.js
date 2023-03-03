import React, { useState } from 'react'


export default function Scale({ data, idx, lastIdx }) {


     const [isHovering, setIsHovering] = useState(false);

     const handleMouseEnter = () => {
          setIsHovering(true);
     };

     const handleMouseLeave = () => {
          setIsHovering(false);
     };



     // const [open, setOpen] = useState(true)

     // const handleOpen = () => {
     //      setOpen(!open)
     // }

     return (
          <div className='relative'>
               <div className='hover:bg-[</div>]'>
                    <button
                         onMouseEnter={handleMouseEnter}
                         onMouseLeave={handleMouseLeave}
                         className=' rounded-full w-10 h-10 bg-[grey] '
                    // onClick={handleOpen}
                    >+</button>
                    <p>{data.year}</p>  
               </div>
               {isHovering &&
                    <div

                         className={`mt-5 absolute bg-[#252525] p-4 w-[300px] rounded ${lastIdx - idx < 1 ? "-left-[200%]" : ""}`} >
                         <p className='font-semibold text-2xl'>{data.title}</p>
                         <p className='text-lg mt-5'>{data.info}</p>
                    </div>
               }


               {/* {!open && (
                    <div className='mt-5 absolute bg-[#252525] p-4 w-[20%] rounded'>
                         <p className='font-semibold text-2xl'>{data.title}</p>
                         <p className='text-lg mt-5'>{data.info}</p>
                    </div>
               )} */}

          </div>
     )
}
