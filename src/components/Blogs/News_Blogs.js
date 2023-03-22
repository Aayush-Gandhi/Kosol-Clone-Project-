import Data1 from '../Blogs/Data1'
import a from '../../Assets/Blog/1.png'
import b from '../../Assets/Blog/2.png'
import c from '../../Assets/Blog/3.png'
import d from '../../Assets/Blog/4.png'
import { contentData } from '../BlogInner/ContentData'

export default function News_Blogs({ id }) {

  const data = contentData;


  return (
    <div className='bg-black/[.90] px-[8%]'>
      <div className='text-center pt-10'>
        <p className='text-xl font-semibold text-[#00ACEF]'>kasol Energie</p>
        <p className='text-4xl font-semibold text-white mt-2'>Photo Gallery</p>
        <p className='text-lg text-white/[.80] px-[10%] mt-3'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s </p>
      </div>

      {
        id ==1  ?
          <div className='grid grid-cols-2'>
            <Data1 date={data[0].date} author={data[0].author} product={data[0].product} info={data[0].title} img={data[0].img} idpage={1} />
            <Data1 date={data[1].date} author={data[1].author} product={data[1].product} info={data[1].title} img={data[1].img} idpage={2} />
            <Data1 date={data[2].date} author={data[2].author} product={data[2].product} info={data[2].title} img={data[2].img} idpage={3} />
            <Data1 date={data[3].date} author={data[3].author} product={data[3].product} info={data[3].title} img={data[3].img} idpage={4} />
          </div>
          : id == 2 ? <div className='grid grid-cols-2'>
            <Data1 date={data[4].date} author={data[4].author} product={data[4].product} info={data[4].title} img={data[4].img} idpage={5} />
            <Data1 date={data[5].date} author={data[5].author} product={data[5].product} info={data[5].title} img={data[5].img} idpage={6} />
            <Data1 date={data[6].date} author={data[6].author} product={data[6].product} info={data[6].title} img={data[6].img} idpage={7} />
            <Data1 date={data[7].date} author={data[7].author} product={data[7].product} info={data[7].title} img={data[7].img} idpage={8} />
          </div> :
            id == 3 ? <div className='grid grid-cols-2'>
              <Data1 date={data[8].date} author={data[8].author} product={data[8].product} info={data[8].title} img={data[8].img} idpage={9} />
              <Data1 date={data[9].date} author={data[9].author} product={data[9].product} info={data[9].title} img={data[9].img} idpage={10} />
              <Data1 date={data[10].date} author={data[10].author} product={data[10].product} info={data[10].title} img={data[10].img} idpage={11} />
              <Data1 date={data[11].date} author={data[11].author} product={data[11].product} info={data[11].title} img={data[11].img} idpage={12} />
            </div> : <h1>No Data</h1>
      }

    </div>
  )
}
