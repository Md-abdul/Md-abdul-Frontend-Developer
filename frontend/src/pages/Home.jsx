import React from "react";
import home from "../assects/home.svg";
import { Navbar } from "./Navbar";
import { Products } from "./Products";
export const Home = () => {
  return (
    <div className="bg-custome-backgroud-1">
      <Navbar />

      {/* <div className="center mt-20">
        <h1 className="text-white font-kanit font-bold text-5xl">
          YOUR GATEWAY
        </h1>
        <h1 className="text-white font-kanit font-bold text-5xl flex items-center justify-center">
  <span className="mr-2">TO</span>
  <span className="inline-block">
    <img src={home} alt="" className="inline-block" style={{ verticalAlign: 'middle' }} />
  </span>
</h1>


        <h1 className="text-white font-kanit font-bold text-5xl">
          DEFI ON <span className="text-custom-button-yellow">BITCOIN</span> 
        </h1>
      </div> */}

<div className="center mt-20">
  <h1 className="text-white font-kanit font-bold text-5xl mb-2">
    YOUR GATEWAY
  </h1>
  <h1 className="text-white font-kanit font-bold text-5xl flex items-center justify-center">
    <span className="mr-2">TO</span>
    <span className="inline-block">
      <img src={home} alt="" className="inline-block" style={{ verticalAlign: 'middle' }} />
    </span>
  </h1>
</div>

      <div className="center mt-20">
        <h1 className="text-white font-kanit font-bold text-5xl mb-4 relative tracking-wide">
          YOUR GATEWAY
        </h1>
        <h1 className="text-white font-kanit font-bold text-5xl flex items-center justify-center">
          <span className="mr-1">TO</span>
          <span className="inline-block border">
            <img
              src={home}
              alt=""
              className="inline-block"
              style={{ verticalAlign: "middle" }}
              
            />
          </span>
        </h1>
        <h1 className="text-white font-kanit font-bold text-5xl relative">
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
