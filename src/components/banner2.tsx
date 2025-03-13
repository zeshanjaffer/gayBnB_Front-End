import React from 'react';
import Image from 'next/image';

const Banner_2 = () => {
  return (
    <div className="bg-[#F1F8FF] w-full max-w-[1440px] h-[776.07px] relative mx-auto flex items-center justify-between px-10 md:px-20">
      {/* Left Text Section */}
      <div className="max-w-[550px]">
        <div className="bg-[#774C9E] text-white px-4 py-2 rounded-full inline-block mb-6">
          <span className="font-satoshi font-bold text-sm uppercase">
            Gayring Travel's LGBTQ+ Hotspots
          </span>
        </div>
        <h2 className="font-satoshi font-bold text-4xl md:text-5xl lg:text-6xl mb-6">
          Explore Unique LGBTQ+ Hotspots
        </h2>
        <p className="font-satoshi text-base md:text-lg mb-8">
          Immerse yourself in a kaleidoscope of experiences as you discover iconic gay bars, pulsating clubs, delectable restaurants, inviting beaches, serene bathhouses, and more. Unlock a world of possibilities as you navigate through renowned LGBTQ+ hotspots, each offering a unique blend of culture, community, and entertainment. Whether you're craving a night of dancing in a friendly gay club, savoring exquisite cuisine at LGBTQ-friendly restaurants, lounging on sun-kissed beaches, or indulging in pampering spa retreats, Gaybnb Travel ensures you find the perfect mix of relaxation and adventure.
        </p>
        <div className="flex gap-4">
          <button className="bg-[#774C9E] text-white px-6 py-3 rounded-full">
            Add Your Hotspot
          </button>
          <button className="text-[#242424] px-6 py-3 rounded-full border border-[#242424]">
            Hotspot
          </button>
        </div>
      </div>

      {/* Right Image Section */}
      <div className="w-[592.47px] h-[592.99px] rounded-[50px] overflow-hidden">
        <Image
          src="/banner2.png" // Replace with your image path
          alt="Hotspot"
          width={592.47}
          height={592.99}
          objectFit="cover"
        />
      </div>
    </div>
  );
};

export default Banner_2;