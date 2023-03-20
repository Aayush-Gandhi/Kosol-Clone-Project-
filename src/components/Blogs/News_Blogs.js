import React from 'react'
import Data1 from '../Blogs/Data1'
import a from '../../Assets/Blog/1.png'
import b from '../../Assets/Blog/2.png'
import c from '../../Assets/Blog/3.png'
import d from '../../Assets/Blog/4.png'
import Pagination from '../Pagination'

export default function News_Blogs({ id }) {
 
  return (
    <div className='bg-black/[.90] px-[8%]'>
      <div className='text-white'>
        <p>Kosol Energie</p>
        <p>Our News & Blogs</p>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s </p>
      </div>
      {
        id == 1 ?
          <div className='grid grid-cols-2'>
            <Data1 date={"14 Sep"} author={"Antony"} product={"Solar System"} info={"Lorem Ipsum is simply dummy text of the printing and typesetting industry."} img={a} />
            <Data1 date={"10 Aug"} author={"Antony"} product={"Solar System"} info={"Lorem Ipsum is simply dummy text of the printing and typesetting industry."} img={b} />
            <Data1 date={"12 Jun"} author={"Antony"} product={"Solar System"} info={"Lorem Ipsum is simply dummy text of the printing and typesetting industry."} img={c} />
            <Data1 date={"20 Mar"} author={"Antony"} product={"Solar System"} info={"Lorem Ipsum is simply dummy text of the printing and typesetting industry."} img={d} />
          </div>
          : id == 2 ? <div className='grid grid-cols-2'>
            <Data1 date={"1"} author={"Antony"} product={"Solar System"} info={"Lorem Ipsum is simply dummy text of the printing and typesetting industry."} img={a} />
            <Data1 date={"10 Aug"} author={"Antony"} product={"Solar System"} info={"Lorem Ipsum is simply dummy text of the printing and typesetting industry."} img={b} />
            <Data1 date={"12 Jun"} author={"Antony"} product={"Solar System"} info={"Lorem Ipsum is simply dummy text of the printing and typesetting industry."} img={c} />
            <Data1 date={"20 Mar"} author={"Antony"} product={"Solar System"} info={"Lorem Ipsum is simply dummy text of the printing and typesetting industry."} img={d} />
          </div> :
            id == 3 ? <div className='grid grid-cols-2'>
              <Data1 date={"2"} author={"Antony"} product={"Solar System"} info={"Lorem Ipsum is simply dummy text of the printing and typesetting industry."} img={a} />
              <Data1 date={"10 Aug"} author={"Antony"} product={"Solar System"} info={"Lorem Ipsum is simply dummy text of the printing and typesetting industry."} img={b} />
              <Data1 date={"12 Jun"} author={"Antony"} product={"Solar System"} info={"Lorem Ipsum is simply dummy text of the printing and typesetting industry."} img={c} />
              <Data1 date={"20 Mar"} author={"Antony"} product={"Solar System"} info={"Lorem Ipsum is simply dummy text of the printing and typesetting industry."} img={d} />
            </div> : <h1>No Data</h1>
      }

    </div>
  )
}
