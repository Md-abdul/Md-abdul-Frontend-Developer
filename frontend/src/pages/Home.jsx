import React, { useEffect, useState } from "react";
import home from "../assects/home.svg";
import { Navbar } from "./Navbar";
import { Products } from "./Products";
import star from "../assects/104.png";
import box from "../assects/21.png";
import reactSymbol from "../assects/7.png";
import "../style/Home.css";
import "aos/dist/aos.css";
import AOS from "aos";

export const Home = () => {

  useEffect(() => {
    AOS.init({ duration: 5500});
  }, []);

  return (
    <div className="bg-custome-backgroud-1 w-full">
      <Navbar />
      <img className="w-60 absolute -mt-20 hidden sm:block" src={box} alt="" />
      
      <div className="bg-custome-backgroud-1">
        <div className="center mt-20 md:mt-40 relative" data-aos="fade-up" data-aos-duration="3000">
          <img
            className="w-24 sm:w-60 absolute right-0 sm:right-96 hidden sm:block animate-slideRight"
            src={star}
            alt=""
          />
          <h1 className="text-white font-kanit font-bold text-4xl sm:text-7xl mb-4 relative tracking-wide animate-slideUp animate-on-scroll -mt-2" data-aos="fade-up" data-aos-duration="3000">
            YOUR GATEWAY
          </h1>
  
          <h1 className="text-white font-kanit font-bold text-4xl sm:text-7xl flex items-center justify-center">
            <span className="-ml-20 sm:-ml-96 mt-6 sm:mt-15 animate-slideLeft">TO</span>
            <span className="inline-block border" >
              <img
                src={home}
                alt=""

                className="inline-block absolute -top-20 right-[36rem] mt-10 w-42 -right-0 animate-slideUp animate-on-scroll " data-aos="fade-up" data-aos-duration="3000"
              />
            </span>
          </h1>
  
          <h1 className="text-white font-kanit font-bold text-4xl sm:text-7xl relative mt-10 animate-slideDown animate-on-scroll" data-aos="fade-up" data-aos-duration="3000">
            DEFI ON <span className="text-custom-button-yellow">BITCOIN</span>
          </h1>
        </div>
      </div>
      <img
        className="absolute right-10 w-24 sm:w-60 hidden sm:block"
        src={reactSymbol}
        alt=""
      />
      <div className="flex justify-center mt-20">
        <div className="w-3/4">
          <p className="text-white-text font-Inter" data-aos="fade-up" data-aos-duration="3000">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos
            officia deleniti tenetur praesentium labore deserunt numquam illum
            nihil perferendis eius, consectetur doloribus culpa dicta similique
            alias. At et sint placeat.
          </p>
          <br />
          <button className="bg-custom-button-yellow text-black p-0 rounded-full border">
            <button className="border-4 p-3 rounded-full">Get Started →</button>
            {/* Get Started → */}
          </button>
        </div>
      </div>
  
      <Products />
    </div>
  );
  
};

