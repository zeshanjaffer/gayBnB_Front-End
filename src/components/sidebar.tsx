import { Power } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/router";
import { 
  HomeIcon, ChatBubbleLeftIcon, ClipboardDocumentListIcon, CalendarIcon, 
  UserCircleIcon, BanknotesIcon, CreditCardIcon, UsersIcon, MapPinIcon 
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
      {/* Overlay for mobile */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden"
          onClick={toggleSidebar}
        />
      )}

      {/* Sidebar */}
      <div 
        className={`fixed md:relative bg-white shadow-lg transition-transform duration-300 z-40 overflow-y-auto
        ${isOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"}`}
        style={{
          width: "300px",
          height: "687.01171875px",
          left: "1px",
          gap: "8px",
          top: "153px", // Default for desktop
        }}
      >
        {/* Responsive Top Adjustment */}
        <style>
          {`
            @media (max-width: 768px) {
              div[style] { top: 77px !important; } /* Remove top gap in mobile */
            }
          `}
        </style>

        {/* Navigation */}
        <nav className="mt-8 space-y-2 px-4">
          {menuItems.map((item) => (
            <Link key={item.name} href={item.path} passHref>
              <div
                className={`flex items-center w-full h-12 p-4 cursor-pointer transition duration-300 rounded-lg
                  ${router.pathname === item.path 
                    ? "bg-purple-200 text-purple-700 shadow-md" 
                    : "text-gray-600 hover:bg-gray-100"}`}
                onClick={toggleSidebar}
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
