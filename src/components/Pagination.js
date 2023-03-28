import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai'
import { useEffect, useState } from 'react'
import News_Blogs from './Blogs/News_Blogs'



export default function Pagination() {
    const [Id, setId] = useState(1)

    const page = [
        {
            id: 1
        },
        {
            id: 2
        },
        {
            id: 3
        },
    ]

    useEffect(() => { }, [Id])

    return (
        <>
            <News_Blogs id={Id} />
            <div className='bg-black/[.90]'>
                <div className="w-[100%] flex items-center justify-center px-4 py-3 sm:px-6">
                    <div className="flex justify-center sm:justify-between">
                        <div>
                            <nav className=" isolate inline-flex gap-5 -space-x-px rounded-md " aria-label="Pagination">
                                {
                                    Id != 1 &&
                                    <a
                                        href="#"
                                        onClick={() => {setId(Id - 1);window.scrollTo(0,0)}}
                                        className="relative inline-flex items-center rounded-l-md px-4 py-2  text-white  hover:bg-gray-50 hover:text-black"
                                    >
                                        <span className="sr-only">Previous</span>
                                        <AiOutlineLeft className="h-5 w-5" aria-hidden="true" />
                                    </a>
                                }
                                <div className='flex'>
                                    {
                                        page.map((data, index) => {
                                            return (
                                                <div>
                                                    <a
                                                        key={index}
                                                        href="#"
                                                        onClick={(e) => { setId(index + 1);window.scrollTo(0,0); e.preventDefault() }}
                                                        className=" relative inline-flex items-center px-5 py-3 text-xl font-semibold text-white hover:bg-gray-50 hover:text-black"
                                                    >
                                                        {data.id}
                                                    </a>
                                                </div>
                                            )
                                        })
                                    }
                                </div>
                                {
                                    Id != page.length &&
                                    <a
                                        href="#"
                                        onClick={() => {setId(Id + 1);window.scrollTo(0,0)}}
                                        className="relative inline-flex items-center rounded-r-md px-4 py-2 text-white hover:bg-gray-50 hover:text-black"
                                    >
                                        <span className="sr-only">Next</span>
                                        <AiOutlineRight className="h-5 w-5" aria-hidden="true" />
                                    </a>
                                }
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}