import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import travel_1 from "../Assets/images/travel-1.png";
import travel_11 from "../Assets/images/travel-11.png";
import travel_2 from "../Assets/images/travel-2.png";
import travel_22 from "../Assets/images/travel-22.png";
import travel_3 from "../Assets/images/travel-3.png";
import travel_33 from "../Assets/images/travel-33.png";
import travel_4 from "../Assets/images/travel-4.png";
import travel_44 from "../Assets/images/travel-44.png";

const Travelers = () => {
  useEffect(() => {
    AOS.init({ once: true });
  }, []);
  return (
    <div className="overflow-hidden ">
      <div className="max-w-[1200px] px-3 mx-auto md:mb-[30px] sm:py-[50px] ">
        <p className="text-[30px] sm:text[40px] sm:pb-[40px] text-center text-[#011736] ff-mon font-bold sm:leading-[60px] tracking-[0.6px] capitalize not-italic self-stretch color">
          Best travelars of this month{" "}
        </p>
        <div className="flex flex-row justify-center  -mx-3 flex-wrap  ">
          <div
            data-aos="fade-right"
            data-aos-duration="2000"
            className="md:w-1/3 lg:w-1/4 xs:w-1/2  px-3"
          >
            <div className="w-[282px] mx-auto mt-5 max-w-full  max-h-[420px] pb-[25px] sm:pb-[40px] rounded-[213px]  bg-[#fff] crd_sh_1 duration-500 md:hover:translate-y-[-10%]">
              <img className="w-full " src={travel_1} alt="#" />
              <div className="flex justify-center -mt-[15px]">
                <img
                  className="w-[40px] sm:w-[80px] h-[40px] sm:h-[80px] "
                  src={travel_11}
                  alt="#"
                />
              </div>
              <p className="text-base sm:text-2xl sm:pt-2 sm:pb-1 font-semibold font-ff-mon sm:leading-[36px] text-center not-italic text-[#011736] self-stretch">
                Raju Mullah
              </p>
              <p className="text-base font-medium font-ff-mon sm:leading-[24px] text-center not-italic text-[#979797] self-stretch">
                @rajumulllah{" "}
              </p>
            </div>
          </div>
          <div
            data-aos="fade-right"
            data-aos-duration="1200"
            className="md:w-1/3 lg:w-1/4 xs:w-1/2  px-3"
          >
            <div className="w-[282px] mt-5 mx-auto max-w-full  max-h-[420px] pb-[25px] sm:pb-[40px] rounded-[213px]  bg-[#fff] crd_sh_1 duration-500 md:hover:translate-y-[-10%]">
              <img className="w-full " src={travel_2} alt="#" />
              <div className="flex justify-center -mt-[15px]">
                <img
                  className="w-[40px] sm:w-[80px] h-[40px] sm:h-[80px] "
                  src={travel_22}
                  alt="#"
                />
              </div>
              <p className="text-base sm:text-2xl sm:pt-2  sm:pb-1 font-semibold font-ff-mon sm:leading-[36px] text-center not-italic text-[#011736] self-stretch">
                Zaire Vetrovs{" "}
              </p>
              <p className="text-base font-medium font-ff-mon sm:leading-[24px] text-center not-italic text-[#979797] self-stretch">
                @zairevetrovs
              </p>
            </div>
          </div>
          <div
            data-aos="fade-left"
            data-aos-duration="1200"
            className="md:w-1/3 lg:w-1/4 xs:w-1/2  px-3"
          >
            <div className="w-[282px] mt-5 mx-auto max-w-full  max-h-[420px] pb-[25px] sm:pb-[40px] rounded-[213px]  bg-[#fff] crd_sh_1 duration-500 md:hover:translate-y-[-10%]">
              <img className="w-full " src={travel_3} alt="#" />
              <div className="flex justify-center -mt-[15px]">
                <img
                  className="w-[40px] sm:w-[80px] h-[40px] sm:h-[80px]  "
                  src={travel_33}
                  alt="#"
                />
              </div>
              <p className="text-base sm:text-2xl sm:pt-2  sm:pb-1 font-semibold font-ff-mon sm:leading-[36px] text-center not-italic text-[#011736] self-stretch">
                Marcus Dias{" "}
              </p>
              <p className="text-base font-medium font-ff-mon sm:leading-[24px] text-center not-italic text-[#979797] self-stretch">
                Marcus Dias{" "}
              </p>
            </div>
          </div>
          <div
            data-aos="fade-left"
            data-aos-duration="2000"
            className="md:w-1/3 lg:w-1/4 xs:w-1/2  px-3"
          >
            <div className="w-[282px] mt-5 mx-auto max-w-full  max-h-[420px] pb-[25px] sm:pb-[40px] rounded-[213px]  bg-[#fff] crd_sh_1 duration-500 md:hover:translate-y-[-10%]">
              <img className="w-full " src={travel_4} alt="#" />
              <div className="flex justify-center -mt-[15px]">
                <img
                  className="w-[40px] sm:w-[80px] h-[40px] sm:h-[80px] "
                  src={travel_44}
                  alt="#"
                />
              </div>
              <p className="text-base sm:text-2xl sm:pt-2  sm:pb-1 font-semibold font-ff-mon sm:leading-[36px] text-center not-italic text-[#011736] self-stretch">
                Davis Schleifer{" "}
              </p>
              <p className="text-base font-medium font-ff-mon sm:leading-[24px] text-center not-italic text-[#979797] self-stretch">
                @davisschleifer{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Travelers;
