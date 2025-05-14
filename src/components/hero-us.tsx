import Image from "next/image";

export function HeroUs() {
  return (
    <section className="container flex flex-col items-center gap-10 pb-28 pt-20 sm:gap-14 lg:flex-row">
      <div className="flex flex-1 flex-col items-center gap-8 lg:items-start lg:gap-10">
        <div className="flex cursor-pointer items-center gap-1 rounded-full border bg-secondary px-3 py-0.5 hover:bg-secondary/60" />
        <h1 className="max-w-2xl text-center font-heading text-4xl font-semibold sm:text-5xl lg:text-left tracking-tight">
          Creating a vibrant community of young founders.&nbsp;
        </h1>
        <p className="max-w-md text-center text-lg text-muted-foreground lg:text-left">
          We are individuals who are passionate about building a dynamic network of young techies,
          fostering innovation and collaboration.
        </p>
      </div>
      <div className="relative flex-1">
        <Image
          src="/images/imagefx-(4).jpg"
          alt="SaaS Dashboard"
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