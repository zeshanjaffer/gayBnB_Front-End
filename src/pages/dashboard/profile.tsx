import React from "react";
import { PencilSquareIcon } from "@heroicons/react/24/solid";

const Profile = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 px-4 sm:px-6 lg:px-8">
      <div
        className="bg-white shadow-lg rounded-[23.28px] p-8 w-full max-w-[1057px] h-auto"
        style={{ gap: "35px" }}
      >
        {/* Profile Image & Edit Button */}
        <div className="relative flex flex-col items-center">
          <img
            src="/profilepic.png"
            alt="Profile"
            className="w-[120px] sm:w-[157px] h-[120px] sm:h-[157px] rounded-full object-cover"
          />
          <button
            className="absolute top-0 right-0 bg-purple-500 text-white rounded-full w-[36px] sm:w-[48px] h-[36px] sm:h-[48px] flex items-center justify-center shadow-md"
          >
            <PencilSquareIcon className="w-6 h-6" />
          </button>
        </div>

        {/* Personal Information */}
        <div className="bg-gray-200 rounded-lg p-3 w-full text-center mb-6 mt-4">
          <span className="font-semibold">My Personal Information</span>
        </div>

        {/* Data Fields */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-4">
          {[
            { label: "First Name", value: "John" },
            { label: "Last Name", value: "Welles" },
            { label: "Email Address", value: "@johnwelles" },
            { label: "Phone", value: "92 304 56328971" },
            { label: "Gender", value: "Male" },
            { label: "Where You Live", value: "2118 Thornridge Cir, Syracuse, Connecticut 35624" },
            { label: "Birth Date", value: "02/12/2025" },
          ].map((field, index) => (
            <div key={index} className="flex flex-col">
              <label className="text-gray-500 text-sm mb-1">{field.label} *</label>
              <div className="w-full sm:w-[506px] h-[50px] bg-gray-100 rounded-[9.37px] flex items-center px-4">
                {field.value}
              </div>
            </div>
          ))}
        </div>

        {/* Description */}
        <div className="mt-6">
          <label className="text-gray-500 text-sm mb-1">Description *</label>
          <div className="w-full bg-gray-100 rounded-[9.37px] p-4">
            In a world driven by technology, AI Nova is your ultimate smart companion, revolutionizing the way you
            interact with digital assistance.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;