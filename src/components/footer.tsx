"use client";

import { useTranslations } from "next-intl";
import { Code, Globe, Mail } from "lucide-react";
import { Link } from "@/i18n/routing";

export function Footer() {
  const t = useTranslations("Contact");

  return (
    <footer id="contact" className="py-12 border-t border-border bg-card">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex flex-col items-center md:items-start">
          <h3 className="text-2xl md:text-3xl font-serif font-medium tracking-normal mb-2">
            {t("title")}
          </h3>
          <p className="text-muted-foreground font-sans text-[14px]">
            © {new Date().getFullYear()} Nexus Musk. All rights reserved.
          </p>
        </div>

        <div className="flex items-center gap-4">
          <Link
            href="#"
            className="p-2 rounded-full bg-secondary text-secondary-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
            aria-label="Code"
          >
            <Code className="w-5 h-5" />
          </Link>
          <Link
            href="#"
            className="p-2 rounded-full bg-secondary text-secondary-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
            aria-label="Website"
          >
            <Globe className="w-5 h-5" />
          </Link>
          <Link
            href="mailto:nexusmusk@gmail.com"
            className="p-2 rounded-full bg-secondary text-secondary-foreground hover:bg-primary hover:text-primary-foreground transition-colors"
            aria-label="Email"
          >
            <Mail className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </footer>
  );
}
