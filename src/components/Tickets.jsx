import React, { useEffect } from "react";
import earth from "../Assets/images/earth.png";
import scaning from "../Assets/images/scaning.png";
import line from "../Assets/images/dot-line.png";

import card_shadow from "../Assets/images/ticket-shadow.png";
import { Aro_1, Plane, Aro_2 } from "../Commonsvg/icon";
import "swiper/css";

import AOS from "aos";
import "aos/dist/aos.css";
const Tickets = () => {
  useEffect(() => {
    AOS.init({ once: true });
  }, []);
  return (
    <div>
      <div
        id="Ticket"
        className="bg-[#010223] py-[50px] my-[50px] overflow-hidden"
      >
        <div className="max-w-[1070px] px-3 mx-auto ">
          <div className="flex flex-row justify-center  -mx-3 flex-wrap  ">
            <div
              data-aos="fade-right"
              data-aos-duration="2000"
              className="md:w-1/2 lg:w-1/2 px-3"
            >
              <p className="text-[30px] sm:text-[40px] text-center md:text-start sm:pb-2 text-[#FFF] ff-mon font-bold sm:leading-[60px] tracking-[0.6px] capitalize not-italic self-stretch ">
                Book Popular Flight Tickets
              </p>
              <p className="pt-2 text-base text-center md:text-start font-normal font-ff-mon not-italic leading-[24px] text-[#a6a6b2] self-stretch pb-[24px]">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's
              </p>
              <div className="flex justify-center md:justify-start -mt-[15px]">
                <img className="w-[60%] md:w-[70%]" src={earth} alt="#" />
              </div>
            </div>
            <div
              data-aos="fade-left"
              data-aos-duration="2000"
              className="md:w-1/2 lg:w-1/2 px-3  relative overflow-hidden"
            >
              <div className="slide_crd  rounded-[30px]  bg-[#ffffff] py-[20px] px-[15px] md:py-[38px] md:px-[30px]">
                <div className="flex justify-between">
                  <button className="text-base font-normal font-ff-mono text-[#313EF7] not-italic text-center py-2 px-[10px] bg-[#eaecfe]  rounded-[49px]">
                    Economy Saver
                  </button>
                  <div className="flex items-center gap-2">
                    <p className="text-base font-ff-mon font-semibold not-italic text-[#030522] ">
                      UK
                    </p>
                    <Plane />
                    <p className="text-base font-ff-mon font-semibold not-italic text-[#030522] ">
                      BD
                    </p>
                  </div>
                </div>
                <p className="font-bold text-start text-base font-ff-mon leading-[24px] not-italic text-[#030522] py-[24px]">
                  6 Flight Tickets
                </p>
                <div className="flex flex-row justify-center  -mx-3 flex-wrap  ">
                  <div className="w-1/2 px-3">
                    <p className="font-medium text-start text-[14px] font-ff-mon leading-[21px] not-italic self-stretch text-[#9ca3af] pb-[5px]">
                      Passenger{" "}
                    </p>
                    <p className="font-semibold text-start text-base font-ff-mon leading-[24px] not-italic text-[#030522] pb-[16px]">
                      6 Flight Tickets
                    </p>
                    <p className="font-medium text-start text-[14px] font-ff-mon leading-[21px] not-italic self-stretch text-[#9ca3af] pb-[5px]">
                      Flight{" "}
                    </p>
                    <p className="font-semibold text-start text-base font-ff-mon leading-[24px] not-italic text-[#030522] pb-[16px]">
                      #5486626661{" "}
                    </p>
                    <p className="font-medium text-start text-[14px] font-ff-mon leading-[21px] not-italic self-stretch text-[#9ca3af] pb-[5px]">
                      Flight{" "}
                    </p>
                    <p className="font-semibold text-start text-base font-ff-mon leading-[24px] not-italic text-[#030522] pb-[16px]">
                      Economy{" "}
                    </p>
                  </div>
                  <div className="w-1/2 px-3">
                    <p className="font-medium text-start text-[14px] font-ff-mon leading-[21px] not-italic self-stretch text-[#9ca3af] pb-[5px]">
                      Date{" "}
                    </p>
                    <p className="font-semibold text-start text-base font-ff-mon leading-[24px] not-italic text-[#030522] pb-[16px]">
                      20 Nov 2022{" "}
                    </p>
                    <p className="font-medium text-start text-[14px] font-ff-mon leading-[21px] not-italic self-stretch text-[#9ca3af] pb-[5px]">
                      Gate{" "}
                    </p>
                    <p className="font-semibold text-start text-base font-ff-mon leading-[24px] not-italic text-[#030522] pb-[16px]">
                      20 A{" "}
                    </p>
                    <p className="font-medium text-start text-[14px] font-ff-mon leading-[21px] not-italic self-stretch text-[#9ca3af] pb-[5px]">
                      Seats{" "}
                    </p>
                    <p className="font-semibold text-start text-base font-ff-mon leading-[24px] not-italic text-[#030522] pb-[16px]">
                      5B - 11B{" "}
                    </p>
                  </div>
                </div>
                <hr className="border-dashed dotted mb-5 md:mb-10 sm:mt-4" />
                <div>
                  <img className="" src={scaning} alt="#" />
                </div>
              </div>
              <img
                className="absolute Ticket_sh hidden md:block"
                src={card_shadow}
                alt="#"
              />
              <div className="flex-col hidden lg:block">
                <div className="right-3 top-2 absolute">
                  <img className="" src={line} alt="#" />
                </div>
                <span className="w-[35px] h-[35px]  bg-[#1a1b39]  rounded-full bottom-20  absolute right-0 lg:flex items-center justify-center">
                  <Aro_1 />
                </span>
                <span className="w-[35px] h-[35px] bg-[#313ef7]   rounded-full bottom-8 absolute right-0 lg:flex items-center justify-center">
                  <Aro_2 />
                </span>
              </div>
              <span className="w-[25px] sm:w-[35px] h-[25px] sm:h-[35px] sm:hidden lg:block rounded-full  absolute dot_1"></span>
              <span className="w-[25px] sm:w-[35px] h-[25px] sm:h-[35px] sm:hidden lg:block rounded-full  absolute dot_2"></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tickets;
