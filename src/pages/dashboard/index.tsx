import { useRouter } from "next/router";
import Sidebar from "@/components/sidebar";

const Dashboard = () => {
  const router = useRouter();

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
     

      {/* Main Content */}
      <div className="flex-1 p-6">
        {router.pathname === "/dashboard" && <h1 className="text-3xl font-bold">Welcome to the Dashboard</h1>}
      </div>
    </div>
  );
};

export default Dashboard;
