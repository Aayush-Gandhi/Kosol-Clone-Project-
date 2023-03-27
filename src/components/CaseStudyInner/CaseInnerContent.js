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
    <div className='bg-black/[.90] px-[8%]'>
      <div className='flex text-white'>
        <div className='w-1/2'>
          <p className='text-[#00ACEF]'>Kosol Energie</p>
          <p>Lorem Ipsum is simply the</p>
        </div>
        <div className='w-1/2'>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, </p>
        </div>
      </div>
      <div className='max-w-[100%] max-h-[500px]'>
        <img src="/Images/1.png" alt="" className='h-[500px] w-full' />
      </div>
      <div className='flex text-[#00ACEF] justify-around'>

        <div className='flex items-center gap-5'>
          <div className='border rounded-full p-2 border-[#00ACEF]'>
            <HiOutlineUser />
          </div>
          <div className='text-white/[.90] '>
            <p>Owner</p>
            <p>Lorem Ipsum is simply</p>
          </div>
        </div>

        <div className='flex items-center gap-5'>
          <div className='border rounded-full p-2 border-[#00ACEF]'>
            <ImLocation2 />
          </div>
          <div className='text-white/[.90]'>
            <p>Location</p>
            <p>Lorem Ipsum is simply dummy</p>
          </div>
        </div>

        <div className='flex items-center gap-5'>
          <div className='border rounded-full p-2 border-[#00ACEF]'>
            <AiFillProfile />
          </div>
          <div className='text-white/[.90]'>
            <p>Project</p>
            <p>Lorem Ipsum is simply</p>
          </div>
        </div>

        <div className='flex items-center gap-5'>

          <div className='border rounded-full p-2 border-[#00ACEF]'>
            <AiFillProject />
          </div>
          <div className='text-white/[.90]'>
            <p>Module Type</p>
            <p>Lorem Ipsum is simply dummy</p>
          </div>
        </div>

      </div>

      <div className='text-white'>
        <p>{user?.title}</p>
        <p>info 1</p>
        <p>info 1</p>
        <p>info 1</p>
      </div>

      <div>

        <div className='text-white'>
          <p>Lorem Ipsum is simply dummy</p>
        </div>
        <div className='text-white'>
          <ul>
            <li>p1</li>
            <li>p2</li>
            <li>p3</li>
            <li>p4</li>
          </ul>
        </div>

      </div>
    </div>
  )
}
