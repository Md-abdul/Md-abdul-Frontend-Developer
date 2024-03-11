import React from "react";
import copidImage from "../assets/fluent_copy-16-filled.png";
import Tokenomics from "./Tokenomics";
import BackG from "../assets/IdoBackGorund.png";
// import { Tokenomics } from "./Tokenomics";

export const Participate = () => {
  const myStyle = {
    backgroundImage: `url(${BackG})`,
    backgroundColor: `#141313`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    position: "relative",
    Opacity: "50%",
  };

  return (
    <>
      <div>
        <div style={myStyle}>
          <div className="font-Shojumaru text-heading text-3xl text-center py-10 mb-10">
            <h1>PARTICIPATE IN OUR IDO EVENT!</h1>
          </div>

          <div className="container mx-auto">
            <div className="item-center lg:flex lg:flex-row justify-center items-center space-around w-full sm:flex-col  ">
              {/* First parent div */}
              <div className=" sm:w-full">
                <div className="flex justify-center mt-10">
                  <div className="font-zcool text-white text-center w-3/4">
                    During our IDo event, you will gain early access to our
                    revolutionary ecosystem, designed to empower everyone to
                    share wealth and achieve success.
                  </div>
                </div>

                <div className="relative flex flex-col items-center justify-center mt-10">
                  <div className="absolute -top-10 font-Shojumaru text-white bg-heading mb-4 p-5 rounded-full">
                    TOKEN INFO
                  </div>
                  <div className="text-white border border-2 border-BorderColor p-9 rounded-md bg-CardBackground">
                    <p className="mb-2 font-zcool">
                      Total Token Supply{" "}
                      <span className="text-heading ml-10 font-zcool">20%</span>
                    </p>
                    <p className="mb-2 font-zcool">
                      Soft Cap{" "}
                      <span className="text-heading ml-10 font-zcool">
                        200BNB
                      </span>
                    </p>
                    <p className="mb-2 font-zcool">
                      Initial exchange rate{" "}
                      <span className="text-heading ml-10 font-zcool">
                        1BNB
                      </span>
                    </p>
                    <h2 className="mb-2 font-zcool">
                      Recommended Referral Commission{" "}
                    </h2>
                    <p className="mb-2 font-zcool">
                      1st Generation{" "}
                      <span className="text-heading ml-10 font-zcool">5%</span>
                    </p>
                    <p className="mb-2 font-zcool">
                      2nd Generation{" "}
                      <span className="text-heading ml-10 font-zcool">2%</span>
                    </p>
                  </div>
                </div>

                <div className="flex flex-col justify-center items-center mt-3 sm:mt-10 mb-10">
                  <button className="bg-gradient-button p-3 rounded-full flex items-center mb-4">
                    <h1 className="font-zcool">Connect Wallet</h1>
                  </button>
                  <h1 className="font-Shojumaru text-heading text-2xl text-center mb-4">
                    BECOME AN AFFILIATE & EARN <br /> 7% AS COMMISSION!
                  </h1>
                  <div className="relative">
                    <input
                      type="text"
                      placeholder="Generate a unique referral link"
                      className="bg-black border border-2 border-BorderColor px-5 py-2 mt-2 font-zcool text-BorderColor rounded-full px-10"
                    />
                    <button className="absolute top-0 right-0 bg-gradient-button px-4 py-2 rounded-full mt-2 mr-0.5">
                      Generate{" "}
                      <img
                        src={copidImage}
                        className="absolute ml-20 -mt-7"
                        alt=""
                      />
                    </button>
                  </div>
                </div>
              </div>

              {/* Second parent div */}
              <div className="lg:w-[50rem] lg:mr-60 sm:w-full mt-10">
                <div className="relative">
                  <div className="absolute -top-10 left-0 right-0 flex justify-center">
                    <div className="text-white border border-2 border-BorderColor p-3 text-5xl font-bold">
                      0
                    </div>
                    <div className="text-white border border-2 border-BorderColor p-3 text-5xl font-bold">
                      0
                    </div>
                    <div className="text-white border border-2 border-BorderColor p-3 text-5xl font-bold">
                      0
                    </div>
                    <div className="text-white border border-2 border-BorderColor p-3 text-5xl font-bold">
                      0
                    </div>
                  </div>
                  <div className="border border-3 border-BorderColor p-10 text-center rounded-md bg-CardBackground">
                    <h1 className="font-Shojumaru text-heading text-3xl">
                      PRESALE 1
                    </h1>
                    <h2 className="font-zcool text-white text-xl mt-3">
                      1 Saviour= 0.657 usdt
                    </h2>
                    <p className="font-zcool text-white text-xl mt-3">
                      Next Stage Price = 0.723 USDT
                    </p>
                    <p className="font-zcool text-white text-xl mt-3">
                      Sold - $34,56,56,7641,$50,00,000
                    </p>
                    <p className="font-zcool text-white text-xl mt-3">
                      Raised - $34,56,56,7641,$40,00,000
                    </p>
                    <input
                      type="text"
                      placeholder="Enter the amount (BNB)"
                      className="bg-black border border-2 border-BorderColor px-5 py-2 mt-3 font-zcool text-BorderColor rounded-full mt-3"
                    />
                    <br />
                    <input
                      type="text"
                      placeholder="Minimum Quantity to Buy"
                      className="bg-black border border-2 border-BorderColor px-5 py-2 mt-3 font-zcool text-BorderColor rounded-full mt-3"
                    />
                    <br />
                    <input
                      type="text"
                      placeholder="Maximum Quantity of Tokens"
                      className="bg-black border border-2 border-BorderColor px-5 py-2 mt-3 font-zcool text-BorderColor rounded-full mt-3"
                    />
                    <div className="gap-3 flex justify-center mt-5">
                      <button className="bg-gradient-button px-5 py-2 rounded-md">
                        Buy
                      </button>
                      <button className="bg-gradient-button px-3 py-2 rounded-md">
                        Claim Drop
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Tokenomics />
    </>
  );
};
