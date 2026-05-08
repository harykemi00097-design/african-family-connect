import { Section, SectionHeading, Eyebrow } from "@/components/Section";
import { Button } from "@/components/ui/button";
import { Mail, MessageCircle, Instagram, Facebook, Youtube, Calendar, BarChart3, Mailbox, Bot, Send } from "lucide-react";
import { toast } from "sonner";
import { FormEvent } from "react";

const Contact = () => {
  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    toast.success("Thank you! We'll be in touch within 24 hours 💛");
    (e.target as HTMLFormElement).reset();
  };

  const themes = [
    { day: "Mon", t: "Mindset Monday" },
    { day: "Tue", t: "Tantrum Tuesday" },
    { day: "Wed", t: "Wisdom Wednesday" },
    { day: "Thu", t: "Throwback Thursday" },
    { day: "Fri", t: "Family Friday" },
    { day: "Sat", t: "Self-Care Saturday" },
    { day: "Sun", t: "Soul Sunday" },
  ];

  return (
    <>
      <section className="container pt-12 md:pt-20 pb-8 text-center max-w-3xl mx-auto">
        <Eyebrow>Contact & Coaching</Eyebrow>
        <h1 className="mt-6 font-display text-4xl md:text-6xl font-bold leading-tight">
          Let's <span className="text-gradient">talk</span>, mama.
        </h1>
        <p className="mt-5 text-lg text-muted-foreground">Inquire about coaching, partnerships or just say hello.</p>
      </section>

      <Section className="pt-4">
        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 bg-card rounded-3xl border border-border shadow-warm p-7 md:p-10">
            <h3 className="text-2xl font-bold">Coaching inquiry</h3>
            <p className="text-muted-foreground mt-2">Tell us a little about your family — we'll match you with the right coach.</p>
            <form onSubmit={onSubmit} className="mt-6 grid sm:grid-cols-2 gap-4">
              <input required placeholder="Full name" className="px-5 py-3.5 rounded-2xl bg-secondary text-sm focus:outline-none focus:ring-2 focus:ring-primary" />
              <input required type="email" placeholder="Email" className="px-5 py-3.5 rounded-2xl bg-secondary text-sm focus:outline-none focus:ring-2 focus:ring-primary" />
              <input placeholder="WhatsApp number" className="px-5 py-3.5 rounded-2xl bg-secondary text-sm focus:outline-none focus:ring-2 focus:ring-primary" />
              <select className="px-5 py-3.5 rounded-2xl bg-secondary text-sm focus:outline-none focus:ring-2 focus:ring-primary">
                <option>Coaching focus</option>
                <option>Discipline & behavior</option>
                <option>Routines & sleep</option>
                <option>Emotional wellness (mom)</option>
                <option>Teen parenting</option>
              </select>
              <textarea required rows={4} placeholder="Tell us what's happening at home…" className="sm:col-span-2 px-5 py-3.5 rounded-2xl bg-secondary text-sm focus:outline-none focus:ring-2 focus:ring-primary resize-none" />
              <Button type="submit" variant="hero" size="lg" className="sm:col-span-2">
                <Send className="w-4 h-4" /> Send inquiry
              </Button>
            </form>
          </div>

          <aside className="space-y-4">
            <div className="p-6 rounded-3xl gradient-warm text-primary-foreground shadow-warm">
              <Mailbox className="w-8 h-8" />
              <h4 className="mt-3 font-bold text-lg">Newsletter</h4>
              <p className="text-sm mt-1 opacity-90">Weekly wisdom + the free guide.</p>
              <form onSubmit={onSubmit} className="mt-4 flex gap-2">
                <input type="email" required placeholder="you@email.com" className="flex-1 px-4 py-2.5 rounded-full bg-background/95 text-foreground text-sm focus:outline-none" />
                <button className="w-10 h-10 rounded-full bg-foreground text-background grid place-items-center"><Send className="w-4 h-4" /></button>
              </form>
            </div>

            <div className="p-6 rounded-3xl bg-card border border-border">
              <h4 className="font-bold">Reach out directly</h4>
              <ul className="mt-3 space-y-2 text-sm">
                <li className="flex items-center gap-2"><Mail className="w-4 h-4 text-primary" /> hello@momsolution360.com</li>
                <li className="flex items-center gap-2"><MessageCircle className="w-4 h-4 text-primary" /> WhatsApp: +234 800 000 0000</li>
              </ul>
              <div className="mt-4 flex gap-2">
                {[Instagram, Facebook, Youtube].map((I, i) => (
                  <button key={i} className="w-10 h-10 rounded-full bg-secondary hover:bg-primary hover:text-primary-foreground grid place-items-center transition">
                    <I className="w-4 h-4" />
                  </button>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </Section>

      <Section className="bg-secondary/30">
        <SectionHeading
          eyebrow="Automated content"
          title={<>Weekly themes that <span className="text-gradient">land in your DMs</span></>}
          subtitle="Our AI-powered scheduler delivers fresh, culturally-rooted parenting content every day."
        />
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-3 max-w-5xl mx-auto">
          {themes.map((t, i) => (
            <div key={t.day} className="p-5 rounded-2xl bg-card border border-border shadow-soft text-center hover:shadow-warm hover:-translate-y-1 transition-all" style={{ animationDelay: `${i*60}ms` }}>
              <div className="text-xs font-semibold text-primary uppercase">{t.day}</div>
              <div className="mt-2 font-display font-bold text-base leading-tight">{t.t}</div>
            </div>
          ))}
        </div>
      </Section>

      <Section>
        <SectionHeading
          eyebrow="Behind the scenes"
          title={<>An <span className="text-gradient">AI analytics dashboard</span> — for mothers, not marketers</>}
          subtitle="We listen to what mothers struggle with — anonymously and ethically — to make our content better."
        />
        <div className="max-w-5xl mx-auto bg-card rounded-3xl border border-border shadow-warm p-7 md:p-10">
          <div className="grid sm:grid-cols-3 gap-4 mb-8">
            {[
              { icon: BarChart3, label: "Top concern this week", value: "Tantrums (32%)" },
              { icon: Bot, label: "AI conversations", value: "12,408" },
              { icon: Calendar, label: "New registrations", value: "+1,240" },
            ].map((s) => (
              <div key={s.label} className="p-5 rounded-2xl bg-secondary/60">
                <s.icon className="w-5 h-5 text-primary" />
                <div className="mt-2 text-xs text-muted-foreground uppercase tracking-wider">{s.label}</div>
                <div className="mt-1 text-xl font-display font-bold">{s.value}</div>
              </div>
            ))}
          </div>

          <div>
            <div className="text-sm font-semibold mb-3">Engagement by topic</div>
            <div className="space-y-3">
              {[
                { l: "Discipline", v: 78 },
                { l: "Routines", v: 64 },
                { l: "Emotional wellness", v: 91 },
                { l: "Screen time", v: 53 },
                { l: "Teen parenting", v: 47 },
              ].map((b) => (
                <div key={b.l}>
                  <div className="flex justify-between text-sm mb-1"><span>{b.l}</span><span className="text-muted-foreground">{b.v}%</span></div>
                  <div className="h-2 rounded-full bg-secondary overflow-hidden">
                    <div className="h-full gradient-warm transition-all duration-700" style={{ width: `${b.v}%` }} />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>
    </>
  );
};

export default Contact;
