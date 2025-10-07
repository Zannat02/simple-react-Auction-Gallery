import React from 'react';
import bannerImg from '../assets/Banner-min.jpg';

const Banner = () => {
    return (
        <div className="h-screen bg-cover bg-center"
  style={{ backgroundImage: `url(${bannerImg})` }}>

    <div  className='pt-50 pl-30 '>
        <h3 className="text-white text-3xl font-semibold">Bid on Unique Items from <br />Around the World</h3>
        <p className='text-slate-300 mt-5'>Discover rare collectibles, luxury goods, and vintage <br /> treasures in our curated auctions</p>
        
        <button className='bg-white p-2 rounded-2xl mt-5'>Explore Auctions</button>
        
    </div>
        
    
            
        </div>
    );
};

export default Banner;