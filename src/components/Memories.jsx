import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import memories_1 from "../Assets/images/memories-1.png";
import memories_2 from "../Assets/images/memories-2.png";
import memories_3 from "../Assets/images/memories-3.png";
import memories_4 from "../Assets/images/memories-4.png";

const Memories = () => {
  useEffect(() => {
    AOS.init({ once: true });
  }, []);
  return (
    <div id="memories">
      <div className="max-w-[1200px] px-3 mx-auto sm:py-[50px] overflow-hidden">
        <p className="text-[30px] sm:text-[40px] sm:pb-[40px] text-center text-[#011736] ff-mon font-bold sm:leading-[60px] tracking-[0.6px] capitalize not-italic self-stretch color">
          Make memories with us
        </p>
        <div className="flex flex-row justify-center  -mx-3 flex-wrap pt-5 sm:pt-[50px]">
          {" "}
          <div
            data-aos="fade-right"
            data-aos-duration="1200"
            className=" md:w-1/3 lg:w-1/4 xs:w-1/2 px-3  "
          >
            <div className="rounded-[200px] img_border md:hover:scale-[110%]  duration-300 overflow-hidden relative max-w-[262px] mx-auto">
              <img className="w-full h-full   " src={memories_1} alt="#" />
            </div>
          </div>
          <div
            data-aos="fade-right"
            data-aos-duration="2000"
            className=" md:w-1/3 lg:w-1/4 xs:w-1/2 px-3  lg:pt-[50px]"
          >
            <div className="rounded-[200px] img_border md:hover:scale-[110%]  duration-300 overflow-hidden mx-auto mt-4 sm:mt-0 relative max-w-[262px]">
              <img className="w-full h-full  " src={memories_2} alt="#" />
            </div>
          </div>
          <div
            data-aos="fade-left"
            data-aos-duration="2000"
            className=" md:w-1/3 lg:w-1/4 xs:w-1/2 px-3 "
          >
            <div className="rounded-[200px] img_border md:hover:scale-[110%]  duration-300 overflow-hidden mx-auto mt-4 md:mt-0 relative max-w-[262px]">
              <img className="w-full h-full " src={memories_3} alt="#" />
            </div>
          </div>
          <div
            data-aos="fade-left"
            data-aos-duration="1200"
            className=" md:w-1/3 lg:w-1/4 xs:w-1/2 lg:pt-[50px] px-3"
          >
            <div className="rounded-[200px] img_border md:hover:scale-[110%]  duration-300 overflow-hidden mx-auto relative mt-4 lg:mt-0 max-w-[262px]">
              <img className="w-full h-full " src={memories_4} alt="#" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Memories;
