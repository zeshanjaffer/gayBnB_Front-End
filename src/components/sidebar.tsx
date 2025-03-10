import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { 
  HomeIcon, ChatBubbleLeftIcon, ListBulletIcon, CalendarIcon, 
  UserCircleIcon, BanknotesIcon, CreditCardIcon, UsersIcon, 
  MapPinIcon, ClipboardDocumentListIcon, PowerIcon
} from "@heroicons/react/24/outline";

type MenuItem = {  
  name: string;
  path: string;
  icon: React.ElementType;
};

const menuItems: MenuItem[] = [
  { name: "Dashboard", path: "/dashboard", icon: HomeIcon }, 
  { name: "Chat", path: "/dashboard/chatpage", icon: ChatBubbleLeftIcon }, 
  { name: "Listing", path: "/dashboard/listing", icon: ClipboardDocumentListIcon }, 
  { name: "Booking", path: "/dashboard/booking", icon: CalendarIcon }, 
  { name: "Trips", path: "/dashboard/trips", icon: MapPinIcon }, 
  { name: "Places", path: "/dashboard/places", icon: MapPinIcon }, 
  { name: "Payouts", path: "/dashboard/payouts", icon: BanknotesIcon }, 
  { name: "Transactions", path: "/dashboard/transactions", icon: CreditCardIcon }, 
  { name: "Reviews", path: "/dashboard/reviews", icon: UsersIcon }, 
  { name: "Profile", path: "/dashboard/profile", icon: UserCircleIcon }, 
];

interface SidebarProps {
  isOpen: boolean;
  toggleSidebar: () => void;
}

export default function Sidebar({ isOpen, toggleSidebar }: SidebarProps) {
  const router = useRouter();

  return (
    <>
      {/* Overlay to close sidebar on mobile */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
          onClick={toggleSidebar}
        />
      )}

      {/* Sidebar Below Topbar */}
      <div 
        className={`fixed md:relative top-[60px] left-0 h-[calc(100vh-60px)] w-[270px] bg-white shadow-lg transition-transform duration-300 z-40 
        ${isOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"} overflow-y-auto`}
      >
        {/* Navigation Links */}
        <nav className="mt-8 space-y-2 px-4">
          {menuItems.map((item) => (
            <Link key={item.name} href={item.path} passHref>
              <div
                className={`flex items-center w-full h-12 p-4 cursor-pointer transition duration-300 rounded-lg
                  ${router.pathname === item.path 
                    ? "bg-purple-200 text-purple-700 shadow-md" 
                    : "text-gray-600 hover:bg-gray-100"}`}
                onClick={toggleSidebar} // Close sidebar on mobile click
              >
                <item.icon className="w-6 h-6 mr-3" />
                <span>{item.name}</span>
              </div>
            </Link>
          ))}
        </nav>

        {/* Logout Button */}
        <div className="flex justify-center py-6">
          <button
            className="w-20 h-20 rounded-full flex items-center justify-center text-white shadow-md"
            style={{
              background: "radial-gradient(89.6% 68.47% at 0% 0.99%, #B88AE1 0%, #774C9E 100%)",
            }}
            aria-label="Logout"
          >
            <PowerIcon className="w-8 h-8" />
          </button>
        </div>
      </div>
    </>
  );
}
