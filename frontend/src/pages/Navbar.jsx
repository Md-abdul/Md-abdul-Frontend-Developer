import React, { useState } from "react";
import logo from "../assects/Frame 427318968.svg";

export const Navbar = () => {
  const [showLinks, setShowLinks] = useState(false);

  return (
    <div className="flex justify-center ">
      <nav className="flex flex-col sm:flex-row justify-between items-center bg-custom-brown px-4 py-2 w-full max-w-7xl rounded-md mt-5 fixed z-10">
       
        <div className="flex items-center">
          <div className="cursor-pointer mr-8">
            <img src={logo} alt="Logo" className="h-8" />
          </div>
          
          <div className="block sm:hidden">
            <button onClick={() => setShowLinks(!showLinks)}>
              <svg
                className="h-6 w-6 fill-current text-white"
                viewBox="0 0 24 24"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M4 6H20V8H4V6ZM4 12H20V14H4V12ZM4 18H20V20H4V18Z"
                />
              </svg>
            </button>
          </div>
        </div>
        

        <div className={`flex ${showLinks ? 'block' : 'hidden'} sm:flex flex-col sm:flex-row gap-6 items-center`}>
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
    </div>
  );
};
