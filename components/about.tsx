"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

export function About() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

  return (
    <section ref={containerRef} className="flex min-h-screen flex-col md:flex-row bg-pearl text-onyx">
      {/* Left: Visual (60%) */}
      <div className="relative h-[50vh] w-full overflow-hidden md:h-auto md:w-[60%]">
        <motion.div style={{ y }} className="relative h-[120%] w-full -top-[10%]">
          <Image
            src="/legacy/aimer.jpeg"
            alt="Abstract Architecture"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 60vw"
          />
        </motion.div>
      </div>

      {/* Right: Text (40%) */}
      <div className="flex w-full flex-col justify-center px-8 py-20 md:w-[40%] md:px-16">
        <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
        >
            <h3 className="mb-8 font-serif text-3xl italic text-onyx">The Legacy</h3>
            <p className="font-sans text-sm font-extralight uppercase leading-loose tracking-widest text-onyx/80 md:text-base">
            Over 15 years, Luqman Sadiq has redefined the business of real estate, blending analytical precision with creative strategy to secure 5,000+ landmark transactions. He is a seasoned business strategist, investment pool specialist, and mentor to elite sales teams.
            </p>
        </motion.div>
      </div>
    </section>
  );
}
