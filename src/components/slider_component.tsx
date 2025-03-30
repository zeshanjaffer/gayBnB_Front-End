"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import Image from "next/image";

const slides = [
  { id: 1, image: "/places1.png", text: "LUXURY APARTMENTS" },
  { id: 2, image: "/places2.png", text: "COZY CABINS" },
  { id: 3, image: "/places3.png", text: "MODERN LOFTS" },
  { id: 4, image: "/places4.png", text: "BEACH HOUSES" },
  { id: 5, image: "/places5.png", text: "URBAN STUDIOS" },
  { id: 6, image: "/places1.png", text: "COUNTRYSIDE VILLAS" },
];

export default function SliderComponent() {
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

      {/* Swiper - Increased height container */}
      <div className="mt-8 w-full max-w-[1200px] relative h-[650px]">
        <Swiper
          slidesPerView={3}
          centeredSlides={true}
          spaceBetween={30}
          loop={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          pagination={{ clickable: true }}
          navigation={false}
          modules={[Pagination, Navigation, Autoplay]}
          className="h-full"
          breakpoints={{
            0: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            640: {
              slidesPerView: 1, // Ensure only 1 slide on small screens
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 2.5,
              spaceBetween: 25,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
            1280: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
          }}
        >
          {slides.map((slide) => (
            <SwiperSlide key={slide.id}>
              {({ isActive }) => (
                <div
                  className={`flex flex-col items-center transition-all duration-300 ${
                    isActive ? "z-20" : "z-10 md:opacity-50 opacity-100" // No opacity on mobile
                  }`}
                >
                  <div
                    className={`relative overflow-hidden shadow-lg transition-all duration-300 ${
                      isActive
                        ? "w-[610px] h-[515.73px] rounded-[50px]"
                        : "md:w-[505px] md:h-[426.96px] md:rounded-[41.39px] w-[90%] h-auto rounded-[25px]" // Adjust size for mobile
                    }`}
                  >
                    <Image
                      src={slide.image}
                      alt={slide.text}
                      layout="fill"
                      objectFit="cover"
                      className="transition-all duration-300"
                    />
                    <div className="absolute bottom-0 left-0 w-full h-[50%] bg-gradient-to-b from-transparent to-black" />
                  </div>
                  {isActive && (
                    <div className="mt-6">
                      <span
                        className="font-Satoshi font-[700] text-[52.44px] leading-[41.95px] text-transparent uppercase relative md:block hidden" // Hide text on mobile
                        style={{
                          WebkitTextStroke: '1.5px white',
                          backgroundImage: 'linear-gradient(180deg, #FFFFFF -30.97%, rgba(255, 255, 255, 0.15) 76%, rgba(255, 255, 255, 0) 131.33%)',
                          backgroundClip: 'text',
                          WebkitBackgroundClip: 'text',
                        }}
                      >
                        {slide.text}
                      </span>
                      <span
                        className="font-Satoshi font-[700] text-[30px] leading-[30px] text-transparent uppercase relative md:hidden block text-center" // Show smaller text on mobile
                        style={{
                          WebkitTextStroke: '1px white',
                          backgroundImage: 'linear-gradient(180deg, #FFFFFF -30.97%, rgba(255, 255, 255, 0.15) 76%, rgba(255, 255, 255, 0) 131.33%)',
                          backgroundClip: 'text',
                          WebkitBackgroundClip: 'text',
                        }}
                      >
                        {slide.text}
                      </span>
                    </div>
                  )}
                </div>
              )}
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}