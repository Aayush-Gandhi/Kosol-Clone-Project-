import React from "react";

export default function ManufacturingUnit() {
    return (
        <div className="bg-black/[0.89] px-[8%] py-20">
                <div className="flex">
                    <div className="">
                        <img src="/Images/Aboutus/Unit.png" className="w-[80%]" alt="" />
                    </div>
                    <div className="text-white">
                        <ul className="list-disc w-[90%]">
                            <li className="text-2xl font-semibold mt-16">Manufacturing Unit</li>
                            <p className="text-lg font-normal mt-5">Because of this commitment to excellence, our solar panelsand
                                our operations--consistently meet or exceed the most stringent
                                performance, environmental and employment standards.
                            </p>

                            <li className="text-2xl font-semibold mt-10">Quality & Assurance</li>
                            <p className="text-lg font-normal mt-5">We don't trust any part of the solar manufacturing process to anyone else. We strictly control the creation of every SunRay product from beginning to end. We manufacture and produce every cell and assemble every panel in our state-of-the-art facility.
                            </p>
                        </ul>
                    </div>
                </div>
        </div>
    );
}
