import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";

const Topbar = () => {
  return (
    <div className="fixed top-0 left-[301px] w-[1139px] h-[120px] bg-white flex items-center px-8 shadow-md z-50">
      {/* Search Bar */}
      <div className="flex items-center bg-[#F5F5F56B] rounded-full px-4 w-[361px] h-[53px]">
        <MagnifyingGlassIcon className="w-6 h-6 text-gray-400" />
        <input
          type="text"
          placeholder="Search"
          className="ml-3 w-full bg-transparent outline-none text-gray-700"
        />
      </div>

      {/* Right Section (Avatar & Buttons) */}
      <div className="ml-auto flex items-center space-x-4">
        <button className="px-4 py-2 bg-purple-600 text-white rounded-full">
          LGBTQ Hotspots
        </button>
        <button className="px-4 py-2 bg-gray-200 rounded-full">
          List Your Property
        </button>
        {/* Avatar */}
        <div className="w-10 h-10 rounded-full bg-gray-300 overflow-hidden">
          <img
            src="/profile.jpg"
            alt="User Avatar"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default Topbar;
