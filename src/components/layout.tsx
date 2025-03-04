import Sidebar from "./sidebar";
import { ReactNode } from "react";
import Topbar from "./topbar";
interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="flex min-h-screen bg-gray-100">
      <Sidebar />
      
      <div className="flex flex-col w-full">
        {/* Top Navigation */}
        <Topbar />

        {/* Page Content */}
        <div className="mt-[120px] p-6">{children}</div>
      </div>
    </div>
  );
}
