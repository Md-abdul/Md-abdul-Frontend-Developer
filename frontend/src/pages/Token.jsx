import React, { useEffect, useState } from "react";
import headline from "../assects/headingline.png";
import axios from "axios";
export const Token = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchdata = async () => {
    try {
      const response = await fetch("https://matrix-backend-c074.onrender.com/api/tokens");
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const characters = await response.json();
      setData(characters);
      setLoading(false);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchdata();
  }, [data]);

  return (
    <>
      <div className="relative">
        <h1 class="text-white font-bold text-5xl mt-20">
          Our <span className="text-custom-button-yellow">Tokens</span>
        </h1>
        <img className="absolute left-[760px]" src={headline} alt="" />
        <p className="text-white-text mt-5">
          Pellentesque habitant morbi tristique senctus et netus et Pellentesque
          habitant morbi.
        </p>
      </div>

      <div>
        <div className="container mx-auto flex justify-center items-center">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {data.map((el, i) => (
              <div key={i} className="text-white bg-footer-bakcground w-60 p-4 rounded mt-10 border-custom-button-yellow border-2">
                <div className="flex justify-center">
                  <img className="w-20" src={el.img} alt="" />
                </div>
                <h1 className="text-white">Symbol :-    {el.title}</h1>
                <p className="text-white"> Decimals :- {el.symbol}</p>
                <p className="text-white">Market Cap :- {el.decimal}</p>
                <p className="text-white">Chain :- {el.Marketcap}</p>
                <p className="text-white">{el.Chain}</p>
                <div className="flex justify-center mt-4">
                  <button className="bg-custom-button-yellow text-black p-3 rounded-full border">
                    Detials →
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ================== symbol: String,
    decimal: Number,
    Marketcap: String,
    Chain: String===================== */}
    </>
  );
};
