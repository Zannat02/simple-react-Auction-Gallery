import React, { useEffect, useState } from "react";
import BidItem from "../BidItem/BidItem";

const BidItems = ({ handleAddFavorite }) => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch("/Bid.json")
      .then((res) => res.json())
      .then((data) => setItems(data));
  }, []);

  return (
    <div className="bg-white rounded-lg shadow-sm p-6">
      {/* Header */}
      <div className="mb-5">
        <h2 className="text-xl font-bold text-gray-800">Active Auctions</h2>
        <p className="text-gray-500 text-sm">
          Discover and bid on extraordinary items
        </p>
      </div>

      {/* Table Headings */}
      <div className="grid grid-cols-4 font-semibold text-gray-700 border-b border-gray-200 pb-2 mb-2">
        <p>Items</p>
        <p>Current Bid</p>
        <p>Time Left</p>
        <p>Bid Now</p>
      </div>

      {/* Dynamic Data */}
      {items.map((item) => (
        <BidItem key={item.id} item={item} handleAddFavorite={handleAddFavorite} />
      ))}
    </div>
  );
};

export default BidItems;
