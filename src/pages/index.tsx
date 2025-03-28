import React, { useState } from 'react';
import Image from 'next/image';
import Banner from '@/components/banner1';
import Banner_2 from '@/components/banner2';
import SearchPortal from '@/components/search_portal';
import Banner_3 from '@/components/banner3';
import Inclusivity from '@/components/Inclusivity';
import SliderComponent from '@/components/slider_component';
import Partners from '@/components/partners';
import Newsletter from '@/components/newsletter';
import PlacesSlider from '@/components/places_slider';

export default function Home() {
  const [heroImage, setHeroImage] = useState<string>("/heroimage1.jpeg");
  const [description, setDescription] = useState<string>("");
  const [selectedButton, setSelectedButton] = useState<number>(0);
  const [showRings, setShowRings] = useState<boolean>(false);

  const handleImageClick = (newImage: string, newDescription: string, buttonIndex: number) => {
    setHeroImage(newImage);
    setDescription(newDescription);
    setSelectedButton(buttonIndex);
    setShowRings(true);
  };

  return (
    <>
      <div className="relative h-[50vh] sm:h-[60vh] md:h-[70vh] lg:h-[80vh] xl:h-screen w-full mx-auto pt-[86px] md:pt-0">
        {/* Hero Section */}
        <div
          className="w-full h-full bg-cover bg-center transition-all duration-500"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          {/* Dynamic Text */}
          <h1
            className="absolute top-[30%] sm:top-[35%] md:top-[40%] lg:top-[45%] left-[32px] text-2xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-[70px] font-extrabold tracking-wider leading-[124%]"
            style={{
              fontFamily: "Nunito Sans",
              background:
                "linear-gradient(180deg, #FFFFFF 0%, #FFFFFF 43.44%, rgba(255, 255, 255, 0.14) 70.26%, rgba(249, 215, 205, 0.62) 109.7%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            {selectedButton === 0 && "Hotspot"}
            {selectedButton === 1 && "Accommodation"}
            {selectedButton === 2 && "Travel Buddy"}
          </h1>

          {/* Right Side Buttons */}
          <div className="absolute top-[30%] sm:top-[25%] md:top-[30%] lg:top-[35%] right-[20px] md:right-[30px] lg:right-[50px] flex flex-col gap-3 sm:gap-4">
            {/* First Button */}
            <button
              onMouseEnter={() => setDescription("Find the best destinations, tips, and experiences to make your travels seamless and memorable.")}
              onMouseLeave={() => setDescription("")}
              onClick={() => handleImageClick("/heroimage1.jpeg", "Find the best destinations, tips, and experiences to make your travels seamless and memorable.", 0)}
              className={`border-[1.26px] border-white rounded-full hover:opacity-80 transition-all duration-300 ${
                selectedButton === 0 ? "w-[70px] h-[70px] sm:w-[80px] sm:h-[80px] md:w-[90px] md:h-[90px] lg:w-[110px] lg:h-[110px] xl:w-[124px] xl:h-[124px]" : 
                "w-[40px] h-[40px] sm:w-[50px] sm:h-[50px] md:w-[60px] md:h-[60px] lg:w-[70px] lg:h-[70px] xl:w-[78px] xl:h-[78px]"
              }`}
            >
              <Image 
                src="/heroimage1.jpeg" 
                alt="Destination 1" 
                width={selectedButton === 0 ? 124 : 78} 
                height={selectedButton === 0 ? 124 : 78} 
                className="rounded-full h-full w-full object-cover" 
              />
            </button>

            {/* Second Button */}
            <button
              onMouseEnter={() => setDescription("Discover hidden gems and local secrets.")}
              onMouseLeave={() => setDescription("")}
              onClick={() => handleImageClick("/heroimage2.jpeg", "Discover hidden gems and local secrets.", 1)}
              className={`border-[1.26px] border-white rounded-full hover:opacity-80 transition-all duration-300 ${
                selectedButton === 1 ? "w-[70px] h-[70px] sm:w-[80px] sm:h-[80px] md:w-[90px] md:h-[90px] lg:w-[110px] lg:h-[110px] xl:w-[124px] xl:h-[124px]" : 
                "w-[40px] h-[40px] sm:w-[50px] sm:h-[50px] md:w-[60px] md:h-[60px] lg:w-[70px] lg:h-[70px] xl:w-[78px] xl:h-[78px]"
              }`}
            >
              <Image 
                src="/heroimage2.jpeg" 
                alt="Destination 2" 
                width={selectedButton === 1 ? 124 : 78} 
                height={selectedButton === 1 ? 124 : 78} 
                className="rounded-full h-full w-full object-cover" 
              />
            </button>

            {/* Third Button */}
            <button
              onMouseEnter={() => setDescription("Experience unique adventures and create lasting memories.")}
              onMouseLeave={() => setDescription("")}
              onClick={() => handleImageClick("/heroimage3.jpg", "Experience unique adventures and create lasting memories.", 2)}
              className={`border-[1.26px] border-white rounded-full hover:opacity-80 transition-all duration-300 ${
                selectedButton === 2 ? "w-[70px] h-[70px] sm:w-[80px] sm:h-[80px] md:w-[90px] md:h-[90px] lg:w-[110px] lg:h-[110px] xl:w-[124px] xl:h-[124px]" : 
                "w-[40px] h-[40px] sm:w-[50px] sm:h-[50px] md:w-[60px] md:h-[60px] lg:w-[70px] lg:h-[70px] xl:w-[78px] xl:h-[78px]"
              }`}
            >
              <Image 
                src="/heroimage3.jpg" 
                alt="Destination 3" 
                width={selectedButton === 2 ? 124 : 78} 
                height={selectedButton === 2 ? 124 : 78} 
                className="rounded-full h-full w-full object-cover" 
              />
            </button>
          </div>
        </div>
      </div>
      
      <SearchPortal/>
      <Inclusivity/>
      <SliderComponent/>
      <Banner/>
      <Banner_2/>
      <Banner_3/>
      <PlacesSlider/>
      <Partners/>
      <Newsletter/>
    </>
  );
}