import React from "react";
import { CiHeart } from "react-icons/ci";

const BidItem = ({ item, handleAddFavorite }) => {
  return (
    <div className="grid grid-cols-4 items-center py-3 border-b border-gray-100 hover:bg-slate-50 transition">
      {/* Image & Title */}
      <div className="flex items-center gap-3">
        <img
          src={item.image}
          alt={item.title}
          className="w-12 h-12 rounded object-cover"
        />
        <p className="text-blue-600 font-medium hover:underline cursor-pointer">
          {item.title}
        </p>
      </div>

      {/* Current Bid */}
      <p className="text-gray-700 font-semibold">${item.currentBidPrice}</p>

      {/* Time Left */}
      <p className="text-gray-500">{item.timeLeft}</p>

      {/* Heart Icon */}
      <button
        onClick={() => handleAddFavorite(item)}
        className="text-gray-600 hover:text-red-500 transition"
      >
        <CiHeart size={22} />
      </button>
    </div>
  );
};

export default BidItem;
