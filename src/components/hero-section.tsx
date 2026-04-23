"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export function HeroSection() {
  const t = useTranslations("Hero");

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center pt-16 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[100px] -z-10" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[var(--chart-2)]/10 rounded-full blur-[100px] -z-10" />

      <div className="container mx-auto px-4 flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-5xl md:text-7xl font-serif font-medium tracking-normal leading-tight mb-6 text-foreground">
            <span className="block text-muted-foreground text-2xl md:text-3xl font-sans font-normal mb-4 leading-relaxed">
              {t("greeting")}
            </span>
            <span className="text-primary">
              {t("role")}
            </span>
          </h1>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-xl md:text-2xl font-sans text-muted-foreground max-w-2xl mb-10 leading-[1.6]"
        >
          {t("description")}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-4"
        >
          <Button size="lg" className="rounded-xl px-8 shadow-[0_0_0_1px_var(--color-primary)]">
            {t("cta")}
          </Button>
          <Button size="lg" variant="outline" className="rounded-xl px-8 bg-card shadow-[0_0_0_1px_var(--color-ring)]">
            {t("viewWork")}
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
