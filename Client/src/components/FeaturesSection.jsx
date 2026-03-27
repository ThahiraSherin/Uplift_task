import React from "react";
import { FaLeaf, FaHeartbeat, FaUserMd, FaSpa } from "react-icons/fa";

const FeaturesSection = () => {
  const features = [
    {
      icon: <FaLeaf />,
      title: "Natural Healing",
      desc: "Treatments based on natural herbs and traditional Siddha methods."
    },
    {
      icon: <FaHeartbeat />,
      title: "Holistic Wellness",
      desc: "Focus on balancing body, mind, and soul for long-term health."
    },
    {
      icon: <FaUserMd />,
      title: "Expert Consultation",
      desc: "Get guidance from experienced Siddha practitioners."
    },
    {
      icon: <FaSpa />,
      title: "Lifestyle Guidance",
      desc: "Personalized diet and lifestyle plans for better living."
    }
  ];

  return (
    <section className="bg-gray-100 py-12 sm:py-14 md:py-16 px-4 sm:px-6 md:px-8 lg:px-16">
      <div className="max-w-6xl mx-auto text-center">

        {/* Heading */}
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-green-900 mb-2 sm:mb-4 underline decoration-green-700 underline-offset-4 sm:underline-offset-6 md:underline-offset-8">
          Our Features
        </h1>

        <p className="text-gray-600 font-semibold mb-8 sm:mb-10 md:mb-12 py-3 sm:py-4">
          Discover the core principles and benefits of our Siddha approach
        </p>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">

          {features.map((item, index) => (
            <div
              key={index}
              className="bg-white p-4 sm:p-6 rounded-xl shadow-md 
                         hover:shadow-lg transition-all duration-300 
                         hover:-translate-y-2 cursor-pointer"
            >
              {/* Icon */}
              <div className="text-green-700 text-2xl sm:text-3xl mb-3 sm:mb-4 flex justify-center">
                {item.icon}
              </div>

              {/* Title */}
              <h3 className="text-base sm:text-lg font-semibold mb-2">
                {item.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600 text-xs sm:text-sm">
                {item.desc}
              </p>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;