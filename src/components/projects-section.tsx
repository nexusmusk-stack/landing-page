"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

const projects = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description: "A full-stack e-commerce solution with Next.js, Stripe, and Tailwind CSS.",
    tags: ["Next.js", "Stripe", "Tailwind CSS"],
  },
  {
    id: 2,
    title: "Task Management App",
    description: "A collaborative task manager with real-time updates using WebSockets.",
    tags: ["React", "Node.js", "Socket.io"],
  },
  {
    id: 3,
    title: "AI Image Generator",
    description: "An application that generates images from text prompts using OpenAI API.",
    tags: ["TypeScript", "OpenAI", "Next.js"],
  }
];

export function ProjectsSection() {
  const t = useTranslations("Projects");

  return (
    <section id="projects" className="py-24 relative">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-serif font-medium tracking-normal">
            {t("title")}
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="bg-card border border-border rounded-[12px] p-6 shadow-[0_4px_24px_rgba(0,0,0,0.05)] hover:shadow-[0_0_0_1px_var(--color-ring)] transition-all group flex flex-col h-full"
            >
              <h3 className="text-2xl font-serif font-medium mb-3 group-hover:text-primary transition-colors">
                {project.title}
              </h3>
              <p className="text-muted-foreground font-sans leading-[1.6] mb-6 flex-grow">
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tags.map((tag) => (
                  <span key={tag} className="font-sans text-[12px] tracking-[0.12px] font-medium px-2.5 py-1 rounded-[6px] bg-secondary text-secondary-foreground">
                    {tag}
                  </span>
                ))}
              </div>
              
              <Button variant="secondary" className="w-full gap-2 rounded-[8px] font-sans shadow-[0_0_0_1px_var(--color-border)] group-hover:shadow-[0_0_0_1px_var(--color-ring)] transition-all">
                {t("viewProject")}
                <ExternalLink className="w-4 h-4" />
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
