import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Footer } from "@/components/footer";
import blogData from "@/data/blogs.json";
import { BlogPost } from "@/types/blog";
import { ArrowLeft, Calendar, Tag } from "lucide-react";

// For static generation of params (optional but good for performance)
export function generateStaticParams() {
  return blogData.map((post) => ({
    slug: post.slug,
  }));
}

interface BlogPostPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params;
  const post = (blogData as BlogPost[]).find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  return (
    <main className="min-h-screen w-full bg-onyx text-foreground">
      {/* Article Header */}
      <div className="relative h-[50vh] min-h-[400px] w-full">
        <Image
          src={post.image}
          alt={post.title}
          fill
          className="object-cover opacity-60"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-onyx via-onyx/50 to-transparent" />
        
        <div className="absolute top-8 left-6 md:left-12 z-20">
           <Link href="/blogs" className="group flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-white/70 hover:text-gold transition-colors">
              <ArrowLeft className="h-3 w-3 transition-transform group-hover:-translate-x-1" />
              Back to Journal
           </Link>
        </div>

        <div className="absolute inset-0 z-10 flex flex-col justify-end px-6 pb-20 md:px-12 md:pb-32">
          <div className="mx-auto max-w-4xl w-full">
            <div className="mb-8 flex flex-wrap items-center gap-6 text-[10px] font-medium uppercase tracking-[0.3em] text-gold">
              <span className="flex items-center gap-2">
                <Calendar className="h-3 w-3" />
                {post.date}
              </span>
              <span className="h-px w-6 bg-white/30" />
              <span className="flex items-center gap-2">
                <Tag className="h-3 w-3" />
                {post.category}
              </span>
            </div>
            
            <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl leading-tight text-pearl">
              {post.title}
            </h1>
          </div>
        </div>
      </div>

      {/* Article Content */}
      <article className="px-6 py-12 md:px-12 md:py-24">
        <div className="mx-auto max-w-3xl">
          <div 
            className="prose prose-invert prose-lg prose-headings:font-serif prose-headings:font-light prose-headings:text-pearl prose-p:font-light prose-p:leading-loose prose-p:text-gray-300 prose-strong:font-medium prose-strong:text-gold max-w-none"
            dangerouslySetInnerHTML={{ __html: post.content }} 
          />
          
          <div className="mt-20 border-t border-white/10 pt-16">
            <h3 className="mb-8 font-serif text-2xl italic text-pearl">Share this article</h3>
            {/* Social Share buttons could go here */}
            <div className="flex gap-4">
               {/* Placeholder for social buttons */}
            </div>
          </div>
        </div>
      </article>

      <Footer />
    </main>
  );
}
