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
      <div className="max-w-[1200px] px-3 mx-auto ">
        <div className=" pt-4 900:pt-0 md:translate-y-[-54%]">
          <div className="">
            <button
              onClick={() => tabs("tab1")}
              className={`${
                first === "tab1" ? "tab" : ""
              } font-ff-mont text-[16px] xs:text-[18px] font-semibold leading-[28px] text-[#030522] py-[16px] px-[20px] sm:px-[42px] rounded-tl-[20px] border-b-[1px] border-b-[#F3F4F6] bg-[#FFF]`}
            >
              Economy
            </button>
            <button
              onClick={() => tabs("tab2")}
              className={`${
                first === "tab2" ? "tab" : ""
              } font-ff-mont text-[16px] xs:text-[18px] font-semibold leading-[28px] text-[#030522] py-[16px] px-[20px] sm:px-[39px] border-b-[1px] border-b-[#F3F4F6] bg-[#FFF]`}
            >
              Busniness{" "}
            </button>
            <button
              onClick={() => tabs("tab3")}
              className={`${
                first === "tab3" ? "tab" : ""
              } font-ff-mont text-[16px] xs:text-[18px] font-semibold leading-[28px] text-[#030522] py-[16px] px-[20px] sm:px-[66px] rounded-tr-[20px] border-b-[1px] border-b-[#F3F4F6] bg-[#FFF]`}
            >
              First
            </button>
          </div>
          <div className="p-[15px] xs:p-[25px] lgg:p-[40px] bg-[#FFFFFF] xs:rounded-tr-[20px] rounded-br-[20px] rounded-bl-[20px] crd_sh_1 ">
            {first === "tab1" && (
              <div>
                <div className="hidden 900:block">
                  <div className=" flex flex-wrap justify-between max-w-[1060px]">
                    <div className=" flex items-center gap-2">
                      <div className="w-[56px] h-[56px] bg-[#F5F5FF] flex justify-center items-center rounded-full">
                        <Location_icon />
                      </div>
                      <div className=" ">
                        <p className="font-ff-mont text-[16px] xs:text-[18px] font-semibold text-[#030522] leading-[normal] xs:leading-[150%]">
                          Location
                        </p>
                        <p className=" font-ff-mont text-[14px] xs:text-[16px] font-normal text-[#AEB5BF] leading-[normal] xs:leading-[28px]">
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
                          <p className=" font-ff-mont text-[16px] font-normal text-[#AEB5BF] leading-[28px]">
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
                        <p className=" font-ff-mont text-[16px] font-normal text-[#AEB5BF] leading-[28px]">
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
                          <p className=" font-ff-mont text-[16px] font-normal text-[#AEB5BF] leading-[28px]">
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
                    <div className=" xxs:w-1/2 w-full md:w-1/3 px-3  pt-4">
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
                          <p className=" font-ff-mont text-[16px] font-normal text-[#AEB5BF] leading-[28px]">
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
                <div className="bottom-[300px] absolute">
                  <div
                    className={`${
                      modl ? "" : ""
                    } bg-white crd_sh_1 rounded-xl max-w-[500px] max-h-[300px] p-[40px]`}
                  >
                    <a
                      href="#"
                      onClick={close}
                      className=" position-absolute z-1 end-0 top-0"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="black"
                        class="bi bi-file-x"
                        viewBox="0 0 16 16"
                      >
                        <path d="M6.146 6.146a.5.5 0 0 1 .708 0L8 7.293l1.146-1.147a.5.5 0 1 1 .708.708L8.707 8l1.147 1.146a.5.5 0 0 1-.708.708L8 8.707 6.854 9.854a.5.5 0 0 1-.708-.708L7.293 8 6.146 6.854a.5.5 0 0 1 0-.708" />
                        <path d="M4 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2zm0 1h8a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1" />
                      </svg>
                    </a>
                    <div>
                      <p className="text-[53px] text-center font-black text-black">
                        Cogratulations
                      </p>
                      <p className="font-normal text-center pb-5 text-[30px]  text-black ">
                        Your ticket is Booked
                      </p>
                      <div className="flex justify-center">
                        {" "}
                        <button
                          onClick={close}
                          className="text-base shadow-btn_sh_1 font-semibold font-ff-mon text-white  not-italic text-center leading-[28px] bg-[#313EF7] py-[14px] px-[45px] duration-300 hover:bg-blue-950 rounded-[56px] "
                        >
                          Done
                        </button>
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
