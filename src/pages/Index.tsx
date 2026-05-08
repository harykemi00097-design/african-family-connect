import { Link } from "react-router-dom";
import { ArrowRight, Bot, Users, BookOpen, Heart, Shield, Sparkles, Star, MessageCircle, Zap, Globe, Award, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Section, SectionHeading, Eyebrow } from "@/components/Section";
import heroImg from "@/assets/hero-family.jpg";
import coachingImg from "@/assets/coaching.jpg";

const stats = [
  { value: "12K+", label: "Mothers Supported" },
  { value: "98%", label: "Feel More Confident" },
  { value: "45+", label: "Cities Across Africa" },
  { value: "24/7", label: "AI Support" },
];

const features = [
  { icon: Bot, title: "AI Parenting Assistant", desc: "Instant, judgment-free guidance on discipline, routines and emotional development.", to: "/ai-assistant" },
  { icon: Heart, title: "Emotional Wellness", desc: "Tools for mothers to thrive — not just survive — through every parenting season.", to: "/courses" },
  { icon: BookOpen, title: "Expert Coaching", desc: "1:1 sessions with certified parenting coaches rooted in African values.", to: "/contact" },
  { icon: Users, title: "Community Circles", desc: "Join thousands of mothers in WhatsApp & Facebook groups across the continent.", to: "/community" },
  { icon: Shield, title: "Private & Secure", desc: "End-to-end encrypted conversations. Your family's privacy is sacred.", to: "/about" },
  { icon: Globe, title: "Multilingual Support", desc: "English, French and Swahili — wisdom that speaks your language.", to: "/ai-assistant" },
];

const testimonials = [
  { name: "Adaeze O.", city: "Lagos, Nigeria", text: "The AI assistant helped me handle my 6-year-old's tantrums with calm. I cried the first time it actually understood our culture." , rating: 5 },
  { name: "Amina K.", city: "Nairobi, Kenya", text: "From shouting daily to peaceful evenings. The discipline course changed our home in three weeks.", rating: 5 },
  { name: "Marie-Claire B.", city: "Abidjan, Côte d'Ivoire", text: "Finally a parenting platform built FOR us, not adapted to us. The community is everything.", rating: 5 },
];

const products = [
  { title: "Discipline Without Yelling", type: "eBook", price: "₦4,500", color: "from-orange-500/20 to-amber-400/20" },
  { title: "Calm Mama Journal", type: "Printable", price: "₦2,900", color: "from-rose-400/20 to-orange-300/20" },
  { title: "Peaceful Mornings Course", type: "Video Course", price: "₦18,000", color: "from-amber-500/20 to-yellow-400/20" },
];

