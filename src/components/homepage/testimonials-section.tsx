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
    <section className="py-16 md:py-24 bg-secondary/30 dark:bg-secondary/10">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold !font-headline">
            {dict.title}
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            {dict.subtitle}
          </p>
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
                  <Card className="shadow-md hover:shadow-lg transition-shadow duration-300 h-full flex flex-col bg-background">
                    <CardContent className="flex flex-col items-start gap-4 p-6 text-left h-full">
                        <div className="flex items-center gap-4">
                            <Avatar className="w-12 h-12 border-2 border-primary/20">
                            <AvatarImage src={testimonial.avatar} alt={testimonial.name} data-ai-hint={testimonial['data-ai-hint']} />
                            <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
                            </Avatar>
                            <div>
                                <p className="font-semibold text-foreground">{testimonial.name}</p>
                                <div className="flex items-center gap-0.5">
                                    {[...Array(5)].map((_, i) => (
                                    <Star
                                        key={i}
                                        className={`w-4 h-4 ${
                                        i < testimonial.rating
                                            ? "text-accent fill-accent"
                                            : "text-muted-foreground/50"
                                        }`}
                                    />
                                    ))}
                                </div>
                            </div>
                        </div>
                        <p className="text-muted-foreground text-sm italic">"{testimonial.review}"</p>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden sm:flex" />
          <CarouselNext className="hidden sm:flex" />
        </Carousel>
      </div>
    </section>
  );
}
