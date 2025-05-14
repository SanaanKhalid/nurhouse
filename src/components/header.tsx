import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { MobileNavbar } from "@/components/mobile-navbar";

export function Header() {
  return (
    <header className="container flex items-center justify-between gap-10 py-4">
      <Link href="/" className="flex items-center gap-3">
        <div className="flex items-center gap-2">
          <Image
            src="/images/nur-house-logo.png"
            alt="Nur House Logo"
            width={32}
            height={32}
            className="object-contain"
          />
          <span className="font-heading text-xl font-bold">Nur House</span>
        </div>
      </Link>
      <div className="flex items-center gap-10">
        <nav className="hidden md:flex items-center gap-10">
          <Link
            href="/us"
            className="text-lg font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            About Us
          </Link>
          <Link
            href="/pricing"
            className="text-lg font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            Pricing
          </Link>
          <Link
            href="/day-pass"
            className="text-lg font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            Day Pass
          </Link>
          <Link
            href="/events"
            className="text-lg font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            Events
          </Link>
          <Link
            href="/faq"
            className="text-lg font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            FAQ
          </Link>
          <Link
            href="/collaborate"
            className="text-lg font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            Collaborate
          </Link>
          <Link
            href="/contact"
            className="text-lg font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            Contact
          </Link>
        </nav>
        <div className="hidden md:flex items-center gap-2">
          <Button asChild>
            <Link href="/contact" className="cursor-pointer">
              Book a Tour
            </Link>
          </Button>
        </div>
      </div>
      <MobileNavbar>
        <div className="container rounded-b-lg bg-background py-4 text-foreground shadow-xl">
          <nav className="flex flex-col gap-1 pt-2">
            <Link
              href="/us"
              className="w-full rounded-md p-2 font-medium text-muted-foreground hover:text-foreground"
            >
              About Us
            </Link>
            <Link
              href="/pricing"
              className="w-full rounded-md p-2 font-medium text-muted-foreground hover:text-foreground"
            >
              Pricing
            </Link>
            <Link
              href="/day-pass"
              className="w-full rounded-md p-2 font-medium text-muted-foreground hover:text-foreground"
            >
              Day Pass
            </Link>
            <Link
              href="/events"
              className="w-full rounded-md p-2 font-medium text-muted-foreground hover:text-foreground"
            >
              Events
            </Link>
            <Link
              href="/faq"
              className="w-full rounded-md p-2 font-medium text-muted-foreground hover:text-foreground"
            >
              FAQ
            </Link>
            <Link
              href="/collaborate"
              className="w-full rounded-md p-2 font-medium text-muted-foreground hover:text-foreground"
            >
              Collaborate
            </Link>
            <Link
              href="/contact"
              className="w-full rounded-md p-2 font-medium text-muted-foreground hover:text-foreground"
            >
              Contact
            </Link>
            <Button size="lg" asChild className="mt-2 w-full">
              <Link href="/contact" className="cursor-pointer">
                Book a Tour
              </Link>
            </Button>
          </nav>
        </div>
      </MobileNavbar>
    </header>
  );
}
