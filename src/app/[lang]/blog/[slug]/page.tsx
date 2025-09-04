import { blogPosts } from "@/lib/data";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Image from "next/image";
import { Calendar, User } from "lucide-react";
import ScrollAnimationWrapper from "@/components/shared/scroll-animation-wrapper";
import { Locale } from "@/i18n-config";

type Props = {
  params: Promise<{ slug: string, lang: Locale }>;
};

export async function generateMetadata(props: Props): Promise<Metadata> {
  const params = await props.params;
  const post = blogPosts.find(p => p.slug === params.slug);

  if (!post) {
    return {};
  }

  return {
    title: post.title,
    description: post.excerpt,
    alternates: {
      canonical: `/${params.lang}/blog/${params.slug}`,
    },
     openGraph: {
      title: post.title,
      description: post.excerpt,
      url: `/${params.lang}/blog/${params.slug}`,
      images: [
        {
          url: post.image,
          width: 800,
          height: 400,
          alt: post.title,
        },
      ]
    },
  };
}


export default async function BlogPostPage(props: Props) {
  const params = await props.params;
  const post = blogPosts.find(p => p.slug === params.slug);

  if (!post) {
    notFound();
  }

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": post.title,
    "image": post.image,
    "author": {
      "@type": "Organization",
      "name": "Mobilin"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Mobilin",
      "logo": {
        "@type": "ImageObject",
        "url": "https://www.mobilinaja.com/logo.png" // Replace with your actual logo URL
      }
    },
    "datePublished": post.date,
    "description": post.excerpt
  };

  return (
    <>
    <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
    <div className="container py-12 md:py-20 max-w-4xl mx-auto">
        <ScrollAnimationWrapper>
            <article>
                <header className="mb-8">
                    <div className="relative aspect-video rounded-xl overflow-hidden mb-6 shadow-lg">
                        <Image
                            src={post.image}
                            alt={post.title}
                            fill
                            priority
                            className="object-cover"
                            data-ai-hint={post['data-ai-hint']}
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 75vw, 1024px"
                        />
                    </div>
                     <h1 className="text-3xl md:text-5xl font-extrabold !font-headline text-center mb-4">
                        {post.title}
                    </h1>
                     <div className="flex items-center justify-center gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1.5"><Calendar className="w-4 h-4"/><span>{post.date}</span></div>
                      <div className="flex items-center gap-1.5"><User className="w-4 h-4"/><span>{post.author}</span></div>
                  </div>
                </header>
                
                <div 
                    className="prose prose-lg dark:prose-invert max-w-none mx-auto"
                    dangerouslySetInnerHTML={{ __html: post.content }}
                />

            </article>
        </ScrollAnimationWrapper>
    </div>
    </>
  )
}
