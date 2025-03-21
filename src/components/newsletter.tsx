"use client";

import React from 'react';

const Newsletter = () => {
  return (
    <div
      className="mt-[50px] w-full max-w-[1241.31px] h-[407.27px] rounded-[50px] bg-cover bg-center flex justify-center items-center relative z-10 -mb-20 mx-auto"
      style={{ backgroundImage: 'url(/heroimage1.jpg)' }}
    >
      <div
        className="w-[995.75px] h-[280.57px] flex flex-col items-center justify-center gap-7"
      >
        {/* White Background Label */}
        <div className="bg-white rounded-[50px] px-6 py-2 absolute top-10">
          <p className="font-satoshi font-bold text-sm text-gray-800 leading-none tracking-tight text-center">
            Stay in the Rainbow Loop
          </p>
        </div>

        <h2 className="font-satoshi font-bold text-[65px] leading-[71px] tracking-tight text-center text-white">
          Sign Up for Exclusive LGBTQ+ <br /> Travel Tips and Discounts Today!
        </h2>
        <div className="flex w-[610px] h-[71.57px] rounded-[50px] bg-[#FFFFFF26] backdrop-blur-[50px] items-center justify-between px-6">
          <input
            type="email"
            placeholder="Email"
            className="flex-grow bg-transparent border-none outline-none text-white placeholder-white font-satoshi text-base"
          />
          <button
            className="bg-gradient-to-r from-[#B88AE1] to-[#774C9E] text-white rounded-[50px] w-[194px] h-[54px] font-satoshi font-medium text-sm leading-none"
          >
            Sign Up with Pride
          </button>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;