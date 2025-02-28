import { useState } from "react";
import { motion } from "framer-motion";
import { FaGoogle, FaTwitter, FaApple, FaEye, FaEyeSlash } from "react-icons/fa";

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="flex items-center justify-center min-h-screen bg-white p-4">
      <div className="w-full max-w-4xl flex flex-col md:flex-row rounded-[54.23px] shadow-lg overflow-hidden">
        
        {/* Left Side - Image */}
        <div
          className="w-full md:w-1/2 h-64 md:h-auto bg-cover bg-center relative"
          style={{ backgroundImage: "url('/loginimage.png')" }}
        >
          {/* Buttons Positioned Over Image */}
          <div className="absolute top-4 right-4 flex gap-2 md:gap-4">
            <button
              className="w-24 h-10 md:w-[120px] md:h-[47px] border-2 rounded-full text-white font-semibold"
              style={{
                borderColor: "#CAA4EC",
                background:
                  "radial-gradient(89.6% 68.47% at 0% 0.99%, #B88AE1 0%, #774C9E 100%)",
              }}
            >
              Sign In
            </button>

            <button
              className="w-24 h-10 md:w-[120px] md:h-[47px] border-2 border-[#CAA4EC] rounded-full font-semibold 
                bg-clip-text text-transparent bg-gradient-to-r from-[#B88AE1] to-[#774C9E] 
                transition-all duration-300 ease-in-out hover:bg-gradient-to-r 
                hover:from-[#B88AE1] hover:to-[#774C9E] hover:text-white"
            >
              Registration
            </button>
          </div>
        </div>

        {/* Right Side - Login Form */}
        <div className="flex flex-col justify-center px-6 md:px-16 py-8 w-full md:w-1/2">
          <h2 className="font-bold text-2xl md:text-[35.88px] leading-tight md:leading-[47.58px]">
            Sign in to your Account
          </h2>
          <p className="text-gray-500 mt-2 text-base md:text-[20px] font-normal">
            Sign in to continue your journey with us.
          </p>

          <div className="mt-6">
            {/* Email Input */}
            <input
              type="email"
              placeholder="Enter Email"
              className="w-full p-3 rounded-md focus:outline-none bg-[#F9FAFB]"
            />

            {/* Password Input with Eye Icon */}
            <div className="relative w-full mt-4">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Enter Password"
                className="w-full p-3 rounded-md focus:outline-none bg-[#F9FAFB] pr-10"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500"
              >
                {showPassword ? <FaEyeSlash size={20} /> : <FaEye size={20} />}
              </button>
            </div>

            {/* Remember Me & Forgot Password */}
            <div className="flex justify-between items-center mt-3 text-sm">
              <label className="text-gray-500 flex items-center">
                <input type="checkbox" className="mr-2" /> Remember me?
              </label>
              <a href="#" className="text-[#EA4335]">Forgot Password?</a>
            </div>

            {/* Sign In Button */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full mt-6 text-white py-3 rounded-md font-bold text-lg"
              style={{
                background:
                  "radial-gradient(89.6% 68.47% at 0% 0.99%, #B88AE1 0%, #774C9E 100%)",
              }}
            >
              Sign In
            </motion.button>

            {/* OR Divider */}
            <div className="flex items-center my-6">
              <div className="border-t flex-grow"></div>
              <span className="px-3 text-[#4894FE] text-sm">Or</span>
              <div className="border-t flex-grow"></div>
            </div>

            {/* Social Login Buttons */}
            <div className="flex justify-center gap-4 md:gap-6">
              <a
                href="/auth/google"
                className="flex items-center justify-center w-12 md:w-[55.37px] h-12 md:h-[55.37px] rounded-lg bg-white shadow-lg"
              >
                <div className="flex items-center justify-center w-9 md:w-[35.35px] h-9 md:h-[35.35px] rounded-full bg-red-600">
                  <FaGoogle className="text-white text-lg" />
                </div>
              </a>

              <a
                href="/auth/twitter"
                className="flex items-center justify-center w-12 md:w-[55.37px] h-12 md:h-[55.37px] rounded-lg bg-white shadow-lg"
              >
                <div className="flex items-center justify-center w-9 md:w-[35.35px] h-9 md:h-[35.35px] rounded-full bg-blue-500">
                  <FaTwitter className="text-white text-lg" />
                </div>
              </a>

              <a
                href="/auth/apple"
                className="flex items-center justify-center w-12 md:w-[55.37px] h-12 md:h-[55.37px] rounded-lg bg-white shadow-lg"
              >
                <div className="flex items-center justify-center w-9 md:w-[35.35px] h-9 md:h-[35.35px] rounded-full bg-black">
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
