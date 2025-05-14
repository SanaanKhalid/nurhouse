import Link from "next/link";
import { Button } from "@/components/ui/button";

export function CtaSection() {
  return (
    <section className="bg-secondary py-16 md:py-24">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Experience Nur House?</h2>
        <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
          Join Chicago's premier co-working community today. Start with a 2-week free trial, no contracts, and be part of the next big thing in collaborative workspaces.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild size="lg">
            <Link href="/contact">Book a Tour</Link>
          </Button>
          <Button asChild variant="outline" size="lg">
            <Link href="/pricing">View Pricing</Link>
          </Button>
        </div>
        <p className="mt-6 text-muted-foreground">
          Have questions? Visit our <Link href="/faq" className="underline hover:text-primary">FAQ page</Link> or <Link href="/contact" className="underline hover:text-primary">contact us</Link>.
        </p>
      </div>
    </section>
  );
}
