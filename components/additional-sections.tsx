"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

export function SoughtAfter() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end center"] });
  const scale = useTransform(scrollYProgress, [0, 1], [0.9, 1]);
  const opacity = useTransform(scrollYProgress, [0, 0.2], [0, 1]);

  return (
    <section ref={ref} className="bg-onyx py-32 px-6 flex justify-center text-center">
      <motion.p
        style={{ scale, opacity }}
        className="font-serif text-4xl md:text-6xl lg:text-7xl leading-tight text-pearl max-w-6xl"
      >
        One of the region’s most successful and sought-after real estate strategists and investment advisors.
      </motion.p>
    </section>
  );
}

const partners = ["/clients/markaz.jpg", "/clients/aimer.png", "/clients/capkon.jpg", "/clients/dbi.jpg", "/clients/ecomount.jpg", "/clients/landmark.avif", "/clients/sobha.png","/clients/fastzone.jpeg"];

export function PartnerMarquee() {
  return (
    <div id="partners" className="bg-white py-24 overflow-hidden">
        <div className="container mx-auto px-6 mb-16 text-center">
             <h3 className="font-sans text-xs font-bold tracking-[0.2em] uppercase text-onyx/30">
                Those Who Trust My Expertise
            </h3>
        </div>
        <div className="flex w-full">
            <MarqueeGroup />
            <MarqueeGroup />
        </div>
    </div>
  )
}

function MarqueeGroup() {
    return (
        <motion.div 
            className="flex min-w-full flex-shrink-0 items-center justify-around gap-12 md:gap-24 px-12"
            animate={{ x: "-100%" }}
            transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
        >
            {[...partners, ...partners].map((p, i) => (
                <div key={i} className="relative w-40 h-20 group relative flex items-center justify-center transition-all duration-500 hover:scale-110 transform">
                    <Image 
                        src={p} 
                        alt="Partner Logo" 
                        fill
                        className="object-contain p-2"
                        sizes="160px"
                    />
                </div>
            ))}
        </motion.div>
    );
}


