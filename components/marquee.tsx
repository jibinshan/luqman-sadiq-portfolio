"use client";

import { motion } from "framer-motion";

const items = [
  "50+ PRE-LEASED SALES",
  "100+ SUCCESSFUL EXITS",
  "INR 36 CRORES CAPITAL TARGET",
  "15+ YEARS OF STRATEGIC DOMINANCE",
  "5,000+ CLIENT TRANSACTIONS"
];

export function Marquee() {
  return (
    <div className="flex w-full overflow-hidden bg-onyx py-6 border-y border-pearl/10">
      <motion.div
        className="flex min-w-full flex-shrink-0 items-center gap-16 px-8"
        animate={{ x: "-100%" }}
        transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
      >
        {[...items, ...items, ...items].map((item, i) => (
          <div key={i} className="flex items-center gap-16">
            <span className="whitespace-nowrap font-sans text-xs font-light tracking-[0.2em] text-pearl/70 md:text-sm">
              {item}
            </span>
            <span className="text-pearl/30">•</span>
          </div>
        ))}
      </motion.div>
      <motion.div
        className="flex min-w-full flex-shrink-0 items-center gap-16 px-8"
        animate={{ x: "-100%" }}
        transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
      >
        {[...items, ...items, ...items].map((item, i) => (
          <div key={i} className="flex items-center gap-16">
            <span className="whitespace-nowrap font-sans text-xs font-light tracking-[0.2em] text-pearl/70 md:text-sm">
              {item}
            </span>
            <span className="text-pearl/30">•</span>
          </div>
        ))}
      </motion.div>
    </div>
  );
}
