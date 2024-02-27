import React, { useEffect, useState } from "react";
import "../style/slider.css";
import phase1 from "../assects/slider1.png";
import phase2 from "../assects/slider2.png";

import "aos/dist/aos.css";
import AOS from "aos";
import phase3 from "../assects/slider3.png";
const slidesData = [
  <div>
    <img src={phase1} alt="" />
    <div className="bg-custome-backgroud-1 rounded-lg shadow-lg p-5  text-white-text -mt-7">
      <div className="bg-custome-backgroud-1 border border-custom-button-yellow shadow-multiple p-2 text-white rounded-lg">
        <h1 className="text-xl font-bold mb-2">
          Intial Design and Development44
        </h1>
        <h3 className="text-lg mb-2">Q4 2023</h3>
        <p className="">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam
          repellat eligendi quibusdam accusamus dicta? Qui alias debitis et
          deleniti, consectetur, omnis doloribus beatae ipsum maiores, quo fugit
          labore numquam ab?
        </p>
      </div>
    </div>
  </div>,

  <div>
    <img src={phase2} alt="" />
    <div className="bg-custome-backgroud-1 rounded-lg shadow-lg p-5  text-white-text -mt-7">
      <div className="bg-custome-backgroud-1 border border-custom-button-yellow shadow-multiple p-2 text-white rounded-lg">
        <h1 className="text-xl font-bold mb-2">
          Release and Testing of Bita Market & Bridge
        </h1>
        <h3 className="text-lg mb-2">Q2 2024</h3>
        <p className="">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam
          repellat eligendi quibusdam accusamus dicta? Qui alias debitis et
          deleniti, consectetur, omnis doloribus beatae ipsum maiores, quo fugit
          labore numquam ab?
        </p>
      </div>
    </div>{" "}
  </div>,

  <div>
    <img src={phase3} alt="" />
    <div className="bg-custome-backgroud-1 rounded-lg shadow-lg p-5  text-white-text -mt-7">
      <div className="bg-custome-backgroud-1 border border-custom-button-yellow shadow-multiple p-2 text-white rounded-lg">
        <h1 className="text-xl font-bold mb-2">
          Bitapad & Rollout BitCoin Bridge
        </h1>
        <h3 className="text-lg mb-2">Q4 2024</h3>
        <p className="">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam
          repellat eligendi quibusdam accusamus dicta? Qui alias debitis et
          deleniti, consectetur, omnis doloribus beatae ipsum maiores, quo fugit
          labore numquam ab?
        </p>
      </div>
    </div>
  </div>,

  <div>
    <img src={phase1} alt="" />
    <div className="bg-custome-backgroud-1 rounded-lg shadow-lg p-5  text-white-text -mt-7">
      <div className="bg-custome-backgroud-1 border border-custom-button-yellow shadow-multiple p-2 text-white rounded-lg">
        <h1 className="text-xl font-bold mb-2">
          Intial Design and Development44
        </h1>
        <h3 className="text-lg mb-2">Q4 2023</h3>
        <p className="">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam
          repellat eligendi quibusdam accusamus dicta? Qui alias debitis et
          deleniti, consectetur, omnis doloribus beatae ipsum maiores, quo fugit
          labore numquam ab?
        </p>
      </div>
    </div>
  </div>,

  <div>
    <img src={phase2} alt="" />
    <div className="bg-custome-backgroud-1 rounded-lg shadow-lg p-5  text-white-text -mt-7">
      <div className="bg-custome-backgroud-1 border border-custom-button-yellow shadow-multiple p-2 text-white rounded-lg">
        <h1 className="text-xl font-bold mb-2">
          Release and Testing of Bita Market & Bridge
        </h1>
        <h3 className="text-lg mb-2">Q2 2024</h3>
        <p className="">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam
          repellat eligendi quibusdam accusamus dicta? Qui alias debitis et
          deleniti, consectetur, omnis doloribus beatae ipsum maiores, quo fugit
          labore numquam ab?
        </p>
      </div>
    </div>{" "}
  </div>,

  <div>
    <img src={phase3} alt="" />
    <div className="bg-custome-backgroud-1 rounded-lg shadow-lg p-5  text-white-text -mt-7">
      <div className="bg-custome-backgroud-1 border border-custom-button-yellow shadow-multiple p-2 text-white rounded-lg">
        <h1 className="text-xl font-bold mb-2">
          Bitapad & Rollout BitCoin Bridge
        </h1>
        <h3 className="text-lg mb-2">Q4 2024</h3>
        <p className="">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam
          repellat eligendi quibusdam accusamus dicta? Qui alias debitis et
          deleniti, consectetur, omnis doloribus beatae ipsum maiores, quo fugit
          labore numquam ab?
        </p>
      </div>
    </div>
  </div>,
];




export const Slider = () => {
  const [startIndex, setStartIndex] = useState(0);

  useEffect(() => {
    AOS.init({ duration: 5500});
  }, []);

  const nextSlide = () => {
    setStartIndex((prevIndex) =>
      prevIndex + getSlidesPerPage() < slidesData.length ? prevIndex + 1 : prevIndex
    );
  };

  const prevSlide = () => {
    setStartIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : prevIndex));
  };

  const getSlidesPerPage = () => {
    if (window.innerWidth >= 1024) {
      return 3; 
    } else if (window.innerWidth >= 768) {
      return 2; 
    } else {
      return 1;
    }
  };

  window.addEventListener("resize", () => {
    setStartIndex(0); 
  });

  return (
    <div className="relative bg-gradient-custom">
      <h1 className="text-custome-backgroud-1 font-bold text-5xl w-96 mr-10 mt-20">
        Roadmap
      </h1>

      <div className="flex justify-center items-center space-x-4 mt-20">
        <button className="focus:outline-none font-bold" onClick={prevSlide}>
          {"<"}
        </button>

        {slidesData
          .slice(startIndex, startIndex + getSlidesPerPage())
          .map((el, i) => (
            <div key={i} className={`w-80`} data-aos="fade-up" data-aos-duration="3000" >
              {el}
            </div>
          ))}

        <button className="focus:outline-none font-bold" onClick={nextSlide}>
          {">"}
        </button>
      </div>
    </div>
  );
};