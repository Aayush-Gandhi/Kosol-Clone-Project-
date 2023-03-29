import React from "react";

export default function SolarDryer() {
  return (
    <div className="bg-black/[.90] px-[8%]">
      <div>
        <p className="text-[#00ACEF] text-2xl font-semibold pt-20">Sun Energie</p>
        <p className="text-white font-semibold text-4xl">Solar Dryer</p>
        <p className="text-white text-sm md:text-lg mt-5"> Sun Energie is one of the leading designers, manufacturers,
          suppliers, and exporters of Solar Air Heating systems in INDIA. Our
          organization also concerns with designing, manufacturing and supplying
          all types of Solar Dryers like Tunnel, Portable, and Cabinet Dryer.
        </p>
        <p className="text-white text-sm md:text-lg mt-5"> Solar Dryer removes unnecessary moisture from the product with
          retention of original color and taste as well as keeps the product
          free from any environmental factor, dust, dirt, animal or bird
          droppings.
        </p>
        <div className="lg:flex gap-10 mt-10">
          <div className="lg:w-1/3 p-10 h-[300px] w-full ">
            <img src="/Images/ProductInner/SolarDryer.png" className="h-full m-auto w-[300px] " alt="" />
          </div>
          <div className="h-[320px] lg:w-2/3">
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/"
              frameborder="0"
              allow="autoplay; encrypted-media"
              allowFullScreen
            />
          </div>
        </div>
        <div className="flex justify-center gap-10 py-10">
        <button className='border-2 rounded-md px-4 lg:px-8 py-2 text-sm lg:text-base border-[#00ACEF] text-white bg-[#00ACEF]'> Data Sheet </button>
        <button className='border-2 rounded-md px-4 lg:px-8 py-2 text-sm lg:text-base border-[#00ACEF] text-blue-400'> Brochure </button>

        </div>
      </div>
    </div>
  );
}
