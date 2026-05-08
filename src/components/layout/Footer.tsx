import { Link } from "react-router-dom";
import { Sparkles, Mail, Shield, Lock, Heart } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-foreground text-background mt-24">
      <div className="container py-16 grid gap-12 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <Link to="/" className="flex items-center gap-2">
            <div className="w-9 h-9 rounded-2xl gradient-warm grid place-items-center">
              <Sparkles className="w-4 h-4 text-primary-foreground" />
            </div>
            <span className="font-display text-lg font-bold">Mom Solution 360</span>
          </Link>
          <p className="mt-4 text-background/70 text-sm leading-relaxed">
            Strengthening African families through AI-powered parenting support, coaching and community.
          </p>
          <div className="mt-6 flex flex-wrap gap-2">
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
            <li><a href="#" className="hover:text-background">WhatsApp Group</a></li>
            <li><a href="#" className="hover:text-background">Facebook Group</a></li>
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
