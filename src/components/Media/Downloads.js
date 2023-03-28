import React from 'react'
import { saveAs } from 'file-saver';


function handleDownload() 
{
    const fileUrl = './kasol.pdf';
    const fileName = 'kasol';
    saveAs(fileUrl, fileName);
}

export default function Downloads() 
{

    const downloads = [
        {
            img: "/Images/Media/Download1.png",
            info: "Company Catalogs"
        },
        {
            img: "/Images/Media/Download2.png",
            info: "Solar Product Catalogs"
        }
    ]

    const openPdf = () => {
        window.open("./kasol.pdf", "_blank");
    };

    return (
        <div className='bg-black/[.90] px-[8%] py-20'>
            <div className='text-center'>
                <p className='text-xl font-semibold text-[#00ACEF]'>Sun Energie</p>
                <p className='text-4xl font-semibold text-white mt-2'>Videos</p>
                <p className='text-lg text-white/[.80] px-[35%] mt-3'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s </p>
            </div>
            <div className='mt-10'>
                {
                    downloads.map((data) => {
                        return (
                            <div className='flex justify-between border-t border-b border-gray-500'>
                                <div className='flex'>
                                    <img src={data.img} className='w-[20%] p-5' alt="" />
                                    <p className='flex items-center text-white'>{data.info}</p>
                                </div>

                                <div className="flex gap-5 items-center">
                                    <button className='border-2 rounded-md h-10 px-8 border-[#00ACEF] text-[#00ACEF] hover:bg-[#00ACEF] hover:text-white duration-500' onClick={openPdf}> View  </button>
                                    <button className='border-2 rounded-md h-10 px-8 border-[#00ACEF] text-white bg-[#00ACEF] hover:bg-transparent hover:text-[#00ACEF] duration-500' onClick={handleDownload}> Download  </button>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}
