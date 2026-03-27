import React from "react";
import aboutImg from "../assets/siddha.png";


const AboutSection = () => {
  return (
    <>
      <section className="bg-white py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-8 lg:px-16">
      <div className="max-w-6xl mx-auto">

        {/*  HEADING */}
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-green-900 mb-8 sm:mb-12 md:mb-20 text-center py-8 sm:py-12 md:py-20 underline decoration-green-700 underline-offset-4 sm:underline-offset-6 md:underline-offset-8">
          Siddha Concept
        </h1>

       
        {/* CONTENT */}
        <div className="flex flex-col md:flex-row items-center mb-12 sm:mb-16 md:mb-20 gap-6 sm:gap-8 md:gap-10">

        {/* TEXT */}
        <div className="md:w-1/2 text-gray-700 text-base sm:text-lg leading-relaxed flex flex-col justify-center">
            <p className="mb-6">
            In Siddha medicine, the universe and the human body are composed of five
            fundamental elements: <span className="font-semibold">Earth, Water, Fire, Air, and Space</span>,
            known as <span className="font-semibold">Panchabootham</span>.
            </p>

            <p className="mb-6">
            These elements influence the three vital humours:
            <span className="font-semibold"> Vatham, Pitham, and Kabam</span>, which govern health and well-being.
            </p>

            <p className="mb-6">
            As per the concept in Siddha literature, the verse suggests that the entire universe is reflected within the individual, and conversely, the individual is a miniature representation of the whole cosmos. This idea is closely related to the concept of <span className="italic">microcosm and macrocosm</span>.
            </p>
        </div>

        {/* IMAGE */}
        <div className="md:w-1/2 flex justify-center">
            <img
            src={aboutImg}
            alt="Siddha Concept"
            className="rounded-xl shadow-lg w-[80%] md:w-[70%] h-96 object-cover"
            />
        </div>

</div>

        {/* TAMIL SLOGAN (HIGHLIGHTED) */}
        <div className="mt-12 sm:mt-20 md:mt-50 border-l-4 border-green-900 bg-green-900 p-4 sm:p-6 lg:p-8 rounded-lg shadow-sm text-center py-6 sm:py-8 md:py-10">
          
          <p className="text-lg sm:text-2xl md:text-3xl lg:text-4xl font-semibold text-gray-300 leading-relaxed">
            "அண்டத்தில் உள்ளதே பிண்டம் <br className="hidden sm:block" />
            பிண்டத்தில் உள்ளதே அண்டம்"
          </p>

          <p className="mt-3 sm:mt-4 text-gray-300 italic text-sm sm:text-base md:text-lg lg:text-xl">
            "What is in the Universe is in the Body; <br className="hidden sm:block" />
            What is in the Body is in the Universe”
          </p>

        </div>

      </div>
    </section>
    </>
  );
};

export default AboutSection;