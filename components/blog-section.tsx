"use client";

import { BlogCard } from "@/components/blog-card";
import blogData from "@/data/blogs.json";
import { BlogPost } from "@/types/blog";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

export function BlogSection() {
  // Taking the first 3 posts for the homepage
  const latestPosts = (blogData as BlogPost[]).slice(0, 3);

  return (
    <section className="relative w-full bg-onyx py-20 px-6 md:px-12 md:py-32">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 flex flex-col items-center justify-between gap-6 md:mb-16 md:flex-row md:items-end">
          <div className="max-w-xl">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-4 block font-sans text-xs font-medium uppercase tracking-[0.3em] text-gold"
            >
              The Journal
            </motion.span>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="font-serif text-4xl text-pearl md:text-6xl lg:text-7xl"
            >
              Latest Insights
            </motion.h2>
          </div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <Link 
              href="/blogs"
              className="group flex items-center gap-3 border-b border-white/20 bg-transparent pb-2 text-xs font-medium uppercase tracking-[0.2em] text-pearl transition-all hover:border-gold hover:text-gold"
            >
              View All Posts
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-2" />
            </Link>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          {/* Featured Post (Large) */}
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="group relative h-full min-h-[500px] w-full overflow-hidden"
            >
              <Link href={`/blogs/${latestPosts[0].slug}`} className="block h-full w-full">
                <Image
                  src={latestPosts[0].image}
                  alt={latestPosts[0].title}
                  fill
                  className="object-cover transition-transform duration-1000 group-hover:scale-105"
                  sizes="(max-width: 1024px) 100vw, 60vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-onyx/90 via-onyx/40 to-transparent transition-opacity duration-500 group-hover:from-onyx" />
                
                <div className="absolute bottom-0 left-0 z-10 w-full p-8 md:p-12">
                  <div className="mb-4 flex items-center gap-4 text-[10px] font-medium uppercase tracking-[0.2em] text-gold">
                    <span>{latestPosts[0].date}</span>
                    <span className="h-px w-6 bg-white/20" />
                    <span>{latestPosts[0].category}</span>
                  </div>
                  <h3 className="mb-4 font-serif text-3xl font-light leading-tight text-pearl md:text-5xl lg:text-6xl">
                    {latestPosts[0].title}
                  </h3>
                   <p className="line-clamp-2 max-w-xl text-sm font-light leading-relaxed text-gray-300 md:text-base">
                    {latestPosts[0].excerpt}
                  </p>
                  <div className="mt-8 flex items-center gap-2 text-xs font-medium uppercase tracking-[0.2em] text-white transition-colors group-hover:text-gold">
                    Read Article
                    <ArrowRight className="h-4 w-4" />
                  </div>
                </div>
              </Link>
            </motion.div>
          </div>

          {/* Side List (Stacked) */}
          <div className="lg:col-span-5 flex flex-col gap-8">
            {latestPosts.slice(1).map((post, index) => (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="group flex flex-1 flex-col gap-6 sm:flex-row lg:flex-col xl:flex-row"
              >
                <Link href={`/blogs/${post.slug}`} className="relative aspect-[4/3] w-full sm:w-1/2 lg:w-full xl:w-2/5 overflow-hidden">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 40vw"
                  />
                </Link>
                <div className="flex flex-1 flex-col justify-center">
                  <div className="mb-3 flex items-center gap-3 text-[10px] font-medium uppercase tracking-[0.2em] text-gold">
                    <span>{post.date}</span>
                    <span className="h-px w-4 bg-white/20" />
                    <span>{post.category}</span>
                  </div>
                  <Link href={`/blogs/${post.slug}`}>
                    <h3 className="mb-3 font-serif text-2xl font-light leading-snug text-pearl transition-colors group-hover:text-gold">
                      {post.title}
                    </h3>
                  </Link>
                  <p className="line-clamp-2 text-xs font-light leading-relaxed text-gray-400">
                    {post.excerpt}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
