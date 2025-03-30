import React, { useState } from 'react';
import Image from 'next/image';
import Head from 'next/head';
import Ring from '@/components/ring';
import SearchPortal from '@/components/search_portal';
import Inclusivity from '@/components/Inclusivity';
import SliderComponent from '@/components/slider_component';
import Banner from '@/components/banner1';
import Banner_2 from '@/components/banner2';
import Banner_3 from '@/components/banner3';
import PlacesSlider from '@/components/places_slider';
import Partners from '@/components/partners';
import Newsletter from '@/components/newsletter';


export default function Home() {
  const buttonData = [
    {
      id: 0,
      image: "/heroimage1.jpeg",
      title: "Hotspot",
      description: "Find the best destinations, tips, and experiences",
    },
    {
      id: 1,
      image: "/heroimage2.jpeg",
      title: "Accommodation",
      description: "Discover hidden gems and local secrets",
    },
    {
      id: 2,
      image: "/heroimage3.jpg",
      title: "Travel Buddy",
      description: "Experience unique adventures",
    },
  ];

  const [heroImage, setHeroImage] = useState(buttonData[0].image);
  const [selectedButton, setSelectedButton] = useState(0);

  const handleButtonClick = (id: number) => {
    const selected = buttonData.find(btn => btn.id === id);
    if (selected) {
      setHeroImage(selected.image);
      setSelectedButton(id);
    }
  };

  return (
    <>
      <Head>
        <title>Gaybnb Frontend</title>
        <meta charSet="UTF-8" />
        <link rel="icon" href="/favicon.png" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

      {/* Hero Section */}
      <div className="relative h-[50vh] sm:h-[60vh] md:h-[70vh] lg:h-[80vh] xl:h-screen w-full mx-auto pt-[86px] md:pt-0 overflow-hidden">
        <div
          className="w-full h-full bg-cover bg-center transition-all duration-500"
          style={{ backgroundImage: `url(${heroImage})` }}
        >
          {/* Title */}
          <h1
            className="absolute top-[30%] sm:top-[35%] md:top-[40%] lg:top-[45%] left-[32px] text-2xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-[70px] font-extrabold tracking-wider leading-[124%]"
            style={{
              fontFamily: "Nunito Sans",
              background: "linear-gradient(180deg, #FFFFFF 0%, #FFFFFF 43.44%, rgba(255, 255, 255, 0.14) 70.26%, rgba(249, 215, 205, 0.62) 109.7%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            {buttonData[selectedButton].title}
          </h1>

          {/* Right Side Buttons */}
          <div className="absolute top-[30%] sm:top-[25%] md:top-[30%] lg:top-[35%] right-[20px] md:right-[30px] lg:right-[50px] flex flex-col gap-3 sm:gap-4">
            {buttonData.map((btn, index) => {
              const isSelected = selectedButton === index;
              const buttonSize = isSelected ? 124 : 78;
              
              return (
                <div key={btn.id} className="relative">
                  <button
                    onClick={() => handleButtonClick(index)}
                    className={`border-[1.26px] border-white rounded-full transition-all duration-300 overflow-hidden ${
                      isSelected ? 'w-[124px] h-[124px]' : 'w-[78px] h-[78px]'
                    }`}
                  >
                    <Image
                      src={btn.image}
                      alt={btn.title}
                      width={buttonSize}
                      height={buttonSize}
                      className="rounded-full object-cover w-full h-full"
                      priority
                    />
                  </button>
                  <Ring 
                    isSelected={isSelected} 
                    buttonSize={buttonSize}
                    description={isSelected ? btn.description : undefined}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Other Sections */}
      <SearchPortal />
      <Inclusivity />
      <SliderComponent />
      <Banner />
      <Banner_2 />
      <Banner_3 />
      <PlacesSlider />
      <Partners />
      <Newsletter />
      
    </>
  );
}