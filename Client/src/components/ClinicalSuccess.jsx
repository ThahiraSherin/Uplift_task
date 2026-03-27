import React, { useEffect, useState } from "react";
import test from "../assets/testi.png";
import testresult from "../assets/testimonial.jpeg";

// Slider Images
import digestive from "../assets/herbaldigestive.jpg";
import pcos from "../assets/herbalpcos1.webp";
import respiratory from "../assets/herbalrespiratory.jpg";
import diabetes from "../assets/herbaldiabetes.jpg";

const ClinicalSuccess = () => {
  const reports = [
    {
      title: "Digestive Disorder Recovery",
      desc: "Patient showed significant improvement in IBS symptoms within 6 weeks of Siddha treatment.",
      result: "85% Improvement",
      img: digestive
    },
    {
      title: "PCOS Management",
      desc: "Hormonal balance restored naturally with personalized Siddha treatment.",
      result: "Cycle Regularized",
      img: pcos
    },
    {
      title: "Respiratory Relief",
      desc: "Chronic sinusitis symptoms reduced effectively through traditional Siddha therapies.",
      result: "Reduced Symptoms",
      img: respiratory
    },
    {
      title: "Diabetes Control",
      desc: "Blood sugar levels managed effectively with natural Siddha medication.",
      result: "Stable Levels",
      img: diabetes
    }
  ];

  const [current, setCurrent] = useState(0);

  // Auto Slide
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % reports.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="bg-gray-100 py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-8 lg:px-16">
      <div className="max-w-6xl mx-auto text-center">

        {/* HEADING */}
        <div className="mb-8 sm:mb-10 text-center py-4 sm:py-6">
          

          <p className="inline-block bg-green-800 text-white px-3 md:px-4 py-1 md:py-2 rounded-full text-xs md:text-sm font-bold w-fit mt-6 sm:mt-10 mb-2 md:mb-4">
            CLINICAL SUCCESS
          </p>

          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl py-4 sm:py-8 md:py-10 text-green-900 underline decoration-green-700 underline-offset-4 sm:underline-offset-6 md:underline-offset-8">
            Proven Results
          </h2>

          <p className="text-gray-600 font-semibold mt-2 md:mt-4 max-w-2xl mx-auto text-xs sm:text-sm md:text-base px-2">
            We believe in evidence-based healing. Witness the measurable impact of our treatments through real patient reports.
          </p>
        </div>

        {/* TOP IMAGES */}
        <div className="flex flex-col md:flex-row gap-4 sm:gap-6 justify-center items-center mb-8 sm:mb-12">
          <img
            src={test}
            alt="Medical Report"
            className="h-64 sm:h-80 md:h-96 object-cover rounded-xl shadow-md hover:scale-105 transition duration-300"
          />

          <img
            src={testresult}
            alt="Testimonial Result"
            className="w-full md:w-1/2 h-40 sm:h-48 md:h-96 object-cover rounded-xl shadow-md hover:scale-105 transition duration-300"
          />
        </div>

        {/* SLIDER */}
        <div className="relative overflow-hidden">

          {reports.map((item, index) => (
            <div
              key={index}
              className={`transition-all duration-700 ${
                current === index ? "block" : "hidden"
              }`}
            >
              <div className="bg-white rounded-xl shadow-lg overflow-hidden md:flex">

               {/* IMAGE */}
            <div className="md:w-[45%] relative">
            <img
                src={item.img}
                alt={item.title}
                className="w-full h-40 sm:h-48 md:h-52 md:h-full object-cover"
            />

            <div className="absolute top-2 left-2 bg-green-700 text-white px-2 py-1 text-xs rounded">
                Case Study
            </div>
            </div>

            {/* CONTENT */}
            <div className="md:w-[55%] p-3 sm:p-4 md:p-6 flex flex-col justify-center text-left">

            <h3 className="text-sm sm:text-base md:text-lg font-semibold text-green-800 mb-2">
                {item.title}
            </h3>

            <p className="text-gray-600 text-xs sm:text-sm mb-2 sm:mb-3">
            {item.desc}
            </p>

            <p className="text-green-700 font-bold text-base sm:text-base md:text-base">  
            {item.result}
            </p>

            </div>

          </div>
        </div>
      ))}

      </div>

        {/* DOT NAVIGATION */}
        <div className="flex justify-center mt-4 sm:mt-6 gap-2 md:gap-3">
          {reports.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrent(index)}
              className={`w-2 h-2 sm:w-2.5 sm:h-2.5 md:w-3 md:h-3 rounded-full transition ${
                current === index ? "bg-green-700 scale-110" : "bg-gray-300"
              }`}
            ></button>
          ))}
        </div>

      </div>
    </section>
  );
};

export default ClinicalSuccess;