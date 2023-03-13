import React from "react";

export default function SolarDryer() {
  return (
    <div className="bg-black/[.90] px-[8%]">
      <div>
        <p className="text-[#00ACEF] text-2xl font-semibold pt-20">Solar Energie</p>
        <p className="text-white font-semibold text-4xl">Solar Dryer</p>
        <p className="text-white text-lg mt-5"> Kosol Energie is one of the leading designers, manufacturers,
          suppliers, and exporters of Solar Air Heating systems in INDIA. Our
          organization also concerns with designing, manufacturing and supplying
          all types of Solar Dryers like Tunnel, Portable, and Cabinet Dryer.
        </p>
        <p className="text-white text-lg mt-5"> Solar Dryer removes unnecessary moisture from the product with
          retention of original color and taste as well as keeps the product
          free from any environmental factor, dust, dirt, animal or bird
          droppings.
        </p>
        <div className="flex gap-10 mt-10">
          <div className="w-1/3">
            <img src="/Images/ProductInner/SolarDryer.png" alt="" />
          </div>
          <div className="w-2/3">
            <iframe
              width="100%"
              height="480"
              src="https://www.youtube.com/embed/"
              frameborder="0"
              allow="autoplay; encrypted-media"
              allowfullscreen
            />
          </div>
        </div>
        <div className="flex justify-center gap-10 py-10">
        <button className='border-2 rounded-md px-8 py-2 border-[#00ACEF] text-white bg-[#00ACEF]'> Data Sheet </button>
        <button className='border-2 rounded-md px-8 py-2 border-[#00ACEF] text-blue-400'> Brochure </button>

        </div>
      </div>
    </div>
  );
}
