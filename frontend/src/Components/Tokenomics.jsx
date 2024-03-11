import React from "react";
import sideLogo from "../assets/Frame 1824.png";
import Card1 from "../assets/Link1.png";
import Card2 from "../assets/Link2.png";
import Card3 from "../assets/Link (3).png";
import Card4 from "../assets/Link4.png";
import CardBackGround from "../assets/Tokenomsbackground.png";

import { FaqSection } from "./FaqSection";

export const Tokenomics = () => {
  const myStyle = {
    backgroundImage: `url(${CardBackGround})`,
    backgroundColor: `#141313`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  };

  const RoadMapBackground = {
    backgroundImage: `url(${CardBackGround})`,
    backgroundColor: `#141313`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  };

  return (
    <>
      <div className="lg:text-center lg:w-full py-10" style={myStyle}>
        <h1 className="font-Shojumaru text-heading text-3xl text-center mb-10">
          TOKENOMICS
        </h1>

        <div className="lg:flex justify-center mx-auto mt-5 flex-col md:flex-row">
          {/* First div with token details */}
          <div className="relative flex flex-col items-center justify-center mt-10 w-full md:w-auto md:mr-5">
            <div className="absolute lg:top-5 -top-10 font-Shojumaru text-white bg-heading mb-4 p-5 rounded-full">
              TOKEN DETAILS
            </div>
            <div className="text-white border border-2 border-BorderColor p-9 rounded-md bg-CardBackground">
              <p className="mb-2 font-zcool">
                Name{" "}
                <span className="text-heading ml-20 font-zcool">Saviour</span>
              </p>
              <p className="mb-2 font-zcool">
                Symbol{" "}
                <span className="text-heading ml-20 font-zcool">SVR</span>
              </p>
              <p className="mb-2 font-zcool">
                Total Supply{" "}
                <span className="text-heading ml-5 font-zcool">
                  1000 Trillion
                </span>
              </p>
              <p className="mb-2 font-zcool">
                Decimals{" "}
                <span className="text-heading ml-20 font-zcool">18</span>
              </p>
            </div>
          </div>

          {/* Second div with image */}
          <div className="flex justify-center items-center w-full md:w-auto md:ml-5 mt-5 md:mt-0">
            <img src={sideLogo} alt="" />
          </div>
        </div>
      </div>

      {/* ROAD MAP SEACTION */}

      <div
        className="py-10 px-5 flex flex-col items-center"
        style={RoadMapBackground}
      >
        <h1 className="font-Shojumaru text-heading text-3xl text-center mb-10">
          ROAD MAP
        </h1>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 justify-center items-center gap-10">
          <img src={Card1} alt="" className="w-[12rem]" />
          <img src={Card2} alt="" className="w-[12rem]" />
          <img src={Card3} alt="" className="w-[12rem]" />
          <img src={Card4} alt="" className="w-[12rem]" />
        </div>
      </div>

      <FaqSection />
    </>
  );
};

export default Tokenomics;
