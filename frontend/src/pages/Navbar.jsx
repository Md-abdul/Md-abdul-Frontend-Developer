import React from "react";
import logo from "../assects/Frame 427318968.svg";

export const Navbar = () => {
  return (
    <div className="flex justify-center ">
      <nav className="flex justify-between items-center bg-custom-brown px-4 py-2 w-full max-w-7xl rounded-md mt-5 fixed z-10">

              {/* { ------------------ website logo----------------}  */}
        <div className="cursor-pointer">
          <img src={logo} alt="Logo" className="h-8" />
        </div>

              {/* { ------------------ Navigation links ----------------}  */}
        <div className="flex gap-8 items-center">
          <a href="#about" className="text-white">
            About
          </a>
          <a href="#our Products" className="text-white">
            Our Products
          </a>
          <a href="#Token Utility" className="text-white">
            Token Utility
          </a>
          <a href="#roadmap" className="text-white">
            Roadmap
          </a>
          <button className="bg-custom-button-yellow text-black px-4 py-2 rounded">
            Connect Wallet
          </button>
        </div>
      </nav>
      {/* <img src={"../assects/home.svg"} alt="" /> */}
    </div>
  );
};
