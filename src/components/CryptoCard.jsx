import { Info, TrendingDown, TrendingUp } from "lucide-react";
import React from "react";

const CryptoCard = ({ coin }) => {
  return (
    <div className="min-w-[200px] min-h-[200px] bg-gray-600 rounded-md p-2 flex flex-col gap-[10px] justify-between">
      <div className="flex justify-between items-center">
        <div className="w-10 h-10 bg-red-500 rounded-full">
          <img src={coin.image} alt="" />
        </div>
        <span className="font-bold text-[18px]">
          {coin.symbol.toUpperCase()}
        </span>
      </div>
      <span className="text-gray-300 font-semibold">{coin.name}</span>
      <div className="flex justify-between items-center">
        <span className="text-[20px] font-bold">{coin.current_price} $</span>
        <span className="flex items-center gap-[5px]">
          {coin.price_change_percentage_24h}{" "}
          <span>
            {coin.price_change_percentage_24h < 0 ? (
              <TrendingDown size={20} color="red" />
            ) : (
              <TrendingUp size={20} color="aqua" />
            )}
          </span>
        </span>
      </div>
      <div className="flex justify-between items-center">
        <div className="text-green-500">
          <Info />
        </div>
        <button className="bg-yellow-500 rounded-md py-[2px] px-3">
          Trade
        </button>
      </div>
    </div>
  );
};

export default CryptoCard;
