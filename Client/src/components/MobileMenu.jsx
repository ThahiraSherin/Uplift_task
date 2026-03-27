import React from "react";
import { FaTimes, FaPhoneAlt, FaCalendarAlt } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const MobileMenu = ({ close, handleNavigation }) => {
  const navigate = useNavigate();

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    close();
  };

  const handleMenuNavigation = (path) => {
    navigate(path);
    close();
  };

  return (
    <div className="fixed top-0 left-0 w-full h-full bg-white z-50 p-4 sm:p-6 overflow-y-auto">

      <div className="flex justify-between items-center mb-6">
        <h1 className="text-green-800 text-xl sm:text-2xl font-bold">
          Simply Siddha
        </h1>
        <FaTimes size={24} onClick={close} className="cursor-pointer" />
      </div>

      <nav className="space-y-4 sm:space-y-5 text-base sm:text-lg font-semibold text-gray-700">
        <div onClick={() => scrollToSection("home")} className="cursor-pointer hover:text-green-700 py-2">HOME</div>
        <div onClick={() => scrollToSection("about")} className="cursor-pointer hover:text-green-700 py-2">ABOUT</div>
        <div onClick={() => scrollToSection("treatments")} className="cursor-pointer hover:text-green-700 py-2">TREATMENTS</div>
        <div onClick={() => handleMenuNavigation("/consultation")} className="cursor-pointer hover:text-green-700 py-2">CONSULTATION</div>
        <div onClick={() => scrollToSection("contact")} className="cursor-pointer hover:text-green-700 py-2">CONTACT</div>
      </nav>

      <div className="mt-8 sm:mt-10 space-y-3 sm:space-y-4">
        <a href="tel:+919876543210" className="w-full block">
          <button className="w-full border border-red-600 text-red-600 py-3 rounded-full flex justify-center items-center gap-2 font-medium hover:bg-red-50">
            <FaPhoneAlt /> CALL US
          </button>
        </a>

        <button onClick={() => handleMenuNavigation("/booking")} className="w-full bg-green-800 text-white py-3 rounded-full flex justify-center items-center gap-2 font-medium hover:bg-green-700">
          <FaCalendarAlt /> BOOK APPOINTMENT
        </button>
      </div>
    </div>
  );
};

export default MobileMenu;