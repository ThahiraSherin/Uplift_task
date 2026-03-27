import React, { useEffect, useState } from "react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Rajesh Kumar",
      text: "I used to feel heavy and uncomfortable after every meal. After consulting Simply Siddha, my digestion improved a lot.",
      time: "7 months ago",
      initial: "R"
    },
    {
      name: "Meena Selvam",
      text: "I was worried when my cholesterol levels were high. The doctor explained everything calmly and started Siddha treatment. My reports have improved.",
      time: "3 months ago",
      initial: "M"
    },
    {
      name: "Divya Krishnan",
      text: "I consulted for both hair fall and digestion issues. After treatment, my digestion improved and hair fall reduced gradually.",
      time: "8 months ago",
      initial: "D"
    },
    {
      name: "Lakshmi Sundaram",
      text: "I was suffering from daily acidity and burning sensation. Siddha treatment helped me feel better without side effects.",
      time: "4 months ago",
      initial: "L"
    },
    {
      name: "Arun Venkatesh",
      text: "The doctor genuinely listens and treats the root cause. I finally feel I am on the right path to healing.",
      time: "6 months ago",
      initial: "A"
    }
  ];

  const [current, setCurrent] = useState(1);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="bg-gray-100 py-16 px-4 md:px-10 lg:px-16">
      <div className="max-w-7xl mx-auto text-center">

        {/* HEADING */}
        <div className="mb-10">
          <p className="inline-block bg-green-800 text-white px-4 py-1 rounded-full text-sm font-semibold mb-4">
            TESTIMONIALS
          </p>

          <h2 className="text-3xl md:text-4xl lg:text-5xl text-green-900 font-bold underline decoration-green-700 underline-offset-8">
            Patient Stories
          </h2>

          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            Hear from those who have experienced the healing power of Siddha
          </p>
        </div>

        {/* CARDS CONTAINER */}
        <div className="flex justify-center items-center gap-6">

          {testimonials.map((item, index) => {
            const isCenter = index === current;
            const isLeft =
              index === (current - 1 + testimonials.length) % testimonials.length;
            const isRight =
              index === (current + 1) % testimonials.length;

            // 👉 Show only 3 cards on desktop
            if (!isCenter && !isLeft && !isRight) return null;

            return (
              <div
                key={index}
                className={`
                  transition-all duration-500 rounded-xl shadow-lg p-6 text-left
                  
                  ${isCenter
                    ? "bg-green-800 text-white scale-105 w-340px z-10"
                    : "bg-white text-gray-700 scale-95 opacity-70 w-300px"
                  }

                  ${!isCenter && "hidden md:block"}
                `}
              >

                {/* Top */}
                <div className="flex justify-between items-center mb-4">
                  <div className="w-10 h-10 flex items-center justify-center rounded-full bg-green-600 text-white font-bold">
                    {item.initial}
                  </div>
                  <div className="text-gray-400">✦</div>
                </div>

                {/* ⭐ Stars */}
                <div className="text-yellow-400 mb-3">★★★★★</div>

                {/* Text */}
                <p className="text-sm leading-relaxed mb-4">
                  "{item.text}"
                </p>

                {/* Name */}
                <p className="font-semibold">- {item.name}</p>
                <p className="text-xs mt-1 opacity-80">{item.time}</p>

              </div>
            );
          })}
        </div>

        {/* DOTS */}
        <div className="flex justify-center mt-8 gap-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrent(index)}
              className={`w-3 h-3 rounded-full ${
                current === index ? "bg-green-700" : "bg-gray-300"
              }`}
            ></button>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Testimonials;