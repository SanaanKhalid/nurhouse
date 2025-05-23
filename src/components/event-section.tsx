import Link from "next/link";
import Image from "next/image";

import { Card, CardContent } from "@/components/ui/card";

export function EventSection() {
  return (
    <section className="container flex flex-col items-center gap-6 py-24 sm:gap-7">
      <div className="flex flex-col gap-3">
        <span className="font-bold uppercase text-primary text-center">Events</span>
        <h2 className="font-heading text-3xl font-semibold tracking-tight sm:text-4xl text-balance text-center">
          Our Events
        </h2>
      </div>
      <p className="text-lg text-muted-foreground text-balance max-w-2xl text-center">
        Come network and chill with some techies
      </p>
      <div className="mt-6 grid auto-rows-fr grid-cols-1 gap-7 sm:grid-cols-2 lg:grid-cols-3">
        <Link href="#">
          <Card className="h-full shadow-lg">
            <CardContent className="flex h-full flex-col items-start gap-5 p-5">
              <div className="relative h-52 w-full">
                <Image
                  alt="How to build a beautiful landing page in minutes"
                  src="/images/article-1.avif"
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
              <div className="flex flex-1 flex-col gap-4">
                <h4 className="text-lg font-semibold">
                  How to build a beautiful landing page in minutes
                </h4>
                <p className="mb-auto text-muted-foreground">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nec ultrices
                  orci. Vivamus ante arcu, hendrerit.
                </p>
                <div className="flex items-center gap-3">
                  <span className="rounded-full border bg-accent px-3 py-0.5 text-sm text-accent-foreground">
                    Coding
                  </span>
                  <span className="text-sm text-muted-foreground">Jul 16, 2024</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </Link>
        <Link href="#">
          <Card className="h-full shadow-lg">
            <CardContent className="flex h-full flex-col items-start gap-5 p-5">
              <div className="relative h-52 w-full">
                <Image
                  alt="How to generate the perfect theme for your website with AI"
                  src="/images/article-2.avif"
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
              <div className="flex flex-1 flex-col gap-4">
                <h4 className="text-lg font-semibold">
                  How to generate the perfect theme for your website with AI
                </h4>
                <p className="mb-auto text-muted-foreground">
                  Mauris tincidunt porttitor risus, et posuere erat malesuada eu. Praesent volutpat
                  ut ipsum ac congue.
                </p>
                <div className="flex items-center gap-3">
                  <span className="rounded-full border bg-accent px-3 py-0.5 text-sm text-accent-foreground">
                    Design
                  </span>
                  <span className="text-sm text-muted-foreground">May 10, 2024</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </Link>
        <Link href="#">
          <Card className="h-full shadow-lg">
            <CardContent className="flex h-full flex-col items-start gap-5 p-5">
              <div className="relative h-52 w-full">
                <Image
                  alt="How to build at the speed of no-code without customization limits"
                  src="/images/article-3.avif"
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
              <div className="flex flex-1 flex-col gap-4">
                <h4 className="text-lg font-semibold">
                  How to build at the speed of no-code without customization limits
                </h4>
                <p className="mb-auto text-muted-foreground">
                  Curabitur at quam eget eros semper euismod vitae at neque. Ut ultrices ut.
                </p>
                <div className="flex items-center gap-3">
                  <span className="rounded-full border bg-accent px-3 py-0.5 text-sm text-accent-foreground">
                    Coding
                  </span>
                  <span className="text-sm text-muted-foreground">Apr 27, 2024</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </Link>
      </div>
    </section>
  );
}
