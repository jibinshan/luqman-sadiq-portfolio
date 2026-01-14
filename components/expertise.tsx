"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const areas = [
  {
    id: "01",
    title: "Real Estate Mastery",
    desc: "High-value property architecture & market dominance.",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80"
  },
  {
    id: "02",
    title: "Investment Pooling",
    desc: "Strategic capital mobilization & portfolio structure.",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80"
  },
  {
    id: "03",
    title: "Marketing Architecture",
    desc: "Creative strategy for organization expansion & brand elevation.",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80"
  }
];

export function Expertise() {
  return (
    <section id="expertise" className="grid min-h-[70vh] w-full grid-cols-1 md:grid-cols-3 border-t border-pearl/10">
      {areas.map((area, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: i * 0.2, duration: 0.8 }}
          viewport={{ once: true }}
          className="group relative flex flex-col justify-end p-8 md:p-12 border-b md:border-b-0 md:border-r border-pearl/10 last:border-r-0 overflow-hidden"
        >
          {/* Background Image */}
          <Image
            src={area.image}
            alt={area.title}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-110 opacity-40 group-hover:opacity-60"
            sizes="(max-width: 768px) 100vw, 33vw"
          />
          
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent opacity-90 transition-opacity duration-500 group-hover:opacity-80 pointer-events-none" />

          {/* Content */}
          <div className="relative z-10">
             <div className="mb-auto pb-32">
                 <span className="font-mono text-xs text-pearl/60">/{area.id}</span>
             </div>
             
             <h3 className="mb-4 font-serif text-2xl text-pearl md:text-3xl lg:text-4xl group-hover:text-white transition-colors">
               {area.title}
             </h3>
             <p className="max-w-xs font-sans text-xs font-light tracking-wide text-pearl/70 group-hover:text-pearl">
               {area.desc}
             </p>
          </div>
          
          {/* Hover Glow Effect */}
          <div className="absolute inset-0 bg-blue-500/5 opacity-0 transition-opacity duration-500 group-hover:opacity-100 pointer-events-none mix-blend-overlay" />
        </motion.div>
      ))}
    </section>
  );
}
