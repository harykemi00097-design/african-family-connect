import { Link, NavLink as RNavLink, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { Menu, X, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/ai-assistant", label: "AI Assistant" },
  { to: "/assessment", label: "Assessment" },
  { to: "/courses", label: "Courses" },
  { to: "/community", label: "Community" },
  { to: "/contact", label: "Contact" },
];

export const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [pathname]);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled ? "bg-background/85 backdrop-blur-xl shadow-soft" : "bg-transparent"
      )}
    >
      <nav className="container flex items-center justify-between h-16 md:h-20">
        <Link to="/" className="flex items-center gap-2 group">
          <div className="w-9 h-9 rounded-2xl gradient-warm grid place-items-center shadow-warm group-hover:scale-110 transition-transform">
            <Sparkles className="w-4 h-4 text-primary-foreground" />
          </div>
          <span className="font-display text-lg font-bold leading-tight">
            Mom Solution <span className="text-gradient">360</span>
          </span>
        </Link>

        <ul className="hidden lg:flex items-center gap-1">
          {links.map((l) => (
            <li key={l.to}>
              <RNavLink
                to={l.to}
                end={l.to === "/"}
                className={({ isActive }) =>
                  cn(
                    "px-4 py-2 rounded-full text-sm font-medium transition-colors",
                    isActive
                      ? "bg-primary/10 text-primary"
                      : "text-muted-foreground hover:text-foreground hover:bg-secondary"
                  )
                }
              >
                {l.label}
              </RNavLink>
            </li>
          ))}
        </ul>

        <div className="hidden lg:flex items-center gap-3">
          <Button asChild variant="hero" size="sm">
            <Link to="/assessment">Start Assessment</Link>
          </Button>
        </div>

        <button
          className="lg:hidden w-10 h-10 grid place-items-center rounded-full bg-secondary"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </nav>

      {open && (
        <div className="lg:hidden bg-background/95 backdrop-blur-xl border-t border-border animate-fade-in">
          <ul className="container py-4 flex flex-col gap-1">
            {links.map((l) => (
              <li key={l.to}>
                <RNavLink
                  to={l.to}
                  end={l.to === "/"}
                  className={({ isActive }) =>
                    cn(
                      "block px-4 py-3 rounded-2xl text-base font-medium",
                      isActive ? "bg-primary/10 text-primary" : "text-foreground"
                    )
                  }
                >
                  {l.label}
                </RNavLink>
              </li>
            ))}
            <li className="pt-2">
              <Button asChild variant="hero" size="lg" className="w-full">
                <Link to="/assessment">Start Assessment</Link>
              </Button>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};
