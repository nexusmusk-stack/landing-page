"use client";

import * as React from "react";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";
import { ThemeToggle } from "./theme-toggle";
import { LanguageSwitcher } from "./language-switcher";

export function Navbar() {
  const t = useTranslations("Header");

  return (
    <header className="fixed top-0 w-full z-50 bg-background border-b border-border">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Link href="/" className="flex items-center gap-2 font-serif font-medium text-2xl tracking-normal text-foreground">
            <img src="/icon.png" alt="Logo" className="w-8 h-8 rounded-lg object-cover" />
            NM<span className="text-primary">.</span>
          </Link>
        </div>

        <nav className="hidden md:flex items-center gap-6 font-sans text-[17px] font-normal text-muted-foreground">
          <Link href="#about" className="hover:text-primary transition-colors">
            {t("about")}
          </Link>
          <Link href="#skills" className="hover:text-primary transition-colors">
            {t("skills")}
          </Link>
          <Link href="#projects" className="hover:text-primary transition-colors">
            {t("projects")}
          </Link>
          <Link href="#contact" className="hover:text-primary transition-colors">
            {t("contact")}
          </Link>
        </nav>

        <div className="flex items-center gap-3">
          <LanguageSwitcher />
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
