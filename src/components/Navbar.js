import React, { useEffect, useState } from 'react'
import { IoCallSharp } from 'react-icons/io5'
import { MdOutlineMail } from 'react-icons/md'
import { ImFacebook, ImLinkedin2, ImTwitter, ImYoutube } from 'react-icons/im'
import { AiFillInstagram } from 'react-icons/ai'
import { FaBars, FaTimes } from 'react-icons/fa'
import { Navigate, useNavigate } from 'react-router-dom'


export default function Navbar(props) {
     const Navigate = useNavigate()

     const [open, setOpen] = useState(true)

     const handleOpen = () => {
          setOpen(!open)
     }
const handleClose = () =>{
     if (window.innerWidth>=1023){
          setOpen(1)
     }
}

    
     window.addEventListener('resize', handleClose);

     return (
          <div>
               <div className='bg-[#181818] border-transparent flex py-1 justify-between items-center'>
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
                         <a href='' className='ml-3 text-xs'>
                              info@kasolray.co.in
                         </a>
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
                    <div className="w-[25%] md:w-[15%] lg:w-[15%] xl:w-[10%]">
                         <img src="/Images/logo.png" alt="" className='' />
                    </div>

                    {
                         open ?
                              <div className='text-white/[.80] xl:flex items-center hidden justify-end lg:block lg:w-[80%]'>
                                   <ul className='flex space-x-10  xl:space-x-14 text-sm xl:text-lg items-center'>
                                        <li><a href="" onClick={() => Navigate('/')}>Home </a></li>
                                        <li><a href="" onClick={() => Navigate('/Aboutus')}> Company </a></li>
                                        <li><a href="" onClick={() => Navigate('/Productinner')}> Solar Solutions </a></li>
                                        <li><a href="" onClick={() => Navigate('/Media')}> Media </a></li>
                                        <li><a href="" onClick={() => Navigate('/Careers')}> Careers </a></li>
                                        <li><a href="" onClick={() => Navigate('/Blog')}> Blog </a></li>
                                        <li><a href="" onClick={() => Navigate('/Casestudy')}> Case Study </a></li>
                                        <button className='border-2 rounded-md px-4 py-2 border-[#00ACEF] text-[#00ACEF] hover:bg-[#00ACEF] hover:text-white'
                                             onClick={() => Navigate('/Contactus')}> Contactus </button>
                                   </ul>
                              </div>
                              : 
                                   // (window.innerWidth <= 768) ?

                                        <div className='bg-black text-[white]/[.80] w-[40%] mt-14 border-white flex flex-col items-center right-20 absolute'>
                                             <ul className=' pb-8 space-y-4 text-xl'>
                                                  <li><a href="" onClick={() => Navigate('/')}> Home </a></li>
                                                  <li><a href="" onClick={() => Navigate('/Aboutus')}> Company </a></li>
                                                  <li><a href="" onClick={() => Navigate('/Productinner')}> Solar Solutions </a></li>
                                                  <li><a href="" onClick={() => Navigate('/Media')}> Media </a></li>
                                                  <li><a href="" onClick={() => Navigate('/Careers')}> Careers </a></li>
                                                  <li><a href="" onClick={() => Navigate('/Blog')}> Blog </a></li>
                                                  <li><a href="" onClick={() => Navigate('/Casestudy')}> Case Study </a></li>
                                                  <button className='border-2 rounded-md px-8 py-2 border-blue-400 text-blue-400'> Contact us </button>
                                             </ul>
                                        </div> }
                                      

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
