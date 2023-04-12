import React, { useState, useEffect } from 'react'
import { contentData } from './ContentData';
import { BiSearch } from 'react-icons/bi';
import { useNavigate, useParams } from 'react-router-dom';
import Content from './Content';
import Data1 from '../Blogs/Data1';

export default function InnerPost() {


    // const [dbdata, setdbdata] = useState(0)

    const data = contentData;
    const [user, setUser] = useState();
    let { id } = useParams()
    useEffect(() => {
        const newUser = data.filter((user) => user.id == id)

        setUser(newUser[0])

    }, [])


    const [searchValue, setsearchValue] = useState("")
    const navigate = useNavigate()


    const handleOnchange = (e) => {
        const val = e.target.value
        setsearchValue(val)

    }

    const handleSearch = () => {
        const val = (searchValue.charAt(0).toUpperCase()) + (searchValue.slice(1).replace(" ", "").toLowerCase()) //Solar Pannel => Solarpanel
        // if (val == data.product)
        for (let i = 0; i < data.length; i++) {
            const products = (data[i].product.charAt(0).toUpperCase()) + (data[i].product.slice(1).replace(" ", "").toLowerCase())
            console.log("products",products ,"value",val)
            if (products == val)
            {
                console.log(products)
                break;
            }
            else
            {
                console.log("data not found")
            }
            
        }
        const nu = data.filter(d => (d.product.charAt(0).toUpperCase()) + (d.product.slice(1).replace(" ", "").toLowerCase()) == val)
        setUser(nu[0])
    }









    const categories = [
        {
            product: "A"
        },
        {
            product: "B"
        },
        {
            product: "C"
        },
        {
            product: "D"
        },
    ]


    return (
        <div className='bg-black/[.90] px-[8%]'>
            <div className="lg:flex">
                <div className='lg:w-2/3'>
                    <Content data={user} />

                </div>
                <div className='border h-fit p-5 m-5 my-24 lg:w-1/3'>
                    <div className='relative'>
                        <div className='flex items-center'>
                            <input type="text" onChange={(e) => handleOnchange(e)} onKeyDown={(e) => { if (e.key == 'Enter') { handleSearch() }  }} placeholder='Search' className='text-white w-full bg-[#252525] p-2' /><BiSearch onClick={() => {handleSearch();window.scrollTo(0,0)}} className='cursor-pointer absolute right-1  text-white' />
                        </div>
                    </div>
                    <p className='text-white text-lg lg:text-2xl mt-5'>Categories</p>
                    <div >
                        {
                            categories.map((data, index) => {
                                return (
                                    <div className='bg-[#252525] text-white' key={index}>
                                        <p className='text-sm lg:text-lg m-2'>{data.product}</p>
                                    </div>
                                )
                            })
                        }
                    </div>

                    <div className='text-white mt-5'>
                        <div className='my-2'>
                            <p>Latest Post</p>
                        </div>
                        <div className='text-sm lg:text-lg'>

                            <p className='border-t pt-4 font-semibold'>{data[contentData.length - 1].date}</p>
                            <p className='border-b pb-4'>{data[contentData.length - 1].title}</p>

                            <p className='border-t pt-4 font-semibold'>{data[contentData.length - 2].date}</p>
                            <p className='border-b pb-4'>{data[contentData.length - 2].title}</p>

                            <p className='border-t pt-4 font-semibold'>{data[2].date}</p>
                            <p className='border-b pb-4'>{data[2].title}</p>

                            <p className='border-t pt-4 font-semibold'>{data[3].date}</p>
                            <p className='border-b pb-4'>{data[3].title}</p>
                        </div>
                        <div>
                            <p className='font-semibold text-lg lg:text-2xl mt-10 lg:mt-5'>Download</p>
                            <div className="flex gap-5 mt-5 m-auto">
                                <div className='lg:w-1/2'>
                                    <img src="/Images/Footerimg1.png" className='w-full' alt="" />
                                    <p className='mt-3 lg:ml-12'>Brochure</p>
                                </div>
                                <div className='lg:w-1/2'>
                                    {/* h-24 lg:h-20 w-24 lg:w-20 */}
                                    <img src="/Images/Footerimg2.png" className=' w-full' alt="" />
                                    <p className='mt-3 lg:ml-12'>Catalogue</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='grid grid-cols-1 lg:grid-cols-2'>
                <Data1 date={data[0]?.date} author={data[0]?.author} product={data[0]?.product} info={data[0]?.title} img={data[0]?.img} idpage={1} />
                <Data1 date={data[1]?.date} author={data[1]?.author} product={data[1]?.product} info={data[1]?.title} img={data[1]?.img} idpage={2} />
            </div>
        </div>
    )
}
