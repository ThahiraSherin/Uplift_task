import React from "react";
import deliveryImg from "../assets/siddha_delivery.png";

const DeliverySection = () => {
  return (
    <section className="bg-white py-12 sm:py-16 md:py-20 px-4 sm:px-6 md:px-8 lg:px-16">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-6 sm:gap-8 md:gap-10">

        {/* LEFT CONTENT */}
        <div className="md:w-1/2 flex flex-col justify-center">
          <p className="inline-block bg-green-900 text-white px-3 md:px-4 py-1 md:py-2 rounded-full text-xs md:text-sm font-bold w-fit">
            SAFE & SECURE
          </p>

          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-green-900 mt-4 sm:mt-6 mb-3 sm:mb-4 gap-1">
            Doorstep Delivery of Siddha Medicines
          </h1>

          <p className="text-gray-600 mb-4 sm:mb-6 text-xs sm:text-sm md:text-base">
            Prescribed Siddha medicines are prepared after online consultation
            and delivered safely to your doorstep across India.
          </p>

          {/* FEATURES */}
          <div className="space-y-1.5 sm:space-y-2 mb-4 sm:mb-6 text-xs sm:text-sm md:text-base">
            <p>✔ Secure & hygienic packing</p>
            <p>✔ Trusted courier partners</p>
            <p>✔ Tracking details via WhatsApp</p>
          </div>

          {/* HIGHLIGHT BOX */}
          <div className="border-l-4 border-green-700 bg-green-50 p-3 sm:p-4 rounded-md">
            <p className="text-xs sm:text-sm italic">
              Medicine delivery is available only after consultation.
            </p>
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="md:w-1/2 w-full">
          <div className="relative h-48 sm:h-64 md:h-80 lg:h-96 rounded-xl overflow-hidden">

            {/* Image */}
            <img
              src={deliveryImg}
              alt="Delivery"
              className="h-full w-full object-cover rounded-xl shadow-lg"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/30"></div>

            {/* Text */}
            <div className="absolute bottom-2 sm:bottom-4 left-2 sm:left-4 text-white font-semibold text-xs sm:text-sm md:text-base">
              Dispatched only after consultation.
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default DeliverySection;