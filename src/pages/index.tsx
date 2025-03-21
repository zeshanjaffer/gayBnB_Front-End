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
  // Initial hero image
  const [heroImage, setHeroImage] = useState<string>("/heroimage1.jpg");
  const [description, setDescription] = useState<string>("");
  const [selectedButton, setSelectedButton] = useState<number>(0); // Initialize with 0 (first button default)
  const [showRings, setShowRings] = useState<boolean>(false); // State to control ring visibility

  // Function to change the hero image and description
  const handleImageClick = (newImage: string, newDescription: string, buttonIndex: number) => {
    setHeroImage(newImage);
    setDescription(newDescription);
    setSelectedButton(buttonIndex); // Set the selected button index
    setShowRings(true); // Show rings on click
  };

  return (
    <>
      <div className="relative h-[828px] mx-auto max-w-[1440px]"> {/* Add max-w */}
        {/* Hero Section */}
        <div
          className="w-full h-full bg-cover bg-center transition-all duration-500"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          {/* Dynamic Text Based on Selected Page */}
          <h1
            className="absolute top-[222px] left-[32px] text-[135px] font-extrabold tracking-wider leading-[124%]"
            style={{
              fontFamily: "Nunito Sans",
              background:
                "linear-gradient(180deg, #FFFFFF 0%, #FFFFFF 43.44%, rgba(255, 255, 255, 0.14) 70.26%, rgba(249, 215, 205, 0.62) 109.7%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            {selectedButton === 0 && "Adventure"}
            {selectedButton === 1 && "Life is a journey"}
            {selectedButton === 2 && "Love to travel"}
          </h1>

          {/* Right Side Buttons */}
          <div className="absolute top-[395px] right-[50px] flex flex-col gap-4">
            {/* First Button - Default */}
            <button
              onMouseEnter={() => setDescription("Find the best destinations, tips, and experiences to make your travels seamless and memorable.")}
              onMouseLeave={() => setDescription("")}
              onClick={() => handleImageClick("/heroimage1.jpg", "Find the best destinations, tips, and experiences to make your travels seamless and memorable.", 0)}
              className={`border-[1.26px] border-white rounded-full hover:opacity-80 transition-all duration-300 ${
                selectedButton === 0 ? "w-[124px] h-[124px]" : "w-[78px] h-[78px]"
              }`}
            >
              <Image src="/heroimage1.jpg" alt="Destination 1" width={selectedButton === 0 ? 124 : 78} height={selectedButton === 0 ? 124 : 78} className="rounded-full" />
            </button>

            {/* Second Button */}
            <button
              onMouseEnter={() => setDescription("Discover hidden gems and local secrets.")}
              onMouseLeave={() => setDescription("")}
              onClick={() => handleImageClick("/heroimage2.jpg", "Discover hidden gems and local secrets.", 1)}
              className={`border-[1.26px] border-white rounded-full hover:opacity-80 transition-all duration-300 ${
                selectedButton === 1 ? "w-[124px] h-[124px]" : "w-[78px] h-[78px]"
              }`}
            >
              <Image src="/heroimage2.jpg" alt="Destination 2" width={selectedButton === 1 ? 124 : 78} height={selectedButton === 1 ? 124 : 78} className="rounded-full" />
            </button>

            {/* Third Button */}
            <button
              onMouseEnter={() => setDescription("Experience unique adventures and create lasting memories.")}
              onMouseLeave={() => setDescription("")}
              onClick={() => handleImageClick("/heroimage3.jpg", "Experience unique adventures and create lasting memories.", 2)}
              className={`border-[1.26px] border-white rounded-full hover:opacity-80 transition-all duration-300 ${
                selectedButton === 2 ? "w-[124px] h-[124px]" : "w-[78px] h-[78px]"
              }`}
            >
              <Image src="/heroimage3.jpg" alt="Destination 3" width={selectedButton === 2 ? 124 : 78} height={selectedButton === 2 ? 124 : 78} className="rounded-full" />
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