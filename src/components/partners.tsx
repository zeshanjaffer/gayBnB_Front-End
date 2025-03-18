"use client";

import Image from "next/image";

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
    <section className="bg-white  h-[179.55px] flex flex-col items-center justify-center">
      {/* Section Title */}
      <h2 className="text-[24px] font-[700] font-satoshi leading-[100%] tracking-[0%] text-gray-900 text-center">
        A Few of Our Fabulous Partners
      </h2>

      {/* Partner Logos */}
      <div className="mt-6 flex items-center justify-center gap-[70px] ">
        {partners.map((partner, index) => (
          <Image
            key={index}
            src={partner.logo}
            alt={partner.name}
            width={160}
            height={80}
            className="h-auto opacity-80 hover:opacity-100 transition"
          />
        ))}
      </div>
    </section>
  );
}
