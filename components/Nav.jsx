
// "use client";
// import Link from "next/link";
// import Image from "next/image";
// import { useState, useEffect } from "react";

// export default function Nav() {
    
//         return (
//             <Nav className="flex-between w-full mb-16 pt-3">
                
//                 <Link href="/" className="flex gap-2 flex-center">
//                     <div className="" >
//                     <Image src="/assets/images/navbar-logo.svg" width={30} height={30} className="object-contain" />
                
//                     </div>
//                 </Link>
//                 <div className="flex gap-3 md:gap-5">
//                     <button type="button" text="Get Started">

//                     </button>

//                     </div>
                
                
//             </Nav>
//         )

// }


"use client";

import Link from "next/link";
import Image from "next/image";

export default function Nav() {
  return (
    <nav className="fixed top-0 left-0 right-0 flex justify-between items-center w-full px-8 py-4 bg-nav shadow-lg">
      <div className="flex items-center gap-20">
        <Link href="/">
          <Image
            src="/assets/images/logo.svg"
            width={40}
            height={40}
            alt="Logo"
            className="cursor-pointer"
          />
        </Link>

        <div className="flex gap-20 text-white font-medium">
          <Link href="/solutions" className="hover:text-theme1">
            Our Solutions
          </Link>
          <Link href="/pricing" className="hover:text-theme1">
            Pricing
          </Link>
          <Link href="/about-us" className="hover:text-theme1">
            About Us
          </Link>
          <Link href="/contact-us" className="hover:text-theme1">
            Contact Us
          </Link>
        </div>
      </div>


      <div className="flex items-center gap-20">
        <Link href="/login" className="border border-theme1 text-theme1 py-2 px-6 rounded-full font-medium hover:bg-hovergray transition" >
          Login
        </Link>

        
        <Link href="/get-started" className="bg-theme1 text-white py-2 px-6 rounded-full font-medium hover:bg-[#5200cc] transition" >
          Get Started
        </Link>
      </div>
    </nav>
  );
}
