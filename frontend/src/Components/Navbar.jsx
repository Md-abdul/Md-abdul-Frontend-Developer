import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import Logo from "../assets/Brick_Matrix.png";
import { IoIosArrowDown } from "react-icons/io";
import { FaBars, FaTimes } from "react-icons/fa"; 
import { WallectConnect } from "../Wallet/WallectConnect.tsx";
import { Participate } from "../Components/Participate";
import NavBackGround from "../assets/NavBackGround.jpg";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  const myStyle = {
    backgroundImage: `url(${NavBackGround})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  };

  return (
    <>
      <div className="bg-my-image h-screen bg-cover bg-center" style={myStyle}>
        <nav className="bg-cover bg-center relative">
          <div className="max-w-7xl mx-auto px-4">
            <div className="flex justify-between h-16 items-center">
              <div className="flex items-center">
                <button
                  onClick={toggleNavbar}
                  className="mr-2 md:hidden inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white focus:outline-none  focus:text-white"
                >
                  
                  {isOpen ? (
                    <FaTimes className="mt-10" />
                  ) : (
                    <FaBars className="mt-10" />
                  )}
                </button>

                <div className="flex items-center mt-20">
                  <img className="w-15" src={logo} alt="Saviour Logo" />
                  <span className="text-white text-lg font-zlogo mr-2 -mt-10 font-2xl">
                    Saviour
                  </span>
                </div>
              </div>
            
              <div className="hidden md:flex md:items-center md:space-x-4 flex-grow justify-center mt-10 font-2xl px-4">
                <div className="bg-black rounded-full px-6 py-3">
                  <Link
                    to="/home"
                    className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-zcool"
                  >
                    Home
                  </Link>
                  <Link
                    to=""
                    className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-zcool"
                  >
                    IDD
                  </Link>
                  <Link
                    to=""
                    className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-zcool"
                  >
                    Tokenomics
                  </Link>
                  <Link
                    to=""
                    className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-zcool"
                  >
                    Roadmap
                  </Link>
                  <Link
                    to=""
                    className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-zcool"
                  >
                    Coming Soon
                  </Link>
                </div>
              </div>
              <div className=""><WallectConnect /></div>
              
            </div>

            <div className="flex justify-center items-center mt-60 sm:mt-50">
              <h1 className="text-center text-2xl lg:text-4xl text-white font-Shojumaru leading-tight lg:leading-tight lg:mt-4 lg:mb-4 sm:mt-90 ">
                WHERE BLOCKCHAIN HEROES THRIVE, RESCUING
                <span className="block font-normal">
                  DREAMS, ELEVATING FORTUNES.
                </span>
              </h1>
            </div>
          </div>
          <div
            className={`${
              isOpen ? "absolute top-16 left-0 w-full" : "hidden"
            } md:hidden`}
          >
            <div className="px-2 pt-2 pb-3 sm:px-3 ">
              <Link
                to=""
                className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-zcool"
              >
                Home
              </Link>
              <Link
                to=""
                className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-zcool"
              >
                IDD
              </Link>
              <Link
                to=""
                className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-zcool"
              >
                Tokenomics
              </Link>
              <Link
                to=""
                className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-zcool"
              >
                Roadmap
              </Link>
              <Link
                to=""
                className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-zcool"
              >
                Coming Soon
              </Link>
            </div>
            <div className="px-2 pt-2 pb-3 sm:px-3"></div>
          </div>
        </nav>
      </div>

      <div className="-mt-20 flex flex-col lg:flex-row items-center justify-center bg-black px-4 space-between lg:mt-13">
        <div className="text-white lg:ml-40 lg:order-1 order-2 lg:w-1/2">
          <h1 className="font-Shojumaru text-heading lg:text-5xl mt-10 text-center lg:text-left sm:text-4xl">
            INTRODUCTION
          </h1>
          <div className="font-zcool mt-8 text-center lg:text-left">
            <h3>We've all been in the mud once, and now we've</h3>
            <h3>decided to fight it out.</h3>
            <h3>Pay tribute to those Pioneers of WEB 3 and the</h3>
            <h3>warriors who dedicated their love to the </h3>
            <h3>blockchain. Save the lucky ones alive, join us to</h3>
            <h3>save the future!</h3>
            <h3>
              Our mission is to empower everyone to share wealth and succeed.
            </h3>
            <span className="text-gray-500">read more ...</span>
          </div>

          <div className="flex mt-10 lg:order-3 order-3 justify-center lg:justify-start">
            <button className="bg-gradient-button p-3 rounded-full flex items-center">
              <h1 className="font-zcool">Documents</h1>
              <IoIosArrowDown className="ml-2" />
            </button>
          </div>
        </div>

        <div className="mb-8 lg:mb-0 lg:order-2 order-1 sm:w-1/2 flex justify-center">
          <img src={Logo} alt="Logo" />
        </div>
      </div>

      <Participate />

      
    </>
  );
};
