import React from 'react';
import Image from 'next/image';

const Banner = () => {
  return (
    <div className="mt-[150px] relative w-full max-w-[1238.84px] mx-auto rounded-[50px] flex flex-col md:flex-row overflow-hidden max-h-[572.16px]">
      {/* Image Section */}
      <div className="w-full md:w-[576.81px] rounded-l-[50px] overflow-hidden">
        <Image
          src="/banner1.png"
          alt="Become a Host"
          width={576.81}
          height={572.16}
          objectFit="cover"
          className="w-full h-auto md:h-full"
        />
      </div>

      {/* Text Section */}
      <div className="flex-1 p-6 md:p-10 flex flex-col justify-center text-center md:text-left">
        {/* Label */}
        <div className="bg-[#774C9E] text-white px-4 py-2 rounded-full inline-block mb-4 md:mb-6">
          <span className="font-satoshi font-bold text-[16px] leading-[100%] uppercase">
            Discover the Power of Inclusivity
          </span>
        </div>

        {/* Heading */}
        <h2 className="font-satoshi font-bold text-[40px] md:text-[65px] leading-[48px] md:leading-[75px]">
          Become a Prideful Host with Gaybnb Travel
        </h2>

        {/* Paragraph */}
        <p className="font-satoshi font-normal text-[16px] md:text-[18px] leading-[24px] md:leading-[28px] mt-4 md:mt-6">
          Are you passionate about embracing diversity and creating a welcoming
          space for travelers from all walks of life? Look no further than Gaybnb
          Travel, the renowned platform that celebrates LGBTQ+ travel experiences.
          By becoming a host with Gaybnb Travel, you have the chance to make a
          positive impact on the lives of LGBTQ+ travelers while opening doors to
          exciting cultural exchanges.
        </p>

        {/* Buttons */}
        <div className="mt-6 md:mt-8 flex flex-col md:flex-row gap-4 justify-center md:justify-start">
          <button
            className="text-white px-6 py-3 rounded-full bg-gradient-to-r from-[#B88AE1] to-[#774C9E]"
            style={{
              background:
                'radial-gradient(89.6% 68.47% at 0% 0.99%, #B88AE1 0%, #774C9E 100%)',
            }}
          >
            Become a Host
          </button>
          <button className="text-[#242424] px-6 py-3 rounded-full border border-[#242424]">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;