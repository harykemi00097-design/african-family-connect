import { useState } from "react";
import { Section, SectionHeading, Eyebrow } from "@/components/Section";
import { Button } from "@/components/ui/button";
import { Users, MessageCircle, Trophy, Heart, Sparkles, Send } from "lucide-react";
import communityImg from "@/assets/community.jpg";
import { toast } from "sonner";

const wallSeed = [
  { name: "Chioma", text: "Praying for patience this week. My twins are 3 and full of fire 🔥", time: "2h" },
  { name: "Fatou", text: "Encouragement: you are exactly the mother your child needs. Keep going 💛", time: "5h" },
  { name: "Wanjiru", text: "Asking for prayers — my daughter starts boarding school next week.", time: "1d" },
];

const Community = () => {
  const [wall, setWall] = useState(wallSeed);
  const [name, setName] = useState("");
  const [msg, setMsg] = useState("");
  const [poll, setPoll] = useState<string | null>(null);

  const post = (e: React.FormEvent) => {
    e.preventDefault();
    if (!msg.trim()) return;
    setWall([{ name: name || "Anonymous", text: msg, time: "now" }, ...wall]);
    setMsg("");
    toast.success("Posted to the wall 💛");
  };

  const pollOptions = ["Tantrums", "Screen time", "Bedtime", "School pressure"];

  return (
    <>
      <section className="relative overflow-hidden">
        <div className="container pt-12 md:pt-20 pb-12 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <Eyebrow><Users className="w-3 h-3" /> Community</Eyebrow>
            <h1 className="mt-6 font-display text-4xl md:text-6xl font-bold leading-tight">
              You're not <span className="text-gradient">alone</span>, mama.
            </h1>
            <p className="mt-5 text-lg text-muted-foreground">Join thousands of mothers across Africa for weekly challenges, encouragement and a safe place to share.</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Button variant="sage" size="lg" onClick={() => toast.success("Opening WhatsApp group…")}>
                <MessageCircle className="w-4 h-4" /> Join WhatsApp Group
              </Button>
              <Button variant="outline" size="lg" onClick={() => toast.success("Opening Facebook group…")}>
                Join Facebook Group
              </Button>
            </div>
          </div>
          <div className="rounded-[2.5rem] overflow-hidden shadow-warm">
            <img src={communityImg} alt="African father playing with toddler" loading="lazy" width={1024} height={1024} className="w-full h-auto" />
          </div>
        </div>
      </section>

      <Section className="bg-secondary/30">
        <div className="grid lg:grid-cols-2 gap-6">
          <div className="p-8 rounded-3xl gradient-warm text-primary-foreground shadow-warm">
            <Trophy className="w-10 h-10" />
            <div className="mt-3 text-xs uppercase tracking-wider opacity-80">This week's challenge</div>
            <h3 className="mt-1 text-3xl font-display font-bold">No-Yelling Week</h3>
            <p className="mt-3 opacity-90">Pause. Breathe. Speak gently — even when it's hard. Share your wins on the wall.</p>
            <div className="mt-6 flex items-center gap-3">
              <div className="flex -space-x-2">
                {["A", "M", "F", "C"].map((l) => (
                  <div key={l} className="w-9 h-9 rounded-full bg-background text-foreground grid place-items-center font-bold text-sm border-2 border-primary">{l}</div>
                ))}
              </div>
              <span className="text-sm">+ 1,240 mothers in</span>
            </div>
          </div>

          <div className="p-8 rounded-3xl bg-card border border-border shadow-soft">
            <Sparkles className="w-10 h-10 text-primary" />
            <div className="mt-3 text-xs uppercase tracking-wider text-muted-foreground">Community poll</div>
            <h3 className="mt-1 text-2xl font-bold">What's hardest right now?</h3>
            <div className="mt-5 space-y-2">
              {pollOptions.map((o) => {
                const pct = poll === o ? 42 : Math.floor(Math.random() * 30) + 10;
                return (
                  <button key={o} onClick={() => setPoll(o)} className="w-full text-left">
                    <div className="flex justify-between text-sm mb-1"><span className="font-medium">{o}</span><span className="text-muted-foreground">{poll ? `${pct}%` : "Vote"}</span></div>
                    <div className="h-2 rounded-full bg-secondary overflow-hidden">
                      <div className={`h-full transition-all duration-700 ${poll === o ? "gradient-warm" : "bg-muted-foreground/30"}`} style={{ width: poll ? `${pct}%` : "0%" }} />
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </Section>

      <Section>
        <SectionHeading
          eyebrow="Encouragement & prayer wall"
          title={<>A safe space for <span className="text-gradient">honesty</span></>}
          subtitle="Share what's on your heart. Lift another mother today."
        />
        <div className="max-w-2xl mx-auto">
          <form onSubmit={post} className="bg-card rounded-3xl border border-border p-5 shadow-soft">
            <div className="flex gap-2 mb-2">
              <input value={name} onChange={(e) => setName(e.target.value)} placeholder="Your name (optional)" className="flex-1 px-4 py-2.5 rounded-full bg-secondary text-sm focus:outline-none" />
            </div>
            <div className="flex gap-2">
              <textarea value={msg} onChange={(e) => setMsg(e.target.value)} placeholder="Share encouragement, a prayer request, or a win…" rows={3} className="flex-1 px-4 py-3 rounded-2xl bg-secondary text-sm focus:outline-none resize-none" />
            </div>
            <div className="mt-3 flex justify-end">
              <Button type="submit" variant="hero"><Send className="w-4 h-4" /> Post</Button>
            </div>
          </form>

          <div className="mt-6 space-y-3">
            {wall.map((w, i) => (
              <div key={i} className="p-5 rounded-3xl bg-card border border-border flex gap-4">
                <div className="w-10 h-10 rounded-full gradient-warm grid place-items-center text-primary-foreground font-bold shrink-0">{w.name.charAt(0)}</div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="font-semibold">{w.name}</span>
                    <span className="text-xs text-muted-foreground">· {w.time}</span>
                  </div>
                  <p className="text-sm leading-relaxed">{w.text}</p>
                  <button className="mt-3 inline-flex items-center gap-1.5 text-xs text-muted-foreground hover:text-primary">
                    <Heart className="w-3.5 h-3.5" /> Send love
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>
    </>
  );
};

export default Community;
