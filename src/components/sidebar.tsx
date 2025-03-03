import { FaUser, FaSignOutAlt, FaHome, FaComments } from "react-icons/fa";
import Link from "next/link";

const Sidebar = () => {
  return (
    <div className="w-72 h-full bg-white shadow-md flex flex-col p-6">
      <h1 className="text-xl font-bold text-purple-700">Dashboard</h1>
      <nav className="mt-8 space-y-4">
        <Link href="/profile" className="flex items-center space-x-2 text-gray-700 hover:text-purple-700">
          <FaUser /> <span>Profile</span>
        </Link>
        <Link href="/" className="flex items-center space-x-2 text-gray-700 hover:text-purple-700">
          <FaHome /> <span>Home</span>
        </Link>
        <Link href="/chat" className="flex items-center space-x-2 text-gray-700 hover:text-purple-700">
          <FaComments /> <span>Chat</span>
        </Link>
        <Link href="/logout" className="flex items-center space-x-2 text-gray-700 hover:text-purple-700">
          <FaSignOutAlt /> <span>Logout</span>
        </Link>
      </nav>
    </div>
  );
};

export default Sidebar;
