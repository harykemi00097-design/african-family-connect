import { cn } from "@/lib/utils";
import { ReactNode } from "react";

export const Section = ({
  children,
  className,
  id,
}: {
  children: ReactNode;
  className?: string;
  id?: string;
}) => (
  <section id={id} className={cn("py-16 md:py-24", className)}>
    <div className="container">{children}</div>
  </section>
);

export const Eyebrow = ({ children }: { children: ReactNode }) => (
  <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-semibold uppercase tracking-wider">
    {children}
  </span>
);

export const SectionHeading = ({
  eyebrow,
  title,
  subtitle,
  align = "center",
}: {
  eyebrow?: string;
  title: ReactNode;
  subtitle?: string;
  align?: "left" | "center";
}) => (
  <div className={cn("max-w-2xl mb-12", align === "center" && "mx-auto text-center")}>
    {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
    <h2 className="mt-4 text-3xl md:text-5xl font-bold leading-[1.1]">{title}</h2>
    {subtitle && <p className="mt-4 text-lg text-muted-foreground leading-relaxed">{subtitle}</p>}
  </div>
);
