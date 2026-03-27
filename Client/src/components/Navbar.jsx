import React, { useState } from "react";
import { FaBars } from "react-icons/fa";
import MobileMenu from "./MobileMenu";
import { useNavigate } from "react-router-dom";
import { FaPhoneAlt, FaCalendarAlt } from "react-icons/fa";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  const scrollToSection = (id) => {
  const element = document.getElementById(id);

    if (element) {
        element.scrollIntoView({
        behavior: "smooth",
        block: "start"
        });
    }
    setOpen(false);
    };

  const handleNavigation = (path) => {
    navigate(path);
    setOpen(false);
  };

  return (
    <>
      <div className="sticky top-0 z-50 flex justify-between items-center px-4 sm:px-6 py-3 sm:py-4 shadow-md bg-white">

        {/* LEFT: LOGO */}
        <div>
          <h1 className="text-green-800 text-xl sm:text-2xl md:text-3xl font-bold">
            Simply Siddha
          </h1>
        </div>

        {/* CENTER: MENU */}
        <div className="hidden lg:flex gap-6 xl:gap-8 items-center font-semibold text-gray-600 text-sm xl:text-base">

        <p
            onClick={() => scrollToSection("home")}
            className="cursor-pointer hover:text-green-700"
        >
            HOME
        </p>

        <p
            onClick={() => scrollToSection("about")}
            className="cursor-pointer hover:text-green-700"
        >
            ABOUT
        </p>

        <p
            onClick={() => scrollToSection("treatments")}
            className="cursor-pointer hover:text-green-700"
        >
            TREATMENTS
        </p>

        <p
            onClick={() => navigate("/booking")}
            className="cursor-pointer hover:text-green-700"
        >
            CONSULTATION
        </p>

        <p
            onClick={() => scrollToSection("contact")}
            className="cursor-pointer hover:text-green-700"
        >
            CONTACT
        </p>

        </div>

        {/* RIGHT: BUTTONS */}
        <div className="hidden lg:flex gap-2 xl:gap-4 items-center">

        {/* Call Button */}
        <a href="tel:+919876543210">
        <button
           className="flex items-center gap-2 border border-green-600 text-green-600 px-3 xl:px-4 py-2 rounded-full font-medium text-xs xl:text-sm hover:bg-gray-300">
            <FaPhoneAlt className="text-red-600" />
            Call Us
        </button>
        </a>

        {/* Book Appointment Button */}
        <button
            onClick={() => navigate("/booking")}
            className="flex items-center gap-2 bg-green-800 text-white px-3 xl:px-5 py-2 rounded-full font-medium text-xs xl:text-sm hover:bg-green-700"
        >
            <FaCalendarAlt />
            Book Appointment
        </button>

        </div>

        {/* MOBILE MENU ICON */}
        <FaBars
          size={24}
          className="lg:hidden cursor-pointer"
          onClick={() => setOpen(true)}
        />
      </div>

      {open && <MobileMenu close={() => setOpen(false)} />}
        

    </>
  );
};

export default Navbar;