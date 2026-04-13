import { Card, CardContent } from "@/components/ui/card";
import { Landmark, Paintbrush, BookOpen, ShieldCheck, Hammer, Eye } from "lucide-react";

const services = [
  {
    icon: Landmark,
    title: "Structural Conservation",
    desc: "Assessment and stabilization of historic buildings, forts, palaces, and temples using reversible, compatible materials.",
  },
  {
    icon: Paintbrush,
    title: "Mural & Art Restoration",
    desc: "Cleaning, consolidation, and retouching of wall paintings, frescoes, and decorative plasterwork.",
  },
  {
    icon: BookOpen,
    title: "Heritage Documentation",
    desc: "Measured drawings, photogrammetry, 3D scanning, and condition-mapping reports for conservation planning.",
  },
  {
    icon: ShieldCheck,
    title: "Preventive Conservation",
    desc: "Environmental monitoring, drainage solutions, and long-term maintenance strategies.",
  },
  {
    icon: Hammer,
    title: "Material Analysis",
    desc: "Laboratory testing of historic mortars, pigments, stone, and timber to guide authentic restoration.",
  },
  {
    icon: Eye,
    title: "Conservation Consulting",
    desc: "Expert advisory for heritage management plans, adaptive reuse, and policy compliance.",
  },
];

const Services = () => {
  return (
    <div className="flex flex-col">
      {/* Header */}
      <section className="bg-primary py-20">
        <div className="container mx-auto px-4 text-center text-primary-foreground">
          <p className="text-accent text-sm uppercase tracking-widest mb-2 font-medium">What We Offer</p>
          <h1 className="text-4xl md:text-5xl font-bold">Our Services</h1>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s) => (
              <Card key={s.title} className="group hover:shadow-lg transition-shadow">
                <CardContent className="p-8">
                  <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-accent/10 text-accent group-hover:bg-accent group-hover:text-accent-foreground transition-colors">
                    <s.icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-foreground">{s.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{s.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
