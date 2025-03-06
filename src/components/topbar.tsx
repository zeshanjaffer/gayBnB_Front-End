import { useState, useEffect } from "react";
import { MagnifyingGlassIcon, BellIcon, ChevronDownIcon } from "@heroicons/react/24/outline";

const Topbar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [notificationsOpen, setNotificationsOpen] = useState(false); // State for notifications

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (!target.closest(".dropdown-container")) setDropdownOpen(false);
      if (!target.closest(".notification-container")) setNotificationsOpen(false);
    };

    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  return (
    <div className="fixed top-0  w-[1139px] h-[120px] bg-white  z-50 flex items-center px-8">
      <div className="w-[1062.316px] h-[54px] flex items-center justify-between mx-auto">
        {/* Search Bar */}
        <div className="flex items-center bg-[#F5F5F5] rounded-full px-4 w-[361px] h-[53px]">
          <MagnifyingGlassIcon className="w-6 h-6 text-gray-400" />
          <input type="text" placeholder="Search" className="ml-3 w-full bg-transparent outline-none text-gray-700" />
        </div>

        {/* Right Section */}
        <div className="flex items-center space-x-[15px]">
          <button className="w-[176px] h-[53px] rounded-[12.43px] text-white font-[Nunito Sans]" style={{
            background: "radial-gradient(89.6% 68.47% at 0% 0.99%, #B88AE1 0%, #774C9E 100%)"
          }}>LGBTQ Hotspots</button>
          <button className="w-[176px] h-[53px] rounded-[12.43px] text-gray-700 bg-gray-200 font-[Nunito Sans]">
            List Your Property
          </button>

          {/* Notification Icon */}
          <div className="relative notification-container">
            <div
              className="w-[33px] h-[33px] opacity-40 flex items-center justify-center bg-gray-200 rounded-full cursor-pointer"
              onClick={() => setNotificationsOpen(!notificationsOpen)}
            >
              <BellIcon className="w-6 h-6 text-gray-500" />
              {/* Notification Badge */}
              <span className="absolute top-0 right-0 w-4 h-4 bg-red-500 text-white text-xs flex items-center justify-center rounded-full">3</span>
            </div>

            {/* Notification Dropdown */}
            {notificationsOpen && (
              <div className="absolute right-0 mt-2 w-60 bg-white shadow-lg rounded-lg overflow-hidden">
                <div className="p-3 text-gray-700 font-bold border-b">Notifications</div>
                <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">New booking received</a>
                <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Payment processed</a>
                <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">New message from support</a>
              </div>
            )}
          </div>

          {/* Avatar + Dropdown Icon */}
          <div className="relative dropdown-container">
            <div className="flex items-center space-x-2 cursor-pointer" onClick={() => setDropdownOpen(!dropdownOpen)}>
              <div className="w-10 h-10 rounded-full bg-gray-300 overflow-hidden">
                <img src="/avatar.png" alt="User Avatar" className="w-full h-full object-cover" />
              </div>
              <ChevronDownIcon className={`w-5 h-5 text-gray-600 transition-transform duration-200 ${dropdownOpen ? "rotate-180" : "rotate-0"}`} />
            </div>

            {/* Dropdown Menu */}
            {dropdownOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-lg overflow-hidden">
                <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Profile</a>
                <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Settings</a>
                <a href="#" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">Logout</a>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
