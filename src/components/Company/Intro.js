import React from "react";
import { SysDate } from "..";

export default function Intro() {
  return (
    <div>
      <div className="contactus_intro px-[8%] py-[8%]">
        <p className="text-white text-4xl font-semibold">About Us</p>
      </div>
      <div className="bg-[#252525] flex justify-center gap-10 text-white">
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's.</p>
        <SysDate/>
      </div>
    </div>
  );
}
