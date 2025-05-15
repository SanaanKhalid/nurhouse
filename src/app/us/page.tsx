'use client'

import Image from "next/image"
import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { HeroUs } from "@/components/hero-us"
import { Button } from "@/components/ui/button"
import { Mail, Building2, Coffee, Wifi, Clock } from "lucide-react"

export default function UsPage() {
  return (
    <>
      <HeroUs />
      <div className="flex min-h-screen flex-col items-center justify-center bg-background p-8 text-foreground">
        <h1 className="mb-4 text-5xl md:text-6xl font-bold text-center">About Nur House</h1>
        <p className="mb-12 max-w-3xl text-center text-lg md:text-xl text-muted-foreground">
          Nur House is not just a co-working space; it's the next big thing in Chicago. 
          We provide a premium, vibrant, and inspiring environment at 309 W Washington St, Suite 1050, for freelancers, entrepreneurs, and businesses of all sizes. 
          Our mission is to foster a dynamic community of collaboration, innovation, and growth. Join us and experience the future of work with no long-term contracts and a 2-week free trial to get you started!
        </p>
      </div>
      
      <section className="w-full py-12 md:py-24 lg:py-32 relative overflow-hidden">
        {/* Background elements */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-accent/5"></div>
        <div className="absolute opacity-10 inset-0">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-primary/30 mix-blend-multiply blur-3xl"></div>
          <div className="absolute bottom-1/3 right-1/3 w-96 h-96 rounded-full bg-accent/30 mix-blend-multiply blur-3xl"></div>
        </div>
        
        <div className="container px-4 md:px-6 relative z-10">
          <div className="flex flex-col items-center text-center space-y-8">
            <div className="space-y-4 max-w-3xl">
              <div className="inline-block mb-2 rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary">
                Premium Co-Working
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Our Space & Amenities
              </h2>
              <p className="mx-auto text-muted-foreground md:text-xl/relaxed">
                Discover a co-working experience designed for productivity and comfort.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-4xl">
              <div className="bg-background/80 backdrop-blur-sm p-6 rounded-2xl border border-primary/10 flex flex-col items-center text-center hover:shadow-md transition-all duration-300">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <Wifi className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">High-Speed Internet</h3>
                <p className="text-muted-foreground">Ultra-fast fiber connection for seamless work and video calls</p>
              </div>
              
              <div className="bg-background/80 backdrop-blur-sm p-6 rounded-2xl border border-primary/10 flex flex-col items-center text-center hover:shadow-md transition-all duration-300">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <Building2 className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Modern Meeting Rooms</h3>
                <p className="text-muted-foreground">Professional spaces bookable by email for your team and clients</p>
              </div>
              
              <div className="bg-background/80 backdrop-blur-sm p-6 rounded-2xl border border-primary/10 flex flex-col items-center text-center hover:shadow-md transition-all duration-300">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <Clock className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Extended Hours</h3>
                <p className="text-muted-foreground">Unlimited access members enjoy service from 9am-10pm everyday</p>
              </div>
            </div>
            
            <Button asChild size="lg" className="mt-8">
              <a href="/pricing">View Our Plans</a>
            </Button>
          </div>
        </div>
      </section>
      
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center text-center space-y-4">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Interested in Joining?
              </h2>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                We&apos;d love to welcome you to Nur House, Chicago&apos;s most exciting new co-working space. Reach out to us for more information or to schedule a tour at our 309 W Washington St, Suite 1050 location.
              </p>
            </div>
            <Button
              className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
              onClick={() => (window.location.href = 'mailto:contact@nurhouse.com')}
            >
              <Mail className="mr-2 h-4 w-4" />
              Email Us at contact@nurhouse.com
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
