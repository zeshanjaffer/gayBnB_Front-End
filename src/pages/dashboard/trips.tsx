import React from "react";

const TripsPage = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 p-4">
      <div className="bg-white shadow-lg rounded-lg w-full max-w-5xl p-6">
        
        {/* Top Section - Filter Buttons (Scrollable on Small Screens) */}
        <div className="flex overflow-x-auto gap-4 mb-4 pb-2">
          {["All", "Current", "Upcoming", "Pending", "Completed", "Expired"].map(
            (filter, index) => (
              <button
                key={index}
                className="px-5 py-3 text-gray-700 rounded-md transition-all duration-300 ease-in-out whitespace-nowrap"
                style={{
                  height: "50px",
                  borderRadius: "10px",
                  backgroundColor: "#F0F0F0",
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.background =
                    "radial-gradient(89.6% 68.47% at 0% 0.99%, #B88AE1 0%, #774C9E 100%)";
                  e.currentTarget.style.color = "#ffffff"; // White text on hover
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.background = "#F0F0F0";
                  e.currentTarget.style.color = "#4B5563"; // Reset text to gray-700
                }}
              >
                {filter}
              </button>
            )
          )}
        </div>

        {/* Middle Section (Responsive Grid Headings) */}
        <div className="grid grid-cols-2 md:grid-cols-4 p-4 text-gray-700 font-semibold border-b bg-gray-200 text-center">
          <span>Host Name</span>
          <span>Property Address</span>
          <span className="hidden md:block">Duration</span> {/* Hidden on small screens */}
          <span>Receipt</span>
        </div>

        {/* Bottom Section (No Trips) */}
        <div className="p-6 flex items-center justify-center min-h-[400px] md:min-h-[613px]">
          <div className="flex flex-col items-center text-gray-500 text-center">
            <img src="/tripsimage1.png" alt="No Trips" className="w-24 h-24 md:w-32 md:h-32 mb-4" />
            <h2 className="text-lg md:text-xl font-semibold">No Trips Yet</h2>
            <p className="px-4 md:px-6">
              Your upcoming and past trips will appear here. Start exploring and
              book your next adventure.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TripsPage;
