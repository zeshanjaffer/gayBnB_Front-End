import React from 'react';
import Image from 'next/image';

const Inclusivity = () => {
  return (
    <div className="mt-10 lg:mt-[120px] px-4 md:px-10 lg:px-20"> {/* Added mt-10 on mobile */}
      <div className="flex flex-col lg:flex-row items-center justify-between">
        <div className="lg:max-w-[550px] lg:pr-10 mb-8 lg:mb-0">
          <h2 className="font-satoshi font-bold text-4xl lg:text-[65px] leading-tight lg:leading-[75px] mb-4 lg:mb-6 text-center lg:text-left">
            We recognizes the importance of inclusivity
          </h2>
          <p className="font-satoshi text-base lg:text-[18px] leading-relaxed lg:leading-[28px]">
            And work towards offering a diverse range of accommodation options,
            suited to different preferences and budgets. Whether it's cozy
            apartments, stylish guesthouses, or luxurious villas, our platform
            strives to provide LGBTQ+ travelers with options that align with
            their tastes and desires.
          </p>
        </div>

        <div className="w-full lg:w-[610px] h-auto lg:h-[475.02px] flex flex-col justify-between">
          <div className="flex flex-col sm:flex-row justify-between mb-4 sm:mb-0">
            {/* Card 1 */}
            <div className="w-full sm:w-[295px] h-[227.68px] rounded-[50px] bg-white flex flex-col items-center justify-center shadow-[0px_4px_25px_0px_rgba(0,0,0,0.15)] mb-4 sm:mb-0">
              <h3 className="font-satoshi font-bold text-5xl lg:text-[65px] leading-[100%] text-center text-[#774C9E]">
                350K
              </h3>
              <p className="font-satoshi text-sm text-center">Properties</p>
            </div>
            {/* Card 2 */}
            <div className="w-full sm:w-[295px] h-[227.68px] rounded-[50px] bg-white flex flex-col items-center justify-center shadow-[0px_4px_25px_0px_rgba(0,0,0,0.15)]">
              <h3 className="font-satoshi font-bold text-5xl lg:text-[65px] leading-[100%] text-center text-[#774C9E]">
                4000
              </h3>
              <p className="font-satoshi text-sm text-center">Properties</p>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row justify-between">
            {/* Image */}
            <div className="w-full sm:w-[295px] h-[227.68px] rounded-[50px] overflow-hidden mb-4 sm:mb-0">
              <Image
                src="/inclusivity.png"
                alt="Inclusivity"
                width={295}
                height={227.68}
                objectFit="cover"
              />
            </div>
            {/* Card 3 */}
            <div className="w-full sm:w-[295px] h-[227.68px] rounded-[50px] bg-white flex flex-col items-center justify-center shadow-[0px_4px_25px_0px_rgba(0,0,0,0.15)]">
              <h3 className="font-satoshi font-bold text-5xl lg:text-[65px] leading-[100%] text-center text-[#774C9E]">
                350K
              </h3>
              <p className="font-satoshi text-sm text-center">Properties</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Inclusivity;