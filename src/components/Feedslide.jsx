import React, { useEffect } from "react";
import map from "../Assets/images/map-img.png";
import map_1 from "../Assets/images/map_1.png";
import map_22 from "../Assets/images/travel-22.png";
import { Star } from "../Commonsvg/icon";
import AOS from "aos";
import "aos/dist/aos.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Arrow_1, Arrow_2 } from "../Commonsvg/icon";
const CustomPrevArrow = ({ onClick }) => (
  <button
    onClick={onClick}
    className="xs:p-[15px_20px] st_hvr p-[10px_15px] rounded-full duration-300 sliderbutton bg-[#DADCF1] hover:bg-[#313EF7] absolute bottom-[-30%] left-[40%]"
  >
    <Arrow_1 />
  </button>
);

const CustomNextArrow = ({ onClick }) => (
  <button
    onClick={onClick}
    className="xs:p-[15px_20px] st_hvr p-[10px_15px] rounded-full bg-[#DADCF1] duration-300 sliderbutton hover:bg-[#313EF7] absolute bottom-[-30%] left-[60%]"
  >
    <Arrow_2 />
  </button>
);
const Feedslide = () => {
  useEffect(() => {
    AOS.init({
      once: true,
      duration: 2000,
    });
  }, []);
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
        },
      },
    ],
  };

  return (
    <div className=" max-w-[1200px] px-3 my-[40px] xs:mt-[60px] md:mt-[80px] lg:mt-[100px] mx-auto">
      <p
        className=" text-[#313EF7] text-center font-ff-mont text-[20px] font-semibold leading-[normal] xs:leading-[24px]"
        data-aos="fade-up"
      >
        What’s our customer saying
      </p>
      <div
        className=" text[#011736] text-center xs:[text-35px] text-[32px] lg:text-[40px] font-bold leading-[normal] xs:leading-[150%] tracking-[0.6px] pt-2 "
        data-aos="fade-up"
      >
        Our Customer Feedback
      </div>
      <div className=" flex flex-wrap flex-row -mx-3 mt-[60px]">
        <div className=" w-full md:w-1/2 lg:w-7/12 px-3">
          <img
            src={map}
            alt=""
            className=" w-full h-full"
            data-aos="flip-right"
          />
        </div>
        <div className=" w-full md:w-1/2 lg:w-5/12 px-3">
          <Slider {...settings} className=" crd_sh_1">
            <div>
              <div
                className=" p-[20px_10px] xs:p-[30px_21px] rounded-[20px] bg-[#FFF] "
                data-aos="flip-left"
              >
                <div className=" flex items-center gap-[16px]">
                  <img src={map_1} alt="" />
                  <div>
                    <p className=" font-ff-mont text-[#011736] text-[20px] font-semibold leading-[24px] mb-2">
                      Jaylon Vaccaro
                    </p>
                    <Star />
                  </div>
                </div>
                <p className=" font-ff-mont leading-[normal] md:leading-[25px] lg:leading-[36px] font-medium text-[14px] xs:text-[18px] text-[#1B1B1C] italic pt-[8px] xs:pt-[16px]">
                  There are many variations of passages of Lorem Ipsum
                  available, but the majority have suffered alteration in some
                  form, by injected humour, or randomised words which don
                </p>
              </div>
            </div>
            <div className=" mx-3">
              <div
                className=" p-[20px_10px] xs:p-[30px_21px] rounded-[20px] bg-[#FFF] shadow-shadow"
                data-aos="flip-left"
              >
                <div className=" flex items-center gap-[16px]">
                  <img
                    src={map_22}
                    alt=""
                    className=" max-w-[60px] max-h-[60px] w-full h-full"
                  />
                  <div>
                    <p className=" font-ff-mont text-[#011736] text-[20px] font-semibold leading-[24px] mb-2">
                      Jaylon Vaccaro
                    </p>
                    <Star />
                  </div>
                </div>
                <p className=" font-ff-mont leading-[normal] md:leading-[25px] lg:leading-[36px] font-medium text-[14px] xs:text-[18px] text-[#1B1B1C] italic pt-[8px] xs:pt-[16px]">
                  There are many variations of passages of Lorem Ipsum
                  available, but the majority have suffered alteration in some
                  form, by injected humour, or randomised words which don
                </p>
              </div>
            </div>
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Feedslide;
