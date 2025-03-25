import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { div } from "framer-motion/client";

const sliderData = [
  { src: "/places1.png", label: "North America" },
  { src: "/places2.png", label: "Europe" },
  { src: "/places3.png", label: "Latin America" },
  { src: "/places4.png", label: "Latin America" },
  { src: "/places5.png", label: "Latin America" },
];

const PlacesSlider = () => {
  return (
    <div className="my-4 md:my-[120px] w-full flex flex-col items-center">
      {/* Top Label */}
      <div className="bg-[#774C9E] text-white font-satoshi font-bold text-[18px] uppercase rounded-full px-8 py-2 mb-4">
        Over 1.5 million
      </div>

      {/* Title */}
      <h1 className="font-satoshi font-bold text-[30px] md:text-[65px] md:leading-[75px] text-[#242424] text-center">
        All City Guides
      </h1>
      
      {/* Subtitle */}
      <p className="font-satoshi font-normal text-[18px] leading-[28px] text-[#242424] text-center mb-6">
        Discover LGBTQ+ Hotspots around the world
      </p>
      
      {/* Swiper Slider */}
      <div className="w-full flex justify-center px-5 md:px-0">
  <Swiper
    modules={[Navigation, Pagination, Autoplay]}
    spaceBetween={30}
    loop={true}
    centeredSlides={true}
    autoplay={{ delay: 3000 }}
    navigation
    pagination={{ clickable: true }}
    breakpoints={{
      0: {
        slidesPerView: 1,
      },
      640: {
        slidesPerView: 2,
      },
      768: {
        slidesPerView: 2,
      },
      1024: {
        slidesPerView: 3,
      },
      1280: {
        slidesPerView: 4,
      },
    }}
    className="md:mt-8 w-full max-w-[1200px] md:h-[550px]"
  >
    {sliderData.map((item, index) => (
      <SwiperSlide key={index} className="flex justify-center">
        <div className="relative h-[400px] w-full max-w-[400px] rounded-[50px]">
          <Image
            src={item.src}
            alt={item.label}
            layout="fill"
            objectFit="cover"
            className="rounded-[50px]"
          />
          <div className="absolute bottom-0 w-full h-[100px] bg-gradient-to-t from-black to-transparent flex justify-center items-center">
            <span className="text-white font-satoshi font-bold text-[24px] text-center">
              {item.label}
            </span>
          </div>
          <button className="absolute top-4 right-4 w-[68px] h-[68px] flex justify-center items-center border-[0.91px] border-white rounded-full hover:bg-[#774C9E]">
            <Image
              src="/icons/arrowup.svg"
              alt="Arrow Up"
              width={16}
              height={18}
            />
          </button>
        </div>
      </SwiperSlide>
    ))}
  </Swiper>
</div>

    </div>
  );
};

export default PlacesSlider;
