"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const text = "A globally connected real estate and capital advisory building high-value property portfolios beyond market returns, using data, deal structuring, and international partnerships to turn opportunities into long-term wealth.";
const words = text.split(" ");

export function Authority() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-10%" });

  return (
    <section className="flex h-[90vh] md:h-screen items-center justify-center bg-pearl px-6 py-24 text-center">
      <div ref={ref} className="max-w-6xl">
        <motion.p
          className="font-serif text-3xl leading-snug text-onyx text-balance md:text-5xl lg:text-6xl"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={{
            visible: { transition: { staggerChildren: 0.02 } },
            hidden: {},
          }}
        >
          {words.map((word, i) => (
            <motion.span
              key={i}
              variants={{
                hidden: { opacity: 0, y: 10, filter: "blur(10px)" },
                visible: { opacity: 1, y: 0, filter: "blur(0px)", transition: { duration: 1, ease: [0.22, 1, 0.36, 1] } },
              }}
              className="inline-block mr-[0.2em]"
            >
              {word}
            </motion.span>
          ))}
        </motion.p>
      </div>
    </section>
  );
}
