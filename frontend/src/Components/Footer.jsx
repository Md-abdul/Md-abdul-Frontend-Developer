import React from "react";
import footerLogo from "../assets/footer logo.png";
import twitter from "../assets/twitter.png";
import sents from "../assets/post arrow.png";
import mail from "../assets/clarity_email-solid.png";

export const Footer = () => {
  return (
    <div className="bg-black flex flex-col justify-center items-center text-white py-10">
      <div>
        <img src={footerLogo} alt="Footer Logo" />
      </div>
      <h1 className="text-xl font-bold mt-4 mb-2 text-heading">SITEMAP</h1>
      <div className="flex flex-wrap justify-center gap-4 font-xl">
        <p>Home</p>
        <p>IDO</p>
        <p>Tokenomics</p>
        <p>Road Map</p>
        <p>WhitePaper</p>
        <p>Pledge</p>
        <p>NFT</p>
        <p>Games</p>
      </div>
      <div className="flex mt-4">
        <img src={twitter} alt="Twitter" className="mr-4" />
        <img src={sents} alt="Post Arrow" className="mr-4" />
        <img src={mail} alt="Email" />
      </div>
    </div>
  );
};
