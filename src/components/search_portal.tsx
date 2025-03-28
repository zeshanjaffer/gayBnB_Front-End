// components/SearchPortal.tsx
import React from 'react';

interface SearchPortalProps {
  // You can add props here if you need to pass data to the component
}

const SearchPortal: React.FC<SearchPortalProps> = () => {
  return (
    <div className="w-full lg:w-[1238px] max-w-[90vw] h-auto md:h-[200px] lg:h-[152px] rounded-[24px] shadow-lg md:shadow-[0_40px_64px_-32px_rgba(15,15,15,0.1)] relative top-[-40px] p-6 mx-auto bg-white">
      <div className="flex flex-col md:flex-row items-center md:items-stretch w-full gap-4 md:gap-8 lg:gap-[103px] mx-auto">
        {/* Location Input - unchanged from your original */}
        <div className="flex-1 w-full min-w-[200px]">
          <div className="flex items-center gap-2">
            <img src="/icons/line.svg" alt="Location Icon" className="h-5 w-5 text-gray-400" />
            <label className="font-poppins font-semibold text-[16px] md:text-[20px] leading-[32px]">Where are you going?</label>
          </div>
          <input
            type="text"
            placeholder="London, United Kingdom"
            className="mt-2 block w-full rounded-lg focus:ring-0 focus:border-transparent font-poppins text-[16px] leading-[24px] pl-4 py-3 outline-none"
            style={{ border: 'none' }}
          />
        </div>

        {/* Dates Input - unchanged from your original */}
        <div className="flex-1 w-full min-w-[200px]">
          <div className="flex items-center gap-2">
            <img src="/icons/calender.svg" alt="Calendar Icon" className="h-5 w-5 text-gray-400" />
            <label className="font-poppins font-semibold text-[16px] md:text-[20px] leading-[32px]">Add dates</label>
          </div>
          <input
            type="text"
            placeholder="Add dates"
            className="mt-2 block w-full rounded-lg focus:ring-0 focus:border-transparent font-poppins text-[16px] leading-[24px] pl-4 py-3 outline-none"
            style={{ border: 'none' }}
          />
        </div>

        {/* Guests Input - unchanged from your original */}
        <div className="flex-1 w-full min-w-[200px]">
          <div className="flex items-center gap-2">
            <img src="/icons/user.svg" alt="User Icon" className="h-5 w-5 text-gray-400" />
            <label className="font-poppins font-semibold text-[16px] md:text-[20px] leading-[32px]">Add guests</label>
          </div>
          <input
            type="text"
            placeholder="Add guests"
            className="mt-2 block w-full rounded-lg focus:ring-0 focus:border-transparent font-poppins text-[16px] leading-[24px] pl-4 py-3 outline-none"
            style={{ border: 'none' }}
          />
        </div>

        {/* Search Button - EXACTLY as you originally had it */}
        <button className="w-full md:w-[64px] h-[64px] rounded-[64px] bg-[#774C9E] flex items-center justify-center mt-4 md:mt-0 hover:bg-[#5d3a7b] transition-colors duration-200">
          <img src="/icons/search.svg" alt="Search Icon" className="h-6 w-6 text-white" />
        </button>
      </div>
    </div>
  );
};

export default SearchPortal;