const Index = () => {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="container pt-8 md:pt-16 pb-20 md:pb-32 grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="relative z-10 animate-fade-in-up">
            <Eyebrow><Sparkles className="w-3 h-3" /> AI-Powered Parenting</Eyebrow>
            <h1 className="mt-6 font-display text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-[1.05] tracking-tight">
              Strengthening <span className="text-gradient">African Families</span> Through AI-Powered Parenting Support
            </h1>
            <p className="mt-6 text-lg md:text-xl text-muted-foreground leading-relaxed max-w-xl">
              Compassionate guidance, culturally rooted wisdom and a community of mothers — all in one trusted platform built for the African family.
            </p>
            <div className="mt-10 flex flex-wrap gap-3">
              <Button asChild variant="hero" size="xl">
                <Link to="/community">Join Community <ArrowRight className="w-4 h-4" /></Link>
              </Button>
              <Button asChild variant="outline" size="xl">
                <Link to="/assessment">Start Assessment</Link>
              </Button>
              <Button asChild variant="ghost" size="xl">
                <Link to="/ai-assistant">Get Parenting Tips</Link>
              </Button>
            </div>

            <div className="mt-12 flex flex-wrap items-center gap-6 text-sm text-muted-foreground">
              <div className="flex items-center gap-2"><Shield className="w-4 h-4 text-sage" /> Encrypted & private</div>
              <div className="flex items-center gap-2"><Award className="w-4 h-4 text-primary" /> Coach-verified</div>
              <div className="flex items-center gap-2"><Star className="w-4 h-4 text-accent" fill="currentColor" /> 4.9 / 5 (2,400+)</div>
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-6 gradient-sunset rounded-[3rem] blur-3xl opacity-30 animate-float" />
            <div className="relative rounded-[2.5rem] overflow-hidden shadow-warm">
              <img
                src={heroImg}
                alt="Joyful African mother embracing her two children at golden hour"
                width={1536}
                height={1280}
                className="w-full h-auto"
              />
              <div className="absolute inset-0 gradient-hero pointer-events-none" />
              <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between">
                <div className="bg-background/95 backdrop-blur-md rounded-2xl px-4 py-3 shadow-soft">
                  <div className="text-xs text-muted-foreground">Today's tip</div>
                  <div className="text-sm font-semibold">Connect before you correct ❤️</div>
                </div>
              </div>
            </div>

            <div className="absolute -bottom-6 -left-6 bg-card rounded-2xl shadow-warm px-5 py-4 hidden md:flex items-center gap-3 animate-float">
              <div className="w-10 h-10 rounded-full gradient-warm grid place-items-center">
                <Bot className="w-5 h-5 text-primary-foreground" />
              </div>
              <div>
                <div className="text-xs text-muted-foreground">AI Assistant</div>
                <div className="text-sm font-semibold">Online & ready</div>
              </div>
            </div>
          </div>
        </div>

        {/* Decorative blob */}
        <div className="absolute -top-32 -right-32 w-[500px] h-[500px] rounded-full bg-accent/20 blur-3xl pointer-events-none" />
      </section>

      {/* STATS */}
      <section className="border-y border-border bg-secondary/40">
        <div className="container py-10 grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((s, i) => (
            <div key={s.label} className="text-center animate-fade-in-up" style={{ animationDelay: `${i * 80}ms` }}>
              <div className="text-3xl md:text-5xl font-display font-bold text-gradient">{s.value}</div>
              <div className="mt-1 text-xs md:text-sm text-muted-foreground uppercase tracking-wider">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* FEATURES */}
      <Section>
        <SectionHeading
          eyebrow="What we offer"
          title={<>Everything a modern <span className="text-gradient">African mother</span> needs</>}
          subtitle="From AI-powered guidance to live coaching and a continent-wide community — built around our families, our culture, our values."
        />
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f) => (
            <Link
              key={f.title}
              to={f.to}
              className="group relative p-7 rounded-3xl bg-card border border-border hover:border-primary/40 shadow-soft hover:shadow-warm transition-all duration-300 hover:-translate-y-1"
            >
              <div className="w-12 h-12 rounded-2xl gradient-warm grid place-items-center shadow-warm group-hover:scale-110 transition-transform">
                <f.icon className="w-5 h-5 text-primary-foreground" />
              </div>
              <h3 className="mt-5 text-xl font-bold">{f.title}</h3>
              <p className="mt-2 text-muted-foreground leading-relaxed">{f.desc}</p>
              <div className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-primary">
                Learn more <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          ))}
        </div>
      </Section>

      {/* AI PREVIEW */}
      <Section className="bg-secondary/30">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <Eyebrow><Bot className="w-3 h-3" /> AI Assistant Preview</Eyebrow>
            <h2 className="mt-4 text-3xl md:text-5xl font-bold leading-tight">
              Ask anything. Get warm, wise <span className="text-gradient">guidance</span> — instantly.
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Trained on African parenting wisdom, child psychology, and emotional intelligence. No judgement. Just support.
            </p>
            <ul className="mt-6 space-y-3">
              {["Discipline without shouting", "Routines that actually stick", "Helping anxious or shy children", "Building emotional safety at home"].map((t) => (
                <li key={t} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-sage shrink-0 mt-0.5" />
                  <span>{t}</span>
                </li>
              ))}
            </ul>
            <Button asChild variant="hero" size="lg" className="mt-8">
              <Link to="/ai-assistant">Chat with the AI Assistant <ArrowRight className="w-4 h-4" /></Link>
            </Button>
          </div>

          <div className="relative">
            <div className="bg-card rounded-3xl shadow-warm border border-border p-6 md:p-8">
              <div className="flex items-center gap-3 pb-4 border-b border-border">
                <div className="w-10 h-10 rounded-2xl gradient-warm grid place-items-center">
                  <Bot className="w-5 h-5 text-primary-foreground" />
                </div>
                <div>
                  <div className="font-semibold">Mama AI</div>
                  <div className="text-xs text-sage flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-sage animate-pulse" /> Online
                  </div>
                </div>
              </div>

              <div className="mt-6 space-y-4">
                <div className="flex justify-end">
                  <div className="max-w-[85%] bg-primary text-primary-foreground rounded-3xl rounded-tr-md px-4 py-3 text-sm">
                    My child lies often. What should I do?
                  </div>
                </div>
                <div className="flex gap-3">
                  <div className="w-8 h-8 rounded-full gradient-warm shrink-0 grid place-items-center">
                    <Bot className="w-4 h-4 text-primary-foreground" />
                  </div>
                  <div className="max-w-[85%] bg-secondary rounded-3xl rounded-tl-md px-4 py-3 text-sm leading-relaxed">
                    Children may lie because of fear, attention-seeking, or pressure. Start by creating a calm environment where your child feels safe telling the truth. Avoid harsh reactions and focus on teaching honesty through conversation and example. Would you like practical discipline steps for this situation?
                  </div>
                </div>
              </div>

              <div className="mt-6 flex items-center gap-2 p-2 rounded-full bg-secondary">
                <input className="flex-1 bg-transparent px-3 py-2 text-sm focus:outline-none" placeholder="Type your parenting question..." disabled />
                <button className="w-9 h-9 rounded-full gradient-warm grid place-items-center">
                  <MessageCircle className="w-4 h-4 text-primary-foreground" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* COACHING */}
      <Section>
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative order-2 lg:order-1">
            <div className="rounded-[2.5rem] overflow-hidden shadow-warm">
              <img src={coachingImg} alt="African mother reading with her young daughter" loading="lazy" width={1024} height={1024} className="w-full h-auto" />
            </div>
            <div className="absolute -top-6 -right-6 bg-card rounded-2xl shadow-warm px-5 py-4 hidden md:block">
              <div className="text-xs text-muted-foreground">This week</div>
              <div className="text-sm font-semibold">+1,240 mothers joined</div>
            </div>
          </div>
          <div className="order-1 lg:order-2">
            <Eyebrow><Heart className="w-3 h-3" /> 1:1 Coaching</Eyebrow>
            <h2 className="mt-4 text-3xl md:text-5xl font-bold leading-tight">Personal coaching for the moments that matter</h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Sit with a certified parenting coach who understands extended family dynamics, faith, school pressure and the joy of raising African children.
            </p>
            <div className="mt-8 grid grid-cols-2 gap-4">
              {[
                { v: "60min", l: "Per session" },
                { v: "Weekly", l: "Or as needed" },
                { v: "WhatsApp", l: "Or video call" },
                { v: "Confidential", l: "100%" },
              ].map((b) => (
                <div key={b.l} className="p-4 rounded-2xl bg-secondary/60">
                  <div className="text-2xl font-display font-bold text-gradient">{b.v}</div>
                  <div className="text-sm text-muted-foreground">{b.l}</div>
                </div>
              ))}
            </div>
            <Button asChild variant="hero" size="lg" className="mt-8">
              <Link to="/contact">Book a session <ArrowRight className="w-4 h-4" /></Link>
            </Button>
          </div>
        </div>
      </Section>

      {/* TESTIMONIALS */}
      <Section className="bg-secondary/30">
        <SectionHeading
          eyebrow="Loved by mothers"
          title={<>Stories of <span className="text-gradient">peaceful homes</span></>}
        />
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div key={t.name} className="p-7 rounded-3xl bg-card border border-border shadow-soft">
              <div className="flex gap-1 text-accent">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star key={i} className="w-4 h-4" fill="currentColor" />
                ))}
              </div>
              <p className="mt-4 leading-relaxed">"{t.text}"</p>
              <div className="mt-6 flex items-center gap-3">
                <div className="w-11 h-11 rounded-full gradient-warm grid place-items-center text-primary-foreground font-semibold">
                  {t.name.charAt(0)}
                </div>
                <div>
                  <div className="font-semibold">{t.name}</div>
                  <div className="text-sm text-muted-foreground">{t.city}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* PRODUCTS */}
      <Section>
        <SectionHeading
          eyebrow="Digital products"
          title={<>Tools to take home <span className="text-gradient">today</span></>}
          subtitle="eBooks, journals, printables and recorded sessions — built for the rhythm of your family."
        />
        <div className="grid md:grid-cols-3 gap-6">
          {products.map((p) => (
            <div key={p.title} className="group p-7 rounded-3xl bg-card border border-border shadow-soft hover:shadow-warm hover:-translate-y-1 transition-all">
              <div className={`aspect-[4/3] rounded-2xl bg-gradient-to-br ${p.color} grid place-items-center`}>
                <BookOpen className="w-12 h-12 text-primary/70" />
              </div>
              <div className="mt-5 text-xs uppercase tracking-wider text-muted-foreground">{p.type}</div>
              <h3 className="mt-1 text-xl font-bold">{p.title}</h3>
              <div className="mt-4 flex items-center justify-between">
                <span className="text-2xl font-display font-bold text-gradient">{p.price}</span>
                <Button asChild size="sm" variant="hero"><Link to="/courses">Get it</Link></Button>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* CTA */}
      <section className="container pb-24">
        <div className="relative overflow-hidden rounded-[2.5rem] gradient-warm p-10 md:p-16 text-primary-foreground shadow-warm">
          <div className="relative z-10 max-w-2xl">
            <Zap className="w-10 h-10 mb-4" />
            <h2 className="text-3xl md:text-5xl font-display font-bold leading-tight">Get the free guide: <em>Discipline Without Yelling</em></h2>
            <p className="mt-4 text-primary-foreground/90 text-lg">10 culturally-grounded steps to a calmer, more connected home — delivered to your WhatsApp or email.</p>
            <form className="mt-8 flex flex-col sm:flex-row gap-3 max-w-md">
              <input type="email" placeholder="you@email.com" className="flex-1 px-5 py-3.5 rounded-full bg-background/95 text-foreground placeholder:text-muted-foreground focus:outline-none" />
              <Button variant="sage" size="lg">Send me the guide</Button>
            </form>
          </div>
          <div className="absolute -right-20 -bottom-20 w-80 h-80 rounded-full bg-accent/40 blur-3xl" />
          <div className="absolute right-10 top-10 w-32 h-32 rounded-full bg-background/10 hidden md:block" />
        </div>
      </section>
    </>
  );
};

export default Index;
