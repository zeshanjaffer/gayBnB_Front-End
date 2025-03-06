import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import { 
  HomeIcon, ChatBubbleLeftIcon, ListBulletIcon, CalendarIcon, 
  UserCircleIcon, BanknotesIcon, CreditCardIcon, UsersIcon, 
  MapPinIcon, ClipboardDocumentListIcon,XMarkIcon,Bars3Icon,ArrowRightOnRectangleIcon ,PowerIcon
} from "@heroicons/react/24/outline";

type MenuItem = {  
  name: string;
  path: string;
  icon: React.ElementType;
};

const menuItems: MenuItem[] = [
  { name: "Dashboard", path: "/dashboard", icon: HomeIcon }, // Home icon for Dashboard
  { name: "Chat", path: "/dashboard/chatpage", icon: ChatBubbleLeftIcon }, // Chat icon for messaging
  { name: "Listing", path: "/dashboard/listing", icon: ClipboardDocumentListIcon }, // Document icon for listings
  { name: "Booking", path: "/dashboard/booking", icon: CalendarIcon }, // Calendar icon for booking
  { name: "Trips", path: "/dashboard/trips", icon: MapPinIcon }, // Map pin icon for trips
  { name: "Places", path: "/dashboard/places", icon: MapPinIcon }, // Same map pin for places
  { name: "Payouts", path: "/dashboard/payouts", icon: BanknotesIcon }, // Banknotes icon for payouts
  { name: "Transactions", path: "/dashboard/transactions", icon: CreditCardIcon }, // Credit card icon for transactions
  { name: "Reviews", path: "/dashboard/reviews", icon: UsersIcon }, // Users icon for Travel Buddy
  { name: "Profile", path: "/dashboard/profile", icon: UserCircleIcon }, // Profile icon for user
];

export default function Sidebar() {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Mobile Menu Button */}
      <button 
        onClick={() => setIsOpen(!isOpen)} 
        className="md:hidden fixed top-4 left-4 z-50 bg-gray-100 p-2 rounded-lg shadow-md"
        aria-label="Toggle Sidebar"
      >
        {isOpen ? <XMarkIcon className="w-6 h-6" /> : <Bars3Icon className="w-6 h-6" />}
      </button>

      {/* Sidebar */}
      <div className={`fixed md:relative top-0 left-0 h-full w-[301px] bg-white shadow-lg transition-transform duration-300 z-40 
        ${isOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"} rounded-r-xl overflow-y-auto`}
      >
        {/* Logo */}
        <div className="flex justify-center pt-4">
          <img src="/gaybnblogo.svg" alt="Logo" className="w-20 h-20 rounded-full" />
        </div>

        {/* Navigation Links */}
        <nav className="mt-8 space-y-6">
          {menuItems.map((item) => (
            <Link key={item.name} href={item.path} passHref>
              <div
                className={`flex items-center w-full h-16 p-4 rounded-lg cursor-pointer transition duration-300 
                  ${router.pathname === item.path 
                    ? "bg-purple-200 text-purple-700 shadow-md" 
                    : "text-[#B9C0DE] hover:bg-gray-100"}`}
                style={{ fontFamily: 'Nunito', fontWeight: 400, fontSize: '18px', lineHeight: '100%' }}
                onClick={() => setIsOpen(false)} // Close sidebar on mobile click
              >
                <item.icon className="w-6 h-6 mr-3" />
                <span>{item.name}</span>
              </div>
            </Link>
          ))}
        </nav>

        {/* Logout Button */}
        <div className="flex justify-center pb-6">
          <button
            className="w-24 h-24 rounded-2xl flex items-center justify-center text-white shadow-md"
            style={{
              background: "radial-gradient(89.6% 68.47% at 0% 0.99%, #B88AE1 0%, #774C9E 100%)",
            }}
            aria-label="Logout"
          >
            <PowerIcon className="w-10 h-10" />
          </button>
        </div>
      </div>

      {/* Background Overlay (for mobile) */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-30 md:hidden" 
          onClick={() => setIsOpen(false)}
          aria-hidden="true"
        ></div>
      )}
    </>
  );
}