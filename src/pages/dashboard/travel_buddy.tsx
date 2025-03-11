import React from "react";

const TravelBuddy = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 p-4">
      <div 
        className="bg-white shadow-lg flex flex-col items-center justify-center rounded-lg p-6"
        style={{ 
          width: "90%", 
          maxWidth: "1033px", 
          height: "888px", 
          maxHeight: "80vh", 
          position: "relative",
          gap: "31px" 
        }}
      >
        <div className="text-center">
          <img 
            src="/chatimage1.jpg" 
            alt="No Chats" 
            className="w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 mx-auto mb-4"
          />
          <h2 className="text-lg sm:text-xl font-semibold text-gray-700">No Connections</h2>
          <p className="text-sm sm:text-base text-gray-500">
            Start a conversation and make a new connection!
          </p>
        </div>
      </div>
    </div>
  );
};

export default TravelBuddy;
