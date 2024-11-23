"use client";

import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";

export default function ContactUs() {
  return (
    <section id="contact" className="py-20 text-center bg-black">
          <h2 className="text-theme1 text-4xl font-bold mb-10">Contact Us</h2>
          
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-white pl-80 pr-80">
        <div className="flex flex-col items-center">
          <FaMapMarkerAlt size={48} className="mb-4"/>
          <h3 className="text-2xl font-bold mb-2 text-theme1">Address</h3>
          <p>25, Cambridge Place</p>
          <p>Colombo 07, Sri Lanka.</p>
        </div>
        <div className="flex flex-col items-center">
          <FaPhoneAlt size={48} className="mb-4"/>
          <h3 className="text-2xl font-bold mb-2 text-theme1">Phone</h3>
            <p>(011) 187-1993</p>
            <p>(011) 129-1991</p>
        </div>
        <div className="flex flex-col items-center">
          <FaEnvelope size={48} className="mb-4" />
          <h3 className="text-2xl font-bold mb-2 text-theme1">Email</h3>
            <p>info@dimen.com</p>
            <p>help@dimen.com</p>
        </div>
      </div>
    </section>
  );
}
