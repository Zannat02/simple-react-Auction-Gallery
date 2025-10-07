import React from 'react';
import { CiBellOn } from "react-icons/ci";




const Navbar = () => {
    return (
        
            <div className="navbar flex justify-around p-5 items-center bg-red-400">
                <h3 className='text-[#003EA4] text-2xl'>Auction<span className='text-[#FFD337] font-bold'>Gallery</span></h3>
                <div className='flex gap-12' style={{ fontFamily: "'Poppins', sans-serif" }}>
                    <a href="">Home</a>
                    <a href="">Auctions</a>
                    <a href="">Categories</a>
                    <a href="">How to works</a>
                </div>
                <div className='flex items-center gap-2 '>
                    <CiBellOn size={30} className="[#FFFFFF] bg-slate-100 rounded-full p-1" />
                    <div className="avatar">
                        <div className="w-10 rounded-full ">
                            <img src="https://img.daisyui.com/images/profile/demo/spiderperson@192.webp" />
                        </div>
                    </div>


                </div>
            </div>

           

        


    );
};

export default Navbar;