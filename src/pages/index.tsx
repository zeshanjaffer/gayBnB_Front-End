import Image from 'next/image';
import { useState } from 'react';

export default function Home() {
  // Initial hero image
  const [heroImage, setHeroImage] = useState("/heroimage1.jpg"); 

  // Function to change the hero image
  const handleImageClick = (newImage: string) => {
    setHeroImage(newImage);
  };

  return (
    <div className="relative w-[1443px] h-[828px] mx-auto">
      {/* Hero Section */}
      <div 
        className="w-full h-full bg-cover bg-center transition-all duration-500"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        {/* Adventure Text */}
        <h1 
          className="absolute top-[222px] left-[32px] text-[135px] font-extrabold tracking-wider leading-[124%]"
          style={{
            fontFamily: "Nunito Sans",
            background: "linear-gradient(180deg, #FFFFFF 0%, #FFFFFF 43.44%, rgba(255, 255, 255, 0.14) 70.26%, rgba(249, 215, 205, 0.62) 109.7%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent"
          }}
        >
          Adventure
        </h1>

        {/* Right Side Buttons */}
        <div className="absolute top-[395px] right-[50px] flex flex-col gap-4">
          {/* First Button - Default */}
          <button 
            onClick={() => handleImageClick("/image1.jpg")}
            className="w-[124.3px] h-[124.3px] border-[1.26px] border-white rounded-full hover:opacity-80 transition ease-in-out duration-300"
          >
            <Image src="/heroimage1.jpg" alt="Destination 1" width={124} height={124} className="rounded-full" />
          </button>

          {/* Other Buttons */}
          <button 
            onClick={() => handleImageClick("/image2.jpg")}
            className="w-[78px] h-[78px] border-[1.26px] border-white rounded-full hover:opacity-80 transition ease-in-out duration-300"
          >
            <Image src="/image2.jpg" alt="Destination 2" width={78} height={78} className="rounded-full" />
          </button>

          <button 
            onClick={() => handleImageClick("/image3.jpg")}
            className="w-[78px] h-[78px] border-[1.26px] border-white rounded-full hover:opacity-80 transition ease-in-out duration-300"
          >
            <Image src="/image3.jpg" alt="Destination 3" width={78} height={78} className="rounded-full" />
          </button>
        </div>
      </div>
    </div>
  );
}
