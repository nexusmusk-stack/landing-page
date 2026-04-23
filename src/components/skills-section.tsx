"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";

const skills = [
  "TypeScript", "React", "Next.js", "Node.js", "Tailwind CSS",
  "GraphQL", "PostgreSQL", "Docker", "AWS", "Framer Motion"
];

export function SkillsSection() {
  const t = useTranslations("Skills");

  return (
    <section id="skills" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-serif font-medium tracking-normal mb-2">
            {t("title")}
          </h2>
        </motion.div>

        <div className="max-w-4xl mx-auto flex flex-wrap justify-center gap-4">
          {skills.map((skill, index) => (
            <motion.div
              key={skill}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              whileHover={{ scale: 1.05 }}
              className="px-6 py-3 bg-card border border-border rounded-2xl shadow-[0_0_0_1px_var(--color-border)] hover:shadow-[0_0_0_1px_var(--color-ring)] transition-all cursor-default"
            >
              <span className="font-sans font-medium text-muted-foreground group-hover:text-foreground">{skill}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
