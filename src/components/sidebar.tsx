"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { Power } from "lucide-react";
import { useState, useEffect } from "react"; // Import useState and useEffect

type MenuItem = {
  name: string;
  path: string;
  icon: string;
};

const menuItems: MenuItem[] = [
  { name: "Dashboard", path: "/dashboard", icon: "/icons/dashboard.svg" },
  { name: "Chat", path: "/dashboard/chatpage", icon: "/icons/chat.svg" },
  { name: "Listing", path: "/dashboard/listing", icon: "/icons/listing.svg" },
  { name: "Booking", path: "/dashboard/booking", icon: "/icons/booking.svg" },
  { name: "Trips", path: "/dashboard/trips", icon: "/icons/trips.svg" },
  { name: "Places", path: "/dashboard/places", icon: "/icons/places.svg" },
  { name: "Payouts", path: "/dashboard/payouts", icon: "/icons/payouts.svg" },
  { name: "Transactions", path: "/dashboard/transactions", icon: "/icons/transaction.svg" },
  { name: "Travel Buddy", path: "/dashboard/travel_buddy", icon: "/icons/travel.svg" },
  { name: "Reviews", path: "/dashboard/reviews", icon: "/icons/reviews.svg" },
  { name: "Profile", path: "/dashboard/profile", icon: "/icons/profile.png" },
];

interface SidebarProps {
  isOpen: boolean;
  toggleSidebar: () => void;
}

export default function Sidebar({ isOpen, toggleSidebar }: SidebarProps) {
  const router = useRouter();
  const [topOffset, setTopOffset] = useState("64px"); // Default to mobile value

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setTopOffset("64px");
      } else {
        setTopOffset("130px");
      }
    };

    // Set initial value on mount
    handleResize();

    // Listen for window resize events
    window.addEventListener("resize", handleResize);

    // Clean up the event listener
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      {/* Overlay for mobile */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
          onClick={toggleSidebar}
        />
      )}

      {/* Sidebar */}
      <div
        className={`fixed md:relative bg-white transition-transform duration-300 z-40 overflow-y-auto
        ${isOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"}`}
        style={{
          width: "300px",
          left: "1px",
          gap: "8px",
          top: topOffset, // Dynamically set top offset
          bottom: "0",
          height: "auto",
        }}
      >
        {/* LOGO - Visible only on mobile (smaller than md) */}
        <div className="flex justify-center py-4 md:hidden">
          <Image src="/gaybnblogo.svg" alt="Logo" width={120} height={40} />
        </div>

        {/* Buttons - Only on Mobile & Tablet (smaller than md) */}
        <div className="flex flex-col items-center pb-4 gap-4 px-4 md:hidden">
          <button
            className="w-full h-[53px] rounded-[12.43px] flex items-center justify-center text-purple-700 font-[500] text-[15px] leading-[100%] font-[Nunito Sans]"
            style={{
              background:
                "radial-gradient(89.6% 68.47% at 0% 0.99%, rgba(184, 138, 225, 0.1) 0%, rgba(119, 76, 158, 0.1) 100%)",
            }}
          >
            LGBTQ Hotspots
          </button>

          <button
            className="w-full h-[53px] rounded-[12.43px] flex items-center justify-center text-purple-700 font-[500] text-[15px] leading-[100%] font-[Nunito Sans]"
            style={{
              background:
                "radial-gradient(89.6% 68.47% at 0% 0.99%, rgba(184, 138, 225, 0.1) 0%, rgba(119, 76, 158, 0.1) 100%)",
            }}
          >
            List Your Property
          </button>
        </div>

        {/* Navigation */}
        <nav className="mt-8 space-y-2 px-2 md:px-4">
          {menuItems.map((item) => (
            <Link key={item.name} href={item.path} passHref>
              <div
                className={`flex items-center w-full h-12 p-4 cursor-pointer transition duration-300 rounded-md
                  ${
                    router.pathname === item.path
                      ? "bg-purple-200 text-purple-700 shadow-md"
                      : "text-gray-600 hover:bg-gray-100"
                  }`}
                onClick={toggleSidebar}
              >
                <Image
                  src={item.icon}
                  alt={item.name}
                  width={24}
                  height={24}
                  className="mr-4 flex-shrink-0"
                />
                <span className="text-[16px] font-medium">{item.name}</span>
              </div>
            </Link>
          ))}
        </nav>

        {/* Logout Button */}
        <div className="flex justify-center py-6">
          <button
            className="w-[102px] h-[102px] rounded-[20.4px] flex flex-col items-center justify-center
              bg-gradient-to-br from-[#B88AE1] to-[#774C9E] shadow-md text-white"
          >
            <Power size={30} />
            <span className="font-ABeeZee text-[14px] leading-[100%] tracking-[0px] text-center">
              Logout
            </span>
          </button>
        </div>
      </div>
    </>
  );
}