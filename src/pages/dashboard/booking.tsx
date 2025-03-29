import { useState } from "react";

const Booking = () => {
  // Sample booking data (Replace with API data later)
  const allBookings = [
    { id: "1234567", status: "pending", availability: "accept" },
    { id: "2345678", status: "confirmed", availability: "accept" },
    { id: "3456789", status: "confirmed", availability: "accept" },
    { id: "4567890", status: "past", availability: "decline" },
    { id: "5678901", status: "pending", availability: "accept" },
  ];

  const [filter, setFilter] = useState("all");

  // Filter bookings based on status
  const filteredBookings = allBookings.filter((booking) =>
    filter === "all" ? true : booking.status === filter
  );

  return (
    <div className="mt-[50px] p-4 sm:p-6 lg:p-8"> {/* Responsive padding */}
      {/* Top Filter Buttons - Responsive layout */}
      <div className="flex flex-wrap gap-2 sm:gap-3 md:gap-4 mb-4 md:mb-6">
        {["all", "pending", "confirmed", "past"].map((status) => (
          <button
            key={status}
            onClick={() => setFilter(status)}
            className={`min-w-[60px] sm:w-[66px] h-[40px] sm:h-[50px] rounded-[10px] font-medium text-xs sm:text-sm flex items-center justify-center px-2
              ${
                filter === status
                  ? "bg-gradient-to-r from-[#B88AE1] to-[#774C9E] text-white shadow-md"
                  : "bg-gray-200 text-gray-700 hover:bg-gray-300"
              }`}
          >
            {status.charAt(0).toUpperCase() + status.slice(1)}
          </button>
        ))}
      </div>

      {/* Booking Table - Responsive design */}
      <div className="bg-white p-3 sm:p-4 shadow rounded-lg overflow-x-auto">
        {filteredBookings.length > 0 ? (
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-gray-100 text-left">
                <th className="p-2 sm:p-3 text-xs sm:text-sm md:text-base">Booking ID</th>
                <th className="p-2 sm:p-3 text-xs sm:text-sm md:text-base">Status</th>
                <th className="p-2 sm:p-3 text-xs sm:text-sm md:text-base">Availability</th>
              </tr>
            </thead>
            <tbody>
              {filteredBookings.map((booking) => (
                <tr key={booking.id} className="border-b">
                  <td className="p-2 sm:p-3 text-xs sm:text-sm md:text-base">ID #{booking.id}</td>
                  <td
                    className={`p-2 sm:p-3 text-xs sm:text-sm md:text-base ${
                      booking.status === "confirmed"
                        ? "text-green-600"
                        : booking.status === "pending"
                        ? "text-yellow-600"
                        : "text-red-600"
                    }`}
                  >
                    {booking.status.charAt(0).toUpperCase() + booking.status.slice(1)}
                  </td>
                  <td className="p-2 sm:p-3 text-xs sm:text-sm md:text-base">
                    {booking.availability === "accept" ? (
                      <div className="flex flex-wrap gap-1 sm:gap-2">
                        <button className="bg-green-500 text-white px-2 py-1 text-xs sm:text-sm rounded sm:mr-2">Accept</button>
                        <button className="bg-red-500 text-white px-2 py-1 text-xs sm:text-sm rounded">Decline</button>
                      </div>
                    ) : (
                      <span className="text-gray-400 text-xs sm:text-sm">Not Available</span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p className="text-gray-500 text-center text-sm sm:text-base py-4">No bookings found</p>
        )}
      </div>
    </div>
  );
};

export default Booking;