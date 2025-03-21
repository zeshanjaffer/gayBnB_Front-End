"use client";

import React from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

interface AccountCreatedPopupProps {
  isOpen: boolean;
  onClose: () => void;
}

const AccountCreatedPopup: React.FC<AccountCreatedPopupProps> = ({ isOpen, onClose }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black/20 backdrop-blur-md"
          style={{ zIndex: 50 }}
          onClick={onClose}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
        >
          <motion.div
            className="relative w-[686px] h-[378px] bg-white rounded-[30px] flex flex-col items-center p-8"
            onClick={(e) => e.stopPropagation()}
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            {/* Circular Icon Background (Positioned Absolutely) */}
            <div className="absolute -top-20 w-[172.66px] h-[172.66px] rounded-full flex items-center justify-center">
              {/* Inner Circle */}
              <div className="w-[141.27px] h-[141.27px] rounded-full bg-[#F3F4F6] flex items-center justify-center">
                {/* Icon Content */}
                <Image
                  src="/icons/popupregister.svg"
                  alt="Account Created Icon"
                  width={80}
                  height={80}
                  className="rounded-full"
                />
              </div>
            </div>

            {/* Text Content */}
            <div className="mt-24 w-full h-auto flex flex-col items-center justify-center">
              <h2 className="font-nunito-sans font-bold text-3xl text-center leading-[120%] tracking-[0.59px]">
                Account Created
              </h2>
              <p className="font-nunito-sans font-medium text-2xl text-center leading-[150%] tracking-[0.59px] mt-4">
                Please wait while we take you to <br /> the login page.
              </p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default AccountCreatedPopup;