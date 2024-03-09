
import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import { Home } from "./Home";
import { FaBars, FaTimes } from "react-icons/fa"; // Import icons
import { WallectConnect } from "../Wallet/WallectConnect.tsx";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  const myStyle = {
    backgroundImage: `url(${`https://s3-alpha-sig.figma.com/img/894b/df6e/56b90bbef82ad188765f40d12a46caef?Expires=1710720000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=DDdFYUddbSsGEf0QSGti5Cg7lidhL0R2bXjELhUwEV916o-VcdPwS4WGlXiVo9qRbeVI3Bzkd7UeRjP5H9AIK~2dP0Dgrk3NdfoH1J1y0hFrK~r2g67GPoeRFsfSacSshmfm8shplqeqcyN3yxsP6hS~--sP2BcGeipjELPJo80BHbFSoq1upwAdmGAFj3FJLzFnyzlP99VUPkeHEICy5Je4UrlDLGe9u6-lz8VNaqBNOam0v4G-uz6~yOZA4AB7U80FxFl9xKiNZorNk5fz9iSdHLJpBr3x06ROZHk~OSrjocloLBn4wljeDzUnMV1lAqbBej0ir~2TOrumoQzZ7w__`})`,
    height: "40rem",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  };

  return (
    <>
      <div style={myStyle}>
        <nav className="bg-cover bg-center">
          <div className="max-w-7xl mx-auto px-4">
            <div className="flex justify-between h-16 items-center">
              <div className="flex items-center">
                <button
                  onClick={toggleNavbar}
                  className="mr-2 md:hidden inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white focus:outline-none  focus:text-white"
                >
                  {/* Use React Icons */}
                  {isOpen ? (
                    <FaTimes className="mt-10" />
                  ) : (
                    <FaBars className="mt-10" />
                  )}
                </button>

                <div className="flex items-center mt-20">
                  <img className="w-15" src={logo} alt="Saviour Logo" />
                  <span className="text-white text-lg font-zlogo mr-2 -mt-10">
                    Saviour
                  </span>
                </div>
              </div>
              <div className="hidden md:flex md:items-center md:space-x-4 flex-grow justify-center bg-black  mt-10 rounded-full font-2xl">
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
              <WallectConnect/>
            </div>
          </div>
          <div className={`${isOpen ? "block" : "hidden"} md:hidden`}>
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
        <Home />
      </div>
    </>
  );
};
