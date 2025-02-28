import { useState } from "react";
import { motion } from "framer-motion";
import { FaGoogle, FaTwitter, FaApple, FaEye, FaEyeSlash } from "react-icons/fa";

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="flex items-center justify-center min-h-screen bg-white p-4">
      <div className="w-[1291px] h-[911px] flex rounded-[54.23px] shadow-lg overflow-hidden">
        
        {/* Left Side - Image */}
        <div
          className="w-[693px] h-full bg-cover bg-center relative"
          style={{ backgroundImage: "url('/loginimage.png')" }}
        >
          {/* Buttons Positioned Over Image */}
          <div className="absolute top-6 right-6 flex gap-4">
            <button
              className="w-[120px] h-[47px] border-2 rounded-full text-white font-semibold"
              style={{
                borderColor: "#CAA4EC",
                background:
                  "radial-gradient(89.6% 68.47% at 0% 0.99%, #B88AE1 0%, #774C9E 100%)",
              }}
            >
              Sign In
            </button>

            <button
              className="w-[120px] h-[47px] border-2 border-[#CAA4EC] rounded-full font-semibold 
                bg-clip-text text-transparent bg-gradient-to-r from-[#B88AE1] to-[#774C9E] 
                transition-all duration-300 ease-in-out hover:bg-gradient-to-r 
                hover:from-[#B88AE1] hover:to-[#774C9E] hover:text-white"
            >
              Registration
            </button>
          </div>
        </div>

        {/* Right Side - Login Form */}
        <div className="flex flex-col justify-center px-16 w-[515px] h-[657px]">
          <h2 className="font-bold text-[35.88px] leading-[47.58px]">
            Sign in to your Account
          </h2>
          <p className="text-gray-500 mt-2 text-[20px] font-normal">
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
                <div className="flex items-center justify-center w-[35.35px] h-[35.35px] rounded-full bg-black">
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
