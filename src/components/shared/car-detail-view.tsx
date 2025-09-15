"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, Zap, Droplets, Gauge, Users } from "lucide-react";
import ScrollAnimationWrapper from "@/components/shared/scroll-animation-wrapper";
import { Car } from "@/lib/types";
import { Table, TableBody, TableCell, TableRow } from "@/components/ui/table";

type CarDetailViewProps = {
  car: Car;
  dict: any;
};

export default function CarDetailView({ car, dict }: CarDetailViewProps) {
  const pageDict = dict.car_detail_page;

  const features = [
    `${pageDict.capacity} ${car.capacity} ${pageDict.passengers}`,
    pageDict.facility_insurance,
    pageDict.facility_maintained,
    pageDict.facility_support,
  ];

  const bookingText = `Halo Mobilin, saya tertarik untuk menyewa mobil ${car.name}.`;

  return (
    <div className="container py-12 md:py-20">
      <ScrollAnimationWrapper>
        <div className="grid md:grid-cols-2 gap-8 md:gap-12">
          {/* Car Image */}
          <div>
            <div className="relative aspect-video rounded-xl overflow-hidden shadow-lg bg-secondary">
              <Image
                src={car.image}
                alt={`Tampilan depan mobil ${car.name}`}
                fill
                priority
                className="object-cover"
                data-ai-hint={car["data-ai-hint"]}
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          </div>

          {/* Car Details & Booking */}
          <div>
            <h1 className="text-4xl md:text-5xl font-extrabold !font-headline mb-3">
              {car.name}
            </h1>
            <p className="text-lg text-muted-foreground mb-6">
              {pageDict.year} {car.year} • {car.fuel}
            </p>

            <Card className="bg-secondary/30 mb-6">
              <CardHeader>
                <CardTitle className="!font-headline text-xl">
                  {pageDict.main_specs}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableBody>
                    <TableRow>
                      <TableCell className="font-medium">
                        <Users className="inline-block mr-2 h-4 w-4 text-primary" />{" "}
                        {pageDict.capacity}
                      </TableCell>
                      <TableCell>
                        {car.capacity} {pageDict.passengers}
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">
                        <Gauge className="inline-block mr-2 h-4 w-4 text-primary" />{" "}
                        {pageDict.engine}
                      </TableCell>
                      <TableCell>{car.specs.engine}</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">
                        <Zap className="inline-block mr-2 h-4 w-4 text-primary" />{" "}
                        {pageDict.horsepower}
                      </TableCell>
                      <TableCell>{car.specs.horsepower}</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">
                        <Droplets className="inline-block mr-2 h-4 w-4 text-primary" />{" "}
                        {pageDict.fuel}
                      </TableCell>
                      <TableCell>{car.fuel}</TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </CardContent>
            </Card>

            <Card className="bg-background border-primary/50 shadow-lg">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-4">
                  {pageDict.included_facilities}
                </h3>
                <ul className="grid grid-cols-2 gap-x-4 gap-y-3 mb-6">
                  {features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-center gap-2 text-sm text-foreground"
                    >
                      <CheckCircle className="w-5 h-5 text-green-500" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button
                  size="lg"
                  className="w-full bg-accent hover:bg-accent/90 text-lg h-12"
                  asChild
                >
                  <a
                    href={`https://wa.me/6285177262716?text=${encodeURIComponent(
                      bookingText
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {dict.buttons.book_now_whatsapp}
                  </a>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </ScrollAnimationWrapper>
    </div>
  );
}
