import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { FaGoogle, FaTwitter, FaApple } from "react-icons/fa";

import AccountCreatedPopup from "@/components/accountcreatedpopup";
export default function Register() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const handleSignUpClick = () => {
    // Perform your registration logic here
    setIsPopupOpen(true);
  };

  const handlePopupClose = () => {
    setIsPopupOpen(false);
  };

  return (
    <div className="mt-[150px] flex items-center justify-center min-h-screen bg-white p-4">
      <div className="w-full max-w-5xl flex flex-col md:flex-row rounded-[30px] shadow-lg overflow-hidden bg-white">
        {/* Left Side - Image */}
        <div className="w-full md:w-1/2 h-[350px] md:h-auto relative overflow-hidden">
          <img
            src="/register.jpeg"
            alt="Registration"
            className="w-full h-full object-cover"
          />
          {/* Buttons Positioned Over Image */}
          <div className="absolute top-4 right-4 flex gap-4">
            <Link href="/login">
              <button className="w-[100px] h-[40px] border-2 border-[#CAA4EC] rounded-full font-semibold bg-clip-text text-transparent bg-gradient-to-r from-[#B88AE1] to-[#774C9E] transition-all duration-300 ease-in-out hover:bg-gradient-to-r hover:from-[#B88AE1] hover:to-[#774C9E] hover:text-white">
                Sign In
              </button>
            </Link>

            <button
              className="w-[100px] h-[40px] border-2 rounded-full text-white font-semibold"
              style={{
                borderColor: "#CAA4EC",
                background:
                  "radial-gradient(89.6% 68.47% at 0% 0.99%, #B88AE1 0%, #774C9E 100%)",
              }}
            >
              Register
            </button>
          </div>
        </div>

        {/* Right Side - Registration Form */}
        <div className="flex flex-col justify-center px-6 md:px-12 py-8 w-full md:w-1/2">
          <h2 className="font-bold text-2xl md:text-3xl text-black">
            Registration to your Account
          </h2>
          <p className="text-gray-500 mt-2 text-sm md:text-base text-black">
            Sign in to continue your journey with us.
          </p>

          <div className="mt-6">
            <input
              type="text"
              placeholder="First Name"
              className="w-full p-3 mt-4 rounded-md focus:outline-none bg-[#F9FAFB] pr-10 text-gray-700"
            />

            <input
              type="text"
              placeholder="Last Name"
              className="w-full p-3 mt-4 rounded-md focus:outline-none bg-[#F9FAFB] pr-10 text-gray-700"
            />

            <input
              type="email"
              placeholder="Enter Email"
              className="w-full p-3 mt-4 rounded-md focus:outline-none bg-[#F9FAFB] pr-10 text-gray-700"
            />

            <input
              type="password"
              placeholder="Enter Password"
              className="w-full p-3 mt-4 rounded-md focus:outline-none bg-[#F9FAFB] pr-10 text-gray-700"
            />

            <label className="mt-4 flex items-start text-sm text-gray-600">
              <input type="checkbox" className="mt-1 mr-2" />
              I agree to the <a href="#" className="text-[#4894FE] ml-1">Terms and Conditions</a>
            </label>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full mt-6 text-white py-3 rounded-md font-bold text-lg"
              style={{
                background:
                  "radial-gradient(89.6% 68.47% at 0% 0.99%, #B88AE1 0%, #774C9E 100%)",
              }}
              onClick={handleSignUpClick} // Added onClick handler
            >
              Sign Up
            </motion.button>

            <div className="flex items-center my-6">
              <div className="border-t flex-grow"></div>
              <span className="px-3 text-[#4894FE] text-sm">Or</span>
              <div className="border-t flex-grow"></div>
            </div>

            <div className="flex justify-center gap-4">
              <button className="w-[50px] h-[50px] rounded-lg bg-white shadow-lg flex items-center justify-center">
                <FaGoogle className="text-red-600 text-xl" />
              </button>
              <button className="w-[50px] h-[50px] rounded-lg bg-white shadow-lg flex items-center justify-center">
                <FaTwitter className="text-blue-500 text-xl" />
              </button>
              <button className="w-[50px] h-[50px] rounded-lg bg-white shadow-lg flex items-center justify-center">
                <FaApple className="text-black text-xl" />
              </button>
            </div>
          </div>
        </div>
      </div>
      <AccountCreatedPopup isOpen={isPopupOpen} onClose={handlePopupClose} />
    </div>
  );
}