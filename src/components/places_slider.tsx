import React from "react";
import { FaArrowRight } from "react-icons/fa";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

const sliderData = [
  { src: "/register.png", label: "North America" },
  { src: "/register.png", label: "Europe" },
  { src: "/register.png", label: "Latin America" },
  { src: "/register.png", label: "Latin America" },
  { src: "/register.png", label: "Latin America" },
];

const PlacesSlider = () => {
  return (
    <div className="w-full flex flex-col items-center">
      {/* Top Label */}
      <div className="bg-[#774C9E] text-white font-satoshi font-bold text-[18px] uppercase rounded-full px-8 py-2 mb-4">
        Over 1.5 million
      </div>

      {/* Title */}
      <h1 className="font-satoshi font-bold text-[65px] leading-[75px] text-[#242424] text-center">
        All City Guides
      </h1>
      
      {/* Subtitle */}
      <p className="font-satoshi font-normal text-[18px] leading-[28px] text-[#242424] text-center mb-6">
        Discover LGBTQ+ Hotspots around the world
      </p>
      
      {/* Swiper Slider */}
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={30}
        slidesPerView={3}
        loop={true}
        centeredSlides={true}
        autoplay={{ delay: 3000, }}
        navigation
        pagination={{ clickable: true }}
        className="w-full max-w-[1200px]"
      >
        {sliderData.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="relative w-[400px] h-[400px] rounded-[50px] overflow-hidden">
              <Image src={item.src} alt={item.label} layout="fill" objectFit="cover" className="rounded-[50px]" />
              <div className="absolute bottom-0 w-full h-[100px] bg-gradient-to-t from-black to-transparent flex justify-center items-center">
                <span className="text-white font-satoshi font-bold text-[24px] text-center">{item.label}</span>
              </div>
              <button className="absolute top-4 right-4 w-[68px] h-[68px] flex justify-center items-center border-[0.91px] border-white rounded-full hover:bg-[#774C9E]">
                <FaArrowRight className="text-white" />
              </button>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default PlacesSlider;