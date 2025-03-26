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
    <div className="mt-[50px] p-6"> {/* Added mt-[50px] here */}
      {/* Top Filter Buttons */}
      <div className="flex space-x-4 mb-4">
        {["all", "pending", "confirmed", "past"].map((status) => (
          <button
            key={status}
            onClick={() => setFilter(status)}
            className={`w-[66px] h-[50px] rounded-[10px] font-medium text-sm flex items-center justify-center
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

      {/* Booking Table */}
      <div className="bg-white p-4 shadow rounded-lg">
        {filteredBookings.length > 0 ? (
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-gray-100 text-left">
                <th className="p-3">Booking ID</th>
                <th className="p-3">Status</th>
                <th className="p-3">Availability</th>
              </tr>
            </thead>
            <tbody>
              {filteredBookings.map((booking) => (
                <tr key={booking.id} className="border-b">
                  <td className="p-3">ID #{booking.id}</td>
                  <td
                    className={`p-3 ${
                      booking.status === "confirmed"
                        ? "text-green-600"
                        : booking.status === "pending"
                        ? "text-yellow-600"
                        : "text-red-600"
                    }`}
                  >
                    {booking.status.charAt(0).toUpperCase() + booking.status.slice(1)}
                  </td>
                  <td className="p-3">
                    {booking.availability === "accept" ? (
                      <>
                        <button className="bg-green-500 text-white px-3 py-1 rounded mr-2">Accept</button>
                        <button className="bg-red-500 text-white px-3 py-1 rounded">Decline</button>
                      </>
                    ) : (
                      <span className="text-gray-400">Not Available</span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p className="text-gray-500 text-center">No bookings yet</p>
        )}
      </div>
    </div>
  );
};

export default Booking;