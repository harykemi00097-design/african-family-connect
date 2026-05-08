import { Link } from "react-router-dom";
import { Mail, Shield, Lock, Heart, Instagram, Youtube, MessageCircle, ShoppingBag } from "lucide-react";
import logo from "@/assets/logo.jpg";

export const Footer = () => {
  return (
    <footer className="bg-foreground text-background mt-24">
      <div className="container py-16 grid gap-12 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <Link to="/" className="flex items-center gap-2">
            <img src={logo} alt="Mom Solution 360 logo" className="w-10 h-10 rounded-2xl object-cover" />
            <span className="font-display text-lg font-bold">Mom Solution 360</span>
          </Link>
          <p className="mt-4 text-background/70 text-sm leading-relaxed">
            Strengthening African families through AI-powered parenting support, coaching and community.
          </p>
          <a href="mailto:momsolution360@gmail.com" className="mt-4 inline-flex items-center gap-2 text-sm text-background/80 hover:text-background">
            <Mail className="w-4 h-4" /> momsolution360@gmail.com
          </a>
          <div className="mt-5 flex flex-wrap gap-2">
            <a href="https://wa.me/2348036337597" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" className="w-10 h-10 grid place-items-center rounded-full bg-background/10 border border-background/15 hover:bg-primary hover:text-primary-foreground transition">
              <MessageCircle className="w-4 h-4" />
            </a>
            <a href="https://www.instagram.com/momssolution360?igsh=MXc2NzBqeXE3dnQyZg==" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="w-10 h-10 grid place-items-center rounded-full bg-background/10 border border-background/15 hover:bg-primary hover:text-primary-foreground transition">
              <Instagram className="w-4 h-4" />
            </a>
            <a href="https://www.youtube.com/@momsolutions360tv7" target="_blank" rel="noopener noreferrer" aria-label="YouTube" className="w-10 h-10 grid place-items-center rounded-full bg-background/10 border border-background/15 hover:bg-primary hover:text-primary-foreground transition">
              <Youtube className="w-4 h-4" />
            </a>
            <a href="https://selar.com/87111cm670" target="_blank" rel="noopener noreferrer" aria-label="Selar store" className="w-10 h-10 grid place-items-center rounded-full bg-background/10 border border-background/15 hover:bg-primary hover:text-primary-foreground transition">
              <ShoppingBag className="w-4 h-4" />
            </a>
          </div>
          <div className="mt-5 flex flex-wrap gap-2">
            <span className="inline-flex items-center gap-1.5 text-xs px-3 py-1.5 rounded-full bg-background/10 border border-background/15">
              <Shield className="w-3 h-3" /> SSL Secured
            </span>
            <span className="inline-flex items-center gap-1.5 text-xs px-3 py-1.5 rounded-full bg-background/10 border border-background/15">
              <Lock className="w-3 h-3" /> Encrypted
            </span>
          </div>
        </div>

        <div>
          <h4 className="font-semibold mb-4">Explore</h4>
          <ul className="space-y-2 text-sm text-background/70">
            <li><Link to="/about" className="hover:text-background">About</Link></li>
            <li><Link to="/ai-assistant" className="hover:text-background">AI Assistant</Link></li>
            <li><Link to="/assessment" className="hover:text-background">Assessment</Link></li>
            <li><Link to="/courses" className="hover:text-background">Courses & Resources</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-4">Community</h4>
          <ul className="space-y-2 text-sm text-background/70">
            <li><Link to="/community" className="hover:text-background">Community Hub</Link></li>
            <li><Link to="/contact" className="hover:text-background">Coaching</Link></li>
            <li><a href="https://wa.me/2348036337597" target="_blank" rel="noopener noreferrer" className="hover:text-background">WhatsApp</a></li>
            <li><a href="https://www.instagram.com/momssolution360?igsh=MXc2NzBqeXE3dnQyZg==" target="_blank" rel="noopener noreferrer" className="hover:text-background">Instagram</a></li>
            <li><a href="https://www.youtube.com/@momsolutions360tv7" target="_blank" rel="noopener noreferrer" className="hover:text-background">YouTube</a></li>
            <li><a href="https://selar.com/87111cm670" target="_blank" rel="noopener noreferrer" className="hover:text-background">Selar Store</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold mb-4">Stay Connected</h4>
          <p className="text-sm text-background/70 mb-3">Weekly parenting wisdom in your inbox.</p>
          <form className="flex gap-2">
            <input
              type="email"
              placeholder="you@email.com"
              className="flex-1 px-4 py-2.5 rounded-full bg-background/10 border border-background/15 placeholder:text-background/40 text-sm focus:outline-none focus:border-primary"
            />
            <button className="px-4 py-2.5 rounded-full gradient-warm text-primary-foreground text-sm font-semibold">
              <Mail className="w-4 h-4" />
            </button>
          </form>
        </div>
      </div>

      <div className="border-t border-background/10">
        <div className="container py-6 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-background/60">
          <p>© {new Date().getFullYear()} Mom Solution 360. All rights reserved.</p>
          <p className="flex items-center gap-1.5">
            Made with <Heart className="w-3 h-3 text-primary" fill="currentColor" /> for African families.
          </p>
        </div>
      </div>
    </footer>
  );
};
