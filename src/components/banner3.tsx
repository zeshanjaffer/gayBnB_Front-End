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
  const bannerImages = [
    { id: 1, src: "/banner3.1.png", alt: "Banner Image 1" },
    { id: 2, src: "/banner3,2.png", alt: "Banner Image 2" },
    { id: 3, src: "/banner3.3.png", alt: "Banner Image 3" },
    { id: 4, src: "/banner3.4.png", alt: "Banner Image 4" },
  ];

  return (
    <div className="my-4 md:my-[120px] mx-auto max-w-[1238.73px] w-full md:h-[421px] flex rounded-[40px] justify-between items-center relative md:flex-row flex-col">
      {/* Right Side Content Section */}
      <div className=" w-full md:w-[52%] md:h-[410.83px] flex flex-col justify-center p-8 bg-white rounded-tr-[40px] md:rounded-r-[40px] md:rounded-bl-none rounded-bl-[40px] items-center md:items-start">
        <span className="bg-[radial-gradient(89.6%_68.47%_at_0%_0.99%,_#B88AE1_0%,_#774C9E_100%)] text-white rounded-[40px] px-[32px] py-[7px] text-sm font-bold self-center md:self-start mb-2">
          TRAVEL BUDDY
        </span>
        <h2 className="font-satoshi font-bold text-[45px] leading-[55px] text-gray-900 mb-4 md:text-left">
          Join the Adventure
        </h2>
        <p className="font-satoshi text-lg text-gray-700 leading-7 mb-4 md:text-left">
          Find Your Ideal Gaybnb Travel Buddy Today! <br />
          Connecting with fellow travelers on Gaybnb Travel Buddy is simple and rewarding. Our user-friendly platform allows you to create a profile showcasing your travel interests, preferred destinations, and availability. Browse through a diverse community of LGBTQ+ travelers looking for companionship and shared experiences.
        </p>

        <div className="flex space-x-4 md:justify-start">
          <button className="bg-[radial-gradient(89.6%_68.47%_at_0%_0.99%,_#B88AE1_0%,_#774C9E_100%)] text-white rounded-[40px] px-6 md:px-[50px] py-2 md:py-[12px] font-bold text-lg shadow-md hover:shadow-lg transition">
            Join Now
          </button>
          <button onClick={handleLearnMore} className="border border-black text-black rounded-[40px] px-6 md:px-[50px] py-2 md:py-[12px] font-bold text-lg hover:bg-gray-100 transition">
            Learn More
          </button>
        </div>
      </div>

      {/* Left Side Images Section (moved to the end for small screens) */}
      <div className="w-full p-5 md:p-0 md:w-[46%] h-full grid grid-cols-2 grid-rows-2 gap-x-[8px] gap-y-[8px] md:gap-y-10 rounded-bl-[40px] md:rounded-l-[40px] md:rounded-br-none rounded-br-[40px] order-last md:order-first">
        {bannerImages.map((image) => (
          <div key={image.id} className="w-full h-[165px] md:h-[220px] relative gap-10">
            <Image
              src={image.src}
              alt={image.alt}
              layout="fill"
              objectFit="cover"
              className="rounded-[20px]"
            />
          </div>
        ))}
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