import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";

export default function ForgetPassword() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-white p-4">
      <div className="w-full max-w-5xl flex flex-col md:flex-row rounded-[30px] shadow-lg overflow-hidden bg-white relative">
        
        {/* Left Side - Image */}
        <div className="w-full md:w-1/2">
          <img
            src="/register.png"
            alt="Forget Password"
            className="object-cover w-full h-full"
          />
        </div>

        {/* Right Side - Forget Password Form */}
        <div className="flex flex-col justify-center px-6 md:px-12 py-8 w-full md:w-1/2 relative">
          {/* Back Button - Placed at the top-left of "Forget Password" */}
          <Link href="/login" className="absolute top-10 left-4 flex items-center">
            <div
              className="w-[54px] h-[54px] rounded-[11.68px] bg-white shadow-md flex items-center justify-center"
              style={{ boxShadow: "0px 0px 17.42px 0px #0000000D" }}
            >
              <ArrowLeft size={24} color="#000" />
            </div>
            <span
              className="ml-2 text-black"
              style={{
                fontFamily: "Baloo 2",
                fontWeight: 400,
                fontSize: "20px",
                lineHeight: "32.04px",
                letterSpacing: "0%",
              }}
            >
              Back
            </span>
          </Link>

          {/* Forget Password Heading */}
          <h2 className="font-bold text-2xl md:text-3xl mt-16">Forget Password</h2>
          <p className="text-gray-500 mt-2 text-sm md:text-base">
            Enter your registered email address. We'll send you a code to reset your password.
          </p>

          <div className="mt-6">
            {/* Email Input */}
            <input
              type="email"
              placeholder="Enter Email"
              className="w-full p-3 mt-4 rounded-md focus:outline-none bg-[#F9FAFB] pr-10 text-gray-700"
            />

            {/* Reset Password Button */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full mt-6 text-white py-3 rounded-md font-bold text-lg"
              style={{
                background:
                  "radial-gradient(89.6% 68.47% at 0% 0.99%, #B88AE1 0%, #774C9E 100%)",
              }}
            >
              Send Reset Link
            </motion.button>

            {/* Back to Login */}
            <div className="text-center mt-4">
              <Link href="/login" className="text-[#4894FE]">
                Back to Login
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
