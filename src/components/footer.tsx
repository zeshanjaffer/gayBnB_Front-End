import React from 'react';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faFacebookF,
  faTwitter,
  faInstagram,
} from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <footer
      className="bg-black text-white font-satoshi relative w-full py-12 md:py-20 mx-auto max-w-[1440.21px]"
    >
      <div
        className="flex flex-col md:flex-row justify-center md:justify-around items-center gap-8 md:gap-0"
      >
        {/* Logo and Social Icons Section */}
        <div className="flex flex-col items-center mb-8 md:mb-0">
          {/* Logo */}
          <Image
            src="/gaybnblogo.svg" // Replace with your logo path
            alt="Gaybnb Logo"
            width={100} // Adjust as needed
            height={30} // Adjust as needed
          />

          {/* Social Icons */}
          <div className="flex mt-6">
            <a href="#" className="mr-4">
              <FontAwesomeIcon icon={faFacebookF} size="lg" />
            </a>
            <a href="#" className="mr-4">
              <FontAwesomeIcon icon={faTwitter} size="lg" />
            </a>
            <a href="#">
              <FontAwesomeIcon icon={faInstagram} size="lg" />
            </a>
          </div>
        </div>

        {/* Hosting Section */}
        <div className="flex flex-col items-center md:items-start mb-8 md:mb-0">
          <h3 className="text-2xl font-bold mb-6 leading-none">Hosting</h3>
          <a href="#" className="text-base leading-[45px]">
            Best Gay Accommodation
          </a>
          <a href="#" className="text-base leading-[45px]">
            LGBTQ Hosting
          </a>
          <a href="#" className="text-base leading-[45px]">
            Invest with Pride
          </a>
          <a href="#" className="text-base leading-[45px]">
            Hot Spots
          </a>
        </div>

        {/* Company Section */}
        <div className="flex flex-col items-center md:items-start mb-8 md:mb-0">
          <h3 className="text-2xl font-bold mb-6 leading-none">Company</h3>
          <a href="#" className="text-base leading-[45px]">
            Privacy Policy
          </a>
          <a href="#" className="text-base leading-[45px]">
            Terms of Service
          </a>
          <a href="#" className="text-base leading-[45px]">
            BNB Cancellation Policy
          </a>
          <a href="#" className="text-base leading-[45px]">
            Community Standards
          </a>
          <a href="#" className="text-base leading-[45px]">
            Host Dar Guide
          </a>
          <a href="#" className="text-base leading-[45px]">
            Learn/Become a Proud Host
          </a>
        </div>

        {/* Invest with Pride Section */}
        <div className="flex flex-col items-center md:items-start">
          <h3 className="text-2xl font-bold mb-6 leading-none">
            Invest with Pride
          </h3>
          <p className="text-base leading-6 text-center md:text-left">
            Unlocking Opportunities in the LGBTQ+ Travel Markets:
            <br />
            Invest in Gaybnb Pty Ltd for a Profitable Future
          </p>

          <h3 className="text-2xl font-bold mt-6 mb-6 leading-none text-[#B88AE1] to[#774C9E]]">
            Investors
          </h3>

          <p className="text-base leading-6 text-center md:text-left">
            Receive gay travel tips & discounts.
            <br />
            Subscribe now!
          </p>

          {/* Email and Subscribe Section (Moved Here) */}
          <div className="mt-6 w-full md:w-[295.12px] h-[69.74px] border border-solid border-[#D9D9D9] rounded-full flex items-center justify-center">
            <input
              type="email"
              placeholder="Email"
              className="bg-transparent border-none outline-none pl-6 pr-4 w-1/2"
            />
            <button
              className="text-white py-3 px-6 rounded-full bg-gradient-to-r from-[#B88AE1] to-[#774C9E]" // Updated gradient
            >
              Subscribe
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Line */}
  

      {/* Copyright and Legal */}
      <div className="flex justify-between w-full px-[100px] mt-8">
        <p>© 2017-2025 Gaybnb. All Rights Reserved</p>
        <div>
          <a href="#" className="underline mr-4">
            Privacy Policy
          </a>
          <a href="#" className="underline">
            Terms of Service
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;