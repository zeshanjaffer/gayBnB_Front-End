import React from "react";
import { FiSearch } from "react-icons/fi";

const PlacesPage = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 p-4">
      <div className="bg-white shadow-lg rounded-lg w-full max-w-5xl p-6">
        {/* Top Section - Search & Button */}
        <div className="bg-white shadow-lg rounded-lg w-full max-w-5xl">
        {/* Top Section */}
        <div className="flex flex-col sm:flex-row justify-between items-center bg-[#FFFFFFC9] p-4 rounded-t-lg gap-2 sm:gap-0" style={{ borderRadius: '12.43px' }}>
          <input
            type="text"
            placeholder="Search..."
            className="p-2 border rounded-md w-full sm:w-[361px] h-[53.27px]"
            style={{ borderRadius: '12.43px' }}
          />
          <button
            className="text-white px-4 py-2 rounded-md w-full sm:w-[161px] h-[53px]"
            style={{
              borderRadius: '12.43px',
              background: 'radial-gradient(89.6% 68.47% at 0% 0.99%, #B88AE1 0%, #774C9E 100%)'
            }}
          >
            + Add New Place
          </button>
        </div>
          
         
        </div>

        {/* Middle Section (Table Headings) */}
        <div
          className="hidden md:grid grid-cols-6 p-4 text-gray-700 font-semibold border-b bg-gray-100"
        >
          <span>Name & ID</span>
          <span>Category</span>
          <span>City</span>
          <span>Email</span>
          <span>Phone</span>
          <span>Action</span>
        </div>

        {/* Bottom Section (No Places) */}
        <div className="p-6 flex items-center justify-center h-[400px]">
          <div className="flex flex-col items-center text-gray-500">
            <img src="/placesimage1.png" alt="No Places" className="w-32 h-32 mb-4" />
            <h2 className="text-xl font-semibold">No Saved Places Yet</h2>
            <p className="text-center px-6">
              Save your favorite places here for quick access later.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlacesPage;
