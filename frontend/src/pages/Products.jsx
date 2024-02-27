import React from "react";
import img1 from "../assects/4.png";
import img2 from "../assects/4 (1).png";
import img3 from "../assects/4 (2).png";
import img4 from "../assects/4 (3).png";
import img5 from "../assects/4 (4).png";
import headline from "../assects/headingline.png";
import { Slider } from "./Slider";
import { Token } from "./Token";
import { Footer } from "./Footer";
import backImg from "../assects/92.png";

export const Products = () => {
  return (
    <div className="mt-20 ">
      <div className="relative">
        <h1 className="text-white-text font-bold text-5xl">
          Our <span className="text-custom-button-yellow">Products </span>{" "}
        </h1>
        <img className="absolute left-[760px]" src={headline} alt="" />
        <p className="text-white-text mt-5">
          Pellentesque habitant morbi tristique senctus et netus et Pellentesque
          habitant morbi.
        </p>
      </div>

      <div className="flex justify-center mt-10 ">
        <div className="max-w-4xl grid grid-cols-1 gap-6 md:grid-cols-3">
          <div className="center flex flex-col items-center text-center text-white border border-custom-button-yellow p-4 rounded-lg">
            <img src={img1} alt="" className="mb-4" />
            <h1 className="border-b-2 border-gray-300 pb-2">
              Bita Marketplace
            </h1>
            <p>
              Pellentesque habitant morbi tristique senctus et netus et
              Pellentesque habitant morbi.tristique senctus et netus et
            </p>
          </div>
          <div className="center flex flex-col items-center text-center text-white border border-custom-button-yellow p-4 rounded-lg">
            <img src={img2} alt="" className="mb-4" />
            <h1 className="border-b-2 border-gray-300 pb-2">Another Item</h1>
            <p>
              Pellentesque habitant morbi tristique senctus et netus et
              Pellentesque habitant morbi.tristique senctus et netus et
            </p>{" "}
          </div>
          <div className="center flex flex-col items-center text-center text-white border border-custom-button-yellow p-4 rounded-lg">
            <img src={img3} alt="" className="mb-4" />
            <h1 className="border-b-2 border-gray-300 pb-2">Third Item</h1>
            <p>
              Pellentesque habitant morbi tristique senctus et netus et
              Pellentesque habitant morbi.tristique senctus et netus et
            </p>{" "}
          </div>
        </div>
      </div>

      <div className="flex justify-center mt-10 ml-96">
        <div className="max-w-4xl grid grid-cols-1 gap-6 md:grid-cols-3">
          <div className="center flex flex-col items-center text-center text-white border border-custom-button-yellow p-4 rounded-lg">
            <img src={img4} alt="" className="mb-4" />
            <h1 className="border-b-2 border-gray-300 pb-2">
              Bita Marketplace
            </h1>
            <p>
              Pellentesque habitant morbi tristique senctus et netus et
              Pellentesque habitant morbi.tristique senctus et netus et
            </p>
          </div>
          <div className="center flex flex-col items-center text-center text-white border border-custom-button-yellow p-4 rounded-lg">
            <img src={img5} alt="" className="mb-4" />
            <h1 className="border-b-2 border-gray-300 pb-2">Another Item</h1>
            <p>
              Pellentesque habitant morbi tristique senctus et netus et
              Pellentesque habitant morbi.tristique senctus et netus et
            </p>{" "}
          </div>
        </div>
      </div>

      <img className="absoulate w-60 -mt-96 " src={backImg} alt="" />
      <Slider />
      <Token />
      <Footer />
    </div>
  );
};
