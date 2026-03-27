import React, { useEffect } from "react";
import { FaTimes, FaPhoneAlt, FaCalendarAlt } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const MobileMenu = ({ close }) => {
  const navigate = useNavigate();

  // Prevent background scrolling when menu is open
  useEffect(() => {
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

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
    <>
      {/* BACKDROP */}
      <div
        className="fixed inset-0 bg-black/40 z-40"
        onClick={close}
      ></div>

      {/* SIDE DRAWER */}
      <div className="fixed top-0 right-0 w-[75%] sm:w-[60%] h-full bg-white z-50 p-6 shadow-lg transform transition-transform duration-300">

        {/* HEADER */}
      <div className="flex justify-end items-center mb-6">
        <FaTimes
          size={24}
          onClick={close}
          className="cursor-pointer hover:text-red-500 transition"
        />
      </div>

        {/* MENU ITEMS */}
        <nav className="flex flex-col gap-5 text-lg font-semibold text-gray-700">
          <p onClick={() => scrollToSection("home")} className="cursor-pointer hover:text-green-700">HOME</p>
          <p onClick={() => scrollToSection("about")} className="cursor-pointer hover:text-green-700">ABOUT</p>
          <p onClick={() => scrollToSection("treatments")} className="cursor-pointer hover:text-green-700">TREATMENTS</p>
          <p onClick={() => handleMenuNavigation("/consultation")} className="cursor-pointer hover:text-green-700">CONSULTATION</p>
          <p onClick={() => scrollToSection("contact")} className="cursor-pointer hover:text-green-700">CONTACT</p>
        </nav>

        {/* BUTTONS */}
        <div className="mt-8 flex flex-col gap-4">

          <a href="tel:+919500407696">
            <button className="w-full border border-green-600 text-green-700 py-3 rounded-full flex justify-center items-center gap-2 font-medium hover:bg-green-50 transition">
              <FaPhoneAlt /> Call Us
            </button>
          </a>

          <button
            onClick={() => handleMenuNavigation("/booking")}
            className="w-full bg-green-800 text-white py-3 rounded-full flex justify-center items-center gap-2 font-medium hover:bg-green-700 transition"
          >
            <FaCalendarAlt /> Book Appointment
          </button>

        </div>
      </div>
    </>
  );
};

export default MobileMenu;