import React from "react";
import sideLogo from "../assets/Frame 1824.png";
import Card1 from "../assets/Link1.png";
import Card2 from "../assets/Link2.png";
import Card3 from "../assets/Link (3).png";
import Card4 from "../assets/Link4.png";
import { FAQ } from "./FAQ";

export const Tokenomics = () => {
  const myStyle = {
    backgroundImage: `url(${`https://s3-alpha-sig.figma.com/img/c869/1086/fe977eb60a56b9a690490c109cbb1a69?Expires=1710720000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=VdvCCq3nWIgGgQrmVDBTdioKqUqFIQcZCiIWy51KvjjWnyS5JbGGX9GsonTUlJU6Fk0~MK6SnZk0NYYOkwvR-LLag~jBAz-vUFK5H-sCMUOutgk6FQzz4dIvWTvzxw29ZDJzX7c1cSWkhJaBmaz9VVcRbcjZ9SGcGrp6v2xUoG9Xi~j97Aa4vTDn669gCGn8b8~SUguLrxae5yOFqJhfcWSp7VsmyIR7HiVqQuX67BfZLcyIo6ccFZyksRbveD2fpO9geGgDp5sxaurcKyeNxmlCgsGd20DZFPPTm-u6lpjjYHMbdrCl8iMWBxpOZMJOmVYTOG90-wPiu34C9j3W~Q__`})`,
    // height: "50rem",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  };

  const RoadMapBackground = {
    backgroundImage: `url(${`https://s3-alpha-sig.figma.com/img/7fb8/c9c7/2e63edc105c3925cfa651946f437c2fd?Expires=1710720000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=mpQ~XBGH8Etu6DJxAl6YWa4jBbzMaSNFAQij5lbx54cMhCDs348Er1b-BgNm0Nb4najBsiiu~iWLFyrspHp-icvE~20-LROBNJj2a12r2uaw7JLumnhMi3vR9bSGKSwRvmcZwkcnJp88J7ewaF2aSkZywd3~3QBWXd9MxDzzo~VTImfJ2208DliOXmEQupM9alQd2Ta-QU7V2e3wVr~l2tuEHXHyiGELFzSntLIhVenCL0rx2hF5gPtgcWRwOzfBKn7zyquLt8iplKe0xCPhypqLHlLAieDmeefiDvRzJbr6dq89eBCGf42AAnHLMCkkh0mPG91sdWJgJl1dCxs6sw__`})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  };

  return (
    <>
      <div className="lg:text-center lg:w-full p-5" style={myStyle}>
        <h1 className="font-Shojumaru text-heading text-3xl text-center">
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

        {/* For large screens */}
        <div style={RoadMapBackground} className="hidden sm:block p-5">
          <h1 className="font-Shojumaru text-heading text-2xl text-center">
            ROAD MAP
          </h1>

          <div className="flex justify-center items-center mt-5">
            <img src={Card1} alt="" />
            <img src={Card2} alt="" />
            <img src={Card3} alt="" />
            <img src={Card4} alt="" />
          </div>
        </div>

        {/* For small screens */}
        <div className="sm:hidden justify-center items-center" style={RoadMapBackground}>
        <h1 className="font-Shojumaru text-heading text-2xl text-center">
            ROAD MAP
          </h1>
          <div className="flex justify-center items-center mt-5 p-5">
            <img src={Card1} alt="" className="w-[10rem]" />
            <img src={Card2} alt="" className="w-[10rem]" />
          </div>
        </div>
      
      <FAQ/>
    </>
  );
};
