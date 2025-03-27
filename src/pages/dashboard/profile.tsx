import React, { useState, ChangeEvent } from "react";
import { PencilSquareIcon } from "@heroicons/react/24/solid";

interface ProfileData {
  firstName: string;
  lastName: string;
  emailAddress: string;
  phone: string;
  gender: string;
  whereYouLive: string;
  birthDate: string;
  description: string;
}

interface ProfileField {
  label: string;
  name: keyof ProfileData;
}

const Profile = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [showVerification, setShowVerification] = useState(false);
  const [showPersonalInfo, setShowPersonalInfo] = useState(true); // Default to show personal info
  const [profileData, setProfileData] = useState<ProfileData>({
    firstName: "John",
    lastName: "Welles",
    emailAddress: "@johnwelles",
    phone: "92 304 56328971",
    gender: "Male",
    whereYouLive: "2118 Thornridge Cir, Syracuse, Connecticut 35624",
    birthDate: "02/12/2025",
    description: "In a world driven by technology, AI Nova is your ultimate smart companion, revolutionizing the way you interact with digital assistance.",
  });

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleInputChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target;
    setProfileData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = () => {
    // Here you would typically send the updated profileData to your backend
    console.log("Profile data submitted:", profileData);
    setIsEditing(false);
  };

  const handleVerificationClick = () => {
    setShowVerification(true);
    setShowPersonalInfo(false);
  };

  const handlePersonalInfoClick = () => {
    setShowPersonalInfo(true);
    setShowVerification(false);
  };

  const fields: ProfileField[] = [
    { label: "First Name", name: "firstName" },
    { label: "Last Name", name: "lastName" },
    { label: "Email Address", name: "emailAddress" },
    { label: "Phone", name: "phone" },
    { label: "Gender", name: "gender" },
    { label: "Where You Live", name: "whereYouLive" },
    { label: "Birth Date", name: "birthDate" },
  ];

  const verificationButtonStyle = `
    h-[54px]
    rounded-[10px]
    font-semibold
    shadow-md
    hover:shadow-lg
    transition
    font-nunito
    text-sm
    capitalize
    px-[43px]
    py-[16px]
    border
    border-solid
    bg-transparent
    text-gray-700
    hover:text-gray-900
    border-image-source: radial-gradient(89.6% 68.47% at 0% 0.99%, #B88AE1 0%, #774C9E 100%);
    border-image-slice: 1;
  `;

  return (
    <div className="mt-12 flex justify-center items-center min-h-screen bg-gray-100 px-4 sm:px-6 lg:px-8">
      <div
        className="bg-white shadow-lg rounded-[23.28px] p-8 w-full max-w-[1057px] h-auto"
        style={{ gap: "35px" }}
      >
        {/* Profile Image & Edit Button (Conditionally Visible) */}
        {!showVerification && (
          <div className="relative flex flex-col items-center mb-8">
            <img
              src="/profilepic.png"
              alt="Profile"
              className="w-[120px] sm:w-[157px] h-[120px] sm:h-[157px] rounded-full object-cover"
            />
            <button
              onClick={handleEditClick}
              className="absolute top-0 right-0 bg-purple-500 text-white rounded-full w-[36px] sm:w-[48px] h-[36px] sm:h-[48px] flex items-center justify-center shadow-md cursor-pointer"
            >
              <PencilSquareIcon className="w-6 h-6" />
            </button>
          </div>
        )}
        {showVerification && (
          <div className="relative flex flex-col items-center mb-8">
            <img
              src="/profilepic.png"
              alt="Profile"
              className="w-[120px] sm:w-[157px] h-[120px] sm:h-[157px] rounded-full object-cover"
            />
            {/* Edit button is not rendered when showVerification is true */}
          </div>
        )}

        {/* Navigation Buttons */}
        <div className="flex justify-center space-x-4 mb-6">
          <button
            onClick={handlePersonalInfoClick}
            className={`h-[44.47px] rounded-[10.32px] font-semibold shadow-md hover:shadow-lg transition font-nunito text-sm capitalize px-6 py-3 ${
              showPersonalInfo ? 'bg-gradient-to-r from-[#B88AE1] to-[#774C9E] text-white' : 'bg-transparent text-gray-700 hover:text-gray-900'
            }`}
          >
            My Personal Information
          </button>
          <button
            onClick={handleVerificationClick}
            className={`h-[44.47px] rounded-[10.32px] font-semibold shadow-md hover:shadow-lg transition font-nunito text-sm capitalize px-6 py-3 ${
              showVerification ? 'bg-gradient-to-r from-[#B88AE1] to-[#774C9E] text-white' : 'bg-transparent text-gray-700 hover:text-gray-900'
            }`}
          >
            Verification
          </button>
        </div>

        {/* Personal Information Section */}
        {showPersonalInfo && (
          <>
            {/* Data Fields */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-4">
              {fields.map((field) => (
                <div key={field.name} className="flex flex-col">
                  <label className="text-gray-500 text-sm mb-1">{field.label} *</label>
                  {isEditing ? (
                    <input
                      type="text"
                      name={field.name}
                      value={profileData[field.name]}
                      onChange={handleInputChange}
                      className="w-full sm:w-[506px] h-[50px] bg-gray-100 rounded-[9.37px] px-4 border border-gray-300 focus:ring-purple-500 focus:border-purple-500"
                    />
                  ) : (
                    <div className="w-full sm:w-[506px] h-[50px] bg-gray-100 rounded-[9.37px] flex items-center px-4">
                      {profileData[field.name]}
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Description */}
            <div className="mt-6">
              <label className="text-gray-500 text-sm mb-1">Description *</label>
              {isEditing ? (
                <textarea
                  name="description"
                  value={profileData.description}
                  onChange={handleInputChange}
                  className="w-full bg-gray-100 rounded-[9.37px] p-4 border border-gray-300 focus:ring-purple-500 focus:border-purple-500"
                />
              ) : (
                <div className="w-full bg-gray-100 rounded-[9.37px] p-4">
                  {profileData.description}
                </div>
              )}
            </div>

            {/* Submit Button */}
            {isEditing && (
              <div className="mt-8 flex justify-end">
                <button
                  onClick={handleSubmit}
                  className="bg-gradient-to-r from-[#B88AE1] to-[#774C9E] text-white rounded-lg py-3 px-6 font-semibold shadow-md hover:shadow-lg transition"
                >
                  Submit Changes
                </button>
              </div>
            )}
          </>
        )}

        {/* Verification Section */}
        {showVerification && (
          <>
            {/* Verification Content */}
            <h2 className="text-xl font-semibold text-gray-800 mb-6">Your Current Verifications</h2>
            <div className="space-y-4">
              {/* Google Verification */}
              <div className="flex items-center justify-between bg-gray-100 rounded-lg p-4">
                <div className="flex items-center">
                  <img src="/icons/google_icon.svg" alt="Google" className="w-8 h-8 mr-2" />
                  <span>Connect your Gaybnb to your Google account for simplicity and ease.</span>
                </div>
                <button className={verificationButtonStyle}>
                  Disconnect
                </button>
              </div>

              {/* Add More Verification */}
              <div>
                <h3 className="font-semibold text-lg mb-2">Add More Verification</h3>
                {/* Phone Verification */}
                <div className="flex items-center justify-between bg-gray-100 rounded-lg p-4">
                  <div className="flex items-center">
                    <img src="/icons/phone_icon.svg" alt="Phone" className="w-8 h-8 mr-2" />
                    <span>Phone</span>
                  </div>
                  <button className={verificationButtonStyle}>
                    Verify Phone
                  </button>
                </div>

                {/* Email Verification */}
                <div className="flex items-center justify-between bg-gray-100 rounded-lg p-4 mt-2">
                  <div className="flex items-center">
                    <img src="/icons/email_icon.svg" alt="Email" className="w-8 h-8 mr-2" />
                    <span>Email</span>
                  </div>
                  <button className={verificationButtonStyle}>
                    Connect
                  </button>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Profile;