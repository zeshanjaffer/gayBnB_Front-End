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
  const [showPersonalInfo, setShowPersonalInfo] = useState(true);
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
    rounded-md
    font-semibold
    shadow-sm
    hover:shadow-md
    transition
    font-nunito
    text-sm
    capitalize
    px-4
    py-2
    border
    border-solid
    bg-transparent
    text-gray-700
    hover:text-gray-900
    border-image-source: radial-gradient(89.6% 68.47% at 0% 0.99%, #B88AE1 0%, #774C9E 100%);
    border-image-slice: 1;
  `;

  return (
    <div className="mt-6 md:mt-12 flex justify-center items-center bg-gray-100 px-4 sm:px-6 lg:px-8">
      <div
        className="bg-white shadow-lg rounded-[23.28px] p-6 md:p-8 w-full max-w-[1057px]"
        style={{ gap: "20px" }}
      >
        {/* Profile Image & Edit Button */}
        {!showVerification && (
          <div className="relative flex flex-col items-center mb-6 md:mb-8">
            <img
              src="/profilepic.png"
              alt="Profile"
              className="w-24 sm:w-32 h-24 sm:h-32 rounded-full object-cover"
            />
            <button
              onClick={handleEditClick}
              className="absolute top-0 right-0 bg-purple-500 text-white rounded-full w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center shadow-md cursor-pointer"
            >
              <PencilSquareIcon className="w-4 h-4 sm:w-5 sm:h-5" />
            </button>
          </div>
        )}
        {showVerification && (
          <div className="relative flex flex-col items-center mb-6 md:mb-8">
            <img
              src="/profilepic.png"
              alt="Profile"
              className="w-24 sm:w-32 h-24 sm:h-32 rounded-full object-cover"
            />
          </div>
        )}

        {/* Navigation Buttons */}
        <div className="flex justify-center space-x-2 md:space-x-4 mb-4 md:mb-6">
          <button
            onClick={handlePersonalInfoClick}
            className={`rounded-md font-semibold shadow-sm hover:shadow-md transition font-nunito text-sm capitalize px-4 py-2 ${
              showPersonalInfo ? 'bg-gradient-to-r from-[#B88AE1] to-[#774C9E] text-white' : 'bg-transparent text-gray-700 hover:text-gray-900'
            }`}
            style={{ height: '44.471824645996094px' }}
          >
            My Personal Information
          </button>
          <button
            onClick={handleVerificationClick}
            className={`rounded-md font-semibold shadow-sm hover:shadow-md transition font-nunito text-sm capitalize px-4 py-2 ${
              showVerification ? 'bg-gradient-to-r from-[#B88AE1] to-[#774C9E] text-white' : 'bg-transparent text-gray-700 hover:text-gray-900'
            }`}
            style={{ height: '44.471824645996094px' }}
          >
            Verification
          </button>
        </div>

        {/* Personal Information Section */}
        {showPersonalInfo && (
          <>
            {/* Data Fields */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 md:gap-x-6 gap-y-3 md:gap-y-4">
              {fields.map((field) => (
                <div key={field.name} className="flex flex-col">
                  <label className="text-gray-500 text-xs sm:text-sm mb-1">{field.label} *</label>
                  {isEditing ? (
                    <input
                      type="text"
                      name={field.name}
                      value={profileData[field.name]}
                      onChange={handleInputChange}
                      className="w-full rounded-md px-3 py-2 bg-gray-100 border border-gray-300 focus:ring-purple-500 focus:border-purple-500 text-sm"
                    />
                  ) : (
                    <div className="w-full rounded-md bg-gray-100 flex items-center px-3 py-2 text-sm">
                      {profileData[field.name]}
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Description */}
            <div className="mt-4 md:mt-6">
              <label className="text-gray-500 text-xs sm:text-sm mb-1">Description *</label>
              {isEditing ? (
                <textarea
                  name="description"
                  value={profileData.description}
                  onChange={handleInputChange}
                  className="w-full rounded-md p-3 bg-gray-100 border border-gray-300 focus:ring-purple-500 focus:border-purple-500 text-sm"
                />
              ) : (
                <div className="w-full rounded-md p-3 bg-gray-100 text-sm">
                  {profileData.description}
                </div>
              )}
            </div>

            {/* Submit Button */}
            {isEditing && (
              <div className="mt-6 md:mt-8 flex justify-end">
                <button
                  onClick={handleSubmit}
                  className="bg-gradient-to-r from-[#B88AE1] to-[#774C9E] text-white rounded-md py-2 px-4 font-semibold shadow-md hover:shadow-lg transition text-sm"
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
            <h2 className="text-lg md:text-xl font-semibold text-gray-800 mb-4 md:mb-6">Your Current Verifications</h2>
            <div className="space-y-3 md:space-y-4">
              {/* Google Verification */}
              <div className="flex flex-col md:flex-row items-start md:items-center justify-between bg-gray-100 rounded-md p-4">
                <div className="flex items-center mb-2 md:mb-0">
                  <img src="/icons/google_icon.svg" alt="Google" className="w-6 h-6 mr-2" />
                  <span className="text-sm">Connect your Gaybnb to your Google account for simplicity and ease.</span>
                </div>
                <button className={`${verificationButtonStyle} text-xs sm:text-sm`}>
                  Disconnect
                </button>
              </div>

              {/* Add More Verification */}
              <div>
                <h3 className="font-semibold text-md md:text-lg mb-2">Add More Verification</h3>
                {/* Phone Verification */}
                <div className="flex flex-col md:flex-row items-start md:items-center justify-between bg-gray-100 rounded-md p-4">
                  <div className="flex items-center mb-2 md:mb-0">
                    <img src="/icons/phone_icon.svg" alt="Phone" className="w-6 h-6 mr-2" />
                    <span className="text-sm">Phone</span>
                  </div>
                  <button className={`${verificationButtonStyle} text-xs sm:text-sm`}>
                    Verify Phone
                  </button>
                </div>

                {/* Email Verification */}
                <div className="flex flex-col md:flex-row items-start md:items-center justify-between bg-gray-100 rounded-md p-4 mt-2">
                  <div className="flex items-center mb-2 md:mb-0">
                    <img src="/icons/email_icon.svg" alt="Email" className="w-6 h-6 mr-2" />
                    <span className="text-sm">Email</span>
                  </div>
                  <button className={`${verificationButtonStyle} text-xs sm:text-sm`}>
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