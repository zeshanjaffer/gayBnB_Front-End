const ProfileCard = () => {
    return (
      <div className="w-[1057px] h-[1014px] bg-white p-8 rounded-xl shadow-lg">
        {/* Profile Image */}
        <div className="flex flex-col items-center space-y-4">
          <img src="/avatar.png" alt="Profile" className="w-24 h-24 rounded-full border-4 border-purple-600" />
          <h2 className="text-2xl font-bold">John Welles</h2>
          <p className="text-gray-500">@JohnWelles</p>
        </div>
  
        {/* Form Fields */}
        <div className="mt-6 space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="text-sm font-medium text-gray-600">First Name</label>
              <input type="text" value="John" className="border rounded-md p-2 w-full bg-gray-100" readOnly />
            </div>
            <div>
              <label className="text-sm font-medium text-gray-600">Last Name</label>
              <input type="text" value="Welles" className="border rounded-md p-2 w-full bg-gray-100" readOnly />
            </div>
          </div>
  
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="text-sm font-medium text-gray-600">Email Address</label>
              <input type="text" value="@JohnWelles" className="border rounded-md p-2 w-full bg-gray-100" readOnly />
            </div>
            <div>
              <label className="text-sm font-medium text-gray-600">Phone</label>
              <input type="text" value="92 304 56238791" className="border rounded-md p-2 w-full bg-gray-100" readOnly />
            </div>
          </div>
  
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="text-sm font-medium text-gray-600">Gender</label>
              <input type="text" value="Male" className="border rounded-md p-2 w-full bg-gray-100" readOnly />
            </div>
            <div>
              <label className="text-sm font-medium text-gray-600">Birth Date</label>
              <input type="text" value="02 / 12 / 2025" className="border rounded-md p-2 w-full bg-gray-100" readOnly />
            </div>
          </div>
  
          <div>
            <label className="text-sm font-medium text-gray-600">Location</label>
            <input type="text" value="2118 Thornridge Cir, Connecticut" className="border rounded-md p-2 w-full bg-gray-100" readOnly />
          </div>
  
          <div>
            <label className="text-sm font-medium text-gray-600">Description</label>
            <textarea
              className="border rounded-md p-2 w-full bg-gray-100"
              readOnly
            >
              In a world driven by technology, AI Nova is your ultimate smart companion...
            </textarea>
          </div>
        </div>
  
        {/* Edit Button */}
        <div className="mt-6">
          <button className="w-full bg-purple-600 text-white py-2 rounded-md hover:bg-purple-700">
            Edit Profile
          </button>
        </div>
      </div>
    );
  };
  
  export default ProfileCard;
  