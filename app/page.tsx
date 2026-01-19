import { Hero } from "@/components/hero";
import { LuqmanProfileSection } from "@/components/luqman-profile-section";
import { About } from "@/components/about";
import { VisualBreak } from "@/components/visual-break";
import { Authority } from "@/components/authority";
import { Marquee } from "@/components/marquee";
import { Expertise } from "@/components/expertise";
import { Contact } from "@/components/contact";
import { SoughtAfter, PartnerMarquee } from "@/components/additional-sections";
import { BlogSection } from "@/components/blog-section";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <main className="relative min-h-screen w-full">
      {/* 
        Main content wrapper with higher z-index and background to cover the fixed footer.
        The footer is sticky/fixed at the bottom with -z-20.
        So this main div needs to scroll over it.
      */}
      <div className="relative z-10 bg-onyx shadow-2xl">
        <Hero />
        <LuqmanProfileSection />
        <PartnerMarquee />
        <About />
        <VisualBreak src="/visualbreak1.jpg" />
        <Authority />
        <Marquee />
        <SoughtAfter />
        <Expertise />
        <VisualBreak src="/legacy/sobha.avif" />
        <BlogSection />
        <Contact />
      </div>
      
      {/* 
        Footer sits at the bottom of the viewport. 
        As the 'relative z-10' div scrolls up, it reveals this footer.
        Actually, for sticky reveal to work well, the footer often needs to be 'fixed bottom-0' 
        and the last element of content needs 'margin-bottom' equal to footer height, 
        OR the footer is just logically after the main div but physically under it.
        
        My Footer component has 'sticky bottom-0 -z-20'. 
        If it's *outside* the z-10 div, and the z-10 div has a bg, it should work 
        provided the main content doesn't cover it indefinitely. 
        
        Wait, if Footer is *after* the z-10 div in the DOM, 
        and z-10 div has a BG, the Footer will inherently be below it in standard flow 
        unless positioned.
        
        The standard "Footer Reveal" pattern:
        <Content z-10 bg-white mb-[footer-height] />
        <Footer fixed bottom-0 z-0 />
        
        Let's adjust:
        I'll wrap the main content in a div that makes sure it sits *on top*.
        And I will place Footer *outside* that wrapper.
      */}
      <Footer />
    </main>
  );
}
