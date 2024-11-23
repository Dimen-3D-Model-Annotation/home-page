import Nav from "@/components/Nav";
import Hero from "@/sections/Hero";
import Solutions from "@/sections/Solutions";
import Pricing from "@sections/Pricing";









export default function Home() {
  return (
    <main className="bg-black text-white min-h-screen">
      <Nav />
      <div>
        <Hero />
        <Solutions />
        <Pricing />
      </div>
    </main>
  );
}
