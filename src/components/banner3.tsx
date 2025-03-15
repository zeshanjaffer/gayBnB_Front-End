import React from 'react';
import Image from 'next/image';

const Banner_3 = () => {
  return (
    <div className="mt-[120px] mx-auto my-12 w-[1238.73px]  h-[421px] " >
      <div className="w-[1238.73px]   h-[421px] rounded-[40px] flex"> {/* Main container with specified dimensions */}
        {/* Left Side Images Section */}
        <div className="w-[580px] rounded-l-[40px] overflow-hidden relative grid grid-cols-2 grid-rows-2">
          {/* Top Left Image */}
          <div className="relative">
            <Image
              src="/banner3.1.png"
              alt="Banner Image 1"
              layout="fill"
              objectFit="cover"
            />
          </div>

          {/* Top Right Image */}
          <div className="relative">
            <Image
              src="/banner3,2.png"
              alt="Banner Image 2"
              layout="fill"
              objectFit="cover"
            />
          </div>

          {/* Bottom Left Image */}
          <div className="relative">
            <Image
              src="/banner3.3.png"
              alt="Banner Image 3"
              layout="fill"
              objectFit="cover"
            />
          </div>

          {/* Bottom Right Image */}
          <div className="relative">
            <Image
              src="/banner3.4.png"
              alt="Banner Image 4"
              layout="fill"
              objectFit="cover"
            />
          </div>
        </div>

        {/* Right Side Content Section */}
        <div className="w-[610.73px] p-8 flex flex-col justify-center">
          <span className="bg-gradient-to-r from-[#B88AE1] to-[#774C9E] text-white rounded-[50px] px-4 py-2 text-sm font-bold self-start mb-2">
            TRAVEL BUDDY
          </span>
          <h2 className="font-satoshi font-bold text-[65px] leading-[75px] mb-4">
            Join the Adventure
          </h2>
          <p className="font-satoshi text-base leading-7 mb-4">
            Find Your Ideal Gaybnb Travel Buddy Today!
            <br />
            Connecting with fellow travelers on Gaybnb Travel Buddy is simple and rewarding. Our user-friendly platform allows you to create a profile showcasing your travel interests, preferred destinations, and availability. Browse through a diverse community of LGBTQ+ travelers looking for companionship and shared experiences.
          </p>

          <a href="#" className="text-[#9642F8] font-bold mb-8">
            Read More
          </a>

          <div className="flex space-x-4">
            <button className="bg-gradient-to-r from-[#B88AE1] to-[#774C9E] text-white rounded-[50px] px-[50px] py-[16px] font-bold">
              Join Now
            </button>
            <button className="border border-black text-black rounded-[50px] px-[50px] py-[16px] font-bold">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner_3;