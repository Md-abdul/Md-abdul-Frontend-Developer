// import React from "react";
// import footerLogo from "../assets/footer logo.png";
// import twitter from "../assets/twitter.png";
// import sents from "../assets/post arrow.png";
// import mail from "../assets/clarity_email-solid.png";

// export const Footer = () => {
//   return (
//     <div
//       className="flex flex-col justify-center items-center text-white py-10"
//       style={{
//         background: "linear-gradient(180deg, #030405 0%, #120101 100%)",
//       }}
//     >
//       <div>
//         <img src={footerLogo} alt="Footer Logo" />
//       </div>
//       <h1 className="text-xl font-bold mt-4 mb-2 text-heading">SITEMAP</h1>
//       <div className="flex flex-wrap justify-center gap-4 font-xl">
//         <p>Home</p>
//         <p>IDO</p>
//         <p>Tokenomics</p>
//         <p>Road Map</p>

//         <p>WhitePaper</p>
//         <p>Pledge</p>
//         <p>NFT</p>
//         <p>Games</p>
//       </div>
//       <div className="flex mt-4">
//         <img src={twitter} alt="Twitter" className="mr-4" />
//         <img src={sents} alt="Post Arrow" className="mr-4" />
//         <img src={mail} alt="Email" />
//       </div>
//     </div>
//   );
// };

import React from "react";
import footerLogo from "../assets/footer logo.png";
import twitter from "../assets/twitter.png";
import sents from "../assets/post arrow.png";
import mail from "../assets/clarity_email-solid.png";

export const Footer = () => {
  return (
    <div
      className="flex flex-col justify-center items-center text-white py-10"
      style={{
        background: "linear-gradient(180deg, #030405 0%, #120101 100%)",
      }}
    >
      <div>
        <img src={footerLogo} alt="Footer Logo" />
      </div>
      <h1 className="text-xl font-bold mt-4 mb-2 text-heading">SITEMAP</h1>
    

      <div className="flex flex-wrap justify-center items-center gap-5 md:gap-4 md:flex-row md:w-full mt-5">
        <div className="flex flex-wrap justify-center items-center gap-10">
          <p className="font-semibold poppins">Home</p>
          <p className="font-semibold poppins">IDO</p>
          <p className="font-semibold poppins">Tokenomics</p>
          <p className="font-semibold poppins">Road Map</p>
        </div>
        <div className="flex flex-wrap justify-center items-center gap-10">
          <p className="font-semibold poppins">Whitepaper</p>
          <p className="font-semibold poppins">Pledge</p>
          <p className="font-semibold poppins">NFT</p>
          <p className="font-semibold poppins">Games</p>
        </div>
      </div>

      <div className="flex mt-4">
        <img src={twitter} alt="Twitter" className="mr-4" />
        <img src={sents} alt="Post Arrow" className="mr-4" />
        <img src={mail} alt="Email" />
      </div>
    </div>
  );
};
