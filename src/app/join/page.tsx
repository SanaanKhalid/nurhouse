import Link from "next/link";
import Image from "next/image";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function JoinPage() {
  return (
    <section className="container flex flex-col items-center gap-8 pb-28 pt-20 sm:gap-10">
      <h1 className="max-w-2xl text-center font-heading text-4xl font-semibold sm:text-5xl tracking-tight">
        Be Apart of Something Big
      </h1>
      <p className="max-w-lg text-center text-lg text-muted-foreground sm:text-xl">
        Joining Bana means that you will receive information to our upcoming pop-ups, opportunities,
        hackathons, lectures, and more! Be apart of our community. Be apart of something great.
      </p>
      <form 
  action="https://getform.io/f/ajjekxqa" 
  method="POST" 
  className="flex w-full max-w-md flex-col gap-2 sm:flex-row sm:items-center"
>
  <Input
    name="email"
    placeholder="Enter your email"
    type="email"
    className="h-12 border-border bg-card px-6 text-lg focus-visible:ring-0 focus-visible:ring-offset-0 sm:h-14 sm:flex-1"
    required
  />
  <Button 
    size="lg" 
    type="submit" // Changed to submit button
    className="h-12 cursor-pointer text-base sm:h-14"
  >
    Sign me up!
  </Button>
</form>

      <div className="relative sm:mt-8">
        <Image
          src="/images/image-join.jpg"
          alt="Bana Lecture"
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