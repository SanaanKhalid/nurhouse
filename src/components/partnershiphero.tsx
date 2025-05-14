import Image from "next/image";
import { Check } from "lucide-react";

export function PartnershipHero() {
  return (
    <section className="container flex flex-col gap-10 py-24 md:flex-row md:items-center md:gap-24">
      <div className="relative flex-1">
        <Image
          alt="SaaS Dashboard"
          src="/images/image_fx_(5).jpg"
          width={713}
          height={497.7}
          className="rounded-xl border border-border shadow-lg"
        />
      </div>
      <div className="flex flex-1 flex-col items-start gap-5">
        <div className="flex flex-col gap-3">
          <span className="font-bold uppercase text-primary text-left">Partnership</span>
          <h2 className="font-heading text-3xl font-semibold tracking-tight sm:text-4xl text-balance text-left">
            Partner with بَنا
          </h2>
        </div>
        <p className="text-lg text-muted-foreground text-balance max-w-lg text-left">
          Whether you&apos;re an investor, developer, or just anyone who believes they can bring
          value to our team - we are open to partnering!
        </p>
        <ul className="mt-4 space-y-3">
          <li className="flex items-center gap-2">
            <Check size={24} className="size-5 text-primary" />
            <span className="text-muted-foreground">Be Involved with بَنا</span>
          </li>
          <li className="flex items-center gap-2">
            <Check size={24} className="size-5 text-primary" />
            <span className="text-muted-foreground">See us Grow</span>
          </li>
          <li className="flex items-center gap-2">
            <Check size={24} className="size-5 text-primary" />
            <span className="text-muted-foreground">Be apart of the team</span>
          </li>
        </ul>
        <div className="mt-4 grid grid-cols-2 gap-3" />
      </div>
    </section>
  );
}
