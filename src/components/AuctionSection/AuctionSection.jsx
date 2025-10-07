import React, { useState } from "react";
import BidItems from "../BidItems/BidItems";
import { CiHeart } from "react-icons/ci";

const AuctionSection = () => {
  const [favorites, setFavorites] = useState([]);

  const handleAddFavorite = (item) => {
    if (!favorites.find((fav) => fav.id === item.id)) {
      setFavorites([...favorites, item]);
    }
  };

  // Calculate total bids amount
  const totalBidAmount = favorites.reduce(
    (acc, item) => acc + item.currentBidPrice,
    0
  );

  return (
    <section className="bg-slate-100 min-h-screen p-8">
      <div className="container mx-auto grid md:grid-cols-3 gap-6">
        {/* Left Section */}
        <div className="md:col-span-2">
          <BidItems handleAddFavorite={handleAddFavorite} />
        </div>

        {/* Right Section */}
        <div className="bg-white rounded-lg shadow-sm p-6 border-t border-b border-gray-200 flex flex-col justify-between">
          {/* Header */}
          <div className="flex items-center justify-center gap-2 mb-4">
            <CiHeart size={22} className="text-red-500" />
            <h3 className="text-lg font-semibold text-gray-800">
              Favorite Items
            </h3>
          </div>

          {/* Body */}
          {favorites.length === 0 ? (
            <div className="text-center text-gray-500">
              <p>No favorites yet</p>
              <p className="text-sm">
                Click the heart icon on any item to add it to your favorites
              </p>
            </div>
          ) : (
            <ul className="space-y-2 text-gray-700 text-sm text-center">
              {favorites.map((fav) => (
                <li
                  key={fav.id}
                  className="border-b border-gray-100 py-1 font-medium"
                >
                  {fav.title}
                </li>
              ))}
            </ul>
          )}

          {/* Footer */}
          <div className="mt-4 border-t border-gray-200 pt-4 text-center">
            <p className="text-gray-600 font-medium">Total bids Amount</p>
            <p className="text-xl font-bold text-gray-800">${totalBidAmount}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AuctionSection;
