import React, { useState } from "react";
import { Check_in_icon, Location_icon, Travelicon } from "../Commonsvg/icon";
const Locationsbutn = () => {
  const [modl, setmodl] = useState(false);
  const open = () => {
    setmodl(true);
  };
  const close = () => {
    setmodl(false);
  };
  const [first, setFirst] = useState("tab1");
  function tabs(tab) {
    setFirst(tab);
  }
  return (
    <div id="location" className="bg-[#FEFEFE] relative z-0 ">
      <div className="max-w-[1200px] px-3 max-h-full h-[500px] md:h-[200px] mx-auto ">
        <div className="flex flex-col items-center sm:items-start pt-4 900:pt-0 md:translate-y-[-54%]">
          <div className="">
            <button
              onClick={() => tabs("tab1")}
              className={`${
                first === "tab1" ? "tab" : ""
              } font-ff-mont text-[16px] xs:text-[18px] font-semibold leading-[28px] text-[#030522] py-[16px] px-[15px] sm:px-[42px] rounded-tl-[20px] border-b-[1px] border-b-[#F3F4F6] bg-[#FFF]`}
            >
              Economy
            </button>
            <button
              onClick={() => tabs("tab2")}
              className={`${
                first === "tab2" ? "tab" : ""
              } font-ff-mont text-[16px] xs:text-[18px] font-semibold leading-[28px] text-[#030522] py-[16px] px-[15px] sm:px-[39px] border-b-[1px] border-b-[#F3F4F6] bg-[#FFF]`}
            >
              Busniness{" "}
            </button>
            <button
              onClick={() => tabs("tab3")}
              className={`${
                first === "tab3" ? "tab" : ""
              } font-ff-mont text-[16px] xs:text-[18px] font-semibold leading-[28px] text-[#030522] py-[16px] px-[15px] sm:px-[66px] rounded-tr-[20px] border-b-[1px] border-b-[#F3F4F6] bg-[#FFF]`}
            >
              First
            </button>
          </div>
          <div className="flex-inline flex-col items-center justify-between w-full  sm:items-start  p-[15px] xs:p-[25px] lg:p-[40px] bg-[#FFFFFF] xs:rounded-tr-[20px] rounded-br-[20px] rounded-bl-[20px] crd_sh_1 ">
            {first === "tab1" && (
              <div>
                <div className="hidden 900:block">
                  <div className=" flex flex-wrap justify-between max-w-[1060px]">
                    <div className=" flex items-center gap-2">
                      <div className="w-[56px] h-[56px] bg-[#F5F5FF] flex justify-center items-center rounded-full">
                        <Check_in_icon />
                      </div>
                      <div className="pt-4 ">
                        <p className="font-ff-mont text-[18px] font-semibold text-[#030522] leading-[150%]">
                          Check-out
                        </p>
                        <p className=" font-ff-mont text-[16px] font-normal text-[#AEB5BF] leading-[28px]">
                          Add guest
                        </p>
                      </div>
                    </div>
                    <div className=" flex items-center gap-2 ">
                      <div className="w-[56px] h-[56px] bg-[#F5F5FF] flex justify-center items-center rounded-full">
                        <Location_icon />
                      </div>
                      <div className=" ">
                        <p className="font-ff-mont text-[18px] font-semibold text-[#030522] leading-[150%]">
                          Location
                        </p>
                        <p className=" font-ff-mont text-[16px] font-normal text-[#AEB5BF] leading-[28px] text-nowrap">
                          Where are you going?
                        </p>
                      </div>
                    </div>
                    <div className=" flex items-center gap-2">
                      <div className="w-[56px] h-[56px] bg-[#F5F5FF] flex justify-center items-center rounded-full">
                        <Check_in_icon />
                      </div>
                      <div className=" ">
                        <p className="font-ff-mont text-[18px] font-semibold text-[#030522] leading-[150%]">
                          Check-in
                        </p>
                        <p className=" font-ff-mont text-[16px] font-normal text-[#AEB5BF] leading-[28px]">
                          Add date
                        </p>
                      </div>
                    </div>
                    <div className=" flex items-center gap-2">
                      <div className="w-[56px] h-[56px] bg-[#F5F5FF] flex justify-center items-center rounded-full">
                        <Travelicon />
                      </div>
                      <div className=" ">
                        <p className="font-ff-mont text-[18px] font-semibold text-[#030522] leading-[150%]">
                          Travelers
                        </p>
                        <p className=" font-ff-mont text-[16px] font-normal text-[#AEB5BF] leading-[28px]">
                          Add guest
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className=" block 900:hidden w-full">
                  <div className=" flex flex-wrap flex-row -mx-3 justify-center">
                    <div className=" w-full xxs:w-1/2 md:w-1/3 px-3">
                      <div className=" flex items-center gap-2">
                        <div className="w-[56px] h-[56px] bg-[#F5F5FF] flex justify-center items-center rounded-full">
                          <Check_in_icon />
                        </div>
                        <div className=" ">
                          <p className="font-ff-mont text-[18px] font-semibold text-[#030522] leading-[150%]">
                            Check-in
                          </p>
                          <p className=" font-ff-mont text-[16px] font-normal text-[#AEB5BF] leading-[28px]">
                            Add date
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className=" xxs:w-1/2 w-full md:w-1/3 px-3  pt-4 md:pt-0">
                      <div className=" flex items-center gap-2">
                        <div className="w-[56px] h-[56px] bg-[#F5F5FF] flex justify-center items-center rounded-full">
                          <Check_in_icon />
                        </div>
                        <div className=" ">
                          <p className="font-ff-mont text-[18px] font-semibold text-[#030522] leading-[150%]">
                            Check-out
                          </p>
                          <p className=" font-ff-mont text-[16px] font-normal text-[#AEB5BF] leading-[28px]">
                            Add guest
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className=" xxs:w-1/2 w-full md:w-1/3 px-3 pt-4 md:pt-0">
                      <div className=" flex items-center gap-2">
                        <div className="w-[56px] h-[56px] bg-[#F5F5FF] flex justify-center items-center rounded-full">
                          <Location_icon />
                        </div>
                        <div className=" ">
                          <p className="font-ff-mont text-[18px] font-semibold text-[#030522] leading-[150%]">
                            Location
                          </p>
                          <p className=" font-ff-mont text-[16px] font-normal text-[#AEB5BF] leading-[28px] text-nowrap">
                            Where are you going?
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="xxs:w-1/2 w-full md:w-1/3 px-3 pt-4">
                      <div className=" flex items-center gap-2 ">
                        <div className="w-[56px] h-[56px] bg-[#F5F5FF] flex justify-center items-center rounded-full">
                          <Travelicon />
                        </div>
                        <div className=" ">
                          <p className="font-ff-mont text-[18px] font-semibold text-[#030522] leading-[150%]">
                            Travelers
                          </p>
                          <p className=" font-ff-mont text-[16px] font-normal text-[#AEB5BF] leading-[28px]">
                            Add guest
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
            {first === "tab2" && (
              <div>
                <div className="hidden 900:block">
                  <div className=" flex flex-wrap justify-between max-w-[1060px]">
                    <div className=" flex items-center gap-2">
                      <div className="w-[56px] h-[56px] bg-[#F5F5FF] flex justify-center items-center rounded-full">
                        <Check_in_icon />
                      </div>
                      <div className=" ">
                        <p className="font-ff-mont text-[18px] font-semibold text-[#030522] leading-[150%]">
                          Check-in
                        </p>
                        <p className=" font-ff-mont text-[16px] font-normal text-[#AEB5BF] leading-[28px]">
                          Add date
                        </p>
                      </div>
                    </div>
                    <div className=" flex items-center gap-2">
                      <div className="w-[56px] h-[56px] bg-[#F5F5FF] flex justify-center items-center rounded-full">
                        <Check_in_icon />
                      </div>
                      <div className=" ">
                        <p className="font-ff-mont text-[18px] font-semibold text-[#030522] leading-[150%]">
                          Check-out
                        </p>
                        <p className=" font-ff-mont text-[16px] font-normal text-[#AEB5BF] leading-[28px]">
                          Add guest
                        </p>
                      </div>
                    </div>
                    <div className=" flex items-center gap-2">
                      <div className="w-[56px] h-[56px] bg-[#F5F5FF] flex justify-center items-center rounded-full">
                        <Location_icon />
                      </div>
                      <div className=" ">
                        <p className="font-ff-mont text-[18px] font-semibold text-[#030522] leading-[150%]">
                          Location
                        </p>
                        <p className=" font-ff-mont text-[16px] font-normal text-[#AEB5BF] leading-[28px] text-nowrap">
                          Where are you going?
                        </p>
                      </div>
                    </div>
                    <div className=" flex items-center gap-2">
                      <div className="w-[56px] h-[56px] bg-[#F5F5FF] flex justify-center items-center rounded-full">
                        <Travelicon />
                      </div>
                      <div className=" ">
                        <p className="font-ff-mont text-[18px] font-semibold text-[#030522] leading-[150%]">
                          Travelers
                        </p>
                        <p className=" font-ff-mont text-[16px] font-normal text-[#AEB5BF] leading-[28px]">
                          Add guest
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className=" block 900:hidden w-full">
                  <div className=" flex flex-wrap flex-row -mx-3 justify-center">
                    <div className=" w-full xxs:w-1/2 md:w-1/3 px-3">
                      <div className=" flex items-center gap-2">
                        <div className="w-[56px] h-[56px] bg-[#F5F5FF] flex justify-center items-center rounded-full">
                          <Check_in_icon />
                        </div>
                        <div className=" ">
                          <p className="font-ff-mont text-[18px] font-semibold text-[#030522] leading-[150%]">
                            Check-in
                          </p>
                          <p className=" font-ff-mont text-[16px] font-normal text-[#AEB5BF] leading-[28px]">
                            Add date
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className=" xxs:w-1/2 w-full md:w-1/3 px-3 pt-4 xxs:pt-0">
                      <div className=" flex items-center gap-2">
                        <div className="w-[56px] h-[56px] bg-[#F5F5FF] flex justify-center items-center rounded-full">
                          <Check_in_icon />
                        </div>
                        <div className=" ">
                          <p className="font-ff-mont text-[18px] font-semibold text-[#030522] leading-[150%]">
                            Check-out
                          </p>
                          <p className=" font-ff-mont text-[16px] font-normal text-[#AEB5BF] leading-[28px]">
                            Add guest
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className=" xxs:w-1/2 w-full md:w-1/3 px-3 pt-4 md:pt-0">
                      <div className=" flex items-center gap-2">
                        <div className="w-[56px] h-[56px] bg-[#F5F5FF] flex justify-center items-center rounded-full">
                          <Location_icon />
                        </div>
                        <div className=" ">
                          <p className="font-ff-mont text-[18px] font-semibold text-[#030522] leading-[150%]">
                            Location
                          </p>
                          <p className=" font-ff-mont text-[16px] font-normal text-[#AEB5BF] leading-[28px] text-nowrap">
                            Where are you going?
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="xxs:w-1/2 w-full md:w-1/3 px-3">
                      <div className=" flex items-center gap-2 pt-4">
                        <div className="w-[56px] h-[56px] bg-[#F5F5FF] flex justify-center items-center rounded-full">
                          <Travelicon />
                        </div>
                        <div className=" ">
                          <p className="font-ff-mont text-[18px] font-semibold text-[#030522] leading-[150%]">
                            Travelers
                          </p>
                          <p className=" font-ff-mont text-[16px] font-normal text-[#AEB5BF] leading-[28px]">
                            Add guest
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
            {first === "tab3" && (
              <div>
                <div className="hidden 900:block">
                  <div className=" flex flex-wrap justify-between max-w-[1060px]">
                    <div className=" flex items-center gap-2">
                      <div className="w-[56px] h-[56px] bg-[#F5F5FF] flex justify-center items-center rounded-full">
                        <Check_in_icon />
                      </div>
                      <div className="pt-4 ">
                        <p className="font-ff-mont text-[18px] font-semibold text-[#030522] leading-[150%]">
                          Check-out
                        </p>
                        <p className=" font-ff-mont text-[16px] font-normal text-[#AEB5BF] leading-[28px]">
                          Add guest
                        </p>
                      </div>
                    </div>
                    <div className=" flex items-center gap-2 ">
                      <div className="w-[56px] h-[56px] bg-[#F5F5FF] flex justify-center items-center rounded-full">
                        <Location_icon />
                      </div>
                      <div className=" ">
                        <p className="font-ff-mont text-[18px] font-semibold text-[#030522] leading-[150%]">
                          Location
                        </p>
                        <p className=" font-ff-mont text-[16px] font-normal text-[#AEB5BF] leading-[28px]">
                          Where are you going?
                        </p>
                      </div>
                    </div>
                    <div className=" flex items-center gap-2">
                      <div className="w-[56px] h-[56px] bg-[#F5F5FF] flex justify-center items-center rounded-full">
                        <Check_in_icon />
                      </div>
                      <div className=" ">
                        <p className="font-ff-mont text-[18px] font-semibold text-[#030522] leading-[150%]">
                          Check-in
                        </p>
                        <p className=" font-ff-mont text-[16px] font-normal text-[#AEB5BF] leading-[28px]">
                          Add date
                        </p>
                      </div>
                    </div>
                    <div className=" flex items-center gap-2">
                      <div className="w-[56px] h-[56px] bg-[#F5F5FF] flex justify-center items-center rounded-full">
                        <Travelicon />
                      </div>
                      <div className=" ">
                        <p className="font-ff-mont text-[18px] font-semibold text-[#030522] leading-[150%]">
                          Travelers
                        </p>
                        <p className=" font-ff-mont text-[16px] font-normal text-[#AEB5BF] leading-[28px]">
                          Add guest
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className=" block 900:hidden w-full">
                  <div className=" flex flex-wrap flex-row -mx-3 justify-center">
                    <div className=" w-full xxs:w-1/2 md:w-1/3 px-3">
                      <div className=" flex items-center gap-2">
                        <div className="w-[56px] h-[56px] bg-[#F5F5FF] flex justify-center items-center rounded-full">
                          <Check_in_icon />
                        </div>
                        <div className=" ">
                          <p className="font-ff-mont text-[18px] font-semibold text-[#030522] leading-[150%]">
                            Check-in
                          </p>
                          <p className=" font-ff-mont text-[16px] font-normal text-[#AEB5BF] leading-[28px]">
                            Add date
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className=" xxs:w-1/2 w-full md:w-1/3 px-3 pt-4 md:pt-0 ">
                      <div className=" flex items-center gap-2">
                        <div className="w-[56px] h-[56px] bg-[#F5F5FF] flex justify-center items-center rounded-full">
                          <Check_in_icon />
                        </div>
                        <div className=" ">
                          <p className="font-ff-mont text-[18px] font-semibold text-[#030522] leading-[150%]">
                            Check-out
                          </p>
                          <p className=" font-ff-mont text-[16px] font-normal text-[#AEB5BF] leading-[28px]">
                            Add guest
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className=" xxs:w-1/2 w-full md:w-1/3 px-3 pt-4 md:pt-0">
                      <div className=" flex items-center gap-2">
                        <div className="w-[56px] h-[56px] bg-[#F5F5FF] flex justify-center items-center rounded-full">
                          <Location_icon />
                        </div>
                        <div className=" ">
                          <p className="font-ff-mont text-[18px] font-semibold text-[#030522] leading-[150%]">
                            Location
                          </p>
                          <p className=" font-ff-mont text-[16px] font-normal text-[#AEB5BF] leading-[28px] text-nowrap">
                            Where are you going?
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="xxs:w-1/2 w-full md:w-1/3 px-3 pt-4">
                      <div className=" flex items-center gap-2 ">
                        <div className="w-[56px] h-[56px] bg-[#F5F5FF] flex justify-center items-center rounded-full">
                          <Travelicon />
                        </div>
                        <div className=" ">
                          <p className="font-ff-mont text-[18px] font-semibold text-[#030522] leading-[150%]">
                            Travelers
                          </p>
                          <p className=" font-ff-mont text-[16px] font-normal text-[#AEB5BF] leading-[28px]">
                            Add guest
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
            <div className="flex items-center pt-3 justify-center">
              <button
                onClick={open}
                className="text-base shadow-btn_sh_1 font-semibold font-ff-mon text-white  not-italic text-center leading-[28px] bg-[#313EF7] py-[14px] px-[45px] duration-300 hover:bg-blue-950 rounded-[56px]"
              >
                Book Now
              </button>
              {modl && (
                <div className="backdrop-blur-md flex justify-center h-screen bottom-[-100px] md:bottom-[-150px] absolute w-full  ">
                  <div className="max-w-[560px] ">
                    <div
                      className={`${
                        modl ? "" : ""
                      } bg-white crd_sh_1 rounded-xl p-[20px] md:p-[40px]`}
                    >
                      <div>
                        <p className="text-4xl md:text-[53px] text-center font-black pb-5 text-black">
                          Cogratulations
                        </p>
                        <p className="font-normal text-center pb-5 text-[15px] md:text-[30px]  text-black ">
                          Your ticket is Booked
                        </p>
                        <div className="flex justify-center">
                          {" "}
                          <button
                            onClick={close}
                            className="text-base shadow-btn_sh_1 font-semibold font-ff-mon text-white  not-italic hover:bg-blue-950 text-center leading-[28px] bg-[#313EF7] py-[14px] px-[45px] duration-300 hover:bg-blue-950 rounded-[56px] "
                          >
                            Done
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Locationsbutn;
