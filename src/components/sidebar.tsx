import Link from "next/link";
import { useRouter } from "next/router";
import { 
  HomeIcon, ChatBubbleLeftIcon, ListBulletIcon, CalendarIcon, 
  UserCircleIcon, ArrowRightOnRectangleIcon 
} from "@heroicons/react/24/outline";

type MenuItem = {
  name: string;
  path: string;
  icon: React.ElementType;
};

const menuItems: MenuItem[] = [
  { name: "Dashboard", path: "/dashboard", icon: HomeIcon },
  { name: "Chat", path: "/chat", icon: ChatBubbleLeftIcon },
  { name: "Listing", path: "/dashboard/listing", icon: ListBulletIcon },
  { name: "Booking", path: "/dashboard/booking", icon: CalendarIcon },
  { name: "Trips", path: "/dashboard/trips", icon: CalendarIcon },
  { name: "Places", path: "/dashboard/places", icon: CalendarIcon },
  { name: "Payouts", path: "/dashboard/payouts", icon: CalendarIcon },
  { name: "Transactions", path: "/dashboard/transactions", icon: CalendarIcon },
  { name: "Travel Buddy", path: "/dashboard/travel-buddy", icon: CalendarIcon },
  { name: "Profile", path: "/dashboard/profile", icon: UserCircleIcon },
];

export default function Sidebar() {
  const router = useRouter();

  return (
    <div className="w-[301px] h-[1086px] bg-white shadow-lg flex flex-col justify-between p-4 rounded-r-xl">
      {/* Logo */}
      <div className="flex justify-center pt-4">
        <img src="/gaybnblogo.svg" alt="Logo" className="w-20 h-20 rounded-full" />
      </div>

      {/* Navigation Links */}
      <nav className="flex-1 mt-8 space-y-2">
        {menuItems.map((item) => (
          <Link key={item.name} href={item.path} passHref>
            <div
              className={`flex items-center p-3 rounded-lg cursor-pointer transition duration-300 ${
                router.pathname === item.path
                  ? "bg-purple-200 text-purple-700 shadow-md"
                  : "text-gray-700 hover:bg-gray-100"
              }`}
            >
              <item.icon className="w-6 h-6 mr-3" />
              <span className="text-lg font-medium">{item.name}</span>
            </div>
          </Link>
        ))}
      </nav>

      {/* Logout Button */}
      <div className="flex justify-center pb-6">
        <button
          className="w-[102px] h-[102px] rounded-[20.4px] flex items-center justify-center text-white shadow-md"
          style={{
            background: "radial-gradient(89.6% 68.47% at 0% 0.99%, #B88AE1 0%, #774C9E 100%)",
          }}
        >
          <ArrowRightOnRectangleIcon className="w-10 h-10" />
        </button>
      </div>
    </div>
  );
}
