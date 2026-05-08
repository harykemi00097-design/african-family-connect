import { Heart, Target, Eye, Users, Globe, Award } from "lucide-react";
import { Section, SectionHeading, Eyebrow } from "@/components/Section";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import coachingImg from "@/assets/coaching.jpg";

const values = [
  { icon: Heart, title: "Ubuntu", desc: "I am because we are. Parenting is communal." },
  { icon: Award, title: "Wisdom", desc: "Honoring elders' insight, refined for modern life." },
  { icon: Users, title: "Family First", desc: "Every decision centers the dignity of the child." },
  { icon: Globe, title: "Pan-African", desc: "From Lagos to Nairobi — one network of mothers." },
];

const phases = [
  { phase: "Phase 1", year: "2026", title: "Nigeria Launch", desc: "Build foundation with mothers in Lagos, Abuja, Port Harcourt." },
  { phase: "Phase 2", year: "2027", title: "Continental Expansion", desc: "Ghana, Kenya and South Africa with localized content." },
  { phase: "Phase 3", year: "2028", title: "Multilingual AI", desc: "Full AI assistant in English, French, Swahili, Yoruba & more." },
];

const About = () => {
  return (
    <>
      <section className="container pt-12 md:pt-20 pb-12 text-center max-w-3xl mx-auto">
        <Eyebrow>Our story</Eyebrow>
        <h1 className="mt-6 font-display text-4xl md:text-6xl font-bold leading-tight">
          Built by mothers, for the <span className="text-gradient">African family</span>
        </h1>
        <p className="mt-6 text-lg text-muted-foreground">
          Mom Solution 360 was born from a simple truth: African mothers deserve support that reflects who we are — our wisdom, our faith, our extended families, and our hopes for our children.
        </p>
      </section>

      <Section className="pt-0">
        <div className="grid md:grid-cols-2 gap-6">
          <div className="p-8 md:p-10 rounded-3xl bg-card border border-border shadow-soft">
            <Target className="w-10 h-10 text-primary" />
            <h3 className="mt-4 text-2xl font-bold">Our Mission</h3>
            <p className="mt-3 text-muted-foreground leading-relaxed">
              To strengthen African families through accessible, AI-powered parenting support that honors our culture and equips mothers to raise confident, emotionally healthy children.
            </p>
          </div>
          <div className="p-8 md:p-10 rounded-3xl gradient-warm text-primary-foreground shadow-warm">
            <Eye className="w-10 h-10" />
            <h3 className="mt-4 text-2xl font-bold">Our Vision</h3>
            <p className="mt-3 text-primary-foreground/90 leading-relaxed">
              A continent where every mother feels supported, every child feels safe, and every family thrives — bridging ancestral wisdom with modern tools.
            </p>
          </div>
        </div>
      </Section>

      <Section className="bg-secondary/30">
        <SectionHeading
          eyebrow="What we believe"
          title={<>African values, <span className="text-gradient">modern tools</span></>}
        />
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((v) => (
            <div key={v.title} className="p-6 rounded-3xl bg-card border border-border text-center">
              <div className="w-14 h-14 mx-auto rounded-2xl gradient-warm grid place-items-center shadow-warm">
                <v.icon className="w-6 h-6 text-primary-foreground" />
              </div>
              <h4 className="mt-4 text-lg font-bold">{v.title}</h4>
              <p className="mt-2 text-sm text-muted-foreground">{v.desc}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section>
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="rounded-[2.5rem] overflow-hidden shadow-warm">
            <img src={coachingImg} alt="Founder reading with daughter" loading="lazy" width={1024} height={1024} className="w-full h-auto" />
          </div>
          <div>
            <Eyebrow>Founder's note</Eyebrow>
            <h2 className="mt-4 text-3xl md:text-4xl font-bold">"I built this because I needed it."</h2>
            <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
              As a young mother in Lagos, I searched for parenting advice that didn't tell me to forget where I come from. I found apps full of tips that felt foreign and books that ignored our reality. So I built Mom Solution 360 — the platform I wish I had when my first child was born.
            </p>
            <p className="mt-4 text-muted-foreground leading-relaxed">
              Today, we're a team of coaches, technologists and storytellers committed to helping mothers across Africa parent with peace, confidence and joy.
            </p>
            <div className="mt-6 flex items-center gap-3">
              <div className="w-12 h-12 rounded-full gradient-warm grid place-items-center text-primary-foreground font-bold">A</div>
              <div>
                <div className="font-semibold">Adaeze Founder</div>
                <div className="text-sm text-muted-foreground">CEO & Founder, Mom Solution 360</div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      <Section className="bg-secondary/30">
        <SectionHeading
          eyebrow="Growth strategy"
          title={<>Our <span className="text-gradient">long-term impact</span></>}
          subtitle="A continent-wide ecosystem, built one mother at a time."
        />
        <div className="relative">
          <div className="hidden md:block absolute top-12 left-0 right-0 h-0.5 bg-gradient-to-r from-primary via-accent to-sage" />
          <div className="grid md:grid-cols-3 gap-6 relative">
            {phases.map((p, i) => (
              <div key={p.phase} className="p-7 rounded-3xl bg-card border border-border shadow-soft">
                <div className="w-10 h-10 rounded-full gradient-warm grid place-items-center text-primary-foreground font-bold">{i + 1}</div>
                <div className="mt-4 text-xs uppercase tracking-wider text-primary font-semibold">{p.phase} · {p.year}</div>
                <h3 className="mt-1 text-xl font-bold">{p.title}</h3>
                <p className="mt-2 text-muted-foreground">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      <section className="container pb-24">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-display font-bold">Be part of the movement</h2>
          <p className="mt-4 text-muted-foreground">Whether you're a mother, coach, or partner — there's space for you here.</p>
          <div className="mt-8 flex justify-center gap-3 flex-wrap">
            <Button asChild variant="hero" size="lg"><Link to="/community">Join community</Link></Button>
            <Button asChild variant="outline" size="lg"><Link to="/contact">Partner with us</Link></Button>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
