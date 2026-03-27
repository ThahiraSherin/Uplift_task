import React from "react";

const Footer = () => {
  return (
    <footer className="bg-green-900 text-white py-8 sm:py-10 md:py-12 px-4 sm:px-6 md:px-8 lg:px-16">
      
      <div className="max-w-6xl mx-auto text-center">

        {/* SERVICES LINE */}
        <p className="text-xs sm:text-sm md:text-base mb-2 sm:mb-3 opacity-90">
          © 2025 Simply Siddha. All rights reserved.
        </p>

        {/* COPYRIGHT */}
        <p className="text-xs sm:text-sm opacity-75">
          
          Online Siddha Consultation | Personalized Treatment | Doorstep Medicine Delivery
        </p>

      </div>

    </footer>
  );
};

export default Footer;