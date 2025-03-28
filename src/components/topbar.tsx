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
      <div className="flex items-center justify-between px-4 sm:px-6 py-3 lg:px-8 xl:px-10">
        {/* Left Side - Hamburger + Logo */}
        <div className="flex items-center space-x-4">
          {/* Hamburger Icon (Mobile) */}
          <button onClick={toggleSidebar} className="md:hidden text-gray-600">
            <Bars3Icon className="w-6 h-6 sm:w-8 sm:h-8" />
          </button>

          {/* Logo - Hidden on mobile, shown on tablet+ */}
          <Image
            src="/gaybnblogo.svg"
            alt="Logo"
            width={120}
            height={40}
            className="hidden sm:block"
            priority
          />
        </div>

        {/* Search Bar - Responsive width */}
        <div className="relative flex items-center w-[180px] sm:w-[280px] md:w-[361px] lg:w-[400px] xl:w-[480px] h-[40px] sm:h-[53px] bg-[#F5F5F56B] rounded-[12.43px] mx-2">
          <MagnifyingGlassIcon className="w-4 h-4 sm:w-5 sm:h-5 absolute left-3 text-gray-400" />
          <input
            type="text"
            placeholder="Search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-8 sm:pl-10 pr-4 py-2 bg-transparent border-none outline-none text-sm sm:text-base"
          />
        </div>

        {/* Center - Buttons (Hidden on mobile, shown on tablet+) */}
        <div className="hidden md:flex space-x-2 lg:space-x-4 xl:space-x-6">
          <button
            className="w-[120px] lg:w-[154px] xl:w-[180px] h-[40px] sm:h-[53px] rounded-[12.43px] flex items-center justify-center text-purple-700 font-[500] text-[13px] sm:text-[15px] lg:text-[16px] leading-[100%] font-[Nunito Sans]"
            style={{
              background: "radial-gradient(89.6% 68.47% at 0% 0.99%, rgba(184, 138, 225, 0.1) 0%, rgba(119, 76, 158, 0.1) 100%)",
            }}
          >
            LGBTQ Hotspots
          </button>

          <button
            className="w-[120px] lg:w-[154px] xl:w-[180px] h-[40px] sm:h-[53px] rounded-[12.43px] flex items-center justify-center text-purple-700 font-[500] text-[13px] sm:text-[15px] lg:text-[16px] leading-[100%] font-[Nunito Sans]"
            style={{
              background: "radial-gradient(89.6% 68.47% at 0% 0.99%, rgba(184, 138, 225, 0.1) 0%, rgba(119, 76, 158, 0.1) 100%)",
            }}
          >
            List Your Property
          </button>
        </div>

        {/* Right Side - Notification & Profile */}
        <div className="flex items-center space-x-2 sm:space-x-4">
          {/* Notification Icon */}
          <div className="relative cursor-pointer">
            <BellIcon className="w-5 h-5 sm:w-6 sm:h-6 text-gray-600" />
            <span className="absolute top-0 right-0 block w-2 h-2 sm:w-3 sm:h-3 bg-red-500 rounded-full"></span>
          </div>

          {/* User Profile Image - Responsive sizing */}
          <Image
            src="/icons/avatar.svg"
            alt="User"
            width={40}
            height={40}
            className="rounded-full w-8 h-8 sm:w-10 sm:h-10"
            priority
          />
        </div>
      </div>
    </div>
  );
}