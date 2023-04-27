import React, { useState } from 'react'
import { IoCall, IoLocationSharp, IoMailSharp } from 'react-icons/io5'
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Form({ data, selectedIndex }) {

    const cType = data.tname;
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [company, setCompany] = useState("");
    const [comment, setComment] = useState("");
  
    const handleSubmit = async (e) => {
        e.preventDefault()
   
        try {
            console.log("before res")
            const res = await axios.post(`${process.env.REACT_APP_API}/api/v1/auth/contactus`, {cType, name, email, phone, company, comment })
            setName("")
            setEmail("")
            setPhone("")
            setCompany("")
            setComment("")
            console.log("Success")
            console.log(res.data.success)
            console.log(res.data.message)
            
        } catch (error) {
            console.log("Try again")

        }
    }

    return (
        selectedIndex === data.id &&
        <div className=' mt-20 w-[100%] lg:flex justify-between  space-y-5 lg:space-y-0'>
            <div className='lg:w-[50%]'>
                <form action="" onSubmit={handleSubmit}>
                    <p className='contactType text-white font-semibold text-2xl'>{data.tname}</p>
                    <p className='text-white text-lg font-medium  pr-[8%] lg:pr-0'>Trust of our customers is our first priority.</p>

                    <div className="grid grid-cols-2 w-[100%] gap-5 mt-5 text-white">
                        <div>
                            <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder='Your Name' className='border-b-2 bg-transparent px-1 w-full lg:px-3 py-2 font-medium' />
                        </div>
                        <div>
                            <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} placeholder='Your Email Address' className='border-b-2 bg-transparent px-1 w-full lg:px-3 py-2 font-medium' />
                        </div>
                        <div>
                            <input type="text" value={phone} onChange={(e) => setPhone(e.target.value)} placeholder='Your Phone Number' className='border-b-2 bg-transparent px-1 w-full lg:px-3 py-2 font-medium' />
                        </div>
                        <div>
                            <input type="text" value={company} onChange={(e) => setCompany(e.target.value)} placeholder='Company' className='border-b-2 bg-transparent px-1 lg:px-3 py-2 w-full font-medium' />
                        </div>
                        <div className='col-span-2'>
                            <input type="text" value={comment} onChange={(e) => setComment(e.target.value)} placeholder='Comments' className='border-b-2 bg-transparent px-1 w-full lg:px-3 py-2 font-medium' />
                        </div>
                        <div>
                            <input type="Submit" className='bg-[#00ACEF] rounded text-white px-5 py-2' />
                        </div>
                    </div>
                </form>
            </div>
            <div className='m-auto'>
                <div className='bg-[#272727] text-white  p-5 h-auto '>
                    <div>
                        <div className='flex items-center text-[#00ACEF] gap-5'>
                            <IoLocationSharp /> <p className='text-white'>  Survey No 415, Opp. Super Gas, Village: Bhayla. Tal: Bavla Gujarat, INDIA.</p>
                        </div>    
                        <p className=' lg:pl-9 mt-3'>Plot No. 127, Jamwadi, G.I.D.C-II,NH 8-B, Gondal, Dist: Rajkot Gujarat INDIA.</p>
                    </div>
                    <div className='flex items-center text-[#00ACEF]'>
                        <IoCall className='mt-10' /><p className='text-white mt-10 pl-5'> +91 79268 61339</p>
                    </div>
                    <div>
                        <div className="flex items-center text-[#00ACEF]">
                            <IoMailSharp className='mt-10' />  <p className='text-white mt-10 pl-5'>info@sunenergie.co.in</p>
                        </div>
                        <p className='pl-9'>info@kosol.solar</p>
                    </div>
                </div>
            </div>
        </div>
    )
}



