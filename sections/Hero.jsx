"use client";

// import { useEffect, useRef } from "react";
// import * as THREE from "three";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="flex flex-col lg:flex-row justify-between items-center w-full px-32 py-64 bg-black space-y-10 lg:space-y-0">
 
      <div className="flex flex-col  pl-80">
        
        <p className="font-inter text-[50px] leading-tight text-white">
          Make 3D model annotation <br />easier with{" "}
          <span className="text-theme1 font-fredoka">Dimen.</span>
        </p>

        <div className="mt-6">
          <button className="bg-theme1 text-white py-4 px-8 rounded-full text-lg font-medium hover:bg-[#5200cc] transition">
            Get Started for Free
          </button>
        </div>
      </div>
      <div className="flex justify-center items-center pt-16 lg:pt-0 pr-80">
        <Image src="/assets/images/logo.svg" width={512} height={512} className="object-contain animate-spin-slow" />
      </div>
      {/* <div className="flex justify-center items-center pt-16 lg:pt-0 pr-80">
        <div ref={mountRef} className="w-[400px] h-[400px]"></div>
      </div> */}
    </section>
  );
}
