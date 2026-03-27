import React from "react";
import { useNavigate } from "react-router-dom";
import doc1 from "../assets/sangeethadoc.png";
import doc2 from "../assets/preethidoc.png";
import doc3 from "../assets/jayadoc.jpeg";
import FeatureSection from "./FeaturesSection";

const DoctorsSection = () => {

  const navigate = useNavigate();

  const doctors = [
    {
      name: "Dr. Sangeetha",
      degree: "BSMS",
      reg: "Reg No: 6433 / A",
      desc: "Founder of Simply Siddha Integrated Healthcare with 5+ years of experience in treating chronic digestive and lifestyle disorders through authentic Siddha practices.",
      specialties: ["Digestive Health", "Lifestyle Disorders"],
      img: doc1,
      badge: "FOUNDER"
    },
    {
      name: "Dr. Preethi",
      degree: "BSMS, MD",
      reg: "Reg No: 6429 / A",
      desc: "Provides compassionate care for children’s respiratory health and women’s wellness through authentic Siddha medicine, focusing on safe, holistic, and root-cause healing.",
      specialties: ["Women's Health", "Respiratory Care"],
      img: doc2
    },
    {
      name: "Dr. Jayapradheeban",
      degree: "MBBS",
      reg: "Reg No: 161540",
      desc: "Clinical consultant with 5+ years of experience in managing common medical problems, chronic conditions, and acute illnesses with accurate diagnosis and patient-focused care.",
      specialties: ["General Medicine", "Chronic Care"],
      img: doc3
    }
  ];

  return (
    <section
      id="doctors"
      className="scroll-mt-24 bg-gray-100 px-4 sm:px-6 md:px-8 lg:px-16 py-12 sm:py-14 md:py-16"
    >
      <div className="max-w-8xl mx-auto text-center">

        {/* Heading */}
        <p className="inline-block bg-green-900 text-white px-3 md:px-4 py-1 md:py-2 rounded-full text-xs md:text-sm font-bold w-fit mt-6 sm:mt-8 md:mt-10 mb-2 md:mb-4">
            OUR EXPERTS
          </p>


        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-green-900 mb-2 sm:mb-3 md:mb-4 py-4 sm:py-6 md:py-8 underline decoration-green-700 underline-offset-4 sm:underline-offset-6 md:underline-offset-8">
          Meet Our Doctors
        </h1>

        <p className="text-gray-500 font-semibold mb-8 sm:mb-10 md:mb-12 max-w-2xl mx-auto text-xs sm:text-sm md:text-base px-2">
          Experienced Siddha practitioners dedicated to your holistic well-being.
        </p>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
          {doctors.map((doc, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden hover:-translate-y-2"
            >
              {/* Image Section */}
              <div className="relative w-full h-48 sm:h-56 md:h-64 overflow-hidden">
                <img
                  src={doc.img}
                  alt={doc.name}
                  className="w-full h-full object-cover object-[center_18%]"
                />

                {/* Badge (Founder) */}
                {doc.badge && (
                  <span className="absolute top-2 right-2 sm:top-3 sm:right-3 bg-green-700 text-white text-xs px-2 sm:px-3 py-1 rounded-full shadow">
                    {doc.badge}
                  </span>
                )}
              </div>

              {/* Content */}
              <div className="p-4 sm:p-5 text-center">
                {/* Name */}
                <h3 className="text-base sm:text-lg font-semibold text-gray-800">
                  {doc.name}
                </h3>

                {/* Degree */}
                <p className="text-xs sm:text-sm text-gray-500">{doc.degree}</p>

                {/* Reg No */}
                <p className="text-xs text-gray-400 mb-2">{doc.reg}</p>

                {/* Description */}
                <p className="text-gray-600 text-xs sm:text-sm mb-3">
                  {doc.desc}
                </p>

                {/* Specialties */}
                <div className="flex flex-wrap justify-center gap-2">
                  {doc.specialties.map((item, i) => (
                    <span
                      key={i}
                      className="text-xs bg-green-100 text-green-800 px-3 py-1 rounded-full"
                    >
                      {item}
                    </span>
                  ))}
                </div>
                 {/* ✅ BOOK BUTTON */}
                <button
                  onClick={() =>
                    navigate(`/consultation?doctor=${encodeURIComponent(doc.name)}`)
                  }
                  className="mt-4 bg-green-700 text-white px-4 py-2 rounded-full hover:bg-green-800"
                >
                  Book Appointment
                </button>
              </div>
            </div>
          ))}
        </div>
          <FeatureSection />
      </div>
    </section>
  );
};

export default DoctorsSection;