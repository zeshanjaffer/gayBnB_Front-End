"use client";

import React from "react";

const Newsletter = () => {
  return (
    <div
      className="mt-12 w-full max-w-[90%] md:max-w-[1241.31px] h-auto md:h-[407.27px] rounded-[30px] md:rounded-[50px] bg-cover bg-center flex justify-center items-center relative z-10 -mb-20 mx-auto p-4 md:p-0"
      style={{ backgroundImage: "url(/heroimage1.jpg)" }}
    >
      <div className="w-full md:w-[995.75px] h-auto md:h-[280.57px] flex flex-col items-center justify-center gap-5 md:gap-7 text-center">
        {/* White Background Label */}
        <div className="bg-white rounded-[30px] md:rounded-[50px] px-4 md:px-6 py-1 md:py-2 absolute top-8 md:top-10">
          <p className="font-satoshi font-bold text-xs md:text-sm text-gray-800 leading-none tracking-tight">
            Stay in the Rainbow Loop
          </p>
        </div>

        <h2 className="font-satoshi font-bold text-2xl md:text-[65px] leading-tight md:leading-[71px] tracking-tight text-white mt-12 md:mt-0">
          Sign Up for Exclusive LGBTQ+ <br className="hidden md:block" /> Travel
          Tips and Discounts Today!
        </h2>

        {/* Input Field + Button for Large Screens */}
        <div className="hidden md:flex w-full max-w-[610px] h-[71.57px] rounded-[50px] bg-[#FFFFFF26] backdrop-blur-[50px] items-center justify-between px-6">
          <input
            type="email"
            placeholder="Email"
            className="flex-grow bg-transparent border-none outline-none text-white placeholder-white font-satoshi text-base"
          />
          <button className="bg-white text-black rounded-[50px] w-[194px] h-[54px] font-satoshi font-medium text-sm leading-none">
            Sign Up with Pride
          </button>
        </div>

        {/* Input Field for Mobile */}
        <div className="flex md:hidden w-full max-w-[90%] rounded-[30px] bg-[#FFFFFF26] backdrop-blur-[20px] items-center justify-between px-4 py-3">
          <input
            type="email"
            placeholder="Email"
            className="w-full bg-transparent border-none outline-none text-white placeholder-white font-satoshi text-sm p-2"
          />
        </div>

        {/* Button for Mobile */}
        <div className="flex md:hidden w-full max-w-[90%] justify-center mt-3">
          <button className="bg-white text-black rounded-[30px] w-full h-[48px] font-satoshi font-medium text-sm">
            Sign Up with Pride
          </button>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
