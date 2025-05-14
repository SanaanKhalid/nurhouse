"use client";

import { motion } from "framer-motion";

export function RoadMapHero() {
  return (
    <motion.div
      initial={{ opacity: 0.5, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: 0.3, duration: 0.8, ease: "easeInOut" }}
      className="relative z-50 flex container justify-center flex-1 flex-col px-5 md:px-10 gap-4"
    >
      <h1 className="bg-gradient-to-br from-slate-300 to-primary bg-clip-text text-center text-5xl font-bold tracking-tight text-transparent md:text-7xl font-heading caret-black">
        What we have planned.
      </h1>
      <p className="mt-4 bg-gradient-to-br from-slate-300 to-slate-500 bg-clip-text text-center text-xl tracking-tight text-transparent md:text-2xl caret-black">
        View our Roadmap Below
      </p>
    </motion.div>
  );
}