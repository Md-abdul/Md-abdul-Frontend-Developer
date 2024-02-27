import React from "react";
import img1 from "../assects/img1.png";
import img2 from "../assects/img2.png";
import img3 from "../assects/Frame 1.png";

import logo from "../assects/Logo Yellow 1.png";

export const Footer = () => {
  return (
    <>
      {/* <div className='bg-footer-bakcground '> */}
      <div className="bg-gradient-custom-footer relative">
        <div class="flex justify-between p-10 border-2 w-1/2 p-5 rounded-md items-center border-custom-button-yellow bg-custome-backgroud-1 mx-auto absolute -top-10 left-96">
          <div class="font-bold text-white text-3xl ">
            Join Our <br />{" "}
            <span class="text-custom-button-yellow">Community</span>
          </div>
          <div class="flex space-x-2">
            <img
              src={img1}
              alt=""
              className="bg-custom-button-yellow rounded-full"
            />
            <img
              src={img2}
              alt=""
              className="bg-custom-button-yellow rounded-full "
            />
            <img
              src={img3}
              alt=""
              className="bg-custom-button-yellow rounded-full"
            />
          </div>
        </div>
        <div className=" bg-footer-bakcground -mt-35 ">
          <div className="flex justify-center mt-20">
            <img className="mt-20" src={logo} alt="" />
          </div>
          <h2 class="text-gray-200">2023 All rights reserved</h2>
          <br />
          <br />
        </div>
      </div>
    </>
  );
};
