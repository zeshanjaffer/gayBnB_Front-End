import { useState } from "react";
import Sidebar from "./sidebar";
import Topbar from "./topbar";
import { ReactNode } from "react";

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const [isOpen, setIsOpen] = useState(false); // Sidebar state

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar with props */}
      <Sidebar isOpen={isOpen} toggleSidebar={() => setIsOpen(!isOpen)} />

      {/* Main Content */}
      <div className="flex flex-col w-full">
        {/* Topbar with Sidebar Toggle */}
        <Topbar toggleSidebar={() => setIsOpen(!isOpen)} />

        {/* Page Content */}
        <div className="mt-[80px] md:mt-[90px] p-6">{children}</div>
      </div>
    </div>
  );
}
