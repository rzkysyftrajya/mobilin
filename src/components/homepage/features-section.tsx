import React from "react";
import { Grid } from "@/components/ui/grid-pattern";

export default function FeaturesSection({ dict }: { dict: any }) {
  return (
    <section id="tentang" className="py-16 md:py-24 bg-background">
      <div className="container">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold !font-headline">
            {dict.title}
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            {dict.subtitle}
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {dict.items.map((feature: any) => (
            <div
                key={feature.title}
                className="relative bg-gradient-to-b from-neutral-50 to-white dark:from-neutral-900 dark:to-neutral-950 p-6 rounded-2xl overflow-hidden border border-border/50"
            >
                <Grid size={20} />
                <p className="text-base font-bold text-foreground relative z-20">
                {feature.title}
                </p>
                <p className="text-muted-foreground mt-4 text-base font-normal relative z-20">
                {feature.description}
                </p>
            </div>
            ))}
        </div>
      </div>
    </section>
  );
}
