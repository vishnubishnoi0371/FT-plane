import React, { useState, useEffect } from "react";
import Loadd from "../Assets/images/plane.webp";

import AOS from "aos";
import "aos/dist/aos.css";

const PreLoad = () => {
  useEffect(() => {
    AOS.init({
      once: true,
      duration: 3000,
    });
  }, []);
  const [Load, setLoad] = useState(false);
  useEffect(() => {
    const delay = setTimeout(() => {
      setLoad(true);
      document.body.style.overflow = "";
    }, 2500);

    return () => clearTimeout(delay);
  }, []);

  useEffect(() => {
    document.body.style.overflow = "hidden";
  }, []);
  return (
    <div>
      <div
        className="preloader min-h-full z-50 min-w-full flex items-center justify-center  bg-black fixed top-0 start-0"
        style={{ display: Load ? "none" : "block", zIndex: 10 }}
      >
        <div data-aos="zoom-in">
          <div className="flex items-center justify-center min-h-full">
            <img className="w-[50%] h-[50%] mt-[200px]" src={Loadd} alt="#" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PreLoad;
