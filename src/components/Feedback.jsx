import React, { useEffect } from "react";

import AOS from "aos";
import "aos/dist/aos.css";
import map from "../Assets/images/map-img.png";
import map_1 from "../Assets/images/map_1.png";
import map_22 from "../Assets/images/travel-22.png";
import map_33 from "../Assets/images/travel-33.png";
import map_44 from "../Assets/images/travel-44.png";
import { Arrow_1, Arrow_2, Star } from "../Commonsvg/icon";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import "swiper/css";
export const SwiperBtn = () => {
  const swiper = useSwiper();
  return (
    <div>
      <button
        onClick={() => swiper.slidePrev()}
        className="w-[50px] flex justify-center items-center h-[50px] rounded-full bg-black hover:bg-[#313EF7] duration-300 "
      >
        <span className="w-[32px]  h-8 m-[10px] flex items-center justify-center">
          <svg
            class="fill-white group-hover:fill-black"
            xmlns="http://www.w3.org/2000/svg"
            width="9"
            height="16"
            viewBox="0 0 9 16"
            fill="none"
          >
            <path d="M8.40091 15.0669C8.64536 14.8224 8.76758 14.5113 8.76758 14.1336C8.76758 13.7558 8.64536 13.4447 8.40091 13.2002L3.20091 8.00023L8.40091 2.80023C8.64536 2.55578 8.76758 2.24467 8.76758 1.86689C8.76758 1.48912 8.64536 1.17801 8.40091 0.933561C8.15647 0.689116 7.84536 0.566895 7.46758 0.566895C7.0898 0.566895 6.77869 0.689116 6.53424 0.933561L0.400911 7.06689C0.267578 7.20023 0.172912 7.34467 0.116911 7.50023C0.0609112 7.65578 0.0333557 7.82245 0.0342445 8.00023C0.0342445 8.17801 0.0622454 8.34467 0.118245 8.50023C0.174245 8.65578 0.268467 8.80023 0.400911 8.93356L6.53424 15.0669C6.77869 15.3113 7.0898 15.4336 7.46758 15.4336C7.84536 15.4336 8.15647 15.3113 8.40091 15.0669Z" />
          </svg>
        </span>
      </button>
      <button
        onClick={() => swiper.slideNext()}
        className="w-[50px] flex justify-center items-center h-[50px] rounded-full bg-black hover:bg-[#313EF7] duration-300 "
      >
        <span className="w-[32px] h-8 m-[10px] flex items-center justify-center">
          <svg
            class="fill-white group-hover:fill-black"
            xmlns="http://www.w3.org/2000/svg"
            width="9"
            height="16"
            viewBox="0 0 9 16"
            fill="none"
          >
            <path d="M0.599088 15.0669C0.354644 14.8224 0.232422 14.5113 0.232422 14.1336C0.232422 13.7558 0.354644 13.4447 0.599088 13.2002L5.79909 8.00023L0.599088 2.80023C0.354644 2.55578 0.232422 2.24467 0.232422 1.86689C0.232422 1.48912 0.354644 1.17801 0.599088 0.933561C0.843533 0.689116 1.15464 0.566895 1.53242 0.566895C1.9102 0.566895 2.22131 0.689116 2.46576 0.933561L8.59909 7.06689C8.73242 7.20023 8.82709 7.34467 8.88309 7.50023C8.93909 7.65578 8.96664 7.82245 8.96576 8.00023C8.96576 8.17801 8.93775 8.34467 8.88175 8.50023C8.82575 8.65578 8.73153 8.80023 8.59909 8.93356L2.46576 15.0669C2.22131 15.3113 1.9102 15.4336 1.53242 15.4336C1.15464 15.4336 0.843533 15.3113 0.599088 15.0669Z" />
          </svg>
        </span>
      </button>
    </div>
  );
};
const Feedback = () => {
  useEffect(() => {
    AOS.init({ once: true });
  }, []);
  return (
    <div>
      <div className="max-w-[1200px] px-3 mx-auto py-5 sm:py-[50px] overflow-hidden ">
        <p className="text-center text-xl font-semibold font-ff-mon text-[#313ef7] self-stretch leading-[24px] not-italic ">
          What’s our customer saying
        </p>
        <p className="text-center pt-2 pb-[30px] text-[40px] font-bold font-ff-mon text-[#011736] self-stretch leading-[60px] capitalize tracking-[.6px] not-italic ">
          Our Customer Feedback{" "}
        </p>
        <div className="flex flex-row items-center justify-center flex-wrap  -mx-3 sm:pb-[40px] pt-[30px]">
          <div
            data-aos="fade-right"
            data-aos-duration="2000"
            className="md:w-1/2 lg:w-1/2 px-3"
          >
            <div className=" -mt-[15px]">
              <img className="" src={map} alt="#" />
            </div>
          </div>
          <div
            data-aos="fade-left"
            data-aos-duration="2000"
            className="md:w-1/2 lg:w-1/2 px-3 relative overflow-hidden "
          >
            <div className="crd_sh_1 mb-[100px]">
              <Swiper
                spaceBetween={50}
                slidesPerView={1}
                onSlideChange={() => console.log("slide change")}
                onSwiper={(swiper) => console.log(swiper)}
              >
                <SwiperSlide className="py-[30px] px-[21px] bg-[#FFF] rounded-[20px] ">
                  <div className="flex items-center gap-[16px] pb-2">
                    <div>
                      <img className="" src={map_1} alt="#" />
                    </div>
                    <div>
                      <p className="text-xl font-ff-mon font-semibold opacity-90 not-italic sm:leading-[24px] pb-2 text-[#011736]">
                        Jaylon Vaccaro
                      </p>
                      <Star />
                    </div>
                  </div>
                  <p className="text-lg text-start font-medium font-ff-mon leading-[34px] text-[#1b1b1c]  italic pt-2">
                    There are many variations of passages of Lorem Ipsum
                    available, but the majority have suffered alteration in some
                    form, by injected humour, or randomised words which don
                  </p>
                </SwiperSlide>
                <SwiperSlide className="py-[30px] px-[21px] bg-[#FFF] rounded-[20px] ">
                  <div className="flex items-center gap-[16px] pb-2">
                    <div>
                      <img className="w-[61px] h-[61px]" src={map_22} alt="#" />
                    </div>
                    <div>
                      <p className="text-xl font-ff-mon font-semibold opacity-90 not-italic leading-[24px] pb-2 text-[#011736]">
                        Zaire Vetrovs{" "}
                      </p>
                      <Star />
                    </div>
                  </div>
                  <p className="text-lg text-start font-medium font-ff-mon leading-[34px] text-[#1b1b1c]  italic pt-2">
                    There are many variations of passages of Lorem Ipsum
                    available, but the majority have suffered alteration in some
                    form, by injected humour, or randomised words which don
                  </p>
                </SwiperSlide>
                <SwiperSlide className="py-[30px] px-[21px] bg-[#FFF] rounded-[20px] ">
                  <div className="flex items-center gap-[16px] pb-2">
                    <div>
                      <img className="w-[61px] h-[61px]" src={map_33} alt="#" />
                    </div>
                    <div>
                      <p className="text-xl font-ff-mon font-semibold opacity-90 not-italic leading-[24px] pb-2 text-[#011736]">
                        Marcus Dias{" "}
                      </p>
                      <Star />
                    </div>
                  </div>
                  <p className="text-lg text-start font-medium font-ff-mon leading-[34px] text-[#1b1b1c]  italic pt-2">
                    There are many variations of passages of Lorem Ipsum
                    available, but the majority have suffered alteration in some
                    form, by injected humour, or randomised words which don
                  </p>
                </SwiperSlide>
                <SwiperSlide className="py-[30px] px-[21px] bg-[#FFF] rounded-[20px] ">
                  <div className="flex items-center gap-[16px] pb-2">
                    <div>
                      <img className="w-[61px] h-[61px]" src={map_44} alt="#" />
                    </div>
                    <div>
                      <p className="text-xl font-ff-mon font-semibold opacity-90 not-italic leading-[24px] pb-2 text-[#011736]">
                        Davis Schleifer{" "}
                      </p>
                      <Star />
                    </div>
                  </div>
                  <p className="text-lg text-start font-medium font-ff-mon leading-[34px] text-[#1b1b1c]  italic pt-2">
                    There are many variations of passages of Lorem Ipsum
                    available, but the majority have suffered alteration in some
                    form, by injected humour, or randomised words which don
                  </p>
                </SwiperSlide>
                <SwiperSlide className="py-[30px] px-[21px] bg-[#FFF] rounded-[20px] ">
                  <div className="flex items-center gap-[16px] pb-2">
                    <div>
                      <img className="" src={map_1} alt="#" />
                    </div>
                    <div>
                      <p className="text-xl font-ff-mon font-semibold opacity-90 not-italic leading-[24px] pb-2 text-[#011736]">
                        Jaylon Vaccaro
                      </p>
                      <Star />
                    </div>
                  </div>
                  <p className="text-lg text-start font-medium font-ff-mon leading-[34px] text-[#1b1b1c]  italic pt-2">
                    There are many variations of passages of Lorem Ipsum
                    available, but the majority have suffered alteration in some
                    form, by injected humour, or randomised words which don
                  </p>
                </SwiperSlide>
                <SwiperSlide className="py-[30px] px-[21px] bg-[#FFF] rounded-[20px] ">
                  <div className="flex items-center gap-[16px] pb-2">
                    <div>
                      <img className="w-[61px] h-[61px]" src={map_22} alt="#" />
                    </div>
                    <div>
                      <p className="text-xl font-ff-mon font-semibold opacity-90 not-italic leading-[24px] pb-2 text-[#011736]">
                        Zaire Vetrovs{" "}
                      </p>
                      <Star />
                    </div>
                  </div>
                  <p className="text-lg text-start font-medium font-ff-mon leading-[34px] text-[#1b1b1c]  italic pt-2">
                    There are many variations of passages of Lorem Ipsum
                    available, but the majority have suffered alteration in some
                    form, by injected humour, or randomised words which don
                  </p>
                </SwiperSlide>
                <SwiperSlide className="py-[30px] px-[21px] bg-[#FFF] rounded-[20px] ">
                  <div className="flex items-center gap-[16px] pb-2">
                    <div>
                      <img className="w-[61px] h-[61px]" src={map_33} alt="#" />
                    </div>
                    <div>
                      <p className="text-xl font-ff-mon font-semibold opacity-90 not-italic leading-[24px] pb-2 text-[#011736]">
                        Marcus Dias{" "}
                      </p>
                      <Star />
                    </div>
                  </div>
                  <p className="text-lg text-start font-medium font-ff-mon leading-[34px] text-[#1b1b1c]  italic pt-2">
                    There are many variations of passages of Lorem Ipsum
                    available, but the majority have suffered alteration in some
                    form, by injected humour, or randomised words which don
                  </p>
                </SwiperSlide>
                <SwiperSlide className="py-[30px] px-[21px] bg-[#FFF] rounded-[20px] ">
                  <div className="flex items-center gap-[16px] pb-2">
                    <div>
                      <img className="w-[61px] h-[61px]" src={map_44} alt="#" />
                    </div>
                    <div>
                      <p className="text-xl font-ff-mon font-semibold opacity-90 not-italic leading-[24px] pb-2 text-[#011736]">
                        Davis Schleifer{" "}
                      </p>
                      <Star />
                    </div>
                  </div>
                  <p className="text-lg text-start font-medium font-ff-mon leading-[34px] text-[#1b1b1c]  italic pt-2">
                    There are many variations of passages of Lorem Ipsum
                    available, but the majority have suffered alteration in some
                    form, by injected humour, or randomised words which don
                  </p>
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feedback;
