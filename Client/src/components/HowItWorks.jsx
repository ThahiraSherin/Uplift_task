import React from "react";
import { FaUserMd, FaHome, FaFilePrescription, FaBox, FaTruck } from "react-icons/fa";

const HowItWorks = () => {
  const steps = [
    {
      icon: <FaUserMd />,
      title: "Online Consultation",
      desc: "Connect with our expert doctors via Phone / Video call"
    },
    {
      icon: <FaHome />,
      title: "Doorstep Delivery",
      desc: "Receive medicines safely within a day"
    },
    {
      icon: <FaFilePrescription />,
      title: "Personalized Prescription",
      desc: "Get a tailored Siddha treatment plan"
    },
    {
      icon: <FaBox />,
      title: "Preparation & Packing",
      desc: "Medicines prepared & packed hygienically"
    },
    {
      icon: <FaTruck />,
      title: "Courier / Dunzo",
      desc: "Fast dispatch via trusted partners"
    }
  ];

  return (
    <section id="howitworks" className="scroll-mt-24 bg-gray-100 py-12 sm:py-14 px-4 sm:px-6 md:px-8 lg:px-16">
      <div className="max-w-6xl mx-auto text-center">

        {/* Heading */}
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-green-900 mb-2 sm:mb-4 underline decoration-green-700 underline-offset-4 sm:underline-offset-6 md:underline-offset-8">
          How It Works
        </h1>

        <p className="text-gray-600 text-xs sm:text-sm md:text-base mb-8 sm:mb-12 py-6 sm:py-10 font-semibold">
          Your journey to holistic health in 5 simple steps
        </p>

        {/* 🔥 CARDS GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4 md:gap-6 py-6 sm:py-10">

          {steps.map((step, index) => (
            <div
              key={index}
              className="bg-white p-4 sm:p-6 rounded-xl shadow-md 
                         hover:shadow-xl transition-all duration-300 
                         hover:-translate-y-2"
            >

              {/* Icon */}
              <div className="text-green-700 text-2xl sm:text-3xl mb-3 sm:mb-4 flex justify-center">
                {step.icon}
              </div>

              {/* Title */}
              <h3 className="font-semibold text-base sm:text-lg mb-2">
                {step.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600 text-xs sm:text-sm">
                {step.desc}
              </p>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default HowItWorks;