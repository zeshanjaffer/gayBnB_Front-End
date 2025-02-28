import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react"; // For hamburger icon

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false); // State for mobile menu

  return (
    <nav className="fixed top-0 left-0 w-full bg-gray-700/30 backdrop-blur-md z-50">
      <div className="container mx-auto flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <Link href="/">
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
          <Link href="/login" className="text-white text-lg font-semibold">Login</Link>
          <Link href="/register" className="text-white text-lg font-semibold">Register</Link>
          <Link href="/" className="text-white text-lg font-semibold">GAY STAYS</Link>
        </div>

        {/* Login Button (Desktop) */}
        <div className="hidden md:block">
          <button className="bg-gradient-to-r from-[#B88AE1] to-[#774C9E] text-white px-6 py-3 rounded-lg font-bold">
            Login
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="md:hidden bg-gray-800 text-white flex flex-col items-center space-y-4 py-4">
          <Link href="/" className="text-lg" onClick={() => setIsOpen(false)}>LGBTQ+ HOTSPOTS</Link>
          <Link href="/" className="text-lg" onClick={() => setIsOpen(false)}>GAYBNB YOUR PROPERTY</Link>
          <Link href="/" className="text-lg" onClick={() => setIsOpen(false)}>GAY STAYS</Link>
          <button className="bg-gradient-to-r from-[#B88AE1] to-[#774C9E] px-6 py-3 rounded-lg font-bold">
            Login
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
