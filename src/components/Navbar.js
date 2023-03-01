import React, { useEffect, useState } from 'react'
import { IoCallSharp } from 'react-icons/io5'
import { MdOutlineMail } from 'react-icons/md'
import { ImFacebook, ImLinkedin2, ImTwitter, ImYoutube } from 'react-icons/im'
import { AiFillInstagram } from 'react-icons/ai'
import { FaBars, FaTimes } from 'react-icons/fa'
import { Navigate, useNavigate } from 'react-router-dom'


export default function Navbar() {
     const Navigate = useNavigate()

     const [open, setOpen] = useState(true)

     const handleOpen = () => {
          setOpen(!open)
     }

     return (
          <div>
               <div className='bg-[black]/[.89] border-transparent flex py-1 justify-between'>
                    <div className="flex text-white ml-[8%]">
                         <p className=''>
                              <IoCallSharp />
                         </p>
                         <p className='ml-3 text-xs'>
                              Call us: 99252 99250
                         </p>
                         <p className='ml-5 pt-1'>
                              <MdOutlineMail />
                         </p>
                         <p className='ml-3 text-xs'>
                              info@sunray.co.in
                         </p>
                    </div>
                    <div className='hidden md:text-white md:flex md:space-x-8 md:mr-[8%]'>
                         <ImFacebook />
                         <ImYoutube />
                         <AiFillInstagram />
                         <ImTwitter />
                         <ImLinkedin2 />
                    </div>
               </div>
               <div className="bg-black flex justify-between py-3 px-[8%]">
                    <div className="w-[6%] ">
                         <img src="/Images/logo.png" alt="" className='' />
                    </div>

                    {
                         open ?
                              <div className='text-white/[.80]  items-center hidden lg:block'>
                                   <ul className='flex  space-x-14 text-xl items-center'>
                                        <li><a href="" onClick={() => Navigate ('/')}>Home </a></li>
                                        <li><a href="" onClick={() => Navigate ('/Aboutus')}> Company </a></li>
                                        <li><a href="" onClick={() => Navigate ('/Productinner')}> Solar Solutions </a></li>
                                        <li><a href="" onClick={() => Navigate ('/Media')}> Media </a></li>
                                        <li><a href="" onClick={() => Navigate ('/Careers')}> Careers </a></li>
                                        <li><a href="" onClick={() => Navigate ('/Blog')}> Blog </a></li>
                                        <li><a href="" onClick={() => Navigate ('/Casestudy')}> Case Study </a></li>
                                        <button className='border-2 rounded-md px-8 py-2 border-[#00ACEF] text-[#00ACEF] hover:bg-[#00ACEF] hover:text-white' 
                                        onClick={() => Navigate ('/Contactus')}> Contact us </button>
                                   </ul>
                              </div>
                              :
                              <div className='bg-black text-[white]/[.80] w-[80%] mt-10 border-2 border-white flex flex-col items-center absolute'>
                         <ul className=' pb-8 space-y-4 text-xl'>
                              <li><a href=""> Home </a></li>
                              <li><a href=""> Company </a></li>
                              <li><a href=""> Solar Solutions </a></li>
                              <li><a href=""> Media </a></li>
                              <li><a href=""> Careers </a></li>
                              <li><a href=""> Blog </a></li>
                              <li><a href=""> Case Study </a></li>
                              <button className='border-2 rounded-md px-8 py-2 border-blue-400 text-blue-400'> Contact us </button>
                         </ul>
                    </div>
                    }

                    {
                         open ?
                              <div className="btn block lg:hidden text-white">
                                   <button onClick={handleOpen} className='py-3 px-3 bg'><FaBars /></button>
                              </div> : <div className="btn block lg:hidden text-white">
                                   <button onClick={handleOpen} className='py-3 px-3 '><FaTimes /></button>
                              </div>
                    }





               </div>
          </div>
     )
}
