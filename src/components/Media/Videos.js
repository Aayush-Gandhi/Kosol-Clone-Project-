import React from 'react'

export default function Videos() {
    const yt = [
        {
            src: "https://www.youtube.com/embed/",
            info: "Lorem Ipsum is simply dummy text of the industry."
        },
        {
            src: "https://www.youtube.com/embed/",
            info: "Lorem Ipsum is simply dummy text of the industry."
        },
        {
            src: "https://www.youtube.com/embed/",
            info: "Lorem Ipsum is simply dummy text of the industry."
        }
    ]
    return (
        <div className='bg-black/[.90] px-[8%]'>
            <div className='text-center'>
                <p className='text-lg lg:text-xl font-semibold text-[#00ACEF]'>Sun Energie</p>
                <p className='text-2xl lg:text-4xl font-semibold text-white mt-2'>Videos</p>
                <p className='text-lg text-white/[.80] px-2 lg:px-[25%] mt-3'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s </p>
            </div>
            <div className="lg:flex gap-10 justify-center px-[8%] pt-10">
                {
                    yt.map((data) => {
                        return (
                            <div className='bg-[#242424] w-[100%] h-[250px]  rounded-lg p-5 mt-5'>
                                <div>
                                    <iframe
                                        className='rounded-lg'
                                        width="100%"
                                        height="100%"
                                        src={data.src}
                                        frameborder="0"
                                        allow="autoplay; encrypted-media"
                                        allowfullscreen
                                    />
                                </div>
                                <p className='text-white/[.80] pt-5 md:w-[80%]' >{data.info}</p>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}
