import { useState } from "react";
import { Section, Eyebrow } from "@/components/Section";
import { Button } from "@/components/ui/button";
import { CheckCircle2, ClipboardList, Sparkles, Target, Calendar, Heart, ArrowRight, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

type Answers = {
  childAge: string;
  emotional: string;
  behavior: string;
  learning: string;
  routines: string;
};

const steps = [
  { key: "childAge" as const, q: "How old is your child?", opts: ["0–2 years", "3–5 years", "6–9 years", "10–12 years", "Teen 13+"] },
  { key: "emotional" as const, q: "What's your biggest emotional concern?", opts: ["Anxiety / fear", "Anger / outbursts", "Low confidence", "Withdrawn / shy", "None right now"] },
  { key: "behavior" as const, q: "Which behavior worries you most?", opts: ["Defiance / talking back", "Lying", "Hitting / aggression", "Excessive screen time", "Sibling fights"] },
  { key: "learning" as const, q: "How are learning habits at home?", opts: ["Loves learning", "Struggles to focus", "Avoids homework", "Inconsistent", "Not sure"] },
  { key: "routines" as const, q: "How are your daily routines?", opts: ["Smooth & predictable", "Mornings are chaos", "Bedtime is hard", "No real routine", "We're rebuilding"] },
];

const Assessment = () => {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<Partial<Answers>>({});
  const [done, setDone] = useState(false);

  const select = (val: string) => {
    const key = steps[step].key;
    const next = { ...answers, [key]: val };
    setAnswers(next);
    if (step < steps.length - 1) setStep(step + 1);
    else setDone(true);
  };

  const reset = () => { setStep(0); setAnswers({}); setDone(false); };

  if (done) {
    return (
      <Section>
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <Eyebrow><Sparkles className="w-3 h-3" /> Your Personalized Plan</Eyebrow>
            <h1 className="mt-6 font-display text-4xl md:text-5xl font-bold">Your <span className="text-gradient">parenting roadmap</span></h1>
            <p className="mt-4 text-muted-foreground">AI-generated from your responses. Save it, share it, live it.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-4 mb-8">
            {[
              { icon: Target, title: "Focus area", text: answers.behavior ?? "—" },
              { icon: Heart, title: "Emotional priority", text: answers.emotional ?? "—" },
              { icon: Calendar, title: "Routine status", text: answers.routines ?? "—" },
            ].map((c) => (
              <div key={c.title} className="p-6 rounded-3xl bg-card border border-border shadow-soft">
                <c.icon className="w-6 h-6 text-primary" />
                <div className="mt-3 text-xs uppercase tracking-wider text-muted-foreground">{c.title}</div>
                <div className="mt-1 font-bold">{c.text}</div>
              </div>
            ))}
          </div>

          <div className="p-8 md:p-10 rounded-3xl gradient-warm text-primary-foreground shadow-warm">
            <h2 className="text-2xl font-bold">Your 7-day starter plan</h2>
            <ul className="mt-6 space-y-3">
              {[
                "Day 1 — Schedule a 10-minute connection ritual with your child each evening.",
                "Day 2 — Replace one shouting moment with a calm question: 'What do you need right now?'",
                "Day 3 — Establish a visual morning routine on the fridge.",
                "Day 4 — Read a short story together before bed (no screens).",
                "Day 5 — Praise effort, not outcome, three times today.",
                "Day 6 — Hold a family check-in: 'What was hard? What was sweet?'",
                "Day 7 — Reflect, journal, and choose one habit to keep.",
              ].map((d) => (
                <li key={d} className="flex gap-3"><CheckCircle2 className="w-5 h-5 shrink-0 mt-0.5" /><span>{d}</span></li>
              ))}
            </ul>
          </div>

          <div className="mt-8 flex flex-wrap gap-3 justify-center">
            <Button asChild variant="hero" size="lg"><Link to="/courses">Browse matching courses</Link></Button>
            <Button asChild variant="outline" size="lg"><Link to="/contact">Talk to a coach</Link></Button>
            <Button onClick={reset} variant="ghost" size="lg">Retake assessment</Button>
          </div>
        </div>
      </Section>
    );
  }

  const current = steps[step];
  const progress = ((step) / steps.length) * 100;

  return (
    <Section>
      <div className="max-w-2xl mx-auto">
        <div className="text-center mb-10">
          <Eyebrow><ClipboardList className="w-3 h-3" /> Parenting Assessment</Eyebrow>
          <h1 className="mt-6 font-display text-3xl md:text-5xl font-bold leading-tight">
            5 quick questions. <span className="text-gradient">A plan made for you.</span>
          </h1>
          <p className="mt-4 text-muted-foreground">No sign-up. Your answers stay private on your device.</p>
        </div>

        <div className="bg-card rounded-3xl border border-border shadow-warm p-7 md:p-10">
          <div className="flex items-center justify-between text-xs text-muted-foreground mb-3">
            <span>Question {step + 1} of {steps.length}</span>
            <span>{Math.round(progress)}%</span>
          </div>
          <div className="h-2 rounded-full bg-secondary overflow-hidden mb-8">
            <div className="h-full gradient-warm transition-all duration-500" style={{ width: `${((step + 1) / steps.length) * 100}%` }} />
          </div>

          <h3 className="text-xl md:text-2xl font-bold mb-6">{current.q}</h3>
          <div className="space-y-2">
            {current.opts.map((o) => (
              <button
                key={o}
                onClick={() => select(o)}
                className="w-full text-left px-5 py-4 rounded-2xl bg-secondary hover:bg-primary hover:text-primary-foreground border border-transparent hover:border-primary transition-all flex items-center justify-between group"
              >
                <span className="font-medium">{o}</span>
                <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition" />
              </button>
            ))}
          </div>

          {step > 0 && (
            <button onClick={() => setStep(step - 1)} className="mt-6 inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground">
              <ArrowLeft className="w-4 h-4" /> Back
            </button>
          )}
        </div>
      </div>
    </Section>
  );
};

export default Assessment;
