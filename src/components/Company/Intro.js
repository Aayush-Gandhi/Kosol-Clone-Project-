import React from "react";
import { Marquee, SysDate } from "..";

export default function Intro() {
  return (
    <div>
      <div className="contactus_intro px-[8%] py-[8%]">
        <p className="text-white text-4xl font-semibold">About Us</p>
      </div>
      <Marquee />
    </div>
  );
}
