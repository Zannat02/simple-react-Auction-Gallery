import React from 'react';
import bannerImg from '../assets/Banner-min.jpg';

const Banner = () => {
    return (
        <section className="h-screen bg-cover bg-center "
            style={{ backgroundImage: `url(${bannerImg})` }}>
            <div className='max-w-7xl mx-auto  pt-50 '>

            
                <h3 className="text-white text-3xl font-semibold">Bid on Unique Items from <br />Around the World</h3>
                <p className='text-slate-300 mt-5'>Discover rare collectibles, luxury goods, and vintage <br /> treasures in our curated auctions</p>

                <button className='bg-white p-2 rounded-2xl mt-5 px-4'>Explore Auctions</button>

           



        </div>
        </section>



    );
};

export default Banner;