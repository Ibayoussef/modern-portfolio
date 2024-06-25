"use client"
import Navbar from "./components/Navbar";
import CreativeCursor from "./components/CreativeCursor";
import Hero from "./components/Hero";
import AboutSection from "./components/AboutSection";
import Work from "./components/Work";
import { LoadingProvider } from './utils/LoadingContext';
import Loading from './components/Loading';

export default function Home() {
  return (
    <LoadingProvider>
      <main className="flex flex-col min-h-screen bg-neutral-900">
        <Loading />
        <CreativeCursor />
        <Navbar />
        <Hero />
        <AboutSection />
        <Work />
      </main>
    </LoadingProvider>
  );
}
