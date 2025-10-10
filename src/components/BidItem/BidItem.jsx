// BidItem.jsx - UpdatedBidItem.jsx - Updated with Toast
import React, { useState } from "react";
import { CiHeart } from "react-icons/ci";
import { FaHeart } from "react-icons/fa";

const BidItem = ({ item, handleAddToFavorites }) => {
  const [isFavorite, setIsFavorite] = useState(false);

  const handleClick = () => {
    setIsFavorite(!isFavorite);
    handleAddToFavorites(item);
  };

  return (
    <div className="grid grid-cols-4 items-center border-b border-black py-3 text-center">
      {/* Image + Title */}
      <div className="flex items-center gap-3 justify-start">
        <img
          src={item.image}
          alt={item.title}
          className="w-12 h-12 rounded object-cover"
        />
        <h3 className="text-black font-medium">{item.title}</h3>
      </div>

      {/* Current Bid */}
      <p className="text-gray-700 font-medium text-center">${item.currentBidPrice}</p>

      {/* Time Left */}
      <p className="text-gray-600 text-center">{item.timeLeft}</p>

      {/* Heart Button */}
      <div className="flex justify-center items-center">
        <button
          onClick={handleClick}
          className="flex items-center justify-center"
        >
          {isFavorite ? (
            <FaHeart size={22} className="text-red-500 transition-colors duration-200" />
          ) : (
            <CiHeart size={22} className="text-gray-500 hover:text-red-500 transition-colors duration-200" />
          )}
        </button>
      </div>
    </div>
  );
};

export default BidItem;

























































































































































































































































































































































