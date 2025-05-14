'use client'

import Image from "next/image"
import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { HeroUs } from "@/components/hero-us"
import { Button } from "@/components/ui/button"
import { Mail } from "lucide-react"

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
      <section className="w-full py-12 md:py-24 lg:py-32 bg-secondary">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center text-center space-y-4">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Our Space & Amenities
              </h2>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Discover a co-working experience designed for productivity and comfort. We offer high-speed internet, modern meeting rooms (bookable by email!), event spaces, free coffee & tea, and a supportive community. Our unlimited access members enjoy service from 9am-10pm everyday!
              </p>
            </div>
            <Button asChild className="mt-6">
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
