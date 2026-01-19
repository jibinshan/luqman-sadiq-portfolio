"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { BlogCard } from "@/components/blog-card";
import { Footer } from "@/components/footer";
import blogData from "@/data/blogs.json";
import { BlogPost } from "@/types/blog";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

const POSTS_PER_PAGE = 6;

export default function BlogsPage() {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPosts = blogData.length;
  const totalPages = Math.ceil(totalPosts / POSTS_PER_PAGE);

  const currentPosts = (blogData as BlogPost[]).slice(
    (currentPage - 1) * POSTS_PER_PAGE,
    currentPage * POSTS_PER_PAGE
  );

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <main className="min-h-screen w-full bg-onyx text-foreground">
      {/* Blog Hero / Header */}
      <div className="relative h-[40vh] min-h-[400px] w-full overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80"
          alt="Blog Header"
          fill
          className="object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-black/40" />
        
        <div className="absolute inset-0 z-10 flex flex-col items-center justify-center px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-6"
          >
             <Link href="/">
                <Image src="/logo.png" alt="Logo" width={400} height={133} className="w-32 md:w-48 h-auto"/>
             </Link>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-serif text-5xl md:text-7xl text-pearl"
          >
            The Journal
          </motion.h1>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-6 flex items-center gap-3 text-[10px] uppercase tracking-[0.3em] text-white/60"
          >
            <Link href="/" className="hover:text-gold transition-colors">Home</Link>
            <span className="text-gold">/</span>
            <span className="text-pearl">Blog</span>
          </motion.div>
        </div>
      </div>

      {/* Listing Section */}
      <section className="px-6 py-20 md:px-12 md:py-32">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-x-8 gap-y-16 sm:grid-cols-2 lg:grid-cols-3">
            {currentPosts.map((post, index) => (
              <BlogCard key={post.id} post={post} index={index} />
            ))}
          </div>

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="mt-20 flex justify-center gap-4">
              <button
                onClick={() => handlePageChange(Math.max(1, currentPage - 1))}
                disabled={currentPage === 1}
                className="group flex h-10 w-10 items-center justify-center border border-white/10 text-pearl transition-all hover:border-gold hover:text-gold disabled:opacity-30 disabled:hover:border-white/10 disabled:hover:text-pearl"
              >
                <ChevronLeft className="h-4 w-4" />
              </button>

              {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                <button
                  key={page}
                  onClick={() => handlePageChange(page)}
                  className={`flex h-10 w-10 items-center justify-center border text-sm transition-all ${
                    currentPage === page
                      ? "border-gold-light bg-gold text-amber-50 font-medium"
                      : "border-white/10 text-pearl hover:border-gold hover:text-gold"
                  }`}
                >
                  {page}
                </button>
              ))}

              <button
                onClick={() => handlePageChange(Math.min(totalPages, currentPage + 1))}
                disabled={currentPage === totalPages}
                className="group flex h-10 w-10 items-center justify-center border border-white/10 text-pearl transition-all hover:border-gold hover:text-gold disabled:opacity-30 disabled:hover:border-white/10 disabled:hover:text-pearl"
              >
                <ChevronRight className="h-4 w-4" />
              </button>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </main>
  );
}
