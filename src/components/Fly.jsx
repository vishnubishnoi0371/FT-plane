import React, { useEffect } from "react";
import flyimg from "../Assets/images/fly_1.png";
import AOS from "aos";
import "aos/dist/aos.css";

const Fly = () => {
  useEffect(() => {
    AOS.init({ once: true });
  }, []);

  return (
    <div id="schdule">
      <div className="max-w-[1200px] px-3 mx-auto sm:py-[50px] overflow-hidden">
        <div className="flex flex-row items-center justify-center flex-wrap  -mx-3 ">
          <div
            data-aos="fade-right"
            data-aos-duration="2000"
            className="md:w-1/2 lg:w-1/2 px-3"
          >
            <img className="w-full" src={flyimg} alt="#" />
          </div>
          <div
            data-aos="fade-left"
            data-aos-duration="2000"
            className="md:w-1/2 lg:w-1/2 px-3"
          >
            <p className="font-ff-mon font-black leading-[24px] self-stretch text-[#313EF7] text-xl not-italic text-center md:text-start pb-2">
              Let’s Fly
            </p>
            <p className="font-ff-mon font-bold sm:leading-[45px] self-stretch text-[#030303] text-[27px] sm:text-[32px] not-italic text-center md:text-start pt-2 sm1pb-[20px]">
              It’s one of the leading online flight booking platforms in the
              world{" "}
            </p>
            <div className="pt-[15px] ps-5 relative">
              <p className="font-medium text-[14px] sm:text-base font-ff-mon text-[#030303] sm:leading-[28px] not-italic py-[5px]">
                Contrary to popular belief, Lorem Ipsum is not simply random
                text
              </p>
              <p className="font-medium text-[14px] sm:text-base font-ff-mon text-[#030303] sm:leading-[28px] not-italic py-[5px]">
                If you are going to use a passage of Lorem Ipsum
              </p>
              <p className="font-medium text-[14px] sm:text-base font-ff-mon text-[#030303] sm:leading-[28px] not-italic py-[5px]">
                Lorem Ipsum is therefore always free from repetition, injected
                humour, or non-characteristic words etc.
              </p>
              <p className="font-medium text-[14px] sm:text-base font-ff-mon text-[#030303] sm:leading-[28px] not-italic py-[5px] pb-[40px]">
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
              </p>
              <div className="flex justify-center md:justify-start">
                <button className="px-[45px] py-[14px] text-base text-[#fff] rounded-[56px] text-center font-ff-mon font-semibold leading-[28px] bg-[#313EF7] duration-300 hover:bg-blue-950">
                  Book Now
                </button>
              </div>
              <span className="bg-[#313EF7] w-[10px] h-[10px] z-10 rounded-full absolute left-0 top-[9%]"></span>
              <span className="bg-[#313EF7] w-[10px] h-[10px] z-10 rounded-full absolute left-0 top-[21%]"></span>
              <span className="bg-[#313EF7] w-[10px] h-[10px] z-10 rounded-full absolute left-0 top-[33%]"></span>
              <span className="bg-[#313EF7] w-[10px] h-[10px] z-10 rounded-full absolute left-0 bottom-[42%]"></span>
              <span className="border-dashed bg-[#e5e7eb] w-[2px] hidden sm:block md:hidden  lg:block h-[150px] absolute top-[10%] left-1"></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Fly;
