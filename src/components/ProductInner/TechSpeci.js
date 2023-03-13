import React from 'react'

export default function TechSpeci() {
    return (
        <div className='bg-black/[.80] px-[8%]  pb-20'>
            <div>
                <p className='text-white font-semibold  text-4xl pt-20'>Technical Specifications</p>
                <div>

                    <table className='w-full mt-10 text-center'>

                        <tr className='border border-[grey] '>
                            <th className='text-[#00ACEF] py-3' colSpan={2}>Dryer Technical Specifications</th>
                        </tr>
                        <tr className='border border-[grey]'>
                            <td className='text-[#00ACEF] py-3 border border-[grey]  w-1/2'>Type</td>
                            <td className='text-[#00ACEF]  '>KESD-24</td>
                        </tr>
                        <tr className='border border-[grey] '>
                            <td className='text-white font-semibold text-lg py-3 border border-[grey] '>Dimension (mm)</td>
                            <td className='text-white font-semibold text-lg '>2100 X 1020 X 1100</td>
                        </tr>
                        <tr className='border border-[grey] '>
                            <td className='text-white font-semibold text-lg py-3 border border-[grey] '>Glass</td>
                            <td className='text-white font-semibold text-lg '>Tempered Toughened textured Glass</td>
                        </tr>
                        <tr className='border border-[grey] '>
                            <td className='text-white font-semibold text-lg py-3 border border-[grey] '>Food Tray</td>
                            <td className='text-white font-semibold text-lg '>8 Nos.</td>
                        </tr>
                        <tr className='border border-[grey] '>
                            <td className='text-white font-semibold text-lg py-3 border border-[grey] '>8 Nos.</td>
                            <td className='text-white font-semibold text-lg '>4 Meter</td>
                        </tr>
                    </table>
                </div>
            </div>
        </div>
    )
}
