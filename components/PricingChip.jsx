"use client";

export default function Chip({ color, text }) {
  return (
    <span className={`rounded-full px-8 py-1 text-2xl `} style={{ backgroundColor: color }}>
      {text}
    </span>
  );
}
