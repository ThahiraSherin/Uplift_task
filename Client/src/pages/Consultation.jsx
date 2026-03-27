import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

const Consultation = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const selectedDoctor = queryParams.get("doctor") || "";

  const [form, setForm] = useState({
    doctor: "",
    name: "",
    age: "",
    phone: "",
    Chief_Complaint: "",
    previous_history: "",
    any_allergies: "",
    date: ""
  });

  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    setForm((prev) => ({
      ...prev,
      doctor: selectedDoctor
    }));
  }, [selectedDoctor]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await fetch(`${import.meta.env.VITE_API_BASE_URL || "http://localhost:3001"}/api/consultation`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(form)
    });

    if (res.ok) {
      alert("Appointment booked ✅");
    } else {
      alert("Error ❌");
    }
  };

  return (
    <div className="min-h-screen bg-gray-200 flex justify-center p-3 sm:p-4 md:p-6 py-8 sm:py-12">

      <form
        onSubmit={handleSubmit}
        className="w-full max-w-2xl"
      >

        {/* 🔥 HEADER */}
        <div className="bg-white rounded-xl shadow-md p-4 sm:p-6 mb-4 sm:mb-6 border-t-8 border-purple-600">
          <h1 className="text-2xl sm:text-3xl font-bold mb-2">
            Patient Intake Form
          </h1>
          <p className="text-xs sm:text-sm text-gray-600">
            * Indicates required question
          </p>
        </div>

        {/* 🔥 DOCTOR */}
        <div className="bg-white p-4 sm:p-6 rounded-xl shadow mb-4 sm:mb-6">
          <label className="block font-medium text-sm sm:text-base mb-2">
            Doctor
          </label>
          <input
            name="doctor"
            value={form.doctor}
            readOnly
            className="w-full border-b focus:outline-none py-2 bg-gray-100 text-sm sm:text-base"
          />
        </div>

        {/* 🔥 NAME */}
        <div className="bg-white p-4 sm:p-6 rounded-xl shadow mb-4 sm:mb-6">
          <label className="block font-medium text-sm sm:text-base mb-2">
            Full Name <span className="text-red-500">*</span>
          </label>
          <input
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Your answer"
            className="w-full border-b focus:outline-none py-2 text-sm sm:text-base"
            required
          />
        </div>

        {/* 🔥 AGE */}
        <div className="bg-white p-4 sm:p-6 rounded-xl shadow mb-4 sm:mb-6">
          <label className="block font-medium text-sm sm:text-base mb-2">
            Age <span className="text-red-500">*</span>
          </label>
          <input
            type="number"
            name="age"
            value={form.age}
            onChange={handleChange}
            placeholder="Your answer"
            className="w-full border-b focus:outline-none py-2 text-sm sm:text-base"
            required
          />
        </div>

        {/* 🔥 PHONE */}
        <div className="bg-white p-4 sm:p-6 rounded-xl shadow mb-4 sm:mb-6">
          <label className="block font-medium text-sm sm:text-base mb-2">
            Contact Info (Phone) <span className="text-red-500">*</span>
          </label>
          <input
            name="phone"
            value={form.phone}
            onChange={handleChange}
            placeholder="Your answer"
            className="w-full border-b focus:outline-none py-2 text-sm sm:text-base"
            required
          />
        </div>

        {/* 🔥 CHIEF COMPLAINT */}
        <div className="bg-white p-4 sm:p-6 rounded-xl shadow mb-4 sm:mb-6">
          <label className="block font-medium text-sm sm:text-base mb-2">
            Chief Complaint
          </label>
          <textarea
            name="Chief_Complaint"
            value={form.Chief_Complaint}
            onChange={handleChange}
            placeholder="Your answer"
            className="w-full border-b focus:outline-none py-2 text-sm sm:text-base resize-none"
          />
        </div>

        {/* 🔥 HISTORY */}
        <div className="bg-white p-4 sm:p-6 rounded-xl shadow mb-4 sm:mb-6">
          <label className="block font-medium text-sm sm:text-base mb-2">
            Previous History
          </label>
          <textarea
            name="previous_history"
            value={form.previous_history}
            onChange={handleChange}
            placeholder="Your answer"
            className="w-full border-b focus:outline-none py-2 text-sm sm:text-base resize-none"
          />
        </div>

        {/* 🔥 ALLERGIES */}
        <div className="bg-white p-4 sm:p-6 rounded-xl shadow mb-4 sm:mb-6">
          <label className="block font-medium text-sm sm:text-base mb-2">
            Any Allergies
          </label>
          <input
            name="any_allergies"
            value={form.any_allergies}
            onChange={handleChange}
            placeholder="Your answer"
            className="w-full border-b focus:outline-none py-2 text-sm sm:text-base"
          />
        </div>

        {/* 🔥 DATE */}
        <div className="bg-white p-4 sm:p-6 rounded-xl shadow mb-4 sm:mb-6">
          <label className="block font-medium text-sm sm:text-base mb-2">
            Appointment Date <span className="text-red-500">*</span>
          </label>
          <input
            type="date"
            name="date"
            value={form.date}
            onChange={handleChange}
            className="w-full border-b focus:outline-none py-2 text-sm sm:text-base"
            required
          />
        </div>

        {/* 🔥 SUBMIT */}
        <button className="w-full bg-green-700 text-white py-2.5 sm:py-3 rounded-full text-sm sm:text-lg font-medium hover:bg-green-800 transition mb-6">
          Book Appointment
        </button>

      </form>
    </div>
  );
};

export default Consultation;