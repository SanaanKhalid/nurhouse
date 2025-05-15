import { Hero } from "@/components/hero";
// import { Hero2 } from "@/components/hero-2";
import { Features } from "@/components/features-section";
import { FaqSection } from "@/components/faq-section";
import { CtaSection } from "@/components/cta-section";
import { NextBigThingSection } from "@/components/next-big-thing-section"; // Import Next Big Thing section
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function HomePage() {
  return (
    <>
      <Hero />
      {/* <Hero2 /> */}
      <NextBigThingSection /> {/* Add this section after the hero */}
      <Features />

      {/* Gallery Section */}
      <section className="container mx-auto px-4 py-16 md:py-24">
        <h2 className="text-3xl font-bold text-center mb-10">Explore Our Space</h2>
        <p className="text-center text-muted-foreground max-w-2xl mx-auto mb-12">
          Take a virtual tour of Nur House. Our premium coworking space features modern amenities, 
          comfortable workstations, meeting rooms, and collaborative areas to boost your productivity.
        </p>
        
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          <div className="overflow-hidden rounded-2xl aspect-square group relative">
            <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity z-10"></div>
            <img 
              src="/images/imagefx-(2).jpg" 
              alt="Open workspace area" 
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </div>
          <div className="overflow-hidden rounded-2xl aspect-square group relative">
            <div className="absolute inset-0 bg-accent/10 opacity-0 group-hover:opacity-100 transition-opacity z-10"></div>
            <img 
              src="/images/imagefx-(1).jpg" 
              alt="Private meeting room" 
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </div>
          <div className="overflow-hidden rounded-2xl aspect-square group relative">
            <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity z-10"></div>
            <img 
              src="/images/image_fx_(5).jpg" 
              alt="Event space" 
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </div>
          <div className="overflow-hidden rounded-2xl aspect-square col-span-2 group relative">
            <div className="absolute inset-0 bg-accent/10 opacity-0 group-hover:opacity-100 transition-opacity z-10"></div>
            <img 
              src="/images/image-join.jpg" 
              alt="Collaborative space" 
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </div>
          <div className="overflow-hidden rounded-2xl aspect-square group relative">
            <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity z-10"></div>
            <img 
              src="/images/imagefx-(4).jpg" 
              alt="Private office" 
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </div>
        </div>
        
        <div className="text-center mt-12">
          <Button asChild size="lg">
            <Link href="/contact">Schedule a Visit</Link>
          </Button>
        </div>
      </section>

      {/* Added a section for Pricing and Day Pass */}
      <section className="container mx-auto px-4 py-12 md:py-20 text-center">
        <h2 className="text-3xl font-bold mb-8">Flexible Options for You</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div className="bg-primary/5 p-8 rounded-2xl shadow-lg border border-primary/10">
            <h3 className="text-2xl font-semibold mb-4">Monthly Memberships</h3>
            <p className="text-muted-foreground mb-6">
              Choose from a variety of monthly plans to suit your co-working needs. No contracts, just flexibility.
            </p>
            <Button asChild>
              <Link href="/pricing">View Pricing</Link>
            </Button>
          </div>
          <div className="bg-accent/5 p-8 rounded-2xl shadow-lg border border-accent/10">
            <h3 className="text-2xl font-semibold mb-4">Day & Week Passes</h3>
            <p className="text-muted-foreground mb-6">
              Need a space for a short period? Our day ($20) and week ($100) passes are perfect for you.
            </p>
            <Button asChild>
              <Link href="/day-pass">Get a Pass</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Add key info section about Nur House */}
      <section className="bg-primary/5 py-12 md:py-20 mt-12">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-10">Why Choose Nur House?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="p-6 bg-background rounded-2xl shadow-sm border border-accent/10">
              <h3 className="text-xl font-semibold mb-3">Premium Location</h3>
              <p className="text-muted-foreground">
                Located at 309 W Washington St, Suite 1050, in the heart of Chicago, with easy access to public transportation, restaurants, and amenities.
              </p>
            </div>
            <div className="p-6 bg-background rounded-2xl shadow-sm border border-primary/10">
              <h3 className="text-xl font-semibold mb-3">Flexible Booking</h3>
              <p className="text-muted-foreground">
                Book meeting rooms, event spaces, and hot desks by simply emailing bookings@nurhouse.com. Collaborate with others easily in our purpose-built spaces.
              </p>
            </div>
            <div className="p-6 bg-background rounded-2xl shadow-sm border border-accent/10">
              <h3 className="text-xl font-semibold mb-3">Community Events</h3>
              <p className="text-muted-foreground">
                Join workshops, networking sessions, and social gatherings. Simply show up to be part of the next big thing in Chicago's professional community.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Add the FAQ section */}
      <FaqSection />

      {/* Add CTA Section */}
      <CtaSection />
    </>
  );
}
