import Navbar from "./components/Navbar";
import CreativeCursor from "./components/CreativeCursor";
import Hero from "./components/Hero";
export default function Home() {
  return (
    <main className="flex flex-col min-h-screen bg-neutral-900">
      <CreativeCursor />
      <Navbar />
      <Hero />
    </main>
  );
}
