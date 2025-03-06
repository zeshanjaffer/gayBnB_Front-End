import React from "react";

const ListingPage = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 p-4">
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
            + Create New
          </button>
        </div>

        {/* Middle Section (Headings) */}
        <div className="grid grid-cols-2 sm:grid-cols-4 p-3 text-gray-700 font-semibold border-b bg-[#EEEEEE6B] w-full">
          <span>Hotel Name</span>
          <span>Description</span>
          <span className="hidden sm:block">Pricing</span>
          <span className="hidden sm:block">Availability</span>
        </div>

        {/* Bottom Section (No Data) */}
        <div className="p-4">
          <div className="flex flex-col items-center justify-center py-16 text-gray-500">
            <img src="/listingimage1.png" alt="No Data" className="w-32 h-32 mb-4" />
            <h2 className="text-xl font-semibold">No Data</h2>
            <p className="text-center px-4 sm:px-0">You don't have any listings yet—but when you do, you'll find them here.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListingPage;
