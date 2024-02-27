import React, { useEffect } from "react";
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
import "../style/Home.css" 
import "aos/dist/aos.css";
import AOS from "aos";
export const Products = () => {

  useEffect(() => {
    AOS.init({ duration: 5500});
  }, []);

  return (
    <div className="mt-20 ">
      <div className="relative  " data-aos="fade-up" data-aos-duration="3000"  >
        <h1 className="text-white-text font-bold text-5xl animate-slideUp">
          Our <span className="text-custom-button-yellow">Products </span>{" "}
        </h1>
        <img
          className="absolute left-[760px] hidden sm:block"
          src={headline}
          alt=""
        />
        <p className="text-white-text mt-5" data-aos="fade-up" data-aos-duration="3000" >
          Pellentesque habitant morbi tristique senctus et netus et Pellentesque
          habitant morbi.
        </p>
      </div>

      <div className="flex justify-center mt-10 ">
        <div className="max-w-4xl grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3" data-aos="fade-up" data-aos-duration="3000" >
          <div className="center flex flex-col items-center text-center text-white border border-custom-button-yellow p-4 rounded-lg">
            <img
              className="mb-4 hover:-translate-y-10 hover:-translate-x-5 transition-transform duration-300 ease-in-out"
              src={img1}
              alt=""
            />
            <h1 className="border-b-2 border-gray-300 pb-2">
              Bita Marketplace
            </h1>
            <p>
              Pellentesque habitant morbi tristique senctus et netus et
              Pellentesque habitant morbi.tristique senctus et netus et
            </p>
          </div>
          <div className="center flex flex-col items-center text-center text-white border border-custom-button-yellow p-4 rounded-lg">
            <img
              className="mb-4 hover:-translate-y-10 hover:-translate-x-5 transition-transform duration-300 ease-in-out"
              src={img2}
              alt=""
            />
            <h1 className="border-b-2 border-gray-300 pb-2">Another Item</h1>
            <p>
              Pellentesque habitant morbi tristique senctus et netus et
              Pellentesque habitant morbi.tristique senctus et netus et
            </p>{" "}
          </div>
          <div className="center flex flex-col items-center text-center text-white border border-custom-button-yellow p-4 rounded-lg">
            <img
              className="mb-4 hover:-translate-y-10 hover:-translate-x-5 transition-transform duration-300 ease-in-out"
              src={img3}
              alt=""
            />
            <h1 className="border-b-2 border-gray-300 pb-2">Third Item</h1>
            <p>
              Pellentesque habitant morbi tristique senctus et netus et
              Pellentesque habitant morbi.tristique senctus et netus et
            </p>{" "}
          </div>
        </div>
      </div>

      <div className="flex justify-center mt-10 lg:ml-96" data-aos="fade-up" data-aos-duration="3000" >
        <div className="max-w-4xl grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          <div className="center flex flex-col items-center text-center text-white border border-custom-button-yellow p-4 rounded-lg">
            <img
              className="mb-4 hover:-translate-y-10 hover:-translate-x-5 transition-transform duration-300 ease-in-out"
              src={img4}
              alt=""
            />
            <h1 className="border-b-2 border-gray-300 pb-2">
              Bita Marketplace
            </h1>
            <p>
              Pellentesque habitant morbi tristique senctus et netus et
              Pellentesque habitant morbi.tristique senctus et netus et
            </p>
          </div>
          <div className="center flex flex-col items-center text-center text-white border border-custom-button-yellow p-4 rounded-lg">
            <img
              className="mb-4 hover:-translate-y-10 hover:-translate-x-5 transition-transform duration-300 ease-in-out"
              src={img5}
              alt=""
            />
            <h1 className="border-b-2 border-gray-300 pb-2">Another Item</h1>
            <p>
              Pellentesque habitant morbi tristique senctus et netus et
              Pellentesque habitant morbi.tristique senctus et netus et
            </p>{" "}
          </div>
        </div>
      </div>

      <img
        className="absoulate w-60 -mt-96 hidden sm:block"
        src={backImg}
        alt=""
      />

      <Slider />
      <Token />
      <Footer />
    </div>
  );
};
