import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import { AiFillProfile, AiFillProject } from 'react-icons/ai'
import { HiOutlineUser } from 'react-icons/hi'
import { ImLocation2 } from 'react-icons/im'
import { useParams } from 'react-router-dom';
import { csi } from './CaseStudydata';

export default function CaseInnerContent() {

  let { id } = useParams();
  const [user, setUser] = useState(null);
  const data = csi;
  useEffect(() => {
    const newUser = data.filter((user) => user.id == id)

    setUser(newUser[0])
  }, [])
  return (
    <div className='bg-black/[.90]'>
      <div className=' px-[8%]'>
        <div className='flex text-white pt-20'>
          <div className='w-1/2 my-5'>
            <p className='text-[#00ACEF] text-2xl'>Sun Energie</p>
            <p className='text-2xl'>Lorem Ipsum is simply the</p>
          </div>
          <div className='w-1/2 text-lg py-5'>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, </p>
          </div>
        </div>
        <div className='max-w-[100%] max-h-[600px] m  y-10'>
          <img src={user?.img} alt="" className='h-[600px] w-full bg-cover' />
        </div>
        <div className='flex text-[#00ACEF] justify-around py-10'>

          <div className='flex items-center gap-5'>
            <div className='border rounded-full p-2 border-[#00ACEF]'>
              <HiOutlineUser />
            </div>
            <div className='text-white/[.90] '>
              <p>{user?.owner}</p>
              <p>Lorem Ipsum is simply</p>
            </div>
          </div>

          <div className='flex items-center gap-5'>
            <div className='border rounded-full p-2 border-[#00ACEF]'>
              <ImLocation2 />
            </div>
            <div className='text-white/[.90]'>
              <p>{user?.location}</p>
              <p>Lorem Ipsum is simply dummy</p>
            </div>
          </div>

          <div className='flex items-center gap-5'>
            <div className='border rounded-full p-2 border-[#00ACEF]'>
              <AiFillProfile />
            </div>
            <div className='text-white/[.90]'>
              <p>{user?.project}</p>
              <p>Lorem Ipsum is simply</p>
            </div>
          </div>

          <div className='flex items-center gap-5'>

            <div className='border rounded-full p-2 border-[#00ACEF]'>
              <AiFillProject />
            </div>
            <div className='text-white/[.90]'>
              <p>{user?.moduletype}</p>
              <p>Lorem Ipsum is simply dummy</p>
            </div>
          </div>

        </div>

        <div className='text-white space-y-5 py-10'>
          <p className='text-2xl'>{user?.title}</p>
          <p className='text-lg'>{user?.info1}</p>
          <p className='text-lg'>{user?.info2}</p>
          <p className='text-lg'>{user?.info2}</p>
        </div>
      </div>
      <div className='py-10 px-[8%] bg-gray-800'>

        <div className='text-white'>
          <p className='text-2xl text-[#00ACEF] font-semibold'> Categories</p>
        </div>
        <div className='text-white py-5'>
          <ul className='grid grid-cols-2 list-disc gap-y-2 text-lg'>
            <li>{user?.p1}</li>
            <li>{user?.p2}</li>
            <li>{user?.p3}</li>
            <li>{user?.p4}</li>
          </ul>
        </div>

      </div>
    </div>
  )
}
