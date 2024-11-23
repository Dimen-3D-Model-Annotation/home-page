"use client";

import { useState, useEffect } from "react";
import SolutionCard from "@/components/SolutionCard";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const sampleCards = [
  {
    image: "/assets/images/solution1.svg",
    topic: "Real-time Collaborative Environment",
    description: "Dimen offers a workspace where every member of the team can contribute to projects effortlessly.",
  },
  {
    image: "/assets/images/solution2.svg",
    topic: "Interactive \n Visualization ",
    description: " With the visualization of the 3D models, with options like colour and dimensions changing, Dimen brings to you an interactive visualization platform.",
  },
  {
    image: "/assets/images/solution3.svg",
    topic: "Feedback Integration via Annotations",
    description: "With the chat, meetings, comment options, all of the team can communicate with each other very easily!",
  },
  {
    image: "/assets/images/solution4.svg",
    topic: "Enhanced \n Communication ",
    description: "With our unique annotation tool, team members can effectively work towards enhancing their 3D models getting feedback via the annotation tool.",
  },
  {
    image: "/assets/images/solution5.svg",
    topic: " User-friendly \n Interface",
    description: "Dimen brings you a very simple user interface, making it compatible for both beginners and pros of the tech world to use the application.",
  },
  {
    image: "/assets/images/solution6.svg",
    topic: "Streamline the \n design process",
    description: "3D model making will no longer be a hassle with the options Dimens brings to you, where you can easily achieve your goals.",
  },
];

export default function Solutions() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? sampleCards.length - 1 : (prevIndex - 1) % sampleCards.length));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % sampleCards.length);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext();
    }, 3000); // Auto swipe wenna 3 sec
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="solution" className="bg-nav py-20 text-center">
      <h2 className="text-theme1 text-4xl font-bold mb-10">Our Solutions</h2>
      <div className="relative flex justify-center items-center px-32">
        <button onClick={handlePrev} className="absolute left-0 z-10 p-2 text-theme1" style={{ paddingLeft: '32px' }}>
          <FaChevronLeft size={32} />
        </button>
        <div className="flex overflow-hidden w-full justify-center items-center space-x-4">
          {sampleCards
            .concat(sampleCards) // eka digata yanna
            .slice(currentIndex, currentIndex + 3)
            .map((card, index) => (
              <div key={index} className="transition-transform duration-300">
                <SolutionCard image={card.image} topic={card.topic} description={card.description} />
              </div>
            ))}
        </div>
        <button onClick={handleNext} className="absolute right-0 z-10 p-2 text-theme1" style={{ paddingRight: '32px' }}>
          <FaChevronRight size={32} />
        </button>
      </div>
    </section>
  );
}
