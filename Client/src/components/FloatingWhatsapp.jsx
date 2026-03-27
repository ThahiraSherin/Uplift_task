import React from "react";

const FloatingWhatsapp = () => {
  return (
    <div className="fixed bottom-4 sm:bottom-6 md:bottom-8 right-4 sm:right-6 md:right-8 z-50">
      <a
        href="https://wa.me/9500407696"
        target="_blank"
        rel="noopener noreferrer"
        className="p-3 sm:p-4 rounded-full shadow-lg 
                   hover:scale-110 transition duration-300 inline-block"
      >
        <img
          src="https://cdn-icons-png.flaticon.com/512/733/733585.png"
          alt="WhatsApp"
          className="w-12 sm:w-14 md:w-16 h-12 sm:h-14 md:h-16"
        />
      </a>
    </div>
  );
};

export default FloatingWhatsapp;