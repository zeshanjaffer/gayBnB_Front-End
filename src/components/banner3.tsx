import React from "react";
import Image from "next/image";

const Banner_3 = () => {
  return (
    <div className="mt-[120px] mx-auto w-[1238.73px] h-[421px] flex rounded-[40px] overflow-hidden">
      {/* Left Side Images Section */}
      <div className="w-[580px] h-full grid grid-cols-2 grid-rows-2 gap-[5px] rounded-l-[40px] overflow-hidden">
        {/* Image 1 */}
        <div className="w-[293px] h-[216px] relative">
          <Image src="/banner3.1.png" alt="Banner Image 1" layout="fill" objectFit="cover" className="rounded-[40px]" />
        </div>

        {/* Image 2 */}
        <div className="w-[293px] h-[216px] relative">
          <Image src="/banner3,2.png" alt="Banner Image 2" layout="fill" objectFit="cover" className="rounded-[40px]" />
        </div>

        {/* Image 3 */}
        <div className="w-[222px] h-[186px] relative">
          <Image src="/banner3.3.png" alt="Banner Image 3" layout="fill" objectFit="cover" className="rounded-[40px]" />
        </div>

        {/* Image 4 */}
        <div className="w-[378px] h-[186px] relative">
          <Image src="/banner3.4.png" alt="Banner Image 4" layout="fill" objectFit="cover" className="rounded-[40px]" />
        </div>
      </div>

      {/* Right Side Content Section */}
      <div className="w-[610.73px] h-[410.83px] flex flex-col justify-center p-8 bg-white rounded-r-[40px]">
        {/* Travel Buddy Tag */}
        <span className="bg-[radial-gradient(89.6%_68.47%_at_0%_0.99%,_#B88AE1_0%,_#774C9E_100%)] text-white rounded-[40px] px-[32px] py-[7px] text-sm font-bold self-start mb-2">
  TRAVEL BUDDY
</span>

        {/* Heading */}
        <h2 className="font-satoshi font-bold text-[45px] leading-[55px] text-gray-900 mb-4">
          Join the Adventure
        </h2>

        {/* Description */}
        <p className="font-satoshi text-lg text-gray-700 leading-7 mb-4">
          Find Your Ideal Gaybnb Travel Buddy Today! <br />
          Connecting with fellow travelers on Gaybnb Travel Buddy is simple and rewarding. Our user-friendly platform allows you to create a profile showcasing your travel interests, preferred destinations, and availability. Browse through a diverse community of LGBTQ+ travelers looking for companionship and shared experiences.
        </p>

        {/* Read More Link */}
        <a href="#" className="text-[#9642F8] font-bold underline mb-6">
          Read More
        </a>

        {/* Buttons */}
        <div className="flex space-x-4">
        <button className="bg-[radial-gradient(89.6%_68.47%_at_0%_0.99%,_#B88AE1_0%,_#774C9E_100%)] text-white rounded-[40px] px-[50px] py-[12px] font-bold text-lg shadow-md hover:shadow-lg transition">
  Join Now
</button>
          <button className="border border-black text-black rounded-[40px] px-[50px] py-[12px] font-bold text-lg hover:bg-gray-100 transition">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner_3;
