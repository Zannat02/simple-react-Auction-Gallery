import React from 'react';
import toast, { Toaster } from 'react-hot-toast';

const Footer = () => {
  const handleMouseEnter = () => {
    toast('Eto Kothin Project Kno den Vhaiya Apnara 😢', {
      duration: 2500,
      style: {
        borderRadius: '10px',
        background: '#333',
        color: '#fff',
      },
    });
  };

  return (
    <>
      <footer
        onMouseEnter={handleMouseEnter}
        className="bg-white text-center py-10 transition ease-in-out "
      >
        <h3 className="text-2xl">
          <span className="text-[#003EA4]">Auction</span>
          <span className="text-[#FFD337] font-bold">Gallery</span>
        </h3>

        <p className="mt-2 text-sm text-black">Bid. Win. Own.</p>

        <ul className="flex justify-center gap-6 mt-5 text-sm text-black">
          <li className="hover:text-[#003EA4] cursor-pointer">Home</li>
          <li className="hover:text-[#003EA4] cursor-pointer">Auctions</li>
          <li className="hover:text-[#003EA4] cursor-pointer">Categories</li>
          <li className="hover:text-[#003EA4] cursor-pointer">How to works</li>
        </ul>

        <p className="mt-6 text-xs text-gray-500">
          © 2025 AuctionHub. All rights reserved.
        </p>
      </footer>

      {/* Toast Container */}
      <Toaster position="bottom-right" />
    </>
  );
};

export default Footer;

