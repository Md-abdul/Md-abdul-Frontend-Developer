import React from "react";
import img1 from "../assects/4.png";
export const Products = () => {
  return (
    <div className="mt-20">
      <div>
        <h1 className="text-white-text font-bold text-5xl">
          Our <span className="text-custom-button-yellow">Products</span>{" "}
        </h1>
        <p className="text-white-text">
          Pellentesque habitant morbi tristique senctus et netus et Pellentesque
          habitant morbi.
        </p>
      </div>

      <div className="flex justify-center mt-10 ">
        <div className="max-w-4xl grid grid-cols-1 gap-6 md:grid-cols-3">
          <div className="center flex flex-col items-center text-center text-white border border-custom-button-yellow p-4 rounded-lg">
            <img src={img1} alt="" className="mb-4" />
            <h1 className="border-b-2 border-gray-300 pb-2">
              Bita Marketplace
            </h1>
            <p>
              Pellentesque habitant morbi tristique senctus et netus et
              Pellentesque habitant morbi.tristique senctus et netus et
            </p>
          </div>
          <div className="center flex flex-col items-center text-center text-white border border-custom-button-yellow p-4 rounded-lg">
            <img src={img1} alt="" className="mb-4" />
            <h1 className="border-b-2 border-gray-300 pb-2">Another Item</h1>
            <p>
              Pellentesque habitant morbi tristique senctus et netus et
              Pellentesque habitant morbi.tristique senctus et netus et
            </p>{" "}
          </div>
          <div className="center flex flex-col items-center text-center text-white border border-custom-button-yellow p-4 rounded-lg">
            <img src={img1} alt="" className="mb-4" />
            <h1 className="border-b-2 border-gray-300 pb-2">Third Item</h1>
            <p>
              Pellentesque habitant morbi tristique senctus et netus et
              Pellentesque habitant morbi.tristique senctus et netus et
            </p>{" "}
          </div>

          <div className="center flex flex-col items-center text-center text-white border border-custom-button-yellow p-4 rounded-lg">
            <img src={img1} alt="" className="mb-4" />
            <h1 className="border-b-2 border-gray-300 pb-2">Third Item</h1>
            <p>
              Pellentesque habitant morbi tristique senctus et netus et
              Pellentesque habitant morbi.tristique senctus et netus et
            </p>{" "}
          </div>
          <div className="center flex flex-col items-center text-center text-white border border-custom-button-yellow p-4 rounded-lg">
            <img src={img1} alt="" className="mb-4" />
            <h1 className="border-b-2 border-gray-300 pb-2">Third Item</h1>
            <p>
              Pellentesque habitant morbi tristique senctus et netus et
              Pellentesque habitant morbi.tristique senctus et netus et
            </p>{" "}
          </div>
          {/* Add more child divs as needed */}
        </div>
      </div>

      <div className="bg-gradient-custom">
        <div><h1>ksjfklslfjlsfksjl</h1></div>
      </div>
    </div>
  );
};
