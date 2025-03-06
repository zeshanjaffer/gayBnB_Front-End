import React from "react";

const PayoutsPage = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 p-4">
      <div className="bg-white shadow-lg rounded-lg w-full max-w-5xl p-6">
        {/* Top Section - Buttons */}
        <div className="flex justify-start space-x-4 mb-4">
          <button
            className="text-white transition-all"
            style={{
              width: "145px",
              height: "50px",
              left: "119px",
              borderRadius: "10px",
              background: "radial-gradient(89.6% 68.47% at 0% 0.99%, #B88AE1 0%, #774C9E 100%)",
            }}
          >
            Payouts
          </button>
          <button
            className="text-white transition-all"
            style={{
              width: "145px",
              height: "50px",
              left: "119px",
              borderRadius: "10px",
              background: "radial-gradient(89.6% 68.47% at 0% 0.99%, #B88AE1 0%, #774C9E 100%)",
            }}
          >
            Payouts Setting
          </button>
        </div>

        {/* Payment Method Button Above Headings */}
        <div className="flex justify-end mb-2">
          <button
            className="text-white transition-all"
            style={{
           
              height: "50px",
              left: "119px",
              borderRadius: "10px",
              background: "radial-gradient(89.6% 68.47% at 0% 0.99%, #B88AE1 0%, #774C9E 100%)",
            }}
          >
            + Payment Method
          </button>
        </div>

        {/* Middle Section (Headings) */}
        <div
          className="grid grid-cols-4 p-4 text-gray-700 font-semibold border-b"
          style={{ backgroundColor: "#EEEEEE6B" }}
        >
          <span>Name & ID</span>
          <span>Category</span>
          <span>Created At</span>
          <span>Payment Status</span>
        </div>

        {/* Bottom Section (No Data) */}
        <div className="p-6 flex items-center justify-center h-[613px] relative">
          <div className="flex flex-col items-center text-gray-500">
            <img src="/payoutimage1.png" alt="No Data Found" className="w-32 h-32 mb-4" />
            <h2 className="text-xl font-semibold">No Data Found!</h2>
            <p className="text-center px-6">
              You don't have added any Payment method yet— Please add for payouts.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PayoutsPage;
