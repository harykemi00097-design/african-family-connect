import { useState, FormEvent } from "react";
import { Bot, Send, Globe, Shield, Sparkles, Heart, Brain, Clock } from "lucide-react";
import { Section, SectionHeading, Eyebrow } from "@/components/Section";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

type Msg = { role: "user" | "assistant"; content: string };

const seed: Msg[] = [
  { role: "assistant", content: "Hello mama 👋 I'm here to support you. Ask me anything about parenting, routines, discipline or emotional wellness." },
];

const suggestions = [
  "My child lies often. What should I do?",
  "How do I build a calm bedtime routine?",
  "My toddler hits when angry — help",
  "How can I support my anxious teen?",
];

const features = [
  { icon: Heart, t: "Emotional support", d: "Compassionate replies for the hard days." },
  { icon: Brain, t: "Discipline guidance", d: "Positive, non-violent strategies that work." },
  { icon: Clock, t: "Routines & habits", d: "Build mornings and bedtimes that flow." },
  { icon: Globe, t: "Multilingual", d: "English, French, Swahili (coming soon)." },
];

const AIAssistant = () => {
  const [messages, setMessages] = useState<Msg[]>(seed);
  const [input, setInput] = useState("");
  const [lang, setLang] = useState<"EN" | "FR" | "SW">("EN");

  const reply = (q: string): string => {
    if (/lie|lying/i.test(q)) {
      return "Children may lie because of fear, attention-seeking, or pressure. Start by creating a calm environment where your child feels safe telling the truth. Avoid harsh reactions and focus on teaching honesty through conversation and example. Would you like practical discipline steps for this situation?";
    }
    if (/bedtime|sleep|routine/i.test(q)) {
      return "A calm bedtime begins 60 minutes before sleep: dim the lights, switch off screens, and create a predictable rhythm — bath, story, prayer, song. Consistency builds safety. Would you like a printable bedtime chart?";
    }
    if (/hit|angry|tantrum/i.test(q)) {
      return "Toddlers hit because they feel big emotions in a small body. Stay calm, hold their hand gently and say: 'I won't let you hit. You're safe.' Name the feeling: 'You're angry.' Then offer an alternative — a pillow, a deep breath, or your hug. Want a 5-step de-escalation guide?";
    }
    return "Thank you for sharing. Every family's situation is different — could you tell me your child's age and what's been happening recently? I'll give you culturally-grounded, practical steps you can try this week.";
  };

  const send = (e?: FormEvent, override?: string) => {
    e?.preventDefault();
    const q = (override ?? input).trim();
    if (!q) return;
    setMessages((m) => [...m, { role: "user", content: q }]);
    setInput("");
    setTimeout(() => {
      setMessages((m) => [...m, { role: "assistant", content: reply(q) }]);
    }, 700);
  };

  return (
    <>
      <section className="container pt-12 md:pt-20 pb-8 text-center max-w-3xl mx-auto">
        <Eyebrow><Sparkles className="w-3 h-3" /> AI Parenting Assistant</Eyebrow>
        <h1 className="mt-6 font-display text-4xl md:text-6xl font-bold leading-tight">
          Wisdom in your pocket, <span className="text-gradient">24 / 7</span>
        </h1>
        <p className="mt-5 text-lg text-muted-foreground">
          Trained on African parenting wisdom and child psychology. Private. Encrypted. Always free to start.
        </p>
      </section>

      <Section className="pt-4">
        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="bg-card rounded-3xl border border-border shadow-warm overflow-hidden flex flex-col h-[640px]">
              <div className="flex items-center justify-between p-5 border-b border-border bg-secondary/30">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-2xl gradient-warm grid place-items-center"><Bot className="w-5 h-5 text-primary-foreground" /></div>
                  <div>
                    <div className="font-semibold">Mama AI</div>
                    <div className="text-xs text-sage flex items-center gap-1.5"><span className="w-1.5 h-1.5 rounded-full bg-sage animate-pulse" /> Online</div>
                  </div>
                </div>
                <div className="flex gap-1 p-1 rounded-full bg-background border border-border">
                  {(["EN", "FR", "SW"] as const).map((l) => (
                    <button
                      key={l}
                      onClick={() => setLang(l)}
                      className={`px-3 py-1 rounded-full text-xs font-semibold transition ${lang === l ? "gradient-warm text-primary-foreground" : "text-muted-foreground"}`}
                    >{l}</button>
                  ))}
                </div>
              </div>

              <div className="flex-1 overflow-y-auto p-5 space-y-4">
                {messages.map((m, i) => (
                  <div key={i} className={`flex gap-3 animate-fade-in ${m.role === "user" ? "justify-end" : ""}`}>
                    {m.role === "assistant" && (
                      <div className="w-8 h-8 rounded-full gradient-warm shrink-0 grid place-items-center">
                        <Bot className="w-4 h-4 text-primary-foreground" />
                      </div>
                    )}
                    <div className={`max-w-[80%] px-4 py-3 text-sm leading-relaxed rounded-3xl ${m.role === "user" ? "bg-primary text-primary-foreground rounded-tr-md" : "bg-secondary rounded-tl-md"}`}>
                      {m.content}
                    </div>
                  </div>
                ))}
              </div>

              <div className="p-4 border-t border-border">
                <div className="flex flex-wrap gap-2 mb-3">
                  {suggestions.map((s) => (
                    <button key={s} onClick={() => send(undefined, s)} className="text-xs px-3 py-1.5 rounded-full bg-secondary hover:bg-primary hover:text-primary-foreground transition">{s}</button>
                  ))}
                </div>
                <form onSubmit={send} className="flex items-center gap-2 p-1.5 rounded-full bg-secondary">
                  <input
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder="Ask anything…"
                    className="flex-1 bg-transparent px-4 py-2.5 text-sm focus:outline-none"
                  />
                  <button type="submit" className="w-10 h-10 rounded-full gradient-warm grid place-items-center hover:scale-105 transition">
                    <Send className="w-4 h-4 text-primary-foreground" />
                  </button>
                </form>
                <p className="mt-2 text-xs text-muted-foreground flex items-center gap-1.5"><Shield className="w-3 h-3" /> End-to-end encrypted demo. Connect Lovable Cloud to enable real AI.</p>
              </div>
            </div>
          </div>

          <aside className="space-y-4">
            {features.map((f) => (
              <div key={f.t} className="p-5 rounded-2xl bg-card border border-border">
                <div className="w-10 h-10 rounded-xl gradient-warm grid place-items-center"><f.icon className="w-5 h-5 text-primary-foreground" /></div>
                <h4 className="mt-3 font-bold">{f.t}</h4>
                <p className="text-sm text-muted-foreground mt-1">{f.d}</p>
              </div>
            ))}
            <Button onClick={() => toast.success("We'll notify you when WhatsApp launches!")} variant="sage" size="lg" className="w-full">
              Use on WhatsApp (coming soon)
            </Button>
          </aside>
        </div>
      </Section>

      <Section className="bg-secondary/30">
        <SectionHeading
          eyebrow="WhatsApp menu"
          title={<>Soon: parenting support inside <span className="text-gradient">WhatsApp</span></>}
          subtitle="Just send a number — receive guidance instantly."
        />
        <div className="max-w-md mx-auto bg-card rounded-3xl border border-border shadow-warm p-6">
          <div className="text-sm font-semibold mb-3 text-muted-foreground">Reply with a number 1–7:</div>
          <ul className="space-y-2">
            {[
              "1️⃣  Parenting Tips",
              "2️⃣  Positive Discipline",
              "3️⃣  Screen Time Support",
              "4️⃣  Emotional Development",
              "5️⃣  Parenting Courses",
              "6️⃣  Join Community Group",
              "7️⃣  Speak to a Coach",
            ].map((m) => (
              <li key={m} className="px-4 py-3 rounded-2xl bg-secondary text-sm font-medium">{m}</li>
            ))}
          </ul>
        </div>
      </Section>
    </>
  );
};

export default AIAssistant;
