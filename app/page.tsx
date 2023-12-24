"use client";

import { Navbar, Footer } from "@/components";
import { Developers, Ecosystem, Governance, Hero, Numbers } from "@/sections";
import { motion } from "framer-motion";
import { slideIn } from "@/utils/motion";

export default function Home() {
  return (
    <main className="bg-black">
      <Navbar />
      <Hero />
      <Numbers />
      <Ecosystem />
      <Developers />
      <Governance />
      <Footer />
    </main>
  );
}
