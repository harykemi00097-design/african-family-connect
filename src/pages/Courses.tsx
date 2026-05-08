import { Section, SectionHeading, Eyebrow } from "@/components/Section";
import { Button } from "@/components/ui/button";
import { BookOpen, FileText, Headphones, Video, Shield, CreditCard } from "lucide-react";
import { toast } from "sonner";

const products = [
  { icon: BookOpen, type: "eBook", title: "Discipline Without Yelling", desc: "10 culturally-grounded steps to a calmer home.", price: "₦4,500", color: "from-orange-500/30 to-amber-400/30" },
  { icon: FileText, type: "Journal", title: "Calm Mama Journal", desc: "30-day printable for emotional reset & reflection.", price: "₦2,900", color: "from-rose-400/30 to-orange-300/30" },
  { icon: Video, type: "Course", title: "Peaceful Mornings Bootcamp", desc: "4-week video course to transform your school runs.", price: "₦18,000", color: "from-amber-500/30 to-yellow-400/30" },
  { icon: BookOpen, type: "eBook", title: "Talking to Teens", desc: "Bridge the gap with honesty and respect.", price: "₦5,500", color: "from-orange-600/30 to-rose-400/30" },
  { icon: FileText, type: "Printable", title: "Routine Charts Pack", desc: "10 beautifully designed charts (morning, bedtime, chores).", price: "₦1,500", color: "from-amber-400/30 to-yellow-300/30" },
  { icon: Headphones, type: "Recording", title: "Founder's Live Q&A", desc: "2hr deep-dive on positive discipline (recorded).", price: "₦7,000", color: "from-rose-500/30 to-orange-400/30" },
];

const Courses = () => {
  return (
    <>
      <section className="container pt-12 md:pt-20 pb-8 text-center max-w-3xl mx-auto">
        <Eyebrow>Courses & Resources</Eyebrow>
        <h1 className="mt-6 font-display text-4xl md:text-6xl font-bold leading-tight">
          Tools that <span className="text-gradient">transform homes</span>
        </h1>
        <p className="mt-6 text-lg text-muted-foreground">Affordable, beautifully crafted resources designed for busy African mothers.</p>
      </section>

      <Section className="pt-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((p) => (
            <div key={p.title} className="group p-6 rounded-3xl bg-card border border-border shadow-soft hover:shadow-warm hover:-translate-y-1 transition-all">
              <div className={`aspect-[4/3] rounded-2xl bg-gradient-to-br ${p.color} grid place-items-center`}>
                <p.icon className="w-14 h-14 text-primary/70" />
              </div>
              <div className="mt-5 text-xs uppercase tracking-wider text-muted-foreground font-semibold">{p.type}</div>
              <h3 className="mt-1 text-xl font-bold">{p.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
              <div className="mt-5 flex items-center justify-between">
                <span className="text-2xl font-display font-bold text-gradient">{p.price}</span>
                <Button onClick={() => toast.success(`${p.title} added to cart (demo)`)} variant="hero" size="sm">Buy now</Button>
              </div>
            </div>
          ))}
        </div>
      </Section>

      <Section className="bg-secondary/30">
        <SectionHeading
          eyebrow="Secure checkout"
          title={<>Pay safely with <span className="text-gradient">your favorite method</span></>}
          subtitle="Integrated with Africa's most trusted payment providers."
        />
        <div className="max-w-3xl mx-auto grid sm:grid-cols-3 gap-4">
          {[
            { name: "Paystack", desc: "Cards, bank transfer, USSD" },
            { name: "Flutterwave", desc: "Mobile money & cards" },
            { name: "Stripe", desc: "International cards" },
          ].map((p) => (
            <div key={p.name} className="p-6 rounded-3xl bg-card border border-border text-center shadow-soft">
              <div className="w-12 h-12 rounded-2xl gradient-warm mx-auto grid place-items-center"><CreditCard className="w-5 h-5 text-primary-foreground" /></div>
              <h4 className="mt-4 font-bold text-lg">{p.name}</h4>
              <p className="text-sm text-muted-foreground mt-1">{p.desc}</p>
            </div>
          ))}
        </div>
        <div className="mt-8 flex justify-center items-center gap-4 text-sm text-muted-foreground">
          <span className="inline-flex items-center gap-1.5"><Shield className="w-4 h-4 text-sage" /> SSL Encrypted</span>
          <span>•</span>
          <span>PCI-DSS Compliant</span>
          <span>•</span>
          <span>Money-back guarantee</span>
        </div>
      </Section>
    </>
  );
};

export default Courses;
