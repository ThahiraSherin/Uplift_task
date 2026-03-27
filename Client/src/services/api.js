import axios from "axios";

const BASE_URL = import.meta.env.VITE_API_BASE_URL || "http://localhost:3001";


export const submitConsultation = async (data) => {
  const res = await fetch(`${BASE_URL}/api/consultation`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
  });

  return res.json();
};

export const submitBooking = async (data) => {
  const res = await fetch(`${BASE_URL}/api/booking`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
  });

  return res.json();
};