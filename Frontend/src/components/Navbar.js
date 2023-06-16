import React, { useEffect, useState } from 'react'
import { IoCallSharp } from 'react-icons/io5'
import { MdOutlineMail } from 'react-icons/md'
import { ImFacebook, ImLinkedin2, ImTwitter, ImYoutube } from 'react-icons/im'
import { AiFillInstagram } from 'react-icons/ai'
import { FaBars, FaTimes } from 'react-icons/fa'
import { Navigate, useNavigate } from 'react-router-dom'
import { useRef } from 'react'


export default function Navbar(props) {
     const Navigate = useNavigate()

     const [open, setOpen] = useState(true)

     const handleOpen = () => {
          setOpen(!open)
     }
     const handleClose = () => {
          if (window.innerWidth >= 1023) {
               setOpen(1)
          }
     }

     window.addEventListener('resize', handleClose);

     const ref = useRef();

     useEffect(() => {
          const handleClickOutside = (event) => {
               if (!ref?.current?.contains(event.target)) {
                    setOpen(true);
               }
          };
          document.addEventListener("mousedown", handleClickOutside);
     }, [ref]);

     return (
          <div>
               <div className='bg-[#181818] border-transparent flex py-1 justify-between items-center'>
                    <div className="flex text-white ml-[8%]">
                         <p className=''>
                              <IoCallSharp />
                         </p>
                         <p className='ml-3 text-xs'>
                              Call us: 99887 76655
                         </p>
                         <p className='ml-5 pt-1'>
                              <MdOutlineMail />
                         </p>
                         <a href='' className='ml-3 text-xs'>
                              info@sunenergie.co.in
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
                         <img src="/Images/Sun.png" alt="" className='' />
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
                                        {/* <button className='border-2 rounded-md px-4 py-2 border-[#00ACEF] text-[#00ACEF] hover:bg-[#00ACEF] hover:text-white' */}
                                             {/* onClick={() => Navigate('/Contactus')}> Admin </button> */}
                                   </ul>
                              </div>
                              :
                              // (window.innerWidth <= 768) ?

                              <div className='bg-black text-[white]/[.80] w-[200px] mt-14 border-white flex flex-col items-center right-[50px] top-[35px] absolute z-[100]' ref={ref}>
                                   <ul className='divide-y w-full pb-8  lg:px-20  text-sm lg:text-xl'>
                                        <li className='menu_items ' onClick={() => Navigate('/')}><a href="" > Home </a></li>
                                        <li className='menu_items' onClick={() => Navigate('/Aboutus')}><a href="" > Company </a></li>
                                        <li className='menu_items' onClick={() => Navigate('/Productinner')}><a href="" > Solar Solutions </a></li>
                                        <li className='menu_items' onClick={() => Navigate('/Media')}><a href="" > Media </a></li>
                                        <li className='menu_items' onClick={() => Navigate('/Careers')}><a href="" > Careers </a></li>
                                        <li className='menu_items' onClick={() => Navigate('/Blog')}><a href="" > Blog </a></li>
                                        <li className='menu_items' onClick={() => Navigate('/Casestudy')}><a href="" > Case Study </a></li>
                                        <button className='border-2 rounded-md ml-3 px-3 lg:px-8 py-2 border-blue-400 text-blue-400 text-sm' onClick={() => Navigate('/Contactus')} > Contact us </button>
                                        {/* <button className='border-2 rounded-md ml-3 px-3 lg:px-8 py-2 border-blue-400 text-blue-400 text-sm' onClick={() => Navigate('/Contactus')} > Admin </button> */}
                                   </ul>
                                   
                              </div>}
                    {
                         open ?
                              <div className="btn block lg:hidden text-[red]">
                                   <button onClick={handleOpen} className='py-3 px-3 bg'><FaBars /></button>
                              </div> : <div className="btn block lg:hidden text-[green]">
                                   <button onClick={handleOpen} className='py-3 px-3 '><FaTimes /></button>
                              </div>
                    }
               </div>
          </div>
     )
}
