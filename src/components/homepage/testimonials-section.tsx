"use client";
import { testimonials } from "@/lib/data";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Star } from "lucide-react";

export default function TestimonialsSection({ dict }: { dict: any }) {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-secondary/30 via-background to-accent/10 dark:bg-secondary/10 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-10 left-10 w-20 h-20 bg-primary/20 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-32 h-32 bg-accent/20 rounded-full blur-xl animate-pulse delay-1000"></div>
      </div>

      <div className="container relative z-10">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold !font-headline bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">
            {dict.title}
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">{dict.subtitle}</p>
        </div>
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full max-w-xs sm:max-w-xl md:max-w-2xl lg:max-w-4xl mx-auto mt-12"
        >
          <CarouselContent>
            {testimonials.map((testimonial, index) => (
              <CarouselItem key={index} className="sm:basis-1/2 lg:basis-1/3">
                <div className="p-1 h-full">
                  <Card className="group shadow-md hover:shadow-2xl hover:shadow-primary/20 transition-all duration-500 h-full flex flex-col bg-background/80 backdrop-blur-sm border-2 border-primary/10 hover:border-primary/30 hover:-translate-y-2 hover:rotate-1">
                    <CardContent className="flex flex-col items-start gap-4 p-6 text-left h-full">
                      <div className="flex items-center gap-4">
                        <Avatar className="w-12 h-12 border-2 border-primary/20 group-hover:border-primary/40 transition-colors duration-300">
                          <AvatarImage
                            src={testimonial.avatar}
                            alt={testimonial.name}
                            data-ai-hint={testimonial["data-ai-hint"]}
                          />
                          <AvatarFallback className="bg-gradient-to-br from-primary/20 to-accent/20 text-primary font-bold">
                            {testimonial.name.charAt(0)}
                          </AvatarFallback>
                        </Avatar>
                        <div>
                          <p className="font-semibold text-foreground group-hover:text-primary transition-colors duration-300">
                            {testimonial.name}
                          </p>
                          <div className="flex items-center gap-0.5">
                            {[...Array(5)].map((_, i) => (
                              <Star
                                key={i}
                                className={`w-4 h-4 transition-all duration-300 ${
                                  i < testimonial.rating
                                    ? "text-accent fill-accent animate-pulse"
                                    : "text-muted-foreground/50"
                                }`}
                              />
                            ))}
                          </div>
                        </div>
                      </div>
                      <p className="text-muted-foreground text-sm italic group-hover:text-foreground transition-colors duration-300">
                        "{testimonial.review}"
                      </p>
                      {/* Trust Badge */}
                      <div className="mt-auto">
                        <div className="inline-flex items-center gap-1 bg-primary/10 text-primary px-2 py-1 rounded-full text-xs font-medium">
                          <svg
                            className="w-3 h-3"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path
                              fillRule="evenodd"
                              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                              clipRule="evenodd"
                            />
                          </svg>
                          Verified Customer
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden sm:flex hover:bg-primary hover:text-primary-foreground transition-all duration-300" />
          <CarouselNext className="hidden sm:flex hover:bg-primary hover:text-primary-foreground transition-all duration-300" />
        </Carousel>
      </div>
    </section>
  );
}
