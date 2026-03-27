import React from "react";
import digestiveImg from "../assets/digestive.jpeg";
import respiratoryImg from "../assets/respiratory.jpg";
import lifestyleImg from "../assets/lifestyle.jpg";
import womenImg from "../assets/women.jpeg";

const TreatmentsSection = () => {
  const treatments = [
    {
      title: "Digestive Health",
      subtitle: "Digestive Disorders",
      desc: "Restore gut health and digestive balance through herbal remedies and dietary guidance.",
      img: digestiveImg,
      items: ["Indigestion", "Acidity & GERD", "IBS", "Ulcer", "Constipation"]
    },
    {
      title: "Respiratory Health",
      subtitle: "Respiratory Disorders",
      desc: "Breathe easier with traditional treatments for respiratory ailments and allergies.",
      img: respiratoryImg,
      items: ["Cough & Cold", "Sinusitis", "Asthma", "Allergies"]
    },
    {
      title: "Lifestyle Health",
      subtitle: "Lifestyle Disorders",
      desc: "Manage metabolic conditions naturally with personalized diet and herbal therapies.",
      img: lifestyleImg,
      items: ["Diabetes", "Obesity", "High Cholesterol"]
    },
    {
      title: "Women's Health",
      subtitle: "Women's Health",
      desc: "Holistic care for hormonal balance and reproductive wellness through Siddha medicine.",
      img: womenImg,
      items: ["PCOD/PCOS", "Thyroid", "Hormonal Issues", "Menstrual Disorders"]
    }
  ];

  return (
    <section id="treatments" className="bg-white py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-8 lg:px-16">
      <div className="max-w-7xl mx-auto text-center">

        {/* 🔥 HEADING */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl py-6 sm:py-8 md:py-10 text-green-800 mb-2 sm:mb-3 underline decoration-green-700 underline-offset-4 sm:underline-offset-6 md:underline-offset-8">
          Our Treatments
        </h2>

        <p className="text-gray-600 font-semibold mb-8 sm:mb-10 md:mb-12 max-w-2xl mx-auto text-xs sm:text-sm md:text-base">
          Natural healing solutions rooted in ancient Siddha wisdom for modern health challenges
        </p>

        {/* 🔥 CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 md:gap-8">

          {treatments.map((treatment, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-xl shadow-md overflow-hidden 
                         hover:shadow-xl transition duration-300 hover:-translate-y-1"
            >

              {/* IMAGE */}
              <img
                src={treatment.img}
                alt={treatment.title}
                className="w-full h-40 sm:h-48 md:h-52 object-cover"
              />

              {/* CONTENT */}
              <div className="p-4 sm:p-6 text-left">

                {/* TITLE */}
                <h3 className="text-base sm:text-lg md:text-xl font-bold text-green-800">
                  {treatment.title}
                </h3>

                {/* SUBTITLE */}
                <p className="text-green-700 font-medium text-xs sm:text-sm mb-2">
                  {treatment.subtitle}
                </p>

                {/* DESCRIPTION */}
                <p className="text-gray-600 text-xs sm:text-sm mb-3 sm:mb-4">
                  {treatment.desc}
                </p>

                {/* 🔥 ITEMS (GREEN TAGS) */}
                <div className="flex flex-wrap gap-2">
                  {treatment.items.map((item, idx) => (
                    <span
                      key={idx}
                      className="bg-green-100 text-green-800 px-2 sm:px-3 py-1 rounded-full text-xs md:text-sm font-medium 
                                 hover:bg-green-700 hover:text-white transition duration-300 cursor-pointer"
                    >
                      {item}
                    </span>
                  ))}
                </div>

              </div>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default TreatmentsSection;