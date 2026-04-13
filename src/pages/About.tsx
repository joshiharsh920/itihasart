import { Card, CardContent } from "@/components/ui/card";
import { Users, Award, Clock, MapPin, Landmark } from "lucide-react";

const stats = [
  { icon: Clock, value: "20+", label: "Years of Experience" },
  { icon: Landmark, value: "150+", label: "Sites Conserved" },
  { icon: Users, value: "40+", label: "Expert Team Members" },
  { icon: MapPin, value: "12+", label: "States Covered" },
];

const About = () => {
  return (
    <div className="flex flex-col">
      {/* Header */}
      <section className="bg-primary py-20">
        <div className="container mx-auto px-4 text-center text-primary-foreground">
          <p className="text-accent text-sm uppercase tracking-widest mb-2 font-medium">Who We Are</p>
          <h1 className="text-4xl md:text-5xl font-bold">About Us</h1>
        </div>
      </section>

      {/* Story */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-6">Our Story</h2>
            <p className="text-muted-foreground leading-relaxed text-lg">
              ItihasartConservation was founded with a singular vision — to protect and revive India's
              invaluable built heritage. Our team of conservation architects, archaeologists, material
              scientists, and skilled craftspeople work together to ensure that historical monuments
              continue to tell their stories for centuries to come.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 mt-12">
            <Card className="border-accent/20">
              <CardContent className="p-8">
                <Award className="h-8 w-8 text-accent mb-4" />
                <h3 className="text-xl font-semibold mb-3 text-foreground">Our Mission</h3>
                <p className="text-muted-foreground leading-relaxed">
                  To apply scientific conservation methods with deep respect for historical authenticity,
                  ensuring every intervention is minimal, reversible, and well-documented.
                </p>
              </CardContent>
            </Card>
            <Card className="border-accent/20">
              <CardContent className="p-8">
                <Users className="h-8 w-8 text-accent mb-4" />
                <h3 className="text-xl font-semibold mb-3 text-foreground">Our Vision</h3>
                <p className="text-muted-foreground leading-relaxed">
                  A future where every historic site in India is valued, protected, and accessible —
                  bridging past wisdom with contemporary stewardship.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((s) => (
              <div key={s.label} className="text-center">
                <s.icon className="h-8 w-8 mx-auto mb-3 text-accent" />
                <p className="text-3xl font-bold text-foreground">{s.value}</p>
                <p className="text-sm text-muted-foreground mt-1">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
