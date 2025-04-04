import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDesktop, setIsDesktop] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 768);
      if (window.innerWidth >= 768 && isOpen) {
        setIsOpen(false);
      }
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, [isOpen]);

  return (
    <nav className="fixed top-0 md:top-12 left-0 w-full md:left-1/2 transform md:-translate-x-1/2 z-50 bg-white/30 backdrop-blur-md rounded-none md:rounded-2xl w-full shadow-md max-w-[1382px] lg:max-w-[1300px] md:max-w-[1000px] px-4 md:px-0">
      <div className="flex items-center justify-between p-2 md:px-6 md:py-4">
        {/* Logo */}
        <Link href="/" className="flex-shrink-0">
          <Image
            src="/gaybnblogo.svg"
            alt="GayBNB Logo"
            width={70}
            height={70}
            className="cursor-pointer"
          />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8">
          <Link href="/travel_buddy_page" className="text-white text-lg font-semibold">
          Travel Buddy
          </Link>
          <Link href="/gaybnb_your_property" className="text-white text-lg font-semibold">
          Gaybnb Your Property
          </Link>
          <Link href="/gaybnb_stays" className="text-white text-lg font-semibold">
            Gaybnb Stays
          </Link>
          <Link href="/lgbtq_hotspots" className="text-white text-lg font-semibold">
            LGBTQ Hotspots
          </Link>
        </div>

        {/* Login Button (Desktop) */}
        <div className="hidden md:block">
          <button className="bg-gradient-to-r from-[#B88AE1] to-[#774C9E] text-white px-6 py-3 rounded-lg font-bold">
            Login
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-black md:text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="md:hidden bg-gray-800 text-white flex flex-col items-center space-y-4 py-4">
          <Link
            href="/travel_buddy_page"
            className="text-lg"
            onClick={() => setIsOpen(false)}
          >
            Travel Buddy
          </Link>
          <Link
            href="/gaybnb_your_property"
            className="text-lg"
            onClick={() => setIsOpen(false)}
          >
            Gaybnb Your Property
          </Link>
          <Link
            href="/gaybnb_stays"
            className="text-lg"
            onClick={() => setIsOpen(false)}
          >
            Gaybnb Stays
          </Link>
          <Link
            href="/lgbtq_hotspots"
            className="text-lg"
            onClick={() => setIsOpen(false)}
          >
             LGBTQ Hotspots
          </Link>

          <button className="bg-gradient-to-r from-[#B88AE1] to-[#774C9E] px-6 py-3 rounded-lg font-bold">
            Login
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;