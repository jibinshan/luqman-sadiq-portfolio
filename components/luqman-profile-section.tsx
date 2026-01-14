"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export function LuqmanProfileSection() {
  return (
    <section id="profile" className="relative w-full bg-white py-24 px-6 md:px-12 lg:px-24 overflow-hidden">
      <div className="mx-auto max-w-7xl grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-24 items-center">
        <div className="md:col-span-5 relative">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="relative w-full aspect-[3/4] overflow-hidden rounded-sm"
          >
            <Image
              src="/luqman.jpg"
              alt="Luqman Sadiq - Real Estate Consultant"
              width={1053}
              height={1747}
              className="object-cover hover:scale-105 transition-transform duration-700 ease-out"
              sizes="(max-width: 768px) 100vw, 40vw"
            />
            <div className="absolute -bottom-6 -right-6 w-full h-full border border-gray-100 -z-10" />
          </motion.div>
        </div>
        <div className="md:col-span-7 flex flex-col justify-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          >

            <h2 className="font-serif text-5xl lg:text-6xl text-onyx leading-tight mb-4">
              Luqman Sadiq
            </h2>
            
            <h3 className="font-sans text-sm tracking-[0.15em] uppercase text-gray-500 mb-8">
              Real Estate Consultant & Investment Advisor
            </h3>

            <div className="space-y-6">
              <p className="font-serif text-2xl md:text-3xl text-onyx/90 leading-snug">
                Helping clients make smarter real estate investments.
              </p>
              
              <p className="font-sans text-gray-600 leading-relaxed text-base md:text-lg max-w-2xl text-balance">
                Luqman Sadiq is a real estate professional focused on helping investors and home buyers make smarter property decisions. He is associated with Aimer and works with clients to identify strong investment opportunities, guide transactions, and build long-term property portfolios. His work combines market research, client strategy, and deal execution to help people grow wealth through real estate.
              </p>
            </div>

            {/* Signature or subtle visual cue */}
            <div className="mt-12 pt-12 border-t border-gray-100">
                <div className="flex items-center justify-between">
                    <span className="font-serif italic text-lg text-gray-400">
                        Building Wealth. Securing Legacy.
                    </span>
                </div>
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
