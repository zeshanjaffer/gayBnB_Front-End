import Link from "next/link";
import { useRouter } from "next/router";
import { HomeIcon, ChatBubbleLeftIcon, ListBulletIcon, CalendarIcon, UserCircleIcon, ArrowRightOnRectangleIcon } from "@heroicons/react/24/outline";

type MenuItem = {
  name: string;
  path: string;
  icon: React.ElementType;
};

const menuItems: MenuItem[] = [
  { name: "Dashboard", path: "/dashboard", icon: HomeIcon },
  { name: "Chat", path: "/chat", icon: ChatBubbleLeftIcon },
  { name: "Listing", path: "/listing", icon: ListBulletIcon },
  { name: "Booking", path: "/booking", icon: CalendarIcon },
  { name: "Trips", path: "/trips", icon: CalendarIcon },
  { name: "Places", path: "/places", icon: CalendarIcon },
  { name: "Payouts", path: "/payouts", icon: CalendarIcon },
  { name: "Transactions", path: "/transactions", icon: CalendarIcon },
  { name: "Travel Buddy", path: "/travel-buddy", icon: CalendarIcon },
  { name: "Profile", path: "/profile", icon: UserCircleIcon },
];

export default function Sidebar() {
  const router = useRouter();

  return (
    <div className="w-[301px] h-[1086px] bg-white shadow-lg flex flex-col justify-between p-4">
      {/* Logo */}
      <div className="flex justify-center">
        <img src="/logo.png" alt="Logo" className="w-20 h-20 rounded-full" />
      </div>

      {/* Navigation Links */}
      <nav className="flex-1 mt-8">
        {menuItems.map((item) => (
          <Link key={item.name} href={item.path} passHref>
            <div
              className={`flex items-center p-3 mb-2 rounded-lg cursor-pointer transition ${
                router.pathname === item.path ? "bg-purple-200 text-purple-700" : "text-gray-700"
              }`}
            >
              <item.icon className="w-6 h-6 mr-3" />
              <span className="text-lg font-medium">{item.name}</span>
            </div>
          </Link>
        ))}
      </nav>

      {/* Logout Button */}
      <div className="mt-4">
        <button className="w-full flex items-center justify-center bg-purple-600 text-white p-3 rounded-lg shadow-md hover:bg-purple-700">
          <ArrowRightOnRectangleIcon className="w-6 h-6 mr-2" />
          Logout
        </button>
      </div>
    </div>
  );
}
