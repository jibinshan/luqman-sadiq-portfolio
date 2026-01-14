"use client";

import Link from "next/link";
import { MoveRight } from "lucide-react";
import Image from "next/image";

export function Footer() {
  const currentYear = new Date().getFullYear();
  
  const links = [
    { name: "Home", href: "#home" },
    { name: "Profile", href: "#profile" },
    { name: "Expertise", href: "#expertise" },
    { name: "Clients", href: "#partners" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <footer className="relative bg-black text-white pt-24 pb-12 overflow-hidden z-20">
      {/* Premium subtle gradient wash */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent" />

      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-16 md:gap-8 mb-24">
          
          {/* Brand Section */}
          <div className="md:col-span-5 flex flex-col justify-between h-full">
            <div>
             <Image src="/logo.png" alt="Logo" width={575} height={192} className="w-48 md:w-64 h-auto"/>
              <p className="font-sans text-sm md:text-base text-gray-400 font-light tracking-wide max-w-sm leading-relaxed">
                Architect of Strategic Transactions.
                <br />
                Structuring high-value portfolios that transcend conventional market benchmarks.
              </p>
            </div>
          </div>

          {/* Navigation */}
          <div className="md:col-span-3 md:col-start-7">
            <h3 className="font-sans text-xs font-medium tracking-[0.2em] text-gray-500 mb-8 uppercase">
              Menu
            </h3>
            <ul className="space-y-4">
              {links.map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href} 
                    className="font-serif text-xl md:text-2xl text-gray-300 hover:text-white transition-colors duration-300 flex items-center gap-2 group"
                  >
                    <span className="relative overflow-hidden">
                      {link.name}
                      <span className="absolute left-0 bottom-0 w-full h-[1px] bg-white transform -translate-x-full transition-transform duration-300 group-hover:translate-x-0" />
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="md:col-span-3">
             <h3 className="font-sans text-xs font-medium tracking-[0.2em] text-gray-500 mb-8 uppercase">
              Get in Touch
            </h3>
            <div className="space-y-8">
              <div>
                <a 
                  href="tel:+919188740190" 
                  className="font-serif text-xl md:text-2xl text-gray-300 hover:text-white transition-colors duration-300 block mb-2"
                >
                  +91 9188740190
                </a>
                <p className="font-sans text-sm text-gray-500 font-light">
                  Calicut, Kerala
                </p>
              </div>
              
              {/* Call to Action Button styling in Footer */}
              <div className="pt-4">
                <Link href="#contact" className="inline-flex items-center gap-3 text-sm tracking-widest uppercase border-b border-white/30 pb-1 hover:border-white transition-colors duration-300 hover:text-white text-gray-300">
                    Start a Conversation <MoveRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="flex flex-col md:flex-row justify-between items-end md:items-center pt-8 border-t border-white/10">
          <p className="text-[10px] md:text-xs text-gray-600 tracking-[0.2em] uppercase">
            &copy; {currentYear} Luqman Sadiq. All Rights Reserved.
          </p>
          
          <div className="mt-4 md:mt-0">
             <span className="text-[10px] md:text-xs text-gray-600 tracking-[0.2em] uppercase">
                Premium Real Estate
             </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
