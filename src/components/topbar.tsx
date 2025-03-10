import { useState } from "react";
import { Bars3Icon, BellIcon, MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import Image from "next/image";

interface TopbarProps {
  toggleSidebar: () => void;
}

export default function Topbar({ toggleSidebar }: TopbarProps) {
  const [search, setSearch] = useState("");

  return (
    <div className="w-full fixed top-0 left-0 bg-white shadow-md z-50">
      <div className="flex items-center justify-between px-6 py-3">
        
        {/* Left Side - Hamburger + Logo */}
        <div className="flex items-center space-x-4">
          {/* Hamburger Icon (Mobile) */}
          <button onClick={toggleSidebar} className="md:hidden text-gray-600">
            <Bars3Icon className="w-8 h-8" />
          </button>

          {/* Logo */}
          <Image 
            src="/gaybnblogo.svg"  // Update with your actual logo path
            alt="Logo"
            width={120}      // Adjust size as needed
            height={40}
            className="hidden md:block"
          />
        </div>

        {/* Search Bar */}
        {/* Search Bar */}
      <div className="relative flex items-center w-[361px] h-[53px] bg-[#F5F5F56B] rounded-[12.43px]">
        <MagnifyingGlassIcon className="w-5 h-5 absolute left-3 text-gray-400" />
        <input
          type="text"
          placeholder="Search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full pl-10 pr-4 py-2 bg-transparent border-none outline-none"
        />
        </div>

        {/* Center - Buttons (LGBTQ Hotspots & List Your Property) */}
        <div className="hidden md:flex space-x-4">
          <button
            className="w-[154px] h-[53px] rounded-[12.43px] flex items-center justify-center text-purple-700 font-[500] text-[15px] leading-[100%] font-[Nunito Sans]"
            style={{
              background:
                "radial-gradient(89.6% 68.47% at 0% 0.99%, rgba(184, 138, 225, 0.1) 0%, rgba(119, 76, 158, 0.1) 100%)",
            }}
          >
            LGBTQ Hotspots
          </button>

          <button
            className="w-[154px] h-[53px] rounded-[12.43px] flex items-center justify-center text-purple-700 font-[500] text-[15px] leading-[100%] font-[Nunito Sans]"
            style={{
              background:
                "radial-gradient(89.6% 68.47% at 0% 0.99%, rgba(184, 138, 225, 0.1) 0%, rgba(119, 76, 158, 0.1) 100%)",
            }}
          >
            List Your Property
          </button>
        </div>

        {/* Right Side - Notification & Profile */}
        <div className="flex items-center space-x-4">
          {/* Notification Icon */}
          <div className="relative cursor-pointer">
            <BellIcon className="w-6 h-6 text-gray-600" />
            <span className="absolute top-0 right-0 block w-3 h-3 bg-red-500 rounded-full"></span>
          </div>

          {/* User Profile Image */}
          <Image
            src="/user-avatar.jpg"
            alt="User"
            width={40}
            height={40}
            className="rounded-full"
          />
        </div>
      </div>
    </div>
  );
}
