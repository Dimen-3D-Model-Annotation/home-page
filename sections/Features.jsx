"use client";

import Image from "next/image";

export default function Features() {
  const features = [
    { src: "/assets/images/feature1.svg", caption: "Chat thread for \nteam members" },
    { src: "/assets/images/feature2.svg", caption: "Zooming/rotation of \n3D models" },
    { src: "/assets/images/feature3.svg", caption: "Changing dimensions \nof 3D models" },
    { src: "/assets/images/feature4.svg", caption: "Commenting on \nspecifc features" },
    { src: "/assets/images/feature5.svg", caption: "Mentioning team members in annotations" },
    { src: "/assets/images/feature6.svg", caption: "Colour picker \noption" },
    { src: "/assets/images/feature7.svg", caption: "Ability to add \nutility images" },
    { src: "/assets/images/feature8.svg", caption: "Exporting the \nannotations" },
  ];

  return (
    <section className="py-20 text-center bg-nav">
      <h2 className="text-theme1 text-4xl font-bold mb-10">Our Features</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 pl-80 pr-80">
        {features.map((feature, index) => (
          <div key={index} className="flex flex-col items-center group">
            <div className="relative w-48 h-48 transition-transform transform group-hover:rotate-y-180">
              <Image src={feature.src} alt={feature.caption} width={192} height={192} className="object-contain"/>
            </div>
            <p className="text-white text-2xl font-medium mt-4 whitespace-pre-line">{feature.caption}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
