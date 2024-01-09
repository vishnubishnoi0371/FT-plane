import { useSwiper } from "swiper/react";
import { Arrow_1, Arrow_2 } from "../Commonsvg/icon";

export const SliderBtn = () => {
  const swiper = useSwiper();
  return (
    <div className="gap-2 flex">
      <button
        onClick={() => swiper.slidePrev()}
        className="group  duration-300 st_hvr  w-[50px] h-[50px] bg-[#dadcf2] hover:bg-[#313ef7] rounded-full"
      >
        <span className="flex justify-center items-center ">
          {" "}
          <Arrow_1 />
        </span>
      </button>
      <button
        onClick={() => swiper.slideNext()}
        className="group  duration-300 st_hvr  w-[50px] h-[50px] bg-[#dadcf2] hover:bg-[#313ef7] rounded-full"
      >
        <span className="flex justify-center items-center ">
          {" "}
          <Arrow_2 />{" "}
        </span>
      </button>
    </div>
  );
};
