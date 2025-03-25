import React, { useState } from "react";
import Image from "next/image";

const Banner_3 = () => {
  const [showPopup, setShowPopup] = useState(false);

  const handleLearnMore = () => {
    setShowPopup(true);
  };

  const closePopup = () => {
    setShowPopup(false);
  };

  return (
    <div className="mt-[120px] mx-auto w-[1238.73px] h-[421px] flex rounded-[40px]  relative">
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
        <span className="bg-[radial-gradient(89.6%_68.47%_at_0%_0.99%,_#B88AE1_0%,_#774C9E_100%)] text-white rounded-[40px] px-[32px] py-[7px] text-sm font-bold self-start mb-2">
          TRAVEL BUDDY
        </span>
        <h2 className="font-satoshi font-bold text-[45px] leading-[55px] text-gray-900 mb-4">
          Join the Adventure
        </h2>
        <p className="font-satoshi text-lg text-gray-700 leading-7 mb-4">
          Find Your Ideal Gaybnb Travel Buddy Today! <br />
          Connecting with fellow travelers on Gaybnb Travel Buddy is simple and rewarding. Our user-friendly platform allows you to create a profile showcasing your travel interests, preferred destinations, and availability. Browse through a diverse community of LGBTQ+ travelers looking for companionship and shared experiences.
        </p>
        <a href="#" className="text-[#9642F8] font-bold underline mb-6">
          Read More
        </a>
        <div className="flex space-x-4">
          <button className="bg-[radial-gradient(89.6%_68.47%_at_0%_0.99%,_#B88AE1_0%,_#774C9E_100%)] text-white rounded-[40px] px-[50px] py-[12px] font-bold text-lg shadow-md hover:shadow-lg transition">
            Join Now
          </button>
          <button onClick={handleLearnMore} className="border border-black text-black rounded-[40px] px-[50px] py-[12px] font-bold text-lg hover:bg-gray-100 transition">
            Learn More
          </button>
        </div>
      </div>

      {/* Fancy Popup */}
      {showPopup && (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white p-6 rounded-[20px] shadow-lg max-w-md text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Learn More</h2>
            <p className="text-gray-700 mb-4">
              Discover more about Gaybnb Travel Buddy and connect with fellow travelers!
            </p>
            <button onClick={closePopup} className="bg-[#9642F8] text-white px-6 py-2 rounded-[40px] font-bold shadow-md hover:shadow-lg transition">
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Banner_3;
