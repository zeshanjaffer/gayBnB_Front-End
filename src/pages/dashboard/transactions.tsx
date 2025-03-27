import React from "react";

const TransactionsPage = () => {
  return (
    <div className="mt-[50px] flex items-center justify-center min-h-screen bg-gray-100 p-4">
      <div className="bg-white shadow-lg rounded-lg w-full max-w-5xl p-6">
        {/* Top Section - Search & Date Filter */}
        <div className="flex justify-between items-center mb-4">
          <input
            type="text"
            placeholder="Search"
            className="p-2 border rounded w-1/3 focus:outline-none focus:ring-2 focus:ring-purple-400"
          />
          <button className="p-2 border rounded bg-gray-200 text-gray-700">
            10 December 2021 ▼
          </button>
        </div>

        {/* Table Headings */}
        <div
          className="grid grid-cols-4 p-4 text-gray-700 font-semibold border-b"
          style={{ backgroundColor: "#EEEEEE6B" }}
        >
          <span>Type</span>
          <span>Payment Method</span>
          <span>Amount</span>
          <span>Date</span>
        </div>

        {/* No Transactions Section */}
        <div className="p-6 flex items-center justify-center h-[613px] relative">
          <div className="flex flex-col items-center text-gray-500">
            <img src="/transactionsimage1.png" alt="No Transactions" className="w-32 h-32 mb-4" />
            <h2 className="text-xl font-semibold">No Transactions History</h2>
            <p className="text-center px-6">
              You haven't made any transactions yet. Start now!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TransactionsPage;
