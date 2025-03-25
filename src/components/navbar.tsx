import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed md:top-12 left-1/2 transform -translate-x-1/2 z-50 bg-white/30 backdrop-blur-md rounded-none md:rounded-2xl w-full shadow-md max-w-[1382px] lg:max-w-[1300px] md:max-w-[1000px]">
      <div className="flex items-center justify-between p-2 md:px-6 md:py-4">
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
          <Link href="/login" className="text-white text-lg font-semibold">
            Login
          </Link>
          <Link href="/register" className="text-white text-lg font-semibold">
            Register
          </Link>
          <Link href="/forgetpassword" className="text-white text-lg font-semibold">
            Forget Password
          </Link>
          <Link href="/dashboard" className="text-white text-lg font-semibold">
            Dashboard
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
            href="/login"
            className="text-lg"
            onClick={() => setIsOpen(false)}
          >
            Login
          </Link>
          <Link
            href="/register"
            className="text-lg"
            onClick={() => setIsOpen(false)}
          >
            Register
          </Link>
          <Link
            href="/dashboard"
            className="text-lg"
            onClick={() => setIsOpen(false)}
          >
            Dashboard
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