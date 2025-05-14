import Link from "next/link";
import Image from "next/image";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export function Hero2() {
  return (
    <section className="container flex flex-col items-center gap-10 pb-28 pt-20 sm:gap-14 lg:flex-row">
      <div className="flex flex-1 flex-col items-center gap-8 lg:items-start lg:gap-10">
        <h1 className="max-w-2xl text-center font-heading text-4xl font-semibold sm:text-5xl lg:text-left tracking-tight">
          What is بانا?
        </h1>
        <p className="max-w-md text-center text-lg text-muted-foreground lg:text-left">
          We help young diverse minds connect in tech. Our goal is to create a vibrant start-up
          culture in Chicago among young, passionate, and innovative individuals.
        </p>
        <form
  action="https://getform.io/f/ajjekxqa"
  method="POST"
  className="flex w-full max-w-md flex-col gap-2 sm:flex-row sm:items-center"
>
  <Input
    type="email"
    name="email"
    placeholder="Enter your email"
    className="h-12 border-border bg-card px-6 text-lg focus-visible:ring-0 focus-visible:ring-offset-0 sm:h-14 sm:flex-1"
    required
  />
  <Button size="lg" asChild className="h-12 cursor-pointer text-base sm:h-14">
    <button type="submit">Join Email List</button>
  </Button>
</form>
      </div>
      <div className="relative flex-1">
        <Image
          alt="SaaS Dashboard"
          src="/images/imagefx-(1).jpg"
          width={1000}
          height={698}
          priority
          className="rounded-xl border border-border shadow-lg"
        />
        <div className="absolute inset-0 -z-10 bg-primary/20 [filter:blur(180px)]" />
      </div>
    </section>
  );
}
