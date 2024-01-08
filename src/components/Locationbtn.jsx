import React, { useState } from "react";
import { Location_icon } from "../Commonsvg/icon";
import { Travelicon } from "../Commonsvg/icon";
import { Check_in_icon } from "../Commonsvg/icon";
import { Check_out_icon } from "../Commonsvg/icon";

const Locationbtn = () => {
  const [first, setfirst] = useState("tab1");
  function tabs(tab) {
    setfirst(tab);
  }
  return (
    <div id="location ">
      <div className="max-w-[1200px] px-3 mx-auto ">
        <div className="md:translate-y-[-50%] crd_sh_1">
          <div className="flex items-center">
            <button
              onClick={() => tabs("tab1")}
              className={`${
                first === "tab1" ? "tab" : ""
              } text-base sm:text-lg font-ff-mon font-semibold leading-[28px] w-[173px] max-w-full  text-[#030522] bg-[#fff] py-[16px] px:[14px] sm:px-[20px] hover:bg-[#313EF7] hover:text-[#fff] duration-300 hover:font-bold rounded-tl-[20px] not-italic text-center mx-[-1px] `}
            >
              Economy
            </button>
            {/* <hr className="h-[7px] bg-[#aeb5bf] w-[3px] " /> */}
            <button
              onClick={() => tabs("tab2")}
              className={`${
                first === "tab2" ? "tab" : ""
              } text-base sm:text-lg font-ff-mon font-semibold leading-[28px]  w-[173px] max-w-full text-[#030522] bg-[#fff] py-[16px] px:[14px] sm:px-[20px] hover:bg-[#313EF7] hover:text-[#fff] duration-300 hover:font-bold  not-italic text-center mx-[-1px]  `}
            >
              Busniness
            </button>
            {/* <hr className="h-[7px] bg-[#aeb5bf] w-[3px] " /> */}
            <button
              onClick={() => tabs("tab3")}
              className={`${
                first === "tab3" ? "tab" : ""
              } text-base sm:text-lg font-ff-mon font-semibold leading-[28px]  w-[173px] max-w-full text-[#030522] bg-[#fff] py-[16px] px:[14px] sm:px-[20px] hover:bg-[#313EF7] hover:text-[#fff] duration-300 hover:font-bold rounded-tr-[20px] not-italic text-center mx-[-1px]  `}
            >
              First
            </button>
          </div>
          <div className="bg-[#FFF] shadow-btn_sh_2 rounded-l-none   rounded-r-[0] sm:rounded-r-[20px] rounded-br-[20px] rounded-bl-[20px] p-[40px]">
            {first === "tab1" && (
              <div className=" md:flex justify-between pb-3">
                <div className="flex items-center gap-2">
                  <div className="rounded-full w-[56px] h-[56px] bg-[#f5f5ff] flex items-center justify-center">
                    <Location_icon />
                  </div>
                  <div className="text-[#030522] font-ff-mon not-italic font-semibold leading-[27px] text-lg">
                    <p>Location</p>
                    <p className="fonr-ff-mon font-normal not-italic leading-[28px] text-base text-[#AEB5BF]">
                      Where are you going?
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <div className="rounded-full w-[56px] h-[56px] bg-[#f5f5ff] flex items-center justify-center">
                    <Travelicon />
                  </div>
                  <div className="text-[#030522] font-ff-mon not-italic font-semibold leading-[27px] text-lg">
                    <p>Travelers</p>
                    <p className="fonr-ff-mon font-normal not-italic leading-[28px] text-base text-[#AEB5BF]">
                      Add guest{" "}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-2 pt-3 sm:pt-0">
                  <div className="rounded-full w-[56px] h-[56px] bg-[#f5f5ff] flex items-center justify-center">
                    <Check_in_icon />
                  </div>
                  <div className="text-[#030522] font-ff-mon not-italic font-semibold leading-[27px] text-lg">
                    <p>Check-in</p>
                    <p className="fonr-ff-mon font-normal not-italic leading-[28px] text-base text-[#AEB5BF]">
                      Add date{" "}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-2 pt-3 sm:pt-0">
                  <div className="rounded-full w-[56px] h-[56px] bg-[#f5f5ff] flex items-center justify-center">
                    <Check_out_icon />
                  </div>
                  <div className="text-[#030522] font-ff-mon not-italic font-semibold leading-[27px] text-lg">
                    <p>Check-out</p>
                    <p className="fonr-ff-mon font-normal not-italic leading-[28px] text-base text-[#AEB5BF]">
                      Add date{" "}
                    </p>
                  </div>
                </div>
              </div>
            )}
            {first === "tab2" && (
              <div className=" md:flex justify-between pb-3">
                <div className="flex items-center gap-2 pt-4 sm:pt-0">
                  <div className="rounded-full w-[56px] h-[56px] bg-[#f5f5ff] flex items-center justify-center">
                    <Check_in_icon />
                  </div>
                  <div className="text-[#030522] font-ff-mon not-italic font-semibold leading-[27px] text-lg">
                    <p>Check-in</p>
                    <p className="fonr-ff-mon font-normal not-italic leading-[28px] text-base text-[#AEB5BF]">
                      Add date{" "}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-2 pt-4 sm:pt-0">
                  <div className="rounded-full w-[56px] h-[56px] bg-[#f5f5ff] flex items-center justify-center">
                    <Check_out_icon />
                  </div>
                  <div className="text-[#030522] font-ff-mon not-italic font-semibold leading-[27px] text-lg">
                    <p>Check-out</p>
                    <p className="fonr-ff-mon font-normal not-italic leading-[28px] text-base text-[#AEB5BF]">
                      Add date{" "}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <div className="rounded-full w-[56px] h-[56px] bg-[#f5f5ff] flex items-center justify-center">
                    <Location_icon />
                  </div>
                  <div className="text-[#030522] font-ff-mon not-italic font-semibold leading-[27px] text-lg">
                    <p>Location</p>
                    <p className="fonr-ff-mon font-normal not-italic leading-[28px] text-wrap text-base text-[#AEB5BF]">
                      Where are you going?
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <div className="rounded-full w-[56px] h-[56px] bg-[#f5f5ff] flex items-center justify-center">
                    <Travelicon />
                  </div>
                  <div className="text-[#030522] font-ff-mon not-italic font-semibold leading-[27px] text-lg">
                    <p>Travelers</p>
                    <p className="fonr-ff-mon font-normal not-italic leading-[28px] text-base text-[#AEB5BF]">
                      Add guest{" "}
                    </p>
                  </div>
                </div>
              </div>
            )}
            {first === "tab3" && (
              <div className=" md:flex justify-between pb-3">
                <div className="flex items-center gap-2">
                  <div className="rounded-full w-[56px] h-[56px] bg-[#f5f5ff] flex items-center justify-center">
                    <Travelicon />
                  </div>
                  <div className="text-[#030522] font-ff-mon not-italic font-semibold leading-[27px] text-lg">
                    <p>Travelers</p>
                    <p className="fonr-ff-mon font-normal not-italic leading-[28px] text-base text-[#AEB5BF]">
                      Add guest{" "}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <div className="rounded-full w-[56px] h-[56px] bg-[#f5f5ff] flex items-center justify-center">
                    <Location_icon />
                  </div>
                  <div className="text-[#030522] font-ff-mon not-italic font-semibold leading-[27px] text-lg">
                    <p>Location</p>
                    <p className="fonr-ff-mon font-normal not-italic leading-[28px] text-base text-[#AEB5BF]">
                      Where are you going?
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <div className="rounded-full w-[56px] h-[56px] bg-[#f5f5ff] flex items-center justify-center">
                    <Check_out_icon />
                  </div>
                  <div className="text-[#030522] font-ff-mon not-italic font-semibold leading-[27px] text-lg">
                    <p>Check-out</p>
                    <p className="fonr-ff-mon font-normal not-italic leading-[28px] text-base text-[#AEB5BF]">
                      Add date{" "}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-2 pt-3 sm:pt-0">
                  <div className="rounded-full w-[56px] h-[56px] bg-[#f5f5ff] flex items-center justify-center">
                    <Check_in_icon />
                  </div>
                  <div className="text-[#030522] font-ff-mon not-italic font-semibold leading-[27px] text-lg">
                    <p>Check-in</p>
                    <p className="fonr-ff-mon font-normal not-italic leading-[28px] text-base text-[#AEB5BF]">
                      Add date{" "}
                    </p>
                  </div>
                </div>
              </div>
            )}
            <div className="flex items-center pt-3 justify-center">
              <button className="text-base shadow-btn_sh_1 font-semibold font-ff-mon text-white  not-italic text-center leading-[28px] bg-[#313EF7] py-[14px] px-[45px] duration-300 hover:bg-blue-950 rounded-[56px]">
                Book Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Locationbtn;
