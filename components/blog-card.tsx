"use client";

import { BlogPost } from "@/types/blog";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

interface BlogCardProps {
  post: BlogPost;
  index: number;
}

export function BlogCard({ post, index }: BlogCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative flex flex-col gap-4"
    >
      <Link href={`/blogs/${post.slug}`} className="block overflow-hidden relative aspect-[4/3] w-full">
        <Image
          src={post.image}
          alt={post.title}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className="absolute inset-0 bg-black/10 transition-colors group-hover:bg-black/20" />
      </Link>

      <div className="flex flex-col gap-3 pt-4">
        <div className="flex items-center gap-4 text-[10px] font-medium uppercase tracking-[0.2em] text-gold">
          <span>{post.date}</span>
          <span className="h-px w-6 bg-white/20" />
          <span>{post.category}</span>
        </div>

        <Link href={`/blogs/${post.slug}`} className="group/title">
          <h3 className="font-serif text-2xl font-light leading-snug text-pearl transition-colors duration-300 group-hover/title:text-gold md:text-3xl">
            {post.title}
          </h3>
        </Link>
        
        <p className="line-clamp-2 text-sm font-light leading-relaxed text-gray-400">{post.excerpt}</p>

        <Link
          href={`/blogs/${post.slug}`}
          className="mt-4 flex items-center gap-2 text-xs font-medium uppercase tracking-[0.15em] text-white/60 transition-colors hover:text-gold"
        >
          Read Article
          <ArrowUpRight className="h-3 w-3 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
        </Link>
      </div>
    </motion.div>
  );
}
