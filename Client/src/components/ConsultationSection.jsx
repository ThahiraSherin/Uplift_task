import React from "react";
import { FaUserMd, FaLeaf, FaShieldAlt, FaCheckCircle } from "react-icons/fa";
import consultImg from "../assets/onlineconsult.png"; 
import { useNavigate } from "react-router-dom";

const ConsultationSection = () => {
  const navigate = useNavigate();

  return (
    <section id="consultation" className="scroll-mt-24 bg-gray-100 py-16 px-4 md:px-16">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10">

        {/* LEFT CONTENT */}
        <div className="md:w-1/2">

          {/* Badge */}
          <h1 className="inline-flex items-center gap-2 bg-green-100 text-green-800 px-4 py-1 rounded-full font-semibold mb-4 underline decoration-green-700 underline-offset-8">
            🩺 Online Consultation
          </h1>

          {/* Heading */}
          <h2 className="text-4xl md:text-5xl text-green-900 mb-4">
            Expert Siddha Care From the Comfort of Your Home
          </h2>

          {/* Description */}
         <p className="text-gray-600 mb-6">
            Consult Siddha experts online and get personalized treatment with e-prescription.
            </p>

          {/* Points */}
          <div className="space-y-3 mb-6">

            <p className="flex items-center gap-2 text-gray-700">
              <FaUserMd className="text-green-700" flex shrink-30 />
              Video & Phone Consultation Available
            </p>

            <p className="flex shrink-0 items-center gap-2 text-gray-700">
              <FaCheckCircle className="text-green-700" />
              E-prescription shared after consultation
            </p>

            <p className="flex items-center gap-2 text-gray-700">
              <FaLeaf className="text-green-700" />
              100% natural, side-effect-free treatments
            </p>

            <p className="flex items-center gap-2 text-gray-700">
              <FaShieldAlt className="text-green-700" />
              Private, secure & convenient experience
            </p>

          </div>

          {/* CTA */}
          <button
            onClick={() => navigate("/booking")}
            className="bg-green-800 text-white px-6 py-3 rounded-full 
                       hover:bg-green-700 transition duration-300 
                       hover:scale-105 shadow-md"
          >
            Book Appointment
          </button>

          {/* Small note */}
          <p className="mt-4 text-sm text-gray-500 italic">
            Medicines are dispatched only after consultation.
          </p>

        </div>

        {/* RIGHT IMAGE */}
        <div className="md:w-1/2 flex justify-center">
          <img
            src={consultImg}
            alt="Online Consultation"
            className="rounded-xl shadow-lg w-[90%] md:w-[80%] h-350px object-cover"
          />
        </div>

      </div>
    </section>
  );
};

export default ConsultationSection;