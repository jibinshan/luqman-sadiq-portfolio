"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export function Hero() {
  return (
    <section id="home" className="relative h-screen w-full overflow-hidden bg-onyx">
      {/* Background Image with Ken Burns Effect */}
      <div className="absolute inset-0 z-0">
        <motion.div
          initial={{ scale: 1 }}
          animate={{ scale: 1.1 }}
          transition={{ duration: 15, repeat: Infinity, repeatType: "reverse", ease: "linear" }}
          className="relative h-full w-full"
        >
          <Image
            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80"
            alt="Modern Glass Villa"
            fill
            priority
            className="object-cover opacity-60"
            sizes="100vw"
          />
          {/* Overlay gradient/mask if needed, but opacity handled above or via overlay div */}
          <div className="absolute inset-0 bg-black/30" />
        </motion.div>
      </div>

      {/* Content */}
      <div className="relative z-10 flex h-full flex-col justify-between px-6 py-12 md:px-12 md:py-16">
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <Image src="/logo.png" alt="Logo" width={575} height={192} className="w-48 md:w-64 h-auto"/>
        </motion.div>

        {/* Masked Reveal Headline */}
        <div className="max-w-4xl self-center text-center md:self-start md:text-left">
          <div className="overflow-hidden">
            <motion.h2
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1], delay: 1 }}
              className="font-serif text-4xl leading-tight text-pearl md:text-6xl lg:text-7xl"
            >
              ARCHITECT OF
            </motion.h2>
          </div>
          <div className="overflow-hidden">
            <motion.h2
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1], delay: 1.2 }}
              className="font-serif text-4xl leading-tight text-pearl md:text-6xl lg:text-7xl"
            >
              STRATEGIC TRANSACTIONS
            </motion.h2>
          </div>
        </div>

        {/* Decoration / Scroll Indicator (Optional, but adds to cinematic feel) */}
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2, duration: 1 }}
            className="hidden text-xs tracking-widest text-pearl/70 md:block"
        >
            SCROLL TO EXPLORE
        </motion.div>
      </div>
    </section>
  );
}
