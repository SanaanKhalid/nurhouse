'use client';

import { ArrowRight } from "lucide-react";
import { useState, useEffect, useRef } from "react";

import { TextShimmer } from "@/components/magicui/text-shimmer";
import { Button } from "@/components/ui/button";
import { BorderBeam } from "@/components/magicui/border-beam";
import { Particles } from "@/components/magicui/particles";
import Link from "next/link";

const words = ["Work", "Collaborate", "Innovate", "Connect", "Create", "Thrive"]; // Updated words for co-working
const typingSpeed = 150;
const deletingSpeed = 100;
const delayBetweenWords = 1000;

export function Hero() {
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const endRef = useRef<HTMLDivElement>(null);

  const handleScroll = () => {
    endRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    if (subIndex === words[index].length + 1 && !isDeleting) {
      setTimeout(() => setIsDeleting(true), delayBetweenWords);
    } else if (subIndex === 0 && isDeleting) {
      setIsDeleting(false);
      setIndex((prev) => (prev + 1) % words.length);
    }

    const timeout = setTimeout(() => {
      setSubIndex((prev) => prev + (isDeleting ? -1 : 1));
    }, isDeleting ? deletingSpeed : typingSpeed);

    return () => clearTimeout(timeout);
  }, [subIndex, isDeleting, index]);

  return (
    <section className="relative mx-auto px-6 text-center md:px-8 pt-16 md:pt-24 max-w-[80rem]">
      <div className="inline-flex h-7 items-center justify-between rounded-full border bg-secondary text-secondary-foreground px-4 text-xs transition-all ease-in hover:cursor-pointer hover:bg-secondary/80 group gap-1 translate-y-[-1rem] animate-fade-in">
        <TextShimmer className="inline-flex items-center justify-center">
          <span className="text-xs font-medium">
            New members get 2 weeks free!{" "}
          </span>
          <ArrowRight
            size={20}
            className="ml-1 size-3 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5"
          />
        </TextShimmer>
      </div>

      <h1 className="bg-gradient-to-br from-foreground from-30% to-primary bg-clip-text py-6 text-center text-5xl font-bold font-heading leading-none tracking-tighter text-transparent text-balance sm:text-6xl md:text-7xl lg:text-8xl translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:200ms] caret-foreground">
        {`${words[index].substring(0, subIndex)} at Nur House`}
      </h1>
      
      <p className="mb-8 text-lg tracking-tight text-muted-foreground md:text-xl text-balance translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:400ms] max-w-2xl mx-auto">
        Chicago's premium co-working space designed for productivity, community, and growth. 
        Find your perfect workspace with flexible plans, vibrant events, and a supportive community.
      </p>
      
      <div className="flex flex-col sm:flex-row justify-center items-center gap-4 translate-y-[-1rem] animate-fade-in opacity-0 [--animation-delay:600ms]">
        <Button 
          asChild
          size="lg"
          className="gap-1 font-medium"
        >
          <Link href="/pricing">
            <span>Explore Our Plans</span>
            <ArrowRight
              size={20}
              className="ml-1 size-4 transition-transform duration-300 ease-in-out group-hover:translate-x-1"
            />
          </Link>
        </Button>
        
        <Button 
          asChild
          variant="outline" 
          size="lg"
          className="gap-1 font-medium"
        >
          <Link href="/contact">
            <span>Book a Tour</span>
            <ArrowRight
              size={20}
              className="ml-1 size-4 transition-transform duration-300 ease-in-out group-hover:translate-x-1"
            />
          </Link>
        </Button>
      </div>

      <div className="relative mt-12 md:mt-16 animate-fade-up opacity-0 [--animation-delay:400ms]">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 overflow-hidden rounded-2xl">
          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
            <BorderBeam size={200} anchor={90} duration={10} borderWidth={1.5} colorFrom="#1e40af" colorTo="#3b82f6" />
            <img
              alt="Nur House Workspace"
              src="/images/imagefx-(2).jpg"
              className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
            />
          </div>
          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl hidden md:block">
            <BorderBeam size={200} anchor={90} duration={10} borderWidth={1.5} colorFrom="#3b82f6" colorTo="#1e40af" />
            <img
              alt="Nur House Meeting Room"
              src="/images/imagefx-(1).jpg"
              className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
            />
          </div>
          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl hidden lg:block">
            <BorderBeam size={200} anchor={90} duration={10} borderWidth={1.5} colorFrom="#1e40af" colorTo="#60a5fa" />
            <img
              alt="Nur House Event Space"
              src="/images/image_fx_(5).jpg"
              className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
            />
          </div>
        </div>
      </div>

      <Particles
        ease={70}
        size={0.05}
        color="#3b82f6"
        quantity={100}
        staticity={40}
        className="absolute inset-0 -z-10 h-full"
      />
      
      <div ref={endRef}></div>
    </section>
  );
}
