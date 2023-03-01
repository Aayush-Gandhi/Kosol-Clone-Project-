import React from 'react'
import { ImFacebook, ImLinkedin2, ImTwitter, ImYoutube } from 'react-icons/im'
import { AiFillInstagram } from 'react-icons/ai'

export default function Footer() {
     return (
          <div>
               <div className="flex text-white bg-[black]/[.89] px-[8%] py-20">
                    <div className='w-1/4'>
                         <img src="/Images/Footerlogo.png" className='w-[20%]' alt="" />
                         <p className='text-white text-lg font-normal w-[80%] mt-3 text-white/[.80]'>If you have any questions or need help, feel free to contact with our team.</p>
                         <div className="flex mt-5 gap-5">
                              <img src="/Images/logo.png" className='w-[25%]' alt="" />
                              <img src="/Images/SunRay.png" className='w-[25%]' alt="" />
                         </div>
                    </div>
                    <div className="flex w-2/4 justify-around">
                         <div className=''>
                              <p className='font-semibold text-2xl'>Company</p>
                              <div className='text-white/[.80] mt-5 space-y-3 flex flex-col'>
                                   <a href=''>About us</a>
                                   <a href=''>Leadership Team</a>
                                   <a href=''>News & Media</a>
                                   <a href=''>Our Projects</a>
                                   <a href=''>Contacts</a>
                              </div>
                         </div>
                         <div>
                              <p className='font-semibold text-2xl'>Service</p>
                              <div className='text-white/[.80] mt-5 space-y-3 flex flex-col'>
                                   <a href=''>Wind Turbines</a>
                                   <a href=''>Solar Panels</a>
                                   <a href=''>Hydropower Plants</a>
                                   <a href=''>Fossil Resources</a>
                                   <a href=''>Battery Materials</a>
                                   <a href=''>Charge Controllers</a>
                              </div>
                         </div>
                    </div>
                    <div className='w-1/4'>
                         <p className='font-semibold text-2xl'>Product Catelogue</p>
                         <div className="flex gap-5 mt-5">
                              <div>
                                   <img src="/Images/Footerimg1.png" className='h-20 w-20' alt="" />
                                   <p className='mt-3'>Brochure</p>
                              </div>
                              <div>
                                   <img src="/Images/Footerimg2.png" className='h-20 w-20' alt="" />
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
               <div className='bg-black/[.80] items-center px-[8%] flex gap-[20%]'>
                    <p className='text-white/[.80]'>©2021 KOSOL ENERGIE PVT LTD. All Rights Reserved.</p>
                    <img src="/Images/footerimg.png" className='h-10 ' alt="" />
               </div>
          </div>
     )
}
