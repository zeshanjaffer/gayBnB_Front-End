"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper/modules";
import Image from "next/image";

const slides = [
  { id: 1, image: "/places1.png", text: "Luxury Apartments" },
  { id: 2, image: "/places2.png", text: "Cozy Cabins" },
  { id: 3, image: "/places3.png", text: "Modern Lofts" },
  { id: 4, image: "/places4.png", text: "Beach Houses" },
  { id: 5, image: "/places5.png", text: "Urban Studios" },
  { id: 6, image: "/places1.png", text: "Countryside Villas" },
];

export default function SliderComponent() {
  return (
    <div className="md:mt-[120px] max-w-[90%] md:max-w-[1241.31px]  w-full h-auto bg-[#242424] rounded-[50px] flex flex-col items-center justify-center px-6 py-10 mx-auto font-Satoshi">
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

      {/* Swiper */}
      <Swiper
        spaceBetween={20}
        loop={true}
        pagination={{ clickable: true }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mt-8 w-full max-w-[1200px] h-[550px]"
        breakpoints={{
          0: {
            slidesPerView: 1,
          },
          640: {
            slidesPerView: 1.2,
          },
          768: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 3,
          },
        }}
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id} className="flex flex-col items-center">
            <div className="relative w-full sm:w-[370px] h-[420px] rounded-[30px] overflow-hidden shadow-lg">
              <Image
                src={slide.image}
                alt={slide.text}
                layout="fill"
                objectFit="cover"
                className="rounded-[30px]"
              />
              <div className="absolute bottom-0 left-0 w-full h-[50%] bg-gradient-to-b from-transparent to-black rounded-b-[30px]" />
            </div>

            <div className="mt-4 bg-[#ffffff15] text-white text-[20px] font-[700] px-6 py-3 rounded-[20px] w-[80%] text-center">
              {slide.text}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}