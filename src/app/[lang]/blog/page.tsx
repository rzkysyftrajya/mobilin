import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { blogPosts } from "@/lib/data";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Calendar, User } from "lucide-react";
import ScrollAnimationWrapper from "@/components/shared/scroll-animation-wrapper";
import { Locale } from "@/i18n-config";
import { getDictionary } from "@/lib/dictionary";

export async function generateMetadata(props: { params: Promise<{ lang: Locale }> }): Promise<Metadata> {
  const params = await props.params;

  const {
    lang
  } = params;

  const dict = await getDictionary(lang);
  return {
    title: dict.footer.blog,
    description: 'Baca tips perjalanan, rekomendasi destinasi, dan berita terbaru seputar rental mobil dari blog Mobilin.',
  }
};

export default async function BlogPage(props: { params: Promise<{ lang: Locale }>}) {
  const params = await props.params;

  const {
    lang
  } = params;

  const dict = await getDictionary(lang);
  return (
    <div className="container py-12 md:py-20">
      <ScrollAnimationWrapper>
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h1 className="text-4xl md:text-5xl font-extrabold !font-headline">
            Blog Mobilin
          </h1>
          <p className="mt-4 text-lg text-muted-foreground">
            Tips, inspirasi, dan berita terbaru dari dunia rental mobil.
          </p>
        </div>
      </ScrollAnimationWrapper>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogPosts.map((post, index) => (
          <ScrollAnimationWrapper key={post.slug} delay={index * 0.1}>
            <Card className="flex flex-col overflow-hidden shadow-lg hover:shadow-primary/20 hover:-translate-y-2 transition-all duration-300 dark:bg-neutral-900 h-full">
              <CardHeader className="p-0">
                  <Link href={`/${lang}/blog/${post.slug}`} className="block relative aspect-video">
                      <Image
                          src={post.image}
                          alt={post.title}
                          fill
                          className="object-cover"
                          data-ai-hint={post['data-ai-hint']}
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                  </Link>
              </CardHeader>
              <CardContent className="p-6 flex-grow">
                  <CardTitle className="!font-headline text-xl mb-3">
                      <Link href={`/${lang}/blog/${post.slug}`}>{post.title}</Link>
                  </CardTitle>
                  <div className="flex items-center gap-4 text-xs text-muted-foreground mb-3">
                      <div className="flex items-center gap-1.5"><Calendar className="w-3.5 h-3.5"/><span>{post.date}</span></div>
                      <div className="flex items-center gap-1.5"><User className="w-3.5 h-3.5"/><span>{post.author}</span></div>
                  </div>
                  <CardDescription>{post.excerpt}</CardDescription>
              </CardContent>
               <CardFooter className="p-6 pt-0 bg-gray-50 dark:bg-neutral-800">
                   <Link href={`/${lang}/blog/${post.slug}`} className="font-semibold text-sm text-primary hover:text-accent flex items-center gap-2">
                      {dict.buttons.read_more} <ArrowRight className="w-4 h-4" />
                  </Link>
              </CardFooter>
            </Card>
          </ScrollAnimationWrapper>
        ))}
      </div>
    </div>
  );
}
