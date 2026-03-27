import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaPhoneAlt, FaCalendarAlt } from "react-icons/fa";

import video1 from "../assets/sidda1.mp4";
import video2 from "../assets/sidda2.mp4";
import video3 from "../assets/sidda3.mp4";

const Hero = () => {
  const navigate = useNavigate();

  const videos = [video1, video3, video2];
  const [current, setCurrent] = useState(0);

  // Auto slide
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % videos.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative h-screen overflow-hidden">

      {/* Video Slider */}
      {videos.map((vid, index) => (
        <video
          key={index}
          autoPlay
          loop
          muted
          className={`absolute w-full h-full object-cover transition-opacity duration-1000 ${
            current === index ? "opacity-100" : "opacity-0"
          }`}
        >
          <source src={vid} type="video/mp4" />
        </video>
      ))}

      {/* Overlay */}
      <div className="absolute w-full h-full bg-black/50"></div>

      <div className="relative z-10 flex items-center justify-end h-full px-6 md:px-16">
  <div className="text-white max-w-2xl text-right">

    {/* BIGGER HEADING */}
    <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight">
      Simply Siddha
    </h1>

    {/*  BIGGER DESCRIPTION */}
    <p className="mt-4 sm:mt-6 text-base sm:text-lg md:text-xl lg:text-2xl leading-relaxed">
      A disciplined lifestyle and right nutrition are the foundations of lifelong health.
    </p>

    {/*  BUTTONS */}
    <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row gap-3 sm:gap-4 justify-end">

      {/* Consultation */}
      <a href="tel:+919500407696" className="w-full sm:w-auto">
        <button
        className="w-full bg-green-200 text-green-900 px-4 sm:px-6 md:px-8 py-2 sm:py-3 md:py-4 rounded-full 
                   cursor-pointer text-sm sm:text-base
                   transition-all duration-300 ease-in-out
                   hover:bg-white hover:text-green-900 
                   hover:shadow-lg hover:scale-100 sm:hover:scale-105
                   flex justify-center items-center gap-2"
      >
        <FaPhoneAlt className="text-red-600 text-sm sm:text-base"/>Consultation On Call
      </button>
    </a>
      

      {/* Booking */}
      <button
        onClick={() => navigate("/booking")}
        className="w-full sm:w-auto bg-green-700 text-white px-4 sm:px-6 md:px-8 py-2 sm:py-3 md:py-4 rounded-full 
                   cursor-pointer text-sm sm:text-base
                   transition-all duration-300 ease-in-out
                   hover:bg-white hover:text-green-900 
                   hover:shadow-lg hover:scale-100 sm:hover:scale-105
                   flex justify-center items-center gap-2"
      >
       <FaCalendarAlt className="text-sm sm:text-base" /> Book An Appointment
      </button>

    </div>

  </div>
</div>

    </div>
  );
};

export default Hero;