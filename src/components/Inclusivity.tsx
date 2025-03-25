import React from "react";
import Image from "next/image";

const Inclusivity = () => {
  return (
    <div className="mt-10 lg:mt-[120px] px-4 md:px-10 lg:px-20 flex justify-center">
      <div className="max-w-[1280px] w-full">
        <div className="flex flex-col lg:flex-row items-center justify-center gap-10">
          {/* Left Content */}
          <div className="lg:max-w-[550px] lg:pr-10 text-center lg:text-left">
            <h2 className="font-satoshi font-bold text-4xl lg:text-[65px] leading-tight lg:leading-[75px] mb-4 lg:mb-6">
              We recognize the importance of inclusivity
            </h2>
            <p className="font-satoshi text-base lg:text-[18px] leading-relaxed lg:leading-[28px]">
              And work towards offering a diverse range of accommodation
              options, suited to different preferences and budgets. Whether
              it's cozy apartments, stylish guesthouses, or luxurious villas,
              our platform strives to provide LGBTQ+ travelers with options
              that align with their tastes and desires.
            </p>
          </div>

          {/* Right Content */}
          <div className="w-full lg:w-[610px] flex flex-col gap-6">
            <div className="flex flex-col sm:flex-row justify-center gap-6">
              {/* Card 1 */}
              <div className="w-full sm:w-[295px] h-[227.68px] rounded-[50px] bg-white flex flex-col items-center justify-center shadow-xl md:shadow-md">
                <h3 className="font-satoshi font-bold text-5xl lg:text-[65px] leading-[100%] text-[#774C9E]">
                  350K
                </h3>
                <p className="font-satoshi text-sm text-center">Properties</p>
              </div>

              {/* Card 2 */}
              <div className="w-full sm:w-[295px] h-[227.68px] rounded-[50px] bg-white flex flex-col items-center justify-center shadow-xl md:shadow-md">
                <h3 className="font-satoshi font-bold text-5xl lg:text-[65px] leading-[100%] text-[#774C9E]">
                  4000
                </h3>
                <p className="font-satoshi text-sm text-center">Properties</p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row justify-center gap-6 pb-5 md:pb-0">
              {/* Image */}
              <div className="w-full sm:w-[295px] h-[227.68px] rounded-[50px] overflow-hidden">
                <Image
                  src="/inclusivity.png"
                  alt="Inclusivity"
                  width={295}
                  height={227.68}
                  objectFit="cover"
                  className="w-full"
                />
              </div>

              {/* Card 3 */}
              <div className="w-full sm:w-[295px] h-[227.68px] rounded-[50px] bg-white flex flex-col items-center justify-center shadow-xl md:shadow-md">
                <h3 className="font-satoshi font-bold text-5xl lg:text-[65px] leading-[100%] text-[#774C9E]">
                  350K
                </h3>
                <p className="font-satoshi text-sm text-center">Properties</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Inclusivity;
