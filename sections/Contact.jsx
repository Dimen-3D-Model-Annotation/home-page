"use client";

import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";

export default function ContactUs() {
  return (
    <section className="py-20 text-center bg-black">
      <h2 className="text-theme1 text-4xl font-bold mb-10">Contact Us</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-white">
        <div className="flex flex-col items-center">
          <FaMapMarkerAlt size={48} className="mb-4" />
          <h3 className="text-2xl font-bold mb-2">Address</h3>
          <p>123 Main Street</p>
          <p>City, State, ZIP</p>
        </div>
        <div className="flex flex-col items-center">
          <FaPhoneAlt size={48} className="mb-4" />
          <h3 className="text-2xl font-bold mb-2">Phone</h3>
          <p>(123) 456-7890</p>
        </div>
        <div className="flex flex-col items-center">
          <FaEnvelope size={48} className="mb-4" />
          <h3 className="text-2xl font-bold mb-2">Email</h3>
          <p>info@example.com</p>
        </div>
      </div>
    </section>
  );
}
