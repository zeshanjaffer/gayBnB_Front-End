import { useState } from "react";
import { motion } from "framer-motion";
import { FaGoogle, FaTwitter, FaApple } from "react-icons/fa";

export default function Register() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-white p-4">
      <div className="w-[1291px] h-[911px] flex rounded-[54.23px] shadow-lg overflow-hidden">
        {/* Left Side - Image */}
        <div
          className="w-[693px] h-full bg-cover bg-center relative"
          style={{ backgroundImage: "url('/register.png')" }}
        >
          {/* Buttons Positioned Over Image */}
          <div className="absolute top-6 right-6 flex gap-4">
            <button className="w-[120px] h-[47px] border-2 border-[#CAA4EC] rounded-full font-semibold bg-clip-text text-transparent bg-gradient-to-r from-[#B88AE1] to-[#774C9E] transition-all duration-300 ease-in-out hover:bg-gradient-to-r hover:from-[#B88AE1] hover:to-[#774C9E] hover:text-white">
              Sign In
            </button>

            <button
              className="w-[120px] h-[47px] border-2 rounded-full text-white font-semibold"
              style={{
                borderColor: "#CAA4EC",
                background:
                  "radial-gradient(89.6% 68.47% at 0% 0.99%, #B88AE1 0%, #774C9E 100%)",
              }}
            >
              Registration
            </button>
          </div>
        </div>

        {/* Right Side - Registration Form */}
        <div className="flex flex-col justify-center px-16 w-[515px] h-[800px]">
          <h2 className="font-bold text-[34.88px] leading-[47.58px]">
            Registration to your Account
          </h2>
          <p className="text-gray-500 mt-2 text-[20px] font-normal">
            Sign in to continue your journey with us.
          </p>

          <div className="mt-6">
            {/* User Type Dropdown */}

            <div className="w-full">
              {/* Dropdown + Input Container */}
              <div className="flex items-centerw-full p-3 rounded-md focus:outline-none bg-[#F9FAFB] pr-10">
                {/* Dropdown */}
                <select className="bg-transparent focus:outline-none text-gray-700">
                  <option value="miss">Miss</option>
                  <option value="mr">Mr.</option>
                  <option value="mrs">Mrs.</option>
                </select>

                {/* Separator Line */}
                <span className="mx-2 text-gray-400">|</span>

                {/* Input Field */}
                <input
                  type="text"
                  placeholder="Full Name"
                  className="w-full bg-transparent focus:outline-none text-gray-700"
                />
              </div>
            </div>

            {/* Name Input */}
            <select
        className="w-full  p-3  mt-4 rounded-md focus:outline-none bg-[#F9FAFB] pr-10"
        defaultValue=""
      >
        <option value="" disabled>User Type</option>
        <option value="user">User</option>
        <option value="admin">Admin</option>
      </select>
      <select
        className="w-full p-3   mt-4 rounded-md focus:outline-none bg-[#F9FAFB] pr-10"
        defaultValue=""
      >
        <option value="" disabled>Gender</option>
        <option value="user">User</option>
        <option value="admin">Admin</option>
      </select>

            {/* Email Input */}
            <input
              type="email"
              placeholder="Enter Email"
              className="w-full p-3  mt-4 rounded-md focus:outline-none bg-[#F9FAFB] pr-10"
            />

            {/* Password Input */}
            <input
              type="password"
              placeholder="Enter Password"
              className="w-full p-3  mt-4 rounded-md focus:outline-none bg-[#F9FAFB] pr-10"
            />

            {/* Gender Radio Buttons */}
           

            {/* Terms and Conditions */}
            <label className="mt-4 flex items-start">
              <input type="checkbox" className="mt-1 mr-2" />
              <span className="text-sm text-gray-600">
                I agree to the{" "}
                <a href="#" className="text-[#4894FE]">
                  Terms and Conditions
                </a>
              </span>
            </label>

            {/* Sign Up Button */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full mt-6 text-white py-3 rounded-md font-bold text-lg"
              style={{
                background:
                  "radial-gradient(89.6% 68.47% at 0% 0.99%, #B88AE1 0%, #774C9E 100%)",
              }}
            >
              Sign Up
            </motion.button>

            {/* OR Divider */}
            <div className="flex items-center my-6">
              <div className="border-t flex-grow"></div>
              <span className="px-3 text-[#4894FE] text-sm">Or</span>
              <div className="border-t flex-grow"></div>
            </div>

            {/* Social Login Buttons */}
            <div className="flex justify-center gap-6">
              <a
                href="/auth/google"
                className="flex items-center justify-center w-[55.37px] h-[55.37px] rounded-[16.49px] bg-white shadow-lg"
              >
                <div className="flex items-center justify-center w-[35.35px] h-[35.35px] rounded-full bg-red-600">
                  <FaGoogle className="text-white text-lg" />
                </div>
              </a>

              <a
                href="/auth/twitter"
                className="flex items-center justify-center w-[55.37px] h-[55.37px] rounded-[16.49px] bg-white shadow-lg"
              >
                <div className="flex items-center justify-center w-[35.35px] h-[35.35px] rounded-full bg-blue-500">
                  <FaTwitter className="text-white text-lg" />
                </div>
              </a>

              <a
                href="/auth/apple"
                className="flex items-center justify-center w-[55.37px] h-[55.37px] rounded-[16.49px] bg-white shadow-lg"
              >
                <div className="flex items-center justify-center w-[35.35px] h-[35.35px]  rounded-full bg-black">
                  <FaApple className="text-white text-lg" />
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
