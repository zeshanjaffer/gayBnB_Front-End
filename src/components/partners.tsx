"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// Partner images
const partners = [
  { name: "IHG Hotels", logo: "/partner1.png" },
  { name: "Hilton", logo: "/partner2.png" },
  { name: "Sheraton", logo: "/partner3.png" },
  { name: "Hotelbeds", logo: "/partner1.png" },
  { name: "Iberostar", logo: "/partner2.png" },
];

export default function Partners() {
  return (
    <section className="mt-[50px] bg-white h-[179.55px] flex flex-col items-center justify-center">
      {/* Section Title */}
      <h2 className="text-[24px] font-[700] font-satoshi leading-[100%] tracking-[0%] text-gray-900 text-center">
        A Few of Our Fabulous Partners
      </h2>

      {/* Partner Logos */}
      <div className="mt-6 w-full max-w-[1000px]">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={4}
          loop={true}
          
          autoplay={{ delay: 30000 }}
         
        >
          {partners.map((partner, index) => (
            <SwiperSlide key={index}>
              <div className="flex justify-center">
                <Image
                  src={partner.logo}
                  alt={partner.name}
                  width={160}
                  height={80}
                  className="h-auto opacity-80 hover:opacity-100 transition"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}