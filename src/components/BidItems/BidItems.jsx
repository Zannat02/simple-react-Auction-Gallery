// BidItems.jsx - Updated with Table
import React, { useEffect, useState } from "react";
import BidItem from "../BidItem/BidItem";

const BidItems = ({ handleAddToFavorites }) => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch("/Bid.json")
      .then((res) => res.json())
      .then((data) => setItems(data))
      .catch((err) => console.error("Error loading data:", err));
  }, []);

  return (
    <div className="bg-white rounded-xl p-6 border border-black">
      {/* Table Container */}
      <table className="w-full">
        {/* Table Header */}
        <thead>
          <tr className="border-b border-black">
            <th className="text-left font-semibold text-gray-700 pb-2">Items</th>
            <th className="text-center font-semibold text-gray-700 pb-2">Current Bid</th>
            <th className="text-center font-semibold text-gray-700 pb-2">Time Left</th>
            <th className="text-center font-semibold text-gray-700 pb-2">Bid Now</th>
          </tr>
        </thead>
        
        {/* Table Body */}
        <tbody>
          {items.map((item) => (
            <BidItem
              key={item.id}
              item={item}
              handleAddToFavorites={handleAddToFavorites}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default BidItems;























































// import React, { useEffect, useState } from "react";
// import BidItem from "../BidItem/BidItem";

// const BidItems = ({ handleAddToFavorites }) => {
//   const [items, setItems] = useState([]);

//   useEffect(() => {
//     fetch("/Bid.json")
//       .then((res) => res.json())
//       .then((data) => setItems(data))
//       .catch((err) => console.error("Error loading data:", err));
//   }, []);

//   return (
//     <div className="bg-white rounded-xl p-6 border border-black">
//       {/* Table Header - Center Aligned */}
//       <div className="grid grid-cols-4 font-semibold text-gray-700 border-b border-black pb-2 mb-2 items-center text-center">
//         <p className="text-center">Items</p>
//         <p className="text-center">Current Bid</p>
//         <p className="text-center">Time Left</p>
//         <p className="text-center">Bid Now</p>
//       </div>

//       {/* Items List */}
//       {items.map((item) => (
//         <BidItem
//           key={item.id}
//           item={item}
//           handleAddToFavorites={handleAddToFavorites}
//         />
//       ))}
//     </div>
//   );
// };

// export default BidItems;



























































































































































































































































































