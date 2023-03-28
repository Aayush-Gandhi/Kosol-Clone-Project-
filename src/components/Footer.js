import React from 'react'
import { ImFacebook, ImLinkedin2, ImTwitter, ImYoutube } from 'react-icons/im'
import { AiFillInstagram } from 'react-icons/ai'
import { useNavigate } from 'react-router-dom'

export default function Footer() {

     const Navigate = useNavigate ()

     return (
          <div>
               <div className="lg:flex text-white bg-[black]/[.89] px-[8%] py-10 lg:py-20">
                    <div className='lg:w-1/4'>
                         <img src="/Images/Footerlogo.png" className='w-[20%]' alt="" />
                         <p className='text-white text-sm lg:text-lg font-normal lg:w-[80%] mt-3 text-white/[.80]'>If you have any questions or need help, feel free to contact with our team.</p>
                         <div className="flex mt-5 gap-5">
                              <img src="/Images/logo.png" className='w-[25%]' alt="" />
                              <img src="/Images/kasolRay.png" className='w-[25%]' alt="" />
                         </div>
                    </div>
                    <div className="flex lg:w-2/4 justify-around sm:mt-10 md:mt-0 lg:mt-0">
                         <div className='mt-10 lg:mt-0 '>
                              <p className='font-semibold text-base  lg:text-2xl'>Company</p>
                              <div className='text-white/[.80] text-sm mt-5  space-y-3 flex flex-col'>
                                   <a href='' onClick={() => Navigate('/')} >About us</a>
                                   <a href='' onClick={() => Navigate('/')}>Leadership Team</a>
                                   <a href='' onClick={() => Navigate('Media')}>News & Media</a>
                                   <a href='' onClick={() => Navigate('/')}>Our Projects</a>
                                   <a href='' onClick={() => Navigate('/Contactus')}>Contacts</a>
                              </div>
                         </div>
                         <div>
                              <p className='font-semibold mt-10 lg:mt-0 text-base lg:text-2xl'>Service</p>
                              <div className='text-white/[.80] mt-5 text-sm space-y-3 flex flex-col'>
                                   <a href=''>Wind Turbines</a>
                                   <a href=''>Solar Panels</a>
                                   <a href=''>Hydropower Plants</a>
                                   <a href=''>Fossil Resources</a>
                                   <a href=''>Battery Materials</a>
                                   <a href=''>Charge Controllers</a>
                              </div>
                         </div>
                    </div>
                    <div className='lg:w-1/4'>
                         <p className='font-semibold text-2xl mt-10 lg:mt-0'>Product Catelogue</p>
                         <div className="flex gap-5 mt-5">
                              <div>
                                   <img src="/Images/Footerimg1.png" className='h-24 lg:h-20 w-24 lg:w-20' alt="" />
                                   <p className='mt-3'>Brochure</p>
                              </div>
                              <div>
                                   <img src="/Images/Footerimg2.png" className='h-24 lg:h-20 w-24 lg:w-20' alt="" />
                                   <p className='mt-3'>Catalogue</p>
                              </div>
                         </div>
                         <p className='font-semibold text-2xl mt-5'>Follow</p>
                         <div className="flex gap-x-5 mt-2">
                              <a href=""> <ImFacebook /> </a>
                              <a href=""> <ImYoutube /> </a>
                              <a href=""> <AiFillInstagram /> </a>
                              <a href=""> <ImTwitter /> </a>
                              <a href=""> <ImLinkedin2 /> </a>
                         </div>
                    </div>
               </div>
               <div className='bg-black/[.80] items-center px-[8%] lg:flex gap-[20%]'>
                    <p className='text-white/[.80] text-xs'>©2021 Sun Energie PVT LTD. All Rights Reserved.</p>
                    <img src="/Images/footerimg.png" className='h-4 w-36 items-center' alt="" />
               </div>
          </div>
     )
}
