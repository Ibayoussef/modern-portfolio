import Navbar from "./components/Navbar";
import CreativeCursor from "./components/CreativeCursor";
import Hero from "./components/Hero";
import AboutSection from "./components/AboutSection";
import Work from "./components/Work";
export default function Home() {
  return (
    <main className="flex flex-col min-h-screen bg-neutral-900">
      <CreativeCursor />
      <Navbar />
      <Hero />
      <AboutSection />
      <Work />
    </main>
  );
}
