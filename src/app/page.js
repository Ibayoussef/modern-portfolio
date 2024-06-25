"use client";

import Navbar from "./components/Navbar";
import CreativeCursor from "./components/CreativeCursor";
import Hero from "./components/Hero";
import AboutSection from "./components/AboutSection";
import Work from "./components/Work";
import { LoadingProvider } from './utils/LoadingContext';
import Loading from './components/Loading';
import ContactSection from "./components/ContactSection";
import RevealSection from "./components/RevealSection";
import ChildReveal from "./components/ChildReveal";

export default function Home() {
  return (
    <LoadingProvider>
      <main className="flex flex-col min-h-screen bg-neutral-900">
        <Loading />
        <CreativeCursor />
        <Navbar />
        <RevealSection>
          <ChildReveal>
            <Hero />
          </ChildReveal>
        </RevealSection>
        <RevealSection>
          <ChildReveal>
            <AboutSection />
          </ChildReveal>
        </RevealSection>
        <RevealSection>
          <ChildReveal>
            <Work />
          </ChildReveal>
        </RevealSection>
        <RevealSection>
          <ChildReveal>
            <ContactSection />
          </ChildReveal>
        </RevealSection>
      </main>
    </LoadingProvider>
  );
}
