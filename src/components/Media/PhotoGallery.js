import React from 'react'

export default function PhotoGallery() {
  return (
    <div>
            <div className="grid m-auto grid-rows-2 grid-flow-col w-[50%]">
                <div className='row-span-2 '>
                    <img src="/Images/Media/img1.png" alt="" />
                </div>
                <div className=''>
                    <img src="/Images/Media/img2.png" alt="" />
                </div>
                <div className=''>
                    <img src="/Images/Media/img4.png" alt="" />
                </div>
                <div className=''>
                    <img src="/Images/Media/img3.png" alt="" />
                </div>
                <div className='col-span-2'>
                    <img src="/Images/Media/img5.png" alt="" />
                </div>
                <div className=''>
                    <img src="/Images/Media/img6.png" alt="" />
                </div>
            </div>
    </div>
  )
}
