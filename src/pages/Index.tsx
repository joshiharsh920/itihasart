import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Landmark, Paintbrush, BookOpen, ShieldCheck, ArrowRight } from "lucide-react";

const highlights = [
  {
    icon: Landmark,
    title: "Architectural Conservation",
    desc: "Restoring historic structures with authentic materials and traditional techniques.",
  },
  {
    icon: Paintbrush,
    title: "Art Restoration",
    desc: "Reviving murals, sculptures, and decorative art to their original grandeur.",
  },
  {
    icon: BookOpen,
    title: "Heritage Documentation",
    desc: "Comprehensive surveys, photographic records, and conservation reports.",
  },
  {
    icon: ShieldCheck,
    title: "Preventive Conservation",
    desc: "Long-term strategies to protect heritage from environmental and human impact.",
  },
];

const Index = () => {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden bg-primary">
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=1600&q=80')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div className="relative z-10 container mx-auto px-4 text-center text-primary-foreground">
          <p className="text-sm uppercase tracking-[0.3em] mb-4 text-accent font-medium">
            Heritage · History · Conservation
          </p>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6">
            Preserving India's
            <br />
            <span className="text-accent">Timeless Heritage</span>
          </h1>
          <p className="max-w-2xl mx-auto text-lg md:text-xl text-primary-foreground/80 mb-8 leading-relaxed">
            ItihasartConservation is dedicated to safeguarding historical monuments,
            art, and architecture through expert conservation practices.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-accent text-accent-foreground hover:bg-accent/90" asChild>
              <Link to="/services">
                Our Services <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="border-primary-foreground/30 bg-accent text-primary-foreground hover:bg-primary-foreground/10" asChild>
              <Link to="/contact">Get in Touch</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Highlights */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-14">
            <p className="text-accent font-medium text-sm uppercase tracking-widest mb-2">What We Do</p>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">Our Expertise</h2>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {highlights.map((h) => (
              <Card key={h.title} className="group hover:shadow-lg transition-shadow border-border/50">
                <CardContent className="p-6 text-center">
                  <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-accent/10 text-accent group-hover:bg-accent group-hover:text-accent-foreground transition-colors">
                    <h.icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2 text-foreground">{h.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{h.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Have a Heritage Site That Needs Attention?
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto mb-8">
            We bring decades of expertise in conservation science, architectural history,
            and hands-on restoration. Let's preserve history together.
          </p>
          <Button size="lg" asChild>
            <Link to="/contact">
              Contact Us Today <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Index;
