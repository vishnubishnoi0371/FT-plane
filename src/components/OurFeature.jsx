import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { mycard } from "../common_feature/Same_feature";
import { Arrow, Guide } from "../Commonsvg/icon";

const OurFeature = () => {
  useEffect(() => {
    AOS.init({ once: true });
  }, []);
  const [first, setfirst] = useState();
  function index(first) {
    setfirst(!first);
  }
  return (
    <div className="max-w-[1200px] px-3 mx-auto pb-[50px] ">
      <p className="font-ff-mon font-bold text-[40px]  text-[#030522] leading-[60px] tracking-[0.6px] text-center capitalize self-stretch pt-[20px] sm:pb-[40px]">
        Our Features
      </p>
      <div className="flex flex-row items-center justify-center flex-wrap  -mx-3 ">
        {mycard.map((obj, index) => (
          <div
            data-aos="flip-right"
            data-aos-duration="2000"
            className={`${
              index === 0 || index === 2 ? "lg:mt-[30px]" : ""
            } md:w-1/3 lg:w-1/4 xs:w-1/2 px-3`}
          >
            <div className="px-[15px] sm:px-[21px] py-[25px] sm:py-[42px] mt-5  bg-[#fff] rounded-[110px] sm:rounded-[185px] shadow-btn_sh_2 md:hover:scale-[110%] duration-300">
              <div className="flex items-center justify-center  ">
                <div
                  className={`${
                    index === 0 ? "<Guide/>" : ""
                  }flex items-center justify-center bg-[#f5f5ff] rounded-full w-[70px] h-[70px]`}
                >
                  {obj.svg}
                </div>
              </div>
              <p
                className={`${
                  obj.name === "" ? "" : ""
                } text-center font-ff-mon font-extrabold text-[#030522] leading-[36px] not-italic text-2xl sm:pt-[32px] pb-[10px] `}
              >
                {obj.name}
              </p>
              <div
                className={`${
                  obj.name === "" ? "" : ""
                }  text-center text-base font-normal font-ff-mon leading-[24px] not-italic text-[#5b5d6f]  self-stretch pb-[15px]  sm:pb-[32px] `}
              >
                {obj.para}
              </div>
              <div className="flex items-center justify-center ">
                <div className="flex items-center justify-center bg-[#030522] rounded-full w-[50px] h-[50px] ">
                  <Arrow />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default OurFeature;
