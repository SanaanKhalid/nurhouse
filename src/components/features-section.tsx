import { Wifi, Coffee, Users, Briefcase, CalendarDays, Building } from "lucide-react";

import {
  Carousel,
  CarouselPrevious,
  CarouselContent,
  CarouselItem,
  CarouselNext,
} from "@/components/ui/carousel";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function Features() {
  const features = [
    {
      icon: <Wifi size={28} className="text-primary" />,
      title: "High-Speed Wi-Fi",
      description: "Stay connected with our reliable, high-speed internet access throughout the space.",
    },
    {
      icon: <Coffee size={28} className="text-primary" />,
      title: "Free Coffee & Tea",
      description: "Enjoy complimentary coffee and tea to keep you fueled and focused during your workday.",
    },
    {
      icon: <Users size={28} className="text-primary" />,
      title: "Community Events",
      description: "Connect with fellow members through our regular networking events, workshops, and social gatherings.",
    },
    {
      icon: <Briefcase size={28} className="text-primary" />,
      title: "Dedicated Desks",
      description: "Secure your own personal workspace with our dedicated desk options, available for monthly members.",
    },
    {
      icon: <CalendarDays size={28} className="text-primary" />,
      title: "Meeting Rooms",
      description: "Book our modern meeting rooms equipped with everything you need for successful presentations and collaborations.",
    },
    {
      icon: <Building size={28} className="text-primary" />,
      title: "Private Offices",
      description: "Need more space and privacy? Our private offices are perfect for small teams and growing businesses.",
    },
  ];

  return (
    <section className="container flex flex-col items-center gap-6 py-16 sm:py-24">
      <div className="flex flex-col gap-3">
        <span className="font-bold uppercase text-primary text-center">Why Nur House?</span>
        <h2 className="font-heading text-3xl font-semibold tracking-tight sm:text-4xl text-balance text-center">
          Experience the Difference
        </h2>
      </div>
      <p className="text-lg text-muted-foreground text-balance max-w-xl text-center">
        Nur House offers a premium co-working experience with a focus on community, comfort, and productivity.
      </p>
      <Carousel opts={{ loop: true, align: "start" }} className="mt-6 w-full px-4 xl:px-0">
        <CarouselPrevious className="-left-6 size-7 xl:-left-12 xl:size-8" />
        <CarouselContent className="pb-4">
          {features.map((feature, index) => (
            <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
              <div className="h-full p-1">
                <Card className="h-full shadow-md flex flex-col">
                  <CardHeader className="items-center text-center">
                    <div className="inline-flex items-center justify-center rounded-md border border-border bg-secondary p-3 mb-3">
                      {feature.icon}
                    </div>
                    <CardTitle className="text-xl font-semibold text-foreground">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="flex-grow p-5 pt-0 text-center">
                    <p className="text-muted-foreground">
                      {feature.description}
                    </p>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselNext className="-right-6 size-7 xl:-right-12 xl:size-8" />
      </Carousel>
    </section>
  );
}
