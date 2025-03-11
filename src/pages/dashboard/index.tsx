import React from "react";
import { FaWallet } from "react-icons/fa";
import { IoMdList } from "react-icons/io";
import { MdOutlineEmojiEvents } from "react-icons/md";

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-6 flex flex-col items-center">
      {/* Stats Section */}
      <div className="flex justify-between w-full max-w-4xl mb-8  top: ">
        <div className="flex items-center space-x-2 bg-white p-4 rounded-lg shadow-md w-1/3">
          <IoMdList className="text-purple-500 text-3xl" />
          <div>
            <p className="text-lg font-semibold">18+</p>
            <p className="text-gray-500">My Lists</p>
          </div>
        </div>
        <div className="flex items-center space-x-2 bg-white p-4 rounded-lg shadow-md w-1/3">
          <MdOutlineEmojiEvents className="text-orange-500 text-3xl" />
          <div>
            <p className="text-lg font-semibold">218+</p>
            <p className="text-gray-500">Trips</p>
          </div>
        </div>
        <div className="flex items-center space-x-2 bg-white p-4 rounded-lg shadow-md w-1/3">
          <FaWallet className="text-red-500 text-3xl" />
          <div>
            <p className="text-lg font-semibold">$659k</p>
            <p className="text-gray-500">My Wallet</p>
          </div>
        </div>
      </div>
      
      {/* Booking and Transaction Section */}
      <div className="flex w-full max-w-4xl gap-6">
        <div className="bg-white shadow-md rounded-lg p-6 w-1/2 flex flex-col items-center">
          <h2 className="text-lg font-semibold mb-2">Latest Booking</h2>
          <p className="text-gray-400 text-sm">No Bookings Yet</p>
        </div>
        <div className="bg-white shadow-md rounded-lg p-6 w-1/2 flex flex-col items-center">
          <h2 className="text-lg font-semibold mb-2">Transaction</h2>
          <p className="text-gray-400 text-sm">No Transactions History</p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
