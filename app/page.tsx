"use client";
import { useState } from "react";
import Navbar from "@/components/Navbar";
import CommandPalette from "@/components/CommandPalette";
import LightingCursor from "@/components/LightingCursor";
import Hero from "@/components/Hero";
import About from "@/components/About";
import WorkWithMe from "@/components/WorkWithMe";
import ScrollingBanner from "@/components/ScrollingBanner";
import Timeline from "@/components/Timeline";
import Technologies from "@/components/Technologies";
import Projects from "@/components/Projects";
import Research from "@/components/Research";
import Achievements from "@/components/Achievements";
import Contact from "@/components/Contact";
import FloatingChat from "@/components/FloatingChat";
import FinalCTA from "@/components/FinalCTA";

export default function Home() {
  const [searchOpen, setSearchOpen] = useState(false);
  const [contactOpen, setContactOpen] = useState(false);

  return (
    <>
      <LightingCursor />
      <Navbar onSearchOpen={() => setSearchOpen(true)} />
      <CommandPalette open={searchOpen} setOpen={setSearchOpen} />
      <main>
        <Hero />
        <About />
        <WorkWithMe />
        <ScrollingBanner />
        <Timeline />
        <Technologies />
        <Projects />
        <Research />
        <Achievements />
        <FinalCTA onGetInTouch={() => setContactOpen(true)} />
      </main>
      <Contact isOpen={contactOpen} onClose={() => setContactOpen(false)} />
      <FloatingChat />
    </>
  );
}
