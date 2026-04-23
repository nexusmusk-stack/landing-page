"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";

export function AboutSection() {
  const t = useTranslations("About");

  return (
    <section id="about" className="py-24 relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-4xl mx-auto"
        >
          <div className="bg-card border border-border rounded-2xl p-8 md:p-12 shadow-[0_4px_24px_rgba(0,0,0,0.05)] relative overflow-hidden">
            {/* Subtle glow */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-[80px] -z-10" />
            
            <h2 className="text-4xl md:text-5xl font-serif font-medium mb-6 tracking-normal">
              {t("title")}
            </h2>
            <p className="text-lg md:text-xl font-sans text-muted-foreground leading-[1.6]">
              {t("content")}
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
