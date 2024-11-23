"use client";

import Image from 'next/image';

export default function SolutionCard({ image, topic, description }) {
  return (
    <div className="bg-[#2B2B2B] p-4 rounded-lg shadow-md" style={{ width: '20vw', height: '30vw' }}>
      <div className="relative w-full h-3/5">
        <Image src={image} alt="Solution Image" layout="fill" objectFit="cover" className="rounded-md" />
      </div>
      <h3 className="text-theme1 text-2xl font-bold mb-2 mt-3" style={{ lineHeight: '1.1', whiteSpace: 'pre-line' }}>{topic}</h3>
      <p className="mt-4 text-[20px] text-white">{description}</p>
    </div>
  );
}
