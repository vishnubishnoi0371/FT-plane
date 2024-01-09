import React, { useEffect } from "react";

import AOS from "aos";
import "aos/dist/aos.css";
import map from "../Assets/images/map-img.png";
import map_1 from "../Assets/images/map_1.png";
import map_22 from "../Assets/images/travel-22.png";
import map_33 from "../Assets/images/travel-33.png";
import map_44 from "../Assets/images/travel-44.png";
import { Star } from "../Commonsvg/icon";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import { Virtual } from "swiper/modules";
import "swiper/css";
import { SliderBtn } from "./SliderBtn";

const Feedback = () => {
  useEffect(() => {
    AOS.init({ once: true });
  }, []);
  return (
    <div>
      <div className="max-w-[1200px] px-3 mx-auto py-5 sm:pt-[50px] overflow-hidden ">
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
            className="md:w-1/2 lg:w-1/2 px-3 relative  "
          >
            <div className="crd_sh_1 mb-[100px]">
              <Swiper
                spaceBetween={50}
                slidesPerView={1}
                modules={[Virtual]}
                virtual
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
                <div className="flex justify-center items-center rounded-b-[20px] pb-3">
                  <SliderBtn />
                </div>
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feedback;
