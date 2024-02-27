import React from "react";
import home from "../assects/home.svg";
import { Navbar } from "./Navbar";
import { Products } from "./Products";
import star from "../assects/104.png";
import box from "../assects/21.png";
export const Home = () => {
  return (
    <div className="bg-custome-backgroud-1 ">
      <Navbar />
      <img className="w-60 absolute -mt-20" src={box} alt="" />
      <div className="center mt-40 relative">
        <img className="w-60 absolute right-96" src={star} alt="" />
        <h1 className="text-white font-kanit font-bold text-7xl mb-6 relative tracking-wide ">
          YOUR GATEWAY
        </h1>

        <h1 className="text-white font-kanit font-bold text-7xl flex items-center justify-center">
          <span className="-ml-96 mt-15">TO</span>
          <span className="inline-block border">
            <img
              src={home}
              alt=""
              className="inline-block absolute -top-20 -right-0. mt-9 w-42 "
              // style={{ verticalAlign: "middle" }}
            />
          </span>
        </h1>
        {/* <img className="w-20 absolute right-30" src={star} alt="" /> */}
        <h1 className="text-white font-kanit font-bold text-7xl relative mt-10">
          DEFI ON <span className="text-custom-button-yellow">BITCOIN</span>
        </h1>
      </div>

      <div className="flex justify-center mt-20">
        <div className="w-3/4">
          <p className="text-white-text font-Inter">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos
            officia deleniti tenetur praesentium labore deserunt numquam illum
            nihil perferendis eius, consectetur doloribus culpa dicta similique
            alias. At et sint placeat.
          </p>
          <br />
          <button className="bg-custom-button-yellow text-black p-3 rounded-full ">
            Get Started →
          </button>
        </div>
      </div>

      <Products />
    </div>
  );
};
