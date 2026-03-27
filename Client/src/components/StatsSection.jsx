import React from "react";

const StatsSection = () => {
  const stats = [
    { value: "5+", label: "Years Experience" },
    { value: "500+", label: "Patients Treated" },
    { value: "100%", label: "Natural Remedies" }
  ];

  return (
    <section className="bg-white py-10 sm:py-12 md:py-16 px-4 sm:px-6 md:px-8 lg:px-16">
      <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-3 text-center gap-4 sm:gap-6">

        {stats.map((item, index) => (
          <div
            key={index}
            className="p-4 sm:p-6 rounded-xl shadow-sm bg-gray-50 hover:shadow-md transition"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-green-800">
              {item.value}
            </h2>

            <p className="text-gray-600 mt-2 text-xs sm:text-sm md:text-base">
              {item.label}
            </p>
          </div>
        ))}

      </div>
    </section>
  );
};

export default StatsSection;