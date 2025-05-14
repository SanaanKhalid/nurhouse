import Link from "next/link";
import { Youtube, Twitter, Instagram, Facebook, Linkedin } from "lucide-react";

export function Footer() {
  return (
    <footer className="container border-t mt-12">
      <div className="mx-auto w-full max-w-screen-xl xl:pb-2 py-8 md:py-12">
        <div className="grid grid-cols-1 gap-8 px-4 sm:grid-cols-2 md:grid-cols-4 md:gap-12">
          <div className="mb-8 md:mb-0">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <img alt="Nur House Logo" src="/images/nur-house-logo.png" className="size-8" />
              <span className="self-center text-2xl font-semibold whitespace-nowrap">
                Nur House
              </span>
            </Link>
            <p className="text-muted-foreground text-sm">
              The next big thing in Chicago. Experience a premium co-working space designed for innovation, collaboration, and growth.
            </p>
          </div>
          <div>
            <h2 className="mb-4 text-sm font-semibold uppercase">Company</h2>
            <ul className="text-muted-foreground font-medium text-sm space-y-3">
              <li><Link href="/us" className="hover:underline">About Us</Link></li>
              <li><Link href="/pricing" className="hover:underline">Pricing</Link></li>
              <li><Link href="/events" className="hover:underline">Events</Link></li>
              <li><Link href="/contact" className="hover:underline">Contact</Link></li>
              <li><Link href="/faq" className="hover:underline">FAQ</Link></li>
              <li><Link href="/collaborate" className="hover:underline">Collaborate</Link></li>
            </ul>
          </div>
          <div>
            <h2 className="mb-4 text-sm font-semibold uppercase">Connect</h2>
            <ul className="text-muted-foreground font-medium text-sm space-y-3">
              <li><Link href="/day-pass" className="hover:underline">Get a Day Pass</Link></li>
              <li><a href="#" className="hover:underline">Book a Meeting Room</a></li>
              <li><a href="/collaborate" className="hover:underline">Collaborate With Us</a></li>
              <li><Link href="/contact#book-a-tour" className="hover:underline">Book a Tour</Link></li>
            </ul>
          </div>
          <div>
            <h2 className="mb-4 text-sm font-semibold uppercase">Contact & Visit</h2>
            <address className="text-muted-foreground font-medium text-sm not-italic space-y-2">
              <p>309 W Washington St<br />Suite 1050<br />Chicago, IL 60606</p>
              <p>Email: <a href="mailto:contact@nurhouse.com" className="hover:underline">contact@nurhouse.com</a></p>
              <p>Phone: <a href="tel:+13125550123" className="hover:underline">(312) 555-0123</a></p>
            </address>
          </div>
        </div>
        <div className="mt-8 border-t border-neutral-700/20 pt-6 flex flex-col sm:flex-row items-center justify-between text-sm text-muted-foreground px-4">
          <div className="flex space-x-4 mb-4 sm:mb-0">
            <a href="#" className="hover:text-foreground"><Youtube size={18} /><span className="sr-only">Youtube</span></a>
            <a href="#" className="hover:text-foreground"><Twitter size={18} /><span className="sr-only">Twitter</span></a>
            <a href="#" className="hover:text-foreground"><Instagram size={18} /><span className="sr-only">Instagram</span></a>
            <a href="#" className="hover:text-foreground"><Facebook size={18} /><span className="sr-only">Facebook</span></a>
            <a href="#" className="hover:text-foreground"><Linkedin size={18} /><span className="sr-only">LinkedIn</span></a>
          </div>
          <div className="text-center sm:text-right">
            <span>© {new Date().getFullYear()} </span>
            <Link href="/" className="cursor-pointer hover:underline">Nur House</Link>
            <span>. All Rights Reserved.</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
