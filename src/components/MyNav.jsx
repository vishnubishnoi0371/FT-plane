import React, { useState, useEffect } from "react";
import { Navicon } from "../Commonsvg/icon";
import plane from "../Assets/images/plane.webp";

import AOS from "aos";
import "aos/dist/aos.css";
const MyNav = () => {
  useEffect(() => {
    AOS.init({ once: true });
  }, []);
  const [first, setfirst] = useState(false);
  function view() {
    setfirst(!first);
  }
  return (
    <div className="bg-[url('../src/Assets/images/hero-bg.png')] bg-no-repeat md:bg-100% md:h-[710px] overflow-hidden">
      <div className="max-w-[1200px] relative px-3 mx-auto ">
        <div className="flex justify-between py-[20px]">
          <div className="flex items-center cursor-pointer gap-2">
            <Navicon />
            <p className="font-ff-mon font-extrabold text-white tracking-[1.1px] text-[22px] leading-7 not-italic">
              FT PLANE
            </p>
          </div>
          <ul
            className={`${
              first ? "start-0" : "start-100"
            } flex items-center  ps-0 gap-[50px] duration-300  nav_set`}
          >
            <li className="list-none cursor-pointer text-white text-base fw-semibold font-ff-mon leading-7 not-italic relative before:absolute before:w-0 before:-bottom-1  before:right-full before:duration-500  before:h-[2px] before:bg-[#313EF7] hover:text-[#313EF7] before:contents'' hover:before:w-full hover:before:right-0">
              {" "}
              <a href="#location">All Flight</a>
            </li>
            <li className="list-none cursor-pointer text-white text-base fw-semibold font-ff-mon leading-7 not-italic relative before:absolute before:w-0 before:-bottom-1  before:right-full before:duration-500  before:h-[2px] before:bg-[#313EF7] hover:text-[#313EF7] before:contents'' hover:before:w-full hover:before:right-0">
              {" "}
              <a href="#schdule">Schedule</a>
            </li>
            <li className="list-none cursor-pointer text-white text-base fw-semibold font-ff-mon leading-7 not-italic relative before:absolute before:w-0 before:-bottom-1  before:right-full before:duration-500  before:h-[2px] before:bg-[#313EF7] hover:text-[#313EF7] before:contents'' hover:before:w-full hover:before:right-0">
              {" "}
              <a href="#Ticket">Passengers</a>
            </li>
            <li className="list-none cursor-pointer text-white text-base fw-semibold font-ff-mon leading-7 not-italic relative before:absolute before:w-0 before:-bottom-1  before:right-full before:duration-500  before:h-[2px] before:bg-[#313EF7] hover:text-[#313EF7] before:contents'' hover:before:w-full hover:before:right-0">
              {" "}
              <a href="#memories">Your Orders</a>
            </li>
            <button className="text-white text-base fw-semibold font-ff-mon leading-7 not-italic px-[40px] py-[10px] rounded-[59px]  border-[1px] border-[#FFF] hover:bg-white hover:text-[#010223] duration-300">
              Lets Fly
            </button>
          </ul>
          <button
            onClick={view}
            className=" z-30 fixed block border-none tracking-[3px] rotate-90 lg:hidden right-2 top-6   text-white"
          >
            |||
          </button>
        </div>
        {/* <p className=" text-[117.6px] text-center font-ff-pop  not-italic font-black text-[#43ff64d9] leading-[176.6px] tracking-[70.5px] uppercase">
          Aviation
        </p> */}
        <div className=" flex justify-center items-center">
          <div className="plane_move">
            <img className=" w-full" src={plane} alt="#" />
          </div>
        </div>
        <p className="text-white font-ff-mon font-bold tracking-[0.7px] not-italic text-center sm:leading-[72px] self-stretch capitalize text-3xl sm:text-5xl pb-1">
          Travel around the world
        </p>
        <p className="leading-normal text-white text-center not-italic font-ff-inter font-normal text-xs pb-10  pt-1 self-stretch">
          One of the advantages of being disorganized is that one is always
          having surprising discoveries
        </p>
      </div>
    </div>
  );
};

export default MyNav;
