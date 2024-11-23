"use client";

import { useState } from "react";
import Chip from "@components/PricingChip";
import SolutionCard from "@/components/SolutionCard";

export default function Pricing() {
  const [isFreePlan, setIsFreePlan] = useState(true);

  const togglePlan = () => {
    setIsFreePlan(!isFreePlan);
  };

  return (
    <section id="pricing" className="py-20 text-center bg-black">
      <h2 className="text-theme1 text-4xl font-bold mb-10">Pricing</h2>

      <div className="mb-10 flex justify-center">
        <div className="relative inline-flex w-full max-w-md">
          <input type="checkbox" className="sr-only" checked={isFreePlan} onChange={togglePlan} />
          <div className="block bg-gray-700 w-full h-12 rounded-full flex justify-between items-center px-4">
            <span className={`text-2xl font-bold ${isFreePlan ? 'text-theme1' : 'text-white'} flex-1 text-center`}>Free Plan</span>
            <span className={`text-2xl font-bold ${isFreePlan ? 'text-white' : 'text-theme1'} flex-1 text-center`}>Premium Plan</span>
          </div>
          <div
            className={`absolute top-0 bottom-0 h-12 w-1/2 rounded-full transition-transform transform flex justify-center items-center cursor-pointer ${
              isFreePlan ? 'bg-theme1 translate-x-0' : 'bg-theme1 translate-x-full'
            }`}
            onClick={togglePlan}
          >
            <span className="text-white font-bold text-2xl">{isFreePlan ? "Free Plan" : "Premium Plan"}</span>
          </div>
        </div>
      </div>

      <div className="flex justify-center space-x-10">
        <div className={`bg-[#474747] p-16 rounded-lg shadow-lg w-[38rem] ${isFreePlan ? 'border-theme1 border-4' : ''}`}>
          <h3 className={`text-3xl font-bold mb-4 ${isFreePlan ? 'text-white' : 'text-gray-400'}`}>Free Plan</h3>
          <div className="flex justify-between items-center mb-4">
            <p className="text-white text-2xl">Max Individual Projects:</p>
            <Chip color="#7E7E7E" text="5" />
          </div>
          <div className="flex justify-between items-center mb-4">
            <p className="text-white text-2xl">Max Pages per Project:</p>
            <Chip color="#7E7E7E" text="5" />
          </div>
          <div className="flex justify-between items-center mb-4">
            <p className="text-white text-2xl">Number of Teams:</p>
            <Chip color="#7E7E7E" text="1" />
          </div>
          <div className="flex justify-between items-center mb-4">
            <p className="text-white text-2xl">Max Projects per Team:</p>
            <Chip color="#7E7E7E" text="5" />
          </div>
          <div className="mt-8 flex justify-center">
            <Chip color="#5200cc" text="$0.00 / Monthly" className="px-6 py-4 text-white font-bold" />
          </div>
        </div>

        <div className={`bg-[#474747] p-16 rounded-lg shadow-lg w-[38rem] ${!isFreePlan ? 'border-theme1 border-4' : ''}`}>
          <h3 className={`text-3xl font-bold mb-4 ${!isFreePlan ? 'text-white' : 'text-gray-400'}`}>Premium Plan</h3>
          <div className="flex justify-between items-center mb-4">
            <p className="text-white text-2xl">Max Individual Projects:</p>
            <Chip color="#7E7E7E" text="Unlimited" />
          </div>
          <div className="flex justify-between items-center mb-4">
            <p className="text-white text-2xl">Max Pages per Project:</p>
            <Chip color="#7E7E7E" text="Unlimited" />
          </div>
          <div className="flex justify-between items-center mb-4">
            <p className="text-white text-2xl">Number of Teams:</p>
            <Chip color="#7E7E7E" text="Unlimited" />
          </div>
          <div className="flex justify-between items-center mb-4">
            <p className="text-white text-2xl">Max Projects per Team:</p>
            <Chip color="#7E7E7E" text="Unlimited" />
          </div>
          <div className="mt-8 flex justify-center">
            <Chip color="#5200cc" text="$9.99 / Monthly" className="px-6 py-3 text-white" />
          </div>
        </div>
      </div>
    </section>
  );
}
