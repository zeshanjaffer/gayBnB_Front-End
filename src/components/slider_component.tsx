"use client";
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import Image from "next/image";

interface Slide {
  id: number;
  title: string;
  image: string;
}

export default function SliderComponent() {
  const slides: Slide[] = [
    {
      id: 1,
      title: "LUXURY APARTMENTS",
      image: "/places1.png"
    },
    {
      id: 2,
      title: "COZY CABINS",
      image: "/places2.png"
    },
    {
      id: 3,
      title: "MODERN LOFTS",
      image: "/places3.png"
    },
    {
      id: 4,
      title: "BEACH HOUSES",
      image: "/places4.png"
    },
    {
      id: 5,
      title: "URBAN STUDIOS",
      image: "/places5.png"
    },
    {
      id: 6,
      title: "COUNTRYSIDE VILLAS",
      image: "/places1.png"
    }
  ];

  const slideWidth = 610;
  const slideHeight = 515.7296752929688;

  return (
    <div className="md:mt-[120px] max-w-[90%] md:max-w-[1241.31px] w-full min-h-[900px] bg-[#242424] rounded-[50px] flex flex-col items-center justify-center px-6 py-10 mx-auto font-Satoshi">
      {/* Tag */}
      <div className="h-[44px] rounded-[50px] flex items-center justify-center px-[32px] py-[10px] bg-[#774C9E]">
        <span className="text-[18px] font-[700] uppercase text-white">
          Over 1.5 million
        </span>
      </div>

      {/* Heading */}
      <h1 className="text-white text-[40px] sm:text-[48px] md:text-[60px] lg:text-[65px] font-[700] leading-tight text-center mt-4">
        Amazing LGBTQ Friendly Places <br /> to Stay around the world
      </h1>

      {/* Paragraph */}
      <p className="text-white text-[16px] sm:text-[18px] font-[400] leading-[28px] text-center mt-4 max-w-[900px]">
        Whether you're venturing to the vibrant streets of San Francisco or exploring the cultural melting pot of Berlin, Gaybnb Travel has you covered. With over 1.5 million beds in our diverse and carefully curated collection, you can choose from an extensive range of accommodations tailored to your unique needs and desires.
      </p>

      {/* Swiper with z-index adjustments */}
      <div className="w-full mt-10" style={{ height: `${slideHeight}px` }}>
        <Swiper
          effect={'coverflow'}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={'auto'}
          spaceBetween={-slideWidth / 2} // Negative space to push inactive slides behind
          loop={true}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true
          }}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 100,
            modifier: 2.5,
            slideShadows: false,
          }}
          pagination={{
            clickable: true,
            el: '.swiper-pagination',
            bulletClass: 'swiper-pagination-bullet',
            bulletActiveClass: 'swiper-pagination-bullet-active',
          }}
          modules={[EffectCoverflow, Pagination, Autoplay]}
          className="swiper-carousel w-full h-full"
        >
          {slides.map((slide) => (
            <SwiperSlide
              key={slide.id}
              style={{ width: `${slideWidth}px`, height: `${slideHeight}px` }}
              className={`rounded-[50px] overflow-hidden relative flex items-center justify-center transition-all duration-300`}
            >
              {({ isActive }) => (
                <div
                  className={`absolute top-0 left-0 w-full h-full transition-all duration-300`}
                  style={{
                    opacity: isActive ? 1 : 0.5,
                    borderRadius: isActive ? '20px' : '41.39px',
                    zIndex: isActive ? 10 : 5, // Active slide on top, inactive behind
                  }}
                >
                  <Image
                    src={slide.image}
                    alt={slide.title}
                    width={slideWidth}
                    height={slideHeight}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute inset-x-0 bottom-0 h-[50%] bg-gradient-to-t from-black/80 to-transparent"></div>
                  {isActive && (
                    <div className="absolute bottom-6 text-center w-full">
                      <h2
                        className="font-Satoshi font-[700] text-[52.44px] leading-[41.95px] text-transparent uppercase relative"
                        style={{
                          WebkitTextStroke: '1.5px white',
                          backgroundImage: 'linear-gradient(180deg, #FFFFFF -30.97%, rgba(255, 255, 255, 0.15) 76%, rgba(255, 255, 255, 0) 131.33%)',
                          backgroundClip: 'text',
                          WebkitBackgroundClip: 'text',
                        }}
                      >
                        {slide.title}
                      </h2>
                    </div>
                  )}
                </div>
              )}
            </SwiperSlide>
          ))}

          {/* Pagination */}
          <div className="swiper-pagination !bottom-0"></div>
        </Swiper>
      </div>
    </div>
  );
}