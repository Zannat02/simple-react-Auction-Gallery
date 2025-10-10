


import React, { useState } from "react";
import BidItems from "../BidItems/BidItems";
import { CiHeart, CiTrash } from "react-icons/ci";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AuctionSection = () => {
  const [favorites, setFavorites] = useState([]);

  const handleAddToFavorites = (item) => {
    if (!favorites.some((fav) => fav.id === item.id)) {
      setFavorites([...favorites, item]);
      toast.success(`${item.title} added to favorites!`);
    } else {
      toast.info(`${item.title} is already in favorites!`);
    }
  };

  const handleRemoveFavorite = (itemId, itemTitle) => {
    setFavorites(favorites.filter(fav => fav.id !== itemId));
    toast.info("Remove the item from the list");
  };

  const totalBidAmount = favorites.reduce(
    (total, item) => total + item.currentBidPrice,
    0
  );

  return (
    <section className="bg-slate-100 min-h-screen p-10">
      {/* Header */}
      <div className="flex justify-around items-start gap-6 mb-6">
        <div className="flex-1">
          <h2 className="text-2xl font-bold text-gray-800">Active Auctions</h2>
          <p className="text-gray-500">
            Discover and bid on extraordinary items
          </p>
        </div>
        <div className="w-[30%]"></div> 
      </div>

     
      <div className="flex justify-around items-start gap-6">
     
        <div className="flex-1 max-w-[65%] bg-white rounded-xl p-6">
          <div className="border border-black rounded-lg p-4">
            <BidItems handleAddToFavorites={handleAddToFavorites} />
          </div>
        </div>

       
        <div className={`w-[30%] bg-white rounded-xl shadow-md p-4 transition-all duration-500 ease-in-out ${
          favorites.length > 0 ? 'min-h-[300px]' : 'h-auto'
        }`}>
          {/* Header */}
          <div className="flex justify-center items-center gap-2 pb-3 border-b border-gray-300 mb-4">
            <CiHeart size={20} className="text-[#041021]" />
            <h3 className="font-semibold text-[#041021] text-sm">Favorite Items</h3>
          </div>

          {/* Body - Product List */}
          <div className="space-y-3 min-h-[100px]">
            {favorites.length === 0 ? (
              <div className="text-center py-6">
                <p className="text-black font-bold text-sm mb-2">No favorites yet</p>
                <p className="text-xs text-gray-500 leading-relaxed">
                  Click the heart icon on any item<br />to add it to your favorites
                </p>
              </div>
            ) : (
              favorites.map((fav) => (
                <div 
                  key={fav.id} 
                  className="border border-black rounded-lg p-3 transition-all duration-300 hover:shadow-sm"
                >
                  <div className="flex items-start justify-between">
                   
                    <div className="flex items-start gap-3 flex-1">
                      <img
                        src={fav.image}
                        alt={fav.title}
                        className="w-12 h-12 rounded object-cover"
                      />
                      <div className="flex-1">
                        <p className="text-sm font-medium text-black mb-1">{fav.title}</p>
               
                        <div className="flex items-center gap-3">
                          <p className="text-sm font-bold text-green-600">${fav.currentBidPrice}</p>
                          <p className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded">
                            {fav.bidsCount || 0} bids
                          </p>
                        </div>
                      </div>
                    </div>

                   
                    <button
                      onClick={() => handleRemoveFavorite(fav.id, fav.title)}
                      className="flex items-start justify-center text-gray-500 hover:text-red-500 transition-colors p-1 ml-2"
                    >
                      <CiTrash size={18} />
                    </button>
                  </div>
                </div>
              ))
            )}
          </div>

          
          <div className="border-t border-gray-200 mt-4 pt-4">
            <div className="flex justify-between items-center">
              <p className="font-medium text-black text-sm">Total bids Amount</p>
              <p className="font-bold text-black text-lg">${totalBidAmount.toLocaleString()}</p>
            </div>
          </div>
        </div>
      </div>

     
      <ToastContainer 
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </section>
  );
};

export default AuctionSection;























































































































































































































































































































































































