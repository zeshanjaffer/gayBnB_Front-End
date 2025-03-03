import Sidebar from "@/components/sidebar";

import ProfileCard from "@/components/profileCard";

const ProfilePage = () => {
  return (
    <div className="flex h-screen w-screen bg-gray-100">
      <Sidebar />
      <main className="flex-1 flex justify-center items-center">
        <ProfileCard />
      </main>
    </div>
  );
};

export default ProfilePage;